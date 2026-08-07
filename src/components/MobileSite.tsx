"use client"

import svgPaths from "../imports/Mobile/svg-5nwsri0t06";
const imgImg43013 = "/images/mobile/cb73c9c324750aedd5e6d312174b22f86ce0d84a.png";
const imgLsmx843 = "/images/mobile/8b0d7e6e956cebe931b06657bd48cdae0632d714.png";
const imgRectangle6509 = "/images/mobile/2acf85d97d1e6f2e7b331d2679baead9d42e4078.png";
const imgGeminiGeneratedImageYkhxbvykhxbvykhx1 = "/images/mobile/ed440263332714a989e2f9516f0c32124a2fa355.png";
const imgImage1 = "/images/mobile/64bd1d10101135a9dcf8fd2cff585f49609381c6.png";
const imgImage2 = "/images/mobile/11f42dafd7521d576c514b4d322be0eb87b65dd8.png";
const imgImage3 = "/images/mobile/52e5c514f34b6f7c844e5367f60569e3cf4147f0.png";
const imgImage4 = "/images/mobile/68ed44db0e868614ff67c5ddacc9b31b537a85e7.png";
const imgImage5 = "/images/mobile/4e510c9de574f188aa279673deb18bdf239ce8fa.png";
const imgImage6 = "/images/mobile/44f86a821e16a0831885493a5bbe2d0098361388.png";
const imgImage7 = "/images/mobile/3491229a8d12dae6e741e9c222d4b994fdfa9e80.png";
const imgImg42863 = "/images/mobile/5edc1598151847756895c907fb403c1410b16b69.png";
import type { MouseEvent } from "react";
import { CATEGORY_LABELS, useSite } from "../site/ui";
import { PROVIDERS, type Provider } from "../site/providers";
import { PROMOS } from "../site/promos";
import { FixedFrameLayer, HeaderBackdrop } from "../site/frameLayer";

/** One delegated handler for the whole provider grid, so 63 tiles do not each
 *  carry their own listener. The tile's aria-label is the provider name. */
function useGameGridClick() {
  const { notify, category } = useSite();
  return (event: MouseEvent<HTMLDivElement>) => {
    const tile = (event.target as HTMLElement).closest('[data-name="game cover"]');
    if (!tile) return;
    const provider = tile.getAttribute("aria-label");
    notify(`กำลังเปิดเกม ${CATEGORY_LABELS[category]}${provider ? ` — ${provider}` : ""}`);
  };
}

function Frame46() {
  return (
    // No backdrop of its own — the hero reads against the site-wide fixed
    // background (see site/PageBackground), which carries this same plate.
    <div className="-translate-x-1/2 absolute h-[1024px] left-1/2 overflow-clip top-0 w-[430px]">
      <div className="absolute anim-float h-[547px] left-[-19px] shadow-[9px_8px_25.4px_0px_rgba(0,0,0,0.5)] top-[427px] w-[469px]" data-name="IMG_4301 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg43013} />
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <>
    {/* Keeps the header's space in the column now that the header itself is
        rendered in the fixed layer above the canvas. */}
    <div aria-hidden className="h-[80px] shrink-0 w-full" />
    {/* The bar's surface is a viewport-pinned layer of its own, so its blur has
        no transformed ancestor to defeat it; the logo stays in the authored
        430px column above it. */}
    <HeaderBackdrop
      backgroundImage="linear-gradient(90deg, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 100%), linear-gradient(89.99999997445695deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 85, 0, 0.5) 50%, rgba(0, 0, 0, 0.5) 100%)"
      designHeight={80}
      ruleImage="linear-gradient(90deg, rgba(198,67,2,0.15) 0%, #ff5500 50%, rgba(198,67,2,0.15) 100%)"
    />
    <FixedFrameLayer>
    <div className="h-[80px] relative w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pl-[62px] pr-[37px] py-[14px] relative size-full">
          <div className="h-[45.195px] relative shrink-0 w-[145px]" data-name="Lsmx84 3">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-[0.13%] max-w-none top-0 w-[99.74%]" src={imgLsmx843} />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* The account buttons stay at their authored y — below the bar, not inside
        it — but ride the pinned layer so they never scroll out of reach. The
        column keeps a spacer of the same height where they used to sit. */}
    <div className="absolute flex justify-center left-0 top-[112px] w-full">
      <Frame26 />
    </div>
    </FixedFrameLayer>
    </>
  );
}

function Group249() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <div className="col-1 h-[44px] ml-0 mt-0 relative row-1 w-[180px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="44" preserveAspectRatio="none" viewBox="0 0 180 44" width="180">
          <path d={svgPaths.p30062e00} fill="url(#paint0_linear_0_129)" id="Rectangle 34646976" stroke="#C64302" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_129" x1="180" x2="-5.89424e-06" y1="0" y2="44">
              <stop stopColor="#030506" />
              <stop offset="0.5" stopColor="#4C4C4D" />
              <stop offset="1" stopColor="#030506" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="[word-break:break-word] col-1 font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[normal] ml-[59.4px] mt-[9px] not-italic relative row-1 text-[#fafafa] text-[16px] whitespace-nowrap">เข้าสู่ระบบ</p>
    </div>
  );
}

