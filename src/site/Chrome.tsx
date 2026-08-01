"use client"

import { useScrollChrome, useSite, type AuthMode } from './ui'

const COPY: Record<AuthMode, { title: string; sub: string; cta: string; swap: string }> = {
  login: {
    title: 'เข้าสู่ระบบ',
    sub: 'ยินดีต้อนรับกลับ — กรอกข้อมูลเพื่อเข้าเล่นต่อได้ทันที',
    cta: 'เข้าสู่ระบบ',
    swap: 'ยังไม่มีบัญชี ? สมัครสมาชิก',
  },
  register: {
    title: 'สมัครสมาชิก',
    sub: 'สมัครฟรี ไม่มีขั้นต่ำ รับโปรโมชั่นแรกเข้าทันที 30,000 บาท',
    cta: 'สมัครสมาชิกใหม่',
    swap: 'มีบัญชีอยู่แล้ว ? เข้าสู่ระบบ',
  },
}

function Field({ label, type = 'text', placeholder }: { label: string; type?: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-medium tracking-wide text-ember-300">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-[rgba(198,67,2,0.55)] bg-[rgba(10,7,4,0.85)] px-3.5 py-2.5 text-[15px] text-ember-50 outline-none transition placeholder:text-white/25 focus:border-ember-400 focus:shadow-[0_0_0_3px_rgba(255,85,0,0.18)]"
      />
    </label>
  )
}

function AuthModal() {
  const { auth, closeAuth, openAuth, notify } = useSite()
  if (!auth) return null
  const copy = COPY[auth]

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-5"
      role="dialog"
      aria-modal="true"
      aria-label={copy.title}
    >
      <button
        type="button"
        aria-label="ปิด"
        onClick={closeAuth}
        className="anim-fade absolute inset-0 cursor-default bg-black/78 backdrop-blur-md"
      />
      <div className="anim-rise relative w-full max-w-[420px] overflow-hidden rounded-2xl border border-[rgba(198,67,2,0.7)] bg-[linear-gradient(160deg,rgba(24,14,6,0.98),rgba(5,3,2,0.98))] shadow-[0_30px_90px_rgba(0,0,0,0.75)]">
        <div className="h-[3px] w-full bg-[linear-gradient(90deg,transparent,#ff5500,#b01f02,transparent)]" />
        <div className="p-7">
          <h2 className="text-[26px] font-bold leading-tight text-ember-50">{copy.title}</h2>
          <p className="mt-2 text-[14px] leading-relaxed text-white/55">{copy.sub}</p>

          <form
            className="mt-6 space-y-4"
            onSubmit={(event) => {
              event.preventDefault()
              closeAuth()
              notify(
                auth === 'login'
                  ? 'เข้าสู่ระบบสำเร็จ — ยินดีต้อนรับกลับสู่ LSMF88'
                  : 'สมัครสมาชิกสำเร็จ — รับโบนัสแรกเข้าได้เลย',
              )
            }}
          >
            <Field label="ชื่อผู้ใช้ / เบอร์โทรศัพท์" placeholder="0812345678" />
            <Field label="รหัสผ่าน" type="password" placeholder="••••••••" />
            {auth === 'register' && (
              <Field label="ยืนยันรหัสผ่าน" type="password" placeholder="••••••••" />
            )}

            <button
              type="submit"
              className="hit mt-2 w-full rounded-lg border border-ember-600 bg-[linear-gradient(90deg,#b01f02,#ff5300_51%,#a51802)] py-3 text-[16px] font-semibold text-ember-50"
            >
              {copy.cta}
            </button>
          </form>

          <div className="mt-5 flex items-center justify-between text-[13px]">
            <button
              type="button"
              onClick={() => openAuth(auth === 'login' ? 'register' : 'login')}
              className="text-ember-300 underline-offset-4 transition hover:text-ember-50 hover:underline"
            >
              {copy.swap}
            </button>
            <button
              type="button"
              onClick={closeAuth}
              className="text-white/40 transition hover:text-white/80"
            >
              ปิด
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Toasts() {
  const { toasts } = useSite()
  return (
    <div className="pointer-events-none fixed bottom-6 left-1/2 z-[90] flex w-[min(92vw,420px)] -translate-x-1/2 flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="anim-rise rounded-xl border border-[rgba(198,67,2,0.7)] bg-[rgba(12,7,3,0.95)] px-4 py-3 text-center text-[14px] text-ember-50 shadow-[0_16px_40px_rgba(0,0,0,0.6)] backdrop-blur-md"
        >
          {toast.message}
        </div>
      ))}
    </div>
  )
}

function ScrollProgress({ progress }: { progress: number }) {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[3px] bg-transparent">
      <div
        className="h-full origin-left bg-[linear-gradient(90deg,#b01f02,#ff5500,#ff8a3d)] shadow-[0_0_12px_rgba(255,85,0,0.8)] transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}

export default function Chrome() {
  const { progress } = useScrollChrome()
  return (
    <>
      <ScrollProgress progress={progress} />
      <AuthModal />
      <Toasts />
    </>
  )
}