function Group248() {
  const { openAuth } = useSite();
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] hit inline-grid place-items-start relative shrink-0"
      onClick={() => openAuth("login")}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") openAuth("login");
      }}
      role="button"
      tabIndex={0}
    >
      <Group249 />
    </div>
  );
}

function Group250() {
  const { openAuth } = useSite();
  return (
    <div
      className="anim-glow grid-cols-[max-content] grid-rows-[max-content] hit inline-grid place-items-start relative shrink-0"
      onClick={() => openAuth("register")}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") openAuth("register");
      }}
      role="button"
      tabIndex={0}
    >
      <div className="col-1 h-[44px] ml-0 mt-0 relative row-1 w-[180px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="44" preserveAspectRatio="none" viewBox="0 0 180 44" width="180">
          <path d={svgPaths.p30062e00} fill="url(#paint0_linear_0_200)" id="Rectangle 34646975" stroke="#C64302" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_200" x1="180" x2="-5.89424e-06" y1="0" y2="44">
              <stop stopColor="#B01F02" />
              <stop offset="0.509615" stopColor="#FF5300" />
              <stop offset="1" stopColor="#A51802" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="[word-break:break-word] col-1 font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[normal] ml-[50.4px] mt-[9px] not-italic relative row-1 text-[#fafafa] text-[16px] whitespace-nowrap">สมัครสมาชิก</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[8px] h-[44px] items-center justify-center leading-[0] relative shrink-0">
      <Group248 />
      <Group250 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      {/* The wordmark below is decorative artwork, so the page's only h1 carries
          the brand as real text. */}
      <h1 className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Bold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#fafafa] text-[19px] text-center w-[min-content]">
        LSMF88 ครบทุกจังหวะเดิมพัน ด้วยระบบที่คิดมาเหนือกว่า
      </h1>
      <div className="anim-glow h-[90px] relative shrink-0 w-[287px]" data-name="lsm99ai ตังจริง+ 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[99.96%] left-[0.05%] max-w-none top-[0.17%] w-[99.93%]" src={imgLsmx843} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Medium',sans-serif] leading-[1.85] min-w-full not-italic relative shrink-0 text-[#fafafa] text-[12px] text-center w-[min-content]">
        <span className="text-[#ff6d00]">LSMF88</span>
        {` รวมบรรยากาศคาสิโนออนไลน์และเกมเดิมพันยอดนิยมไว้ในพื้นที่เดียว พร้อมระบบที่ตอบสนองรวดเร็ว เพื่อมอบความสนุกแบบพรีเมียมให้ผู้เล่นทุกสไตล์`}
      </p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-[411px]">
      {/* Holds the account buttons' place; they are rendered in the pinned
          layer (see Frame49) so they stay put while the page scrolls. */}
      <div aria-hidden className="h-[44px] shrink-0 w-full" />
      <Frame27 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-0 top-0 w-[430px] z-[60]">
      <Frame49 />
      <Frame50 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start min-w-0 not-italic relative shrink w-full">
      <h3 className="font-['IBM_Plex_Sans_Thai:Bold',sans-serif] leading-[1.35] relative shrink-0 text-[#ff6d00] text-[12px] w-full">ธุรกรรมออโต้ทันใจ</h3>
      <div className="font-['IBM_Plex_Sans_Thai:Medium',sans-serif] leading-[0] relative shrink-0 text-[10px] text-white w-full">
        <p className="leading-[normal] mb-0">ฝากและถอนเสร็จไวภายใน 3 วินาที</p>
        <p className="leading-[normal]">ระบบทำงานคล่อง ลดขั้นตอนการรอ</p>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    /* Width is the 274px badge minus this row's own offset and a right inset
       that clears the plate's angled corner, so the copy wraps inside the
       artwork instead of running past its edge. */
    <div className="absolute content-stretch flex gap-[8px] inset-0 items-center pl-[16px] pr-[12px]">
      <div className="relative shrink-0 size-[48px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[157.58%] left-[-183.37%] max-w-none top-[-22.78%] w-[288.89%]" src={imgRectangle6509} />
        </div>
      </div>
      <Frame34 />
    </div>
  );
}

function Group251() {
  return (
    <div className="badge grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 h-[88px] ml-0 mt-0 relative row-1 w-[274px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="88" preserveAspectRatio="none" viewBox="0 0 274 88" width="274">
          <path d={svgPaths.p42ffa00} fill="url(#paint0_linear_0_132)" fillOpacity="0.6" id="Rectangle 34646976" stroke="url(#paint1_linear_0_132)" strokeWidth="2" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_132" x1="137.721" x2="136.999" y1="127.311" y2="-52.8">
              <stop stopColor="#FF5500" />
              <stop offset="1" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_132" x1="-3.57261e-07" x2="280.78" y1="88" y2="49.6903">
              <stop offset="0.0147841" stopColor="#C64302" stopOpacity="0" />
              <stop offset="0.5" stopColor="#FF5500" />
              <stop offset="1" stopColor="#C64302" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Frame59 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] min-w-0 not-italic relative shrink w-full">
      <h3 className="font-['IBM_Plex_Sans_Thai:Bold',sans-serif] leading-[1.35] relative shrink-0 text-[#ff6d00] text-[12px] w-full">ดูแลต่อเนื่อง 24 ชม.</h3>
      <p className="font-['IBM_Plex_Sans_Thai:Medium',sans-serif] relative shrink-0 text-[10px] text-white w-full">ทีมบริการพร้อมช่วยเหลือตลอดทั้งวัน ทุกการใช้งานได้รับการดูแลอย่างมั่นใจ</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="absolute content-stretch flex gap-[8px] inset-0 items-center pl-[16px] pr-[12px]">
      <div className="relative shrink-0 size-[48px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[157.58%] left-[-6.66%] max-w-none top-[-28.87%] w-[288.89%]" src={imgRectangle6509} />
        </div>
      </div>
      <Frame35 />
    </div>
  );
}

function Group252() {
  return (
    <div className="badge grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 h-[88px] ml-0 mt-0 relative row-1 w-[274px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="88" preserveAspectRatio="none" viewBox="0 0 274 88" width="274">
          <path d={svgPaths.p32e2980} fill="url(#paint0_linear_0_118)" fillOpacity="0.6" id="Rectangle 34646976" stroke="url(#paint1_linear_0_118)" strokeWidth="2" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_118" x1="137.721" x2="136.999" y1="127.311" y2="-52.8">
              <stop stopColor="#FF5500" />
              <stop offset="1" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_118" x1="-3.57261e-07" x2="280.78" y1="88" y2="49.6903">
              <stop offset="0.0147841" stopColor="#C64302" stopOpacity="0" />
              <stop offset="0.5" stopColor="#FF5500" />
              <stop offset="1" stopColor="#C64302" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Frame60 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] min-w-0 not-italic relative shrink w-full">
      <h3 className="font-['IBM_Plex_Sans_Thai:Bold',sans-serif] leading-[1.35] relative shrink-0 text-[#ff6d00] text-[12px] w-full">ถอนสะดวกทุกยอด</h3>
      <p className="font-['IBM_Plex_Sans_Thai:Medium',sans-serif] relative shrink-0 text-[10px] text-white w-full">ทำรายการถอนได้อย่างคล่องตัวทุกวัน รวดเร็ว ไม่สะดุดในทุกธุรกรรม</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="absolute content-stretch flex gap-[8px] inset-0 items-center pl-[16px] pr-[12px]">
      <div className="relative shrink-0 size-[48px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[191.19%] left-[-125.41%] max-w-none top-[-45%] w-[350.52%]" src={imgRectangle6509} />
        </div>
      </div>
      <Frame36 />
    </div>
  );
}

function Group253() {
  return (
    <div className="badge grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 h-[88px] ml-0 mt-0 relative row-1 w-[274px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="88" preserveAspectRatio="none" viewBox="0 0 274 88" width="274">
          <path d={svgPaths.p32e2980} fill="url(#paint0_linear_0_118)" fillOpacity="0.6" id="Rectangle 34646976" stroke="url(#paint1_linear_0_118)" strokeWidth="2" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_118" x1="137.721" x2="136.999" y1="127.311" y2="-52.8">
              <stop stopColor="#FF5500" />
              <stop offset="1" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_118" x1="-3.57261e-07" x2="280.78" y1="88" y2="49.6903">
              <stop offset="0.0147841" stopColor="#C64302" stopOpacity="0" />
              <stop offset="0.5" stopColor="#FF5500" />
              <stop offset="1" stopColor="#C64302" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Frame61 />
    </div>
  );
}

function Frame47() {
  return (
    /* At 430px the three badges overflow the frame, so the row scrolls
       horizontally with snap points instead of being clipped. */
    <div className="absolute left-0 top-[980px] w-[430px]" data-reveal="fade">
      <div className="rail content-stretch flex gap-[8px] items-center leading-[0] px-[16px] w-full">
        <Group251 />
        <Group252 />
        <Group253 />
      </div>
    </div>
  );
}

function Group254() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[125px] mt-[18.09px] place-items-start relative row-1">
      <div className="col-1 h-[36.813px] ml-0 mt-0 relative row-1 w-[181px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="36.8132" preserveAspectRatio="none" viewBox="0 0 181 36.8132" width="181">
          <path d={svgPaths.p1781700} fill="url(#paint0_linear_0_155)" id="Rectangle 34646976" stroke="url(#paint1_linear_0_155)" strokeWidth="2.5" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_155" x1="181" x2="4.4252" y1="0" y2="51.8757">
              <stop stopColor="#B01F02" />
              <stop offset="0.509615" stopColor="#FF5300" />
              <stop offset="1" stopColor="#A51802" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_155" x1="-2.36001e-07" x2="180.55" y1="36.8132" y2="-2.08671">
              <stop offset="0.0147841" stopColor="#C64302" stopOpacity="0" />
              <stop offset="0.5" stopColor="#C64302" />
              <stop offset="1" stopColor="#C64302" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="[word-break:break-word] col-1 font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[normal] ml-[49px] mt-[5.5px] not-italic relative row-1 text-[14px] text-center text-white w-[83px]">โปรโมชั่น</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="col-1 h-[24px] ml-0 mt-0 relative row-1 w-[152px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 152 24" width="152">
        <g clipPath="url(#clip0_0_161)" id="Frame">
          <path d={svgPaths.pf932600} fill="url(#paint0_radial_0_161)" id="Vector" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(76) rotate(90) scale(18.3158 116)" gradientUnits="userSpaceOnUse" id="paint0_radial_0_161" r="1">
            <stop stopColor="#B01F02" />
            <stop offset="0.721154" stopColor="#FF6D00" />
          </radialGradient>
          <clipPath id="clip0_0_161">
            <rect fill="white" height="24" width="152" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="col-1 flex h-[24px] items-center justify-center ml-[275px] mt-0 relative row-1 w-[155px]">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="h-[24px] relative w-[155px]" data-name="Frame">
          <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 155 24" width="155">
            <g clipPath="url(#clip0_0_148)" id="Frame">
              <path d={svgPaths.p218df280} fill="url(#paint0_radial_0_148)" id="Vector" />
            </g>
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(77.5) rotate(90) scale(18.3158 118.289)" gradientUnits="userSpaceOnUse" id="paint0_radial_0_148" r="1">
                <stop stopColor="#B01F02" />
                <stop offset="0.721154" stopColor="#FF6D00" />
              </radialGradient>
              <clipPath id="clip0_0_148">
                <rect fill="white" height="24" width="155" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="col-1 flex h-[24px] items-center justify-center ml-0 mt-[49px] relative row-1 w-[152px]">
      <div className="-scale-y-100 flex-none">
        <div className="h-[24px] relative w-[152px]" data-name="Frame">
          <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 152 24" width="152">
            <g clipPath="url(#clip0_0_161)" id="Frame">
              <path d={svgPaths.pf932600} fill="url(#paint0_radial_0_161)" id="Vector" />
            </g>
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(76) rotate(90) scale(18.3158 116)" gradientUnits="userSpaceOnUse" id="paint0_radial_0_161" r="1">
                <stop stopColor="#B01F02" />
                <stop offset="0.721154" stopColor="#FF6D00" />
              </radialGradient>
              <clipPath id="clip0_0_161">
                <rect fill="white" height="24" width="152" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="col-1 flex h-[24px] items-center justify-center ml-[275px] mt-[49px] relative row-1 w-[155px]">
      <div className="flex-none rotate-180">
        <div className="h-[24px] relative w-[155px]" data-name="Frame">
          <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 155 24" width="155">
            <g clipPath="url(#clip0_0_148)" id="Frame">
              <path d={svgPaths.p218df280} fill="url(#paint0_radial_0_148)" id="Vector" />
            </g>
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(77.5) rotate(90) scale(18.3158 118.289)" gradientUnits="userSpaceOnUse" id="paint0_radial_0_148" r="1">
                <stop stopColor="#B01F02" />
                <stop offset="0.721154" stopColor="#FF6D00" />
              </radialGradient>
              <clipPath id="clip0_0_148">
                <rect fill="white" height="24" width="155" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Group244() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group254 />
      <Group7 />
    </div>
  );
}

function Frame63() {
  const { promoSlide } = useSite();
  const promo = PROMOS[promoSlide] ?? PROMOS[0];
  return (
    <div className="h-[221px] relative rounded-[8px] shrink-0 w-full">
      <img alt={promo.title} className="anim-fade absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" key={promo.id} src={promo.image} />
      <div aria-hidden className="absolute stroke-grad border-[2.5px] border-[#c64302] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame64() {
  const { promoSlide, setPromoSlide } = useSite();
  return (
    <div aria-label="เลือกโปรโมชั่น" className="content-stretch flex gap-[3px] items-center relative shrink-0 w-full" role="tablist">
      {PROMOS.map((promo, index) => (
        <div
          aria-label={promo.title}
          aria-selected={promoSlide === index}
          className="cursor-pointer relative shrink-0 size-[6px] transition-transform duration-300"
          key={promo.id}
          onClick={() => setPromoSlide(index)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") setPromoSlide(index);
          }}
          role="tab"
          style={{ transform: promoSlide === index ? "scale(1.35)" : "scale(1)" }}
          tabIndex={0}
        >
          <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
            <circle cx="3" cy="3" fill={promoSlide === index ? "#FF6D00" : "#F18C22"} fillOpacity={promoSlide === index ? 1 : 0.5} r="3" />
          </svg>
        </div>
      ))}
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[33px]">
      <Frame64 />
    </div>
  );
}

/** Detail panel for whichever promotion is showing. */
function Frame45() {
  const { promoSlide } = useSite();
  const promo = PROMOS[promoSlide] ?? PROMOS[0];
  return (
    <div className="h-[228.808px] overflow-clip relative shrink-0 w-[342.07px]">
      <div className="anim-fade [word-break:break-word] absolute left-0 not-italic top-0 w-[342px]" key={promo.id}>
        {promo.details.map((line, index) =>
          line.text === "" ? (
            <div aria-hidden className="h-[8px]" key={index} />
          ) : (
            <p
              className={`font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[1.5] mb-[6px] text-[11px] ${line.accent ? "text-[#ff6d00]" : "text-[#fafafa]"}`}
              key={index}
            >
              {line.text}
            </p>
          ),
        )}
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="h-[276px] relative rounded-[8px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(-0.5177191863013064deg, rgba(255, 85, 0, 0.6) 43.509%, rgba(0, 0, 0, 0.48) 158.64%)" }}>
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pb-[17px] pl-[70px] pr-[72px] pt-[32px] relative size-full">
          <Frame45 />
        </div>
      </div>
      <div aria-hidden className="absolute stroke-grad border-[2.5px] border-[#c64302] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-[381px]">
      <Frame63 />
      <Frame40 />
      <Frame37 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-0 top-[1108px] w-[430px]" data-reveal>
      <Group244 />
      <Frame39 />
    </div>
  );
}

function Group255() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[125px] mt-[18.09px] place-items-start relative row-1">
      <div className="col-1 h-[36.813px] ml-0 mt-0 relative row-1 w-[181px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="36.8132" preserveAspectRatio="none" viewBox="0 0 181 36.8132" width="181">
          <path d={svgPaths.p1781700} fill="url(#paint0_linear_0_155)" id="Rectangle 34646976" stroke="url(#paint1_linear_0_155)" strokeWidth="2.5" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_155" x1="181" x2="4.4252" y1="0" y2="51.8757">
              <stop stopColor="#B01F02" />
              <stop offset="0.509615" stopColor="#FF5300" />
              <stop offset="1" stopColor="#A51802" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_155" x1="-2.36001e-07" x2="180.55" y1="36.8132" y2="-2.08671">
              <stop offset="0.0147841" stopColor="#C64302" stopOpacity="0" />
              <stop offset="0.5" stopColor="#C64302" />
              <stop offset="1" stopColor="#C64302" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="[word-break:break-word] col-1 font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[normal] ml-[46px] mt-[5.91px] not-italic relative row-1 text-[14px] text-center text-white whitespace-nowrap">ค่ายเกมทั้งหมด</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="col-1 h-[24px] ml-0 mt-0 relative row-1 w-[152px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 152 24" width="152">
        <g clipPath="url(#clip0_0_161)" id="Frame">
          <path d={svgPaths.pf932600} fill="url(#paint0_radial_0_161)" id="Vector" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(76) rotate(90) scale(18.3158 116)" gradientUnits="userSpaceOnUse" id="paint0_radial_0_161" r="1">
            <stop stopColor="#B01F02" />
            <stop offset="0.721154" stopColor="#FF6D00" />
          </radialGradient>
          <clipPath id="clip0_0_161">
            <rect fill="white" height="24" width="152" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="col-1 flex h-[24px] items-center justify-center ml-[275px] mt-0 relative row-1 w-[155px]">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="h-[24px] relative w-[155px]" data-name="Frame">
          <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 155 24" width="155">
            <g clipPath="url(#clip0_0_103)" id="Frame">
              <path d={svgPaths.p3665e500} fill="url(#paint0_radial_0_103)" id="Vector" />
            </g>
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(77.5) rotate(90) scale(18.3158 118.289)" gradientUnits="userSpaceOnUse" id="paint0_radial_0_103" r="1">
                <stop stopColor="#B01F02" />
                <stop offset="0.721154" stopColor="#FF6D00" />
              </radialGradient>
              <clipPath id="clip0_0_103">
                <rect fill="white" height="24" width="155" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="col-1 flex h-[24px] items-center justify-center ml-0 mt-[49px] relative row-1 w-[152px]">
      <div className="-scale-y-100 flex-none">
        <div className="h-[24px] relative w-[152px]" data-name="Frame">
          <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 152 24" width="152">
            <g clipPath="url(#clip0_0_161)" id="Frame">
              <path d={svgPaths.pf932600} fill="url(#paint0_radial_0_161)" id="Vector" />
            </g>
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(76) rotate(90) scale(18.3158 116)" gradientUnits="userSpaceOnUse" id="paint0_radial_0_161" r="1">
                <stop stopColor="#B01F02" />
                <stop offset="0.721154" stopColor="#FF6D00" />
              </radialGradient>
              <clipPath id="clip0_0_161">
                <rect fill="white" height="24" width="152" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="col-1 flex h-[24px] items-center justify-center ml-[275px] mt-[49px] relative row-1 w-[155px]">
      <div className="flex-none rotate-180">
        <div className="h-[24px] relative w-[155px]" data-name="Frame">
          <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 155 24" width="155">
            <g clipPath="url(#clip0_0_148)" id="Frame">
              <path d={svgPaths.p218df280} fill="url(#paint0_radial_0_148)" id="Vector" />
            </g>
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(77.5) rotate(90) scale(18.3158 118.289)" gradientUnits="userSpaceOnUse" id="paint0_radial_0_148" r="1">
                <stop stopColor="#B01F02" />
                <stop offset="0.721154" stopColor="#FF6D00" />
              </radialGradient>
              <clipPath id="clip0_0_148">
                <rect fill="white" height="24" width="155" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Group245() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group255 />
      <Group8 />
    </div>
  );
}

function Group256() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-[58px] ml-0 mt-0 relative row-1 w-[57px]" data-name="Gemini_Generated_Image_ykhxbvykhxbvykhx 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[106.54%] left-[0.14%] max-w-none top-0 w-[337.04%]" src={imgGeminiGeneratedImageYkhxbvykhxbvykhx1} />
        </div>
      </div>
      <p className="[word-break:break-word] col-1 font-['IBM_Plex_Sans_Thai:Bold',sans-serif] leading-[normal] ml-[11px] mt-[55.88px] not-italic relative row-1 text-[#fafafa] text-[14px] text-center whitespace-nowrap">สล็อต</p>
    </div>
  );
}

function Frame43() {
  const { category, setCategory } = useSite();
  return (
    <div
      aria-selected={category === "slot"}
      data-size="lg"
      className="cat bg-gradient-to-b content-stretch flex from-[rgba(176,31,2,0.6)] items-center justify-center pl-[25px] pr-[26px] py-[8px] relative rounded-[8px] shrink-0 size-[90px] to-[rgba(255,60,0,0.6)]"
      onClick={() => setCategory("slot")}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") setCategory("slot");
      }}
      role="tab"
      tabIndex={0}
    >
      <div aria-hidden className="absolute stroke-grad border-[2.5px] border-[#c64302] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Group256 />
    </div>
  );
}

function Group257() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-[42px] ml-0 mt-0 relative row-1 w-[41px]" data-name="Gemini_Generated_Image_ykhxbvykhxbvykhx 1">
        <div className="absolute inset-0 opacity-50 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[129.62%] left-[-128.25%] max-w-none top-[-14.81%] w-[436.88%]" src={imgGeminiGeneratedImageYkhxbvykhxbvykhx1} />
        </div>
      </div>
      <p className="[word-break:break-word] col-1 font-['IBM_Plex_Sans_Thai:Bold',sans-serif] leading-[normal] ml-[4.5px] mt-[39.13px] not-italic opacity-60 relative row-1 text-[#fafafa] text-[12px] text-center whitespace-nowrap">คาสิโน</p>
    </div>
  );
}

function Frame65() {
  const { category, setCategory } = useSite();
  return (
    <div
      aria-selected={category === "casino"}
      data-size="sm"
      className="cat bg-[rgba(0,0,0,0.2)] content-stretch flex items-center justify-center pl-[25px] pr-[26px] py-[8px] relative rounded-[8px] shrink-0 size-[67px]"
      onClick={() => setCategory("casino")}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") setCategory("casino");
      }}
      role="tab"
      tabIndex={0}
    >
      <div aria-hidden className="absolute stroke-grad border-[2.5px] border-[#c64302] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Group257 />
    </div>
  );
}

function Group258() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-[38.982px] ml-0 mt-0 relative row-1 w-[37.928px]" data-name="Gemini_Generated_Image_ykhxbvykhxbvykhx 1">
        <div className="absolute inset-0 opacity-50 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[129.62%] left-[-224.44%] max-w-none top-[-14.85%] w-[436.88%]" src={imgGeminiGeneratedImageYkhxbvykhxbvykhx1} />
        </div>
      </div>
      <p className="[word-break:break-word] col-1 font-['IBM_Plex_Sans_Thai:Bold',sans-serif] h-[21.071px] leading-[normal] ml-[7.47px] mt-[35.93px] not-italic opacity-60 relative row-1 text-[#fafafa] text-[12px] text-center w-[23.178px]">กีฬา</p>
    </div>
  );
}

function Frame66() {
  const { category, setCategory } = useSite();
  return (
    <div
      aria-selected={category === "sport"}
      data-size="sm"
      className="cat bg-[rgba(0,0,0,0.2)] content-stretch flex items-center justify-center pl-[25px] pr-[26px] py-[8px] relative rounded-[8px] shrink-0 size-[67px]"
      onClick={() => setCategory("sport")}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") setCategory("sport");
      }}
      role="tab"
      tabIndex={0}
    >
      <div aria-hidden className="absolute stroke-grad border-[2.5px] border-[#c64302] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Group258 />
    </div>
  );
}

function Group259() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[36px]" data-name="Gemini_Generated_Image_ykhxbvykhxbvykhx 1">
        <div className="absolute inset-0 opacity-50 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[129.62%] left-[-327.54%] max-w-none top-[-14.85%] w-[436.88%]" src={imgGeminiGeneratedImageYkhxbvykhxbvykhx1} />
        </div>
      </div>
      <p className="[word-break:break-word] col-1 font-['IBM_Plex_Sans_Thai:Bold',sans-serif] leading-[normal] ml-[7.06px] mt-[36.24px] not-italic opacity-60 relative row-1 text-[#fafafa] text-[12px] text-center whitespace-nowrap">หวย</p>
    </div>
  );
}

function Frame69() {
  const { category, setCategory } = useSite();
  return (
    <div
      aria-selected={category === "lotto"}
      data-size="sm"
      className="cat bg-[rgba(0,0,0,0.2)] content-stretch flex items-center justify-center pl-[25px] pr-[26px] py-[8px] relative rounded-[8px] shrink-0 size-[67px]"
      onClick={() => setCategory("lotto")}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") setCategory("lotto");
      }}
      role="tab"
      tabIndex={0}
    >
      <div aria-hidden className="absolute stroke-grad border-[2.5px] border-[#c64302] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Group259 />
    </div>
  );
}

function Frame42() {
  return (
    <div aria-label="หมวดหมู่เกม" className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" role="tablist">
      <Frame43 />
      <Frame65 />
      <Frame66 />
      <Frame69 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col h-[138px] items-center justify-center pl-[33px] pr-[34px] py-[24px] relative rounded-[8px] shrink-0 w-[382px]" style={{ backgroundImage: "linear-gradient(-0.25818722951200357deg, rgba(165, 56, 2, 0.6) 43.509%, rgba(0, 0, 0, 0.48) 158.64%)" }}>
      <div aria-hidden className="absolute stroke-grad border-3 border-[#c64302] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame42 />
    </div>
  );
}

/** Mobile provider tile. The card is 5:6 rather than the authored square so the
 *  wordmark along the bottom of the artwork is never cropped away. */
function ProviderTile({ provider }: { provider: Provider }) {
  return (
    <div
      aria-label={provider.name}
      className="stroke-grad-self bg-gradient-to-b border-[1.643px] border-[#121525] border-solid from-[16%] from-[rgba(18,21,37,0)] h-[127px] overflow-clip relative rounded-[8.364px] tile to-[#121525] w-[106px]"
      data-name="game cover"
      role="button"
      tabIndex={0}
    >
      <img
        alt={provider.name}
        className="absolute inset-0 max-w-none object-cover size-full"
        loading="lazy"
        src={provider.src}
      />
    </div>
  );
}

/** Three across, as authored. Height is pinned to what the authored three rows
 *  occupied, so the section — and everything positioned below it — stays put
 *  whichever category is picked. */
function Frame31() {
  const { category } = useSite();
  const onGridClick = useGameGridClick();
  return (
    <div
      className="anim-fade provider-scroll h-[413px] relative shrink-0 w-[382px]"
      key={category}
      onClick={onGridClick}
    >
      {/* 382px wide to match the category panel above it. Exactly three rows
          tall — 3x127 plus two 16px gaps. The card comes down from the authored
          120x144 to 106x127 (same 5:6) because the sections below sit at fixed
          offsets and three full rows at the authored size overran the next one
          by 40px. `justify-between` spreads the three columns to both edges so
          the grid lines up with the panel rather than sitting narrower. */}
      <div className="gap-y-[16px] grid grid-cols-[repeat(3,106px)] justify-between">
        {PROVIDERS[category].map((provider) => (
          <ProviderTile key={provider.id} provider={provider} />
        ))}
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-0 top-[1756px] w-[430px]" data-reveal>
      <Group245 />
      <Frame68 />
      <Frame31 />
    </div>
  );
}

function Group234() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <div className="col-1 h-[32.164px] ml-[250.1px] mt-0 relative row-1 w-[31.896px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="col-1 h-[32.164px] ml-[208.66px] mt-0 relative row-1 w-[31.986px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <div className="col-1 ml-[125.14px] mt-0 relative row-1 size-[32.164px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <div className="col-1 h-[32.164px] ml-[83.25px] mt-0 relative row-1 w-[32.432px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[32.164px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
      <div className="col-1 h-[32.164px] ml-[166.76px] mt-0 relative row-1 w-[32.432px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
      <div className="col-1 ml-[41.63px] mt-0 relative row-1 size-[32.164px]" data-name="image 7">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
    </div>
  );
}

function Group233() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group234 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-center left-[47px] top-[37px] w-[337px]">
      <div className="h-[62px] relative shrink-0 w-[199px]" data-name="LSMF88 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLsmx843} />
      </div>
      <div className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Light',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#fafafa] text-[12px] text-center w-[min-content]">
        <p className="leading-[2.055]">LSMF88 รวบรวมเกมคาสิโนและการเดิมพันหลากหลายประเภทไว้ครบในแพลตฟอร์มเดียว พร้อมระบบธุรกรรมอัตโนมัติที่ทำงานรวดเร็ว ขั้นตอนไม่ซับซ้อน และรองรับการใช้งานได้อย่างคล่องตัวตลอดวัน</p>
      </div>
      <Group233 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="absolute backdrop-blur-[2.5px] bottom-[-1px] drop-shadow-[0px_1.163px_2.326px_rgba(0,0,0,0.7)] h-[259px] left-0 w-[431px]">
      <div className="absolute backdrop-blur-[10px] h-[259px] left-0 rounded-tl-[16px] rounded-tr-[16px] top-0 w-[431px]" style={{ backgroundImage: "linear-gradient(-0.4294734624232177deg, rgba(255, 85, 0, 0.6) 43.509%, rgba(0, 0, 0, 0.48) 158.64%)" }} />
      <Frame33 />
    </div>
  );
}

function Frame76() {
  return (
    /* Three display lines as authored, sized down from 40px: the copy they now
       carry is a full sentence and the column is only 190px wide. */
    <h2 className="[word-break:break-word] col-1 content-stretch flex flex-col font-['IBM_Plex_Sans_Thai:Bold',sans-serif] items-start leading-[1.5] ml-0 mt-[176px] not-italic relative row-1 w-[190px]">
      <span className="min-w-full relative shrink-0 text-[#fafafa] text-[21px] w-[min-content]">คาสิโนออนไลน์ที่ดี</span>
      <span className="min-w-full relative shrink-0 text-[#fafafa] text-[24px] w-[min-content]">ต้องครบมากกว่า</span>
      <span className="bg-clip-text relative shrink-0 text-[28px] text-[transparent] text-shadow-[0px_0px_27.4px_rgba(191,82,0,0.6)] w-full" style={{ backgroundImage: "linear-gradient(-84.02693970851206deg, rgb(225, 243, 52) 3.483%, rgb(255, 171, 0, 1) 50.463%, rgb(225, 243, 52) 97.442%)" }}>
        แค่จำนวนเกม
      </span>
    </h2>
  );
}

function Group261() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[22px] mt-0 place-items-start relative row-1">
      <Frame76 />
      <div className="col-1 flex h-[307px] items-center justify-center ml-[146px] mt-0 relative row-1 w-[218px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[307px] relative w-[218px]" data-name="IMG_4286 3">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[153.51%] left-[-25%] max-w-none top-[0.08%] w-[143.84%]" src={imgImg42863} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group260() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="border-[2.5px] border-[#c64302] border-solid col-1 h-[163px] ml-0 mt-[144px] relative rounded-[8px] row-1 w-[382px]" style={{ backgroundImage: "linear-gradient(-0.3049594627112242deg, rgba(255, 85, 0, 0.6) 43.509%, rgba(0, 0, 0, 0.48) 158.64%)" }} />
      <Group261 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="h-[249px] relative rounded-[8px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(-0.4610251767186355deg, rgba(255, 85, 0, 0.6) 43.509%, rgba(0, 0, 0, 0.48) 158.64%)" }}>
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pl-[70px] pr-[72px] py-[24px] relative size-full">
          {/* One flowing paragraph now, instead of the export's hand-broken lines —
              the copy wraps to the 344px column on its own. */}
          <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Medium',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#fafafa] text-[13px] w-[344px]">
            <span className="text-[#ff6d00]">LSMF88</span>
            {` คัดสรรเกมคาสิโนและการเดิมพันยอดนิยมมาไว้ในระบบเดียว ครบทั้งบาคาร่า ไฮโล เสือมังกร รูเล็ต และโป๊กเกอร์ พร้อมโครงสร้างการใช้งานที่ตอบสนองไวและมีเสถียรภาพ รองรับ Casino App และภาพระดับ Full HD ให้ทุกจังหวะเกมคมชัด ใช้งานได้สะดวกจากทุกอุปกรณ์`}
          </p>
        </div>
      </div>
      <div aria-hidden className="absolute stroke-grad border-[2.5px] border-[#c64302] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame44() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[22px] top-[2423px] w-[386px]" data-reveal>
      <Group260 />
      <Frame48 />
    </div>
  );
}

export default function MobileSite() {
  return (
    <div className="h-[3289px] overflow-clip relative w-[430px]" data-name="mobile">
      {/* The page background lives in a viewport-fixed layer behind the canvas
          (see site/PageBackground) so it also covers the gutters this frame
          leaves once the canvas hits its maximum scale. */}
      <Frame46 />
      {/* Blurred band that seats the feature badges against the hero. */}
      <div aria-hidden className="-translate-x-1/2 absolute flex h-[161px] items-center justify-center left-1/2 pointer-events-none top-[928px] w-[430px]">
        <div className="-rotate-90 flex-none">
          <div className="bg-[#160d01] blur-[35px] h-[430px] relative w-[161px]" />
        </div>
      </div>
      <Frame67 />
      <Frame47 />
      <Frame38 />
      <Frame41 />
      <Frame52 />
      <Frame44 />
    </div>
  );
}