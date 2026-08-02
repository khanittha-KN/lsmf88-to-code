"use client"

import svgPaths from "../imports/Desktop/svg-tmw0wfmplt";
const imgDesktop = "/images/desktop/73cfb8c3b2895fd5fbdf2716a8610a1cb27e1ae0.png";
const imgFrame1000009303 = "/images/desktop/6ef1991cd065d3bb86bffbbbf73385605ea5346a.png";
const imgImg43012 = "/images/desktop/cb73c9c324750aedd5e6d312174b22f86ce0d84a.png";
const imgLsm99Ai1 = "/images/desktop/8b0d7e6e956cebe931b06657bd48cdae0632d714.png";
const imgRectangle6509 = "/images/desktop/2acf85d97d1e6f2e7b331d2679baead9d42e4078.png";
const imgFrame1618873365 = "/images/desktop/586b06c31b94b13bed5cdeaf42be53e2ca00a215.png";
const imgGeminiGeneratedImageYkhxbvykhxbvykhx1 = "/images/desktop/ed440263332714a989e2f9516f0c32124a2fa355.png";
const imgImg42862 = "/images/desktop/5edc1598151847756895c907fb403c1410b16b69.png";
const imgImage1 = "/images/desktop/64bd1d10101135a9dcf8fd2cff585f49609381c6.png";
const imgImage2 = "/images/desktop/11f42dafd7521d576c514b4d322be0eb87b65dd8.png";
const imgImage3 = "/images/desktop/52e5c514f34b6f7c844e5367f60569e3cf4147f0.png";
const imgImage4 = "/images/desktop/68ed44db0e868614ff67c5ddacc9b31b537a85e7.png";
const imgImage5 = "/images/desktop/4e510c9de574f188aa279673deb18bdf239ce8fa.png";
const imgImage6 = "/images/desktop/44f86a821e16a0831885493a5bbe2d0098361388.png";
const imgImage7 = "/images/desktop/3491229a8d12dae6e741e9c222d4b994fdfa9e80.png";
import type { MouseEvent } from "react";
import { CATEGORY_LABELS, useSite, type Category } from "../site/ui";
import { PROVIDERS, type Provider } from "../site/providers";
import { FixedFrameLayer } from "../site/frameLayer";

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

function Frame18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center justify-center left-[112px] top-[352px] w-[537px]">
      <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Bold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#fafafa] text-[32px] w-[min-content]">“การเดิมพันออนไลน์ที่ทันสมัยที่สุดกับ”</p>
      <div className="anim-glow h-[155px] relative shrink-0 w-[497px]" data-name="lsm99ai ตังจริง+ 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[99.96%] left-[0.05%] max-w-none top-[0.17%] w-[99.93%]" src={imgLsm99Ai1} />
        </div>
      </div>
      <div className="[word-break:break-word] font-['Sukhumvit_Set:Light',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#fafafa] text-[0px] text-center w-[min-content]">
        <p className="font-['IBM_Plex_Sans_Thai:Medium',sans-serif] mb-0 text-[16px]">
          <span className="leading-[123.05000305175781%]">{`ยินดีต้อนรับสู่โลกแห่งการเดิมพันออนไลน์ที่ล้ำสมัยกว่ากับ `}</span>
          <span className="leading-[123.05000305175781%] text-[#ff6d00]">LSMF88</span>
        </p>
        <p className="font-['IBM_Plex_Sans_Thai:Medium',sans-serif] leading-[123.05000305175781%] text-[16px]">ที่นี่คือจุดหมายปลายทางสำหรับนักเดิมพันที่ต้องการสัมผัสประสบการณ์สุดพิเศษ</p>
      </div>
    </div>
  );
}

function Group214() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <div className="col-1 h-[44px] ml-0 mt-0 relative row-1 w-[200px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="44" preserveAspectRatio="none" viewBox="0 0 200 44" width="200">
          <path d={svgPaths.p30e20d80} fill="url(#paint0_linear_0_155)" id="Rectangle 34646976" stroke="#C64302" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_155" x1="200" x2="2.61064" y1="0" y2="53.6119">
              <stop stopColor="#030506" />
              <stop offset="0.5" stopColor="#4C4C4D" />
              <stop offset="1" stopColor="#030506" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="[word-break:break-word] col-1 font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[normal] ml-[66px] mt-[9px] not-italic relative row-1 text-[#fafafa] text-[16px] whitespace-nowrap">เข้าสู่ระบบ</p>
    </div>
  );
}

function Group211() {
  const { openAuth } = useSite();
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] hit inline-grid leading-[0] place-items-start relative shrink-0"
      onClick={() => openAuth("login")}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") openAuth("login");
      }}
      role="button"
      tabIndex={0}
    >
      <Group214 />
    </div>
  );
}

function Group215() {
  const { openAuth } = useSite();
  return (
    <div
      className="anim-glow grid-cols-[max-content] grid-rows-[max-content] hit inline-grid leading-[0] place-items-start relative shrink-0"
      onClick={() => openAuth("register")}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") openAuth("register");
      }}
      role="button"
      tabIndex={0}
    >
      <div className="col-1 h-[44px] ml-0 mt-0 relative row-1 w-[200px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="44" preserveAspectRatio="none" viewBox="0 0 200 44" width="200">
          <path d={svgPaths.p30e20d80} fill="url(#paint0_linear_0_125)" id="Rectangle 34646975" stroke="#C64302" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_125" x1="200" x2="2.61064" y1="0" y2="53.6119">
              <stop stopColor="#B01F02" />
              <stop offset="0.509615" stopColor="#FF5300" />
              <stop offset="1" stopColor="#A51802" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="[word-break:break-word] col-1 font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[normal] ml-[56px] mt-[9px] not-italic relative row-1 text-[#fafafa] text-[16px] whitespace-nowrap">สมัครสมาชิก</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1240px]">
      <Group211 />
      <div className="h-[63.273px] relative shrink-0 w-[203px]" data-name="Lsmx84 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[0.13%] max-w-none top-0 w-[99.74%]" src={imgLsm99Ai1} />
        </div>
      </div>
      <Group215 />
    </div>
  );
}

function Frame36() {
  return (
    <FixedFrameLayer>
    <div className="-translate-x-1/2 absolute backdrop-blur-[10px] content-stretch drop-shadow-[6px_6px_4px_rgba(0,0,0,0.25)] flex flex-col h-[100px] items-center justify-center left-1/2 pl-[62px] pr-[37px] py-[14px] top-0 w-[1440px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(89.9999999315684deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 85, 0, 0.5) 50%, rgba(0, 0, 0, 0.5) 100%)" }}>
      <div aria-hidden className="absolute bottom-0 h-[3px] left-0 pointer-events-none w-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(198,67,2,0.15) 0%, #ff5500 50%, rgba(198,67,2,0.15) 100%)" }} />
      <Frame16 />
    </div>
    </FixedFrameLayer>
  );
}

function Frame34() {
  return (
    <div className="absolute h-[1024px] left-0 overflow-clip top-0 w-[1440px]">
      {/* Hero background (version 3) — opaque, so it covers the page background
          entirely across the hero. */}
      <div aria-hidden className="absolute bg-black inset-0 pointer-events-none">
        <img alt="" className="absolute anim-drift-opaque max-w-none object-cover size-full" src={imgFrame1000009303} />
        <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1440 1024' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.699999988079071'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(21.25 53.7 -144.87 57.326 507.5 580.5)'><stop stop-color='rgba(21,14,4,1)' offset='0'/><stop stop-color='rgba(21,14,4,0)' offset='0.8779'/></radialGradient></defs></svg>\")" }} />
      </div>
      <div className="absolute anim-float h-[997px] left-[585px] shadow-[9px_8px_25.4px_0px_rgba(0,0,0,0.5)] top-[103px] w-[855px]" data-name="IMG_4301 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg43012} />
      </div>
      <Frame18 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic relative shrink-0 w-[197px]">
      <p className="font-['IBM_Plex_Sans_Thai:Bold',sans-serif] h-[29.948px] leading-[normal] relative shrink-0 text-[#ff6d00] text-[18px] w-full">ฝากถอนออโต้</p>
      <div className="font-['IBM_Plex_Sans_Thai:Medium',sans-serif] leading-[0] relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[normal] mb-0">ฝาก-ถอน ออโต้ 3 วินาที</p>
        <p className="leading-[normal]">เจ้าเดียวในไทยระบบใหม่ล่าสุด!</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="col-1 content-stretch flex gap-[8px] items-center ml-[47px] mt-[20px] relative row-1">
      <div className="relative shrink-0 size-[80px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[157.58%] left-[-183.37%] max-w-none top-[-22.78%] w-[288.89%]" src={imgRectangle6509} />
        </div>
      </div>
      <Frame19 />
    </div>
  );
}

function Group216() {
  return (
    <div className="badge grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 h-[122px] ml-0 mt-0 relative row-1 w-[380px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="122" preserveAspectRatio="none" viewBox="0 0 380 122" width="380">
          <path d={svgPaths.p1dcaf3c0} fill="url(#paint0_linear_0_113)" fillOpacity="0.6" id="Rectangle 34646976" stroke="url(#paint1_linear_0_113)" strokeWidth="2" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_113" x1="191" x2="190" y1="176.5" y2="-73.2">
              <stop stopColor="#FF5500" />
              <stop offset="1" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_113" x1="-4.95472e-07" x2="389.397" y1="122" y2="68.8514">
              <stop offset="0.0147841" stopColor="#C64302" stopOpacity="0" />
              <stop offset="0.5" stopColor="#FF5500" />
              <stop offset="1" stopColor="#C64302" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Frame43 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[197px]">
      <p className="font-['IBM_Plex_Sans_Thai:Bold',sans-serif] h-[29.948px] min-w-full relative shrink-0 text-[#ff6d00] text-[18px] w-[min-content]">บริการ 24 ชม.</p>
      <p className="font-['IBM_Plex_Sans_Thai:Medium',sans-serif] relative shrink-0 text-[16px] text-white w-[209px]">พร้อมให้บริการตลอด 24 ชั่วโมง รับรองความปลอดภัย</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="col-1 content-stretch flex gap-[8px] items-center ml-[37px] mt-[20px] relative row-1 w-[305px]">
      <div className="relative shrink-0 size-[80px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[157.58%] left-[-6.66%] max-w-none top-[-28.87%] w-[288.89%]" src={imgRectangle6509} />
        </div>
      </div>
      <Frame20 />
    </div>
  );
}

function Group217() {
  return (
    <div className="badge grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 h-[122px] ml-0 mt-0 relative row-1 w-[380px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="122" preserveAspectRatio="none" viewBox="0 0 380 122" width="380">
          <path d={svgPaths.p1dcaf3c0} fill="url(#paint0_linear_0_202)" fillOpacity="0.6" id="Rectangle 34646976" stroke="url(#paint1_linear_0_202)" strokeWidth="2" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_202" x1="191" x2="190" y1="176.5" y2="-73.2">
              <stop stopColor="#FF5500" />
              <stop offset="1" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_202" x1="-4.95472e-07" x2="389.397" y1="122" y2="68.8514">
              <stop offset="0.0147841" stopColor="#C64302" stopOpacity="0" />
              <stop offset="0.5" stopColor="#FF5500" />
              <stop offset="1" stopColor="#C64302" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Frame44 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[220px]">
      <p className="font-['IBM_Plex_Sans_Thai:Bold',sans-serif] h-[29.948px] min-w-full relative shrink-0 text-[#ff6d00] text-[18px] w-[min-content]">ถอนไม่จำกัด</p>
      <p className="font-['IBM_Plex_Sans_Thai:Medium',sans-serif] relative shrink-0 text-[16px] text-white w-[221px]">ถอนได้ไม่จำกัดต่อวันรวดเร็วทันใจ</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="col-1 content-stretch flex gap-[8px] items-center ml-[31px] mt-[22px] relative row-1 w-[317px]">
      <div className="relative shrink-0 size-[80px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[191.19%] left-[-125.41%] max-w-none top-[-45%] w-[350.52%]" src={imgRectangle6509} />
        </div>
      </div>
      <Frame21 />
    </div>
  );
}

function Group218() {
  return (
    <div className="badge grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 h-[122px] ml-0 mt-0 relative row-1 w-[380px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="122" preserveAspectRatio="none" viewBox="0 0 380 122" width="380">
          <path d={svgPaths.p1dcaf3c0} fill="url(#paint0_linear_0_202)" fillOpacity="0.6" id="Rectangle 34646976" stroke="url(#paint1_linear_0_202)" strokeWidth="2" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_202" x1="191" x2="190" y1="176.5" y2="-73.2">
              <stop stopColor="#FF5500" />
              <stop offset="1" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_202" x1="-4.95472e-07" x2="389.397" y1="122" y2="68.8514">
              <stop offset="0.0147841" stopColor="#C64302" stopOpacity="0" />
              <stop offset="0.5" stopColor="#FF5500" />
              <stop offset="1" stopColor="#C64302" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Frame45 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[40px] items-center leading-[0] left-1/2 top-[949px] w-[1220px]">
      <div className="shrink-0" data-reveal data-reveal-delay="0"><Group216 /></div>
      <div className="shrink-0" data-reveal data-reveal-delay="120"><Group217 /></div>
      <div className="shrink-0" data-reveal data-reveal-delay="240"><Group218 /></div>
    </div>
  );
}

function Container() {
  return (
    <div className="col-1 flex h-[43.657px] items-center justify-center ml-[1026px] mt-0 relative row-1 w-[414px]">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="h-[43.657px] relative w-[414px]" data-name="Container">
          <svg className="absolute block inset-0 size-full" fill="none" height="43.6573" preserveAspectRatio="none" viewBox="0 0 414 43.6573" width="414">
            <g clipPath="url(#clip0_0_138)" id="Container">
              <path d={svgPaths.p29ae8080} fill="url(#paint0_radial_0_138)" id="Vector" />
            </g>
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(207) rotate(90) scale(33.3174 315.947)" gradientUnits="userSpaceOnUse" id="paint0_radial_0_138" r="1">
                <stop stopColor="#B01F02" />
                <stop offset="0.721154" stopColor="#FF6D00" />
              </radialGradient>
              <clipPath id="clip0_0_138">
                <rect fill="white" height="43.6573" width="414" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="col-1 h-[43.657px] ml-0 mt-0 relative row-1 w-[414px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="43.6573" preserveAspectRatio="none" viewBox="0 0 414 43.6573" width="414">
        <g clipPath="url(#clip0_0_133)" id="Container">
          <g id="Vector">
            <path d={svgPaths.p29ae8080} fill="url(#paint0_radial_0_133)" />
            <path d={svgPaths.p29ae8080} fill="url(#paint1_radial_0_133)" />
          </g>
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(207) rotate(90) scale(33.3174 315.947)" gradientUnits="userSpaceOnUse" id="paint0_radial_0_133" r="1">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#E63E6D" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(207) rotate(90) scale(33.3174 315.947)" gradientUnits="userSpaceOnUse" id="paint1_radial_0_133" r="1">
            <stop stopColor="#B01F02" />
            <stop offset="0.721154" stopColor="#FF6D00" />
          </radialGradient>
          <clipPath id="clip0_0_133">
            <rect fill="white" height="43.6573" width="414" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="col-1 flex h-[43.657px] items-center justify-center ml-[1026px] mt-[90.29px] relative row-1 w-[414px]">
      <div className="flex-none rotate-180">
        <div className="h-[43.657px] relative w-[414px]" data-name="Container">
          <svg className="absolute block inset-0 size-full" fill="none" height="43.6573" preserveAspectRatio="none" viewBox="0 0 414 43.6573" width="414">
            <g clipPath="url(#clip0_0_199)" id="Container">
              <path d={svgPaths.p2be3d9f0} fill="url(#paint0_radial_0_199)" id="Vector" />
            </g>
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(207) rotate(90) scale(33.3174 315.947)" gradientUnits="userSpaceOnUse" id="paint0_radial_0_199" r="1">
                <stop stopColor="#B01F02" />
                <stop offset="0.721154" stopColor="#FF6D00" />
              </radialGradient>
              <clipPath id="clip0_0_199">
                <rect fill="white" height="43.6573" width="414" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="col-1 flex h-[43.657px] items-center justify-center ml-0 mt-[90.29px] relative row-1 w-[414px]">
      <div className="-scale-y-100 flex-none">
        <div className="h-[43.657px] relative w-[414px]" data-name="Container">
          <svg className="absolute block inset-0 size-full" fill="none" height="43.6573" preserveAspectRatio="none" viewBox="0 0 414 43.6573" width="414">
            <g clipPath="url(#clip0_0_203)" id="Container">
              <path d={svgPaths.p29ae8080} fill="url(#paint0_radial_0_203)" id="Vector" />
            </g>
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(207) rotate(90) scale(33.3174 315.947)" gradientUnits="userSpaceOnUse" id="paint0_radial_0_203" r="1">
                <stop stopColor="#B01F02" />
                <stop offset="0.721154" stopColor="#FF6D00" />
              </radialGradient>
              <clipPath id="clip0_0_203">
                <rect fill="white" height="43.6573" width="414" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group219() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <div className="col-1 h-[100px] ml-0 mt-0 relative row-1 w-[462px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="100" preserveAspectRatio="none" viewBox="0 0 462 100" width="462">
          <path d={svgPaths.p29ec2f00} fill="url(#paint0_linear_0_149)" id="Rectangle 34646976" stroke="url(#paint1_linear_0_149)" strokeWidth="2.5" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_149" x1="462" x2="7.06413" y1="0" y2="125.589">
              <stop stopColor="#B01F02" />
              <stop offset="0.509615" stopColor="#FF5300" />
              <stop offset="1" stopColor="#A51802" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_149" x1="-6.0239e-07" x2="463.258" y1="100" y2="6.21365">
              <stop offset="0.0147841" stopColor="#C64302" stopOpacity="0" />
              <stop offset="0.5" stopColor="#FF5500" />
              <stop offset="1" stopColor="#C64302" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="[word-break:break-word] col-1 font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[normal] ml-[160px] mt-[23px] not-italic relative row-1 text-[32px] text-center text-white w-[141.032px]">โปรโมชั่น</p>
    </div>
  );
}

function Group212() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[489px] mt-[21.65px] place-items-start relative row-1">
      <Group219 />
    </div>
  );
}

function Group220() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
      <Group212 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="h-[447px] overflow-clip relative shrink-0 w-[612px]">
      <div className="[word-break:break-word] absolute font-['Sukhumvit_Set:Bold',sans-serif] leading-[0] left-[11px] not-italic text-[0px] text-black top-0 w-[539px] whitespace-pre-wrap">
        <p className="font-['IBM_Plex_Sans_Thai:Medium',sans-serif] leading-[19.826px] mb-0 text-[#fafafa] text-[20px]">{`มวยเดี่ยว ที่มีการเเทงถูกติดต่อกัน 5 คู่  หรือ เเทงผิดติดต่อกัน 5 คู่  `}</p>
        <p className="leading-[19.826px] mb-0 text-[20px]">​</p>
        <p className="font-['IBM_Plex_Sans_Thai:Medium',sans-serif] leading-[19.826px] mb-0 text-[#fafafa] text-[20px]">{`บอลเดี่ยว ที่มีการเเทงถูกติดต่อกัน 5 คู่ หรือ เเทงผิดติดต่อกัน 5 คู่  `}</p>
        <p className="leading-[19.826px] mb-0 text-[20px]">​</p>
        <p className="font-['IBM_Plex_Sans_Thai:Medium',sans-serif] leading-[19.826px] mb-0 text-[#fafafa] text-[20px]">{`สามารถเเคปบิลเเจ้งแอดมินผ่านไลน์เพื่อรับโบนัสได้ ทันที 1,000 บาท `}</p>
        <p className="leading-[19.826px] mb-0 text-[20px]">​</p>
        <p className="font-['IBM_Plex_Sans_Thai:Medium',sans-serif] leading-[19.826px] mb-0 text-[#fafafa] text-[20px]">(บิลขั้นต่ำ 200 บาท ขึ้นไป)</p>
        <p className="leading-[19.826px] mb-0 text-[20px]">​</p>
        <p className="font-['IBM_Plex_Sans_Thai:Medium',sans-serif] leading-[19.826px] mb-0 text-[20px]">{` `}</p>
        <p className="font-['IBM_Plex_Sans_Thai:Medium',sans-serif] leading-[19.826px] mb-0 text-[#ff6d00] text-[20px]">**เงื่อนไข</p>
        <p className="leading-[19.826px] mb-0 text-[20px]">​</p>
        <p className="font-['IBM_Plex_Sans_Thai:Medium',sans-serif] leading-[19.826px] mb-0 text-[#fafafa] text-[20px]">- บอลเดี่ยวต้องมีค่าน้ำ 0.75 ขึ้นไป ไม่ต่ำกว่า -0.75 เท่านั้น</p>
        <p className="leading-[19.826px] mb-0 text-[20px]">​</p>
        <p className="font-['IBM_Plex_Sans_Thai:Medium',sans-serif] leading-[19.826px] mb-0 text-[#fafafa] text-[20px]">- มวยเดี่ยวต้องมีค่าน้ำ 0.60 ขึ้นไป ไม่ต่ำกว่า -0.60 เท่านั้น</p>
        <p className="leading-[19.826px] mb-0 text-[20px]">​</p>
        <p className="font-['IBM_Plex_Sans_Thai:Medium',sans-serif] leading-[19.826px] mb-0 text-[#fafafa] text-[20px]">- มวยต้องเป็นมวยก่อนชกเท่านั้น ไม่นับรวม สูง/ต่ำ ทั้ง 5 คู่</p>
        <p className="leading-[19.826px] mb-0 text-[20px]">​</p>
        <p className="font-['IBM_Plex_Sans_Thai:Medium',sans-serif] leading-[19.826px] mb-0 text-[#fafafa] text-[20px]">{`- กีฬาต้องแทงก่อนการแข่งขัน เต็มเวลาเท่านั้น (HDP) ทั้ง 5 คู่ `}</p>
        <p className="leading-[19.826px] mb-0 text-[20px]">​</p>
        <p className="font-['IBM_Plex_Sans_Thai:Medium',sans-serif] leading-[19.826px] mb-0 text-[#fafafa] text-[20px]">- มวย หรือ บอล สามารถรวมกันได้ตามเงื่อนไข หากมี Live เข้ามาคั่น</p>
        <p className="leading-[19.826px] mb-0 text-[20px]">​</p>
        <p className="font-['IBM_Plex_Sans_Thai:Medium',sans-serif] leading-[19.826px] mb-0 text-[#fafafa] text-[20px]">ระหว่าง 5 คู่ ให้ยกเลิก แล้วเริ่มนับใหม่</p>
        <p className="leading-[19.826px] mb-0 text-[20px]">​</p>
        <p className="leading-[19.826px] mb-0 text-[20px]">​</p>
        <p className="font-['IBM_Plex_Sans_Thai:Medium',sans-serif] leading-[19.826px] mb-0 text-[#fafafa] text-[20px]">- โปรกีฬาสามารถแจ้งรับได้ 1 โปรโมชั่น ต่อ 1 วัน ต่อ 1 ยูสเซอร์</p>
        <p className="leading-[19.826px] mb-0 text-[20px]">​</p>
        <p className="leading-[19.826px] mb-0 text-[20px]">​</p>
        <p className="leading-[19.826px] mb-0 text-[20px]">​</p>
        <p className="leading-[19.826px] mb-0 text-[20px]">​</p>
        <p className="font-['IBM_Plex_Sans_Thai:Medium',sans-serif] leading-[19.826px] mb-0 text-[#fafafa] text-[20px]">- โปรกีฬาสามารถแจ้งรับได้ 1 โปรโมชั่น ต่อ 1 วัน ต่อ 1 ยูสเซอร์ เท่านั้น</p>
        <p className="leading-[19.826px] mb-0 text-[20px]">​</p>
        <p className="font-['IBM_Plex_Sans_Thai:Medium',sans-serif] leading-[19.826px] text-[#fafafa] text-[20px]">(เดี่ยว/สเต็ป) - แจ้งรับได้ภายใน 24 ชั่วโมง (โดยยึดวันที่ วันต่อวัน</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="col-1 h-[492.15px] ml-[662px] mt-0 relative rounded-[8px] row-1 w-[680.75px]" style={{ backgroundImage: "linear-gradient(-0.5166780776416857deg, rgba(255, 85, 0, 0.6) 43.509%, rgba(0, 0, 0, 0.48) 158.64%)" }}>
      <div className="content-stretch flex items-center justify-center overflow-clip pb-[17px] pl-[70px] pr-[72px] pt-[32px] relative rounded-[inherit] size-full">
        <Frame33 />
      </div>
      <div aria-hidden className="absolute stroke-grad border-[2.5px] border-[#c64302] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame47() {
  const { promoSlide } = useSite();
  return (
    <div className="anim-shimmer h-[340px] overflow-hidden relative rounded-[8px] shrink-0 w-[638px]" data-reveal="zoom">
      <img
        alt="โปรโมชั่นคอมมิชชั่นบอล-มวย รับสูงสุด 30,000 บาท"
        className="anim-fade absolute inset-0 max-w-none object-cover rounded-[8px] size-full transition-transform duration-[6000ms] ease-out"
        key={promoSlide}
        src={imgFrame1618873365}
        style={{ transform: `scale(${1.02 + promoSlide * 0.02}) translateX(${promoSlide * -4}px)` }}
      />
      <div aria-hidden className="absolute stroke-grad border-[2.5px] border-[#c64302] border-solid inset-0 rounded-[8px]" />
    </div>
  );
}

function Frame26() {
  const { promoSlide, setPromoSlide } = useSite();
  return (
    <div className="h-[10px] relative shrink-0 w-[49px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 49 10" width="49">
        <g id="Frame 1000005285">
          {[5, 18, 31, 44].map((cx, index) => (
            <circle
              className="cursor-pointer transition-all duration-300"
              cx={cx}
              cy="5"
              fill={index === promoSlide ? "#FF6D00" : "#F18C22"}
              fillOpacity={index === promoSlide ? 1 : 0.5}
              key={cx}
              onClick={() => setPromoSlide(index)}
              r={index === promoSlide ? 5 : 4.2}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

function Frame48() {
  const { promoSlide, setPromoSlide } = useSite();
  return (
    <div
      aria-selected={promoSlide === 1}
      className="col-1 h-[112px] ml-[426.85px] mt-0 relative rounded-[8px] row-1 tile w-[205px]"
      onClick={() => setPromoSlide(1)}
      role="button"
      tabIndex={0}
    >
      <img alt="โปรโมชั่นที่ 1" className="absolute inset-0 max-w-none object-cover rounded-[8px] size-full transition duration-300" src={imgFrame1618873365} style={{ opacity: promoSlide === 1 ? 1 : 0.62 }} />
      <div aria-hidden className="absolute stroke-grad border-[1.5px] border-[#c64302] border-solid inset-0 rounded-[8px]" />
    </div>
  );
}

function Frame49() {
  const { promoSlide, setPromoSlide } = useSite();
  return (
    <div
      aria-selected={promoSlide === 2}
      className="col-1 h-[112px] ml-0 mt-0 relative rounded-[8px] row-1 tile w-[205px]"
      onClick={() => setPromoSlide(2)}
      role="button"
      tabIndex={0}
    >
      <img alt="โปรโมชั่นที่ 2" className="absolute inset-0 max-w-none object-cover rounded-[8px] size-full transition duration-300" src={imgFrame1618873365} style={{ opacity: promoSlide === 2 ? 1 : 0.62 }} />
      <div aria-hidden className="absolute stroke-grad border-[1.5px] border-[#c64302] border-solid inset-0 rounded-[8px]" />
    </div>
  );
}

function Frame50() {
  const { promoSlide, setPromoSlide } = useSite();
  return (
    <div
      aria-selected={promoSlide === 3}
      className="col-1 h-[112px] ml-[213.92px] mt-0 relative rounded-[8px] row-1 tile w-[205px]"
      onClick={() => setPromoSlide(3)}
      role="button"
      tabIndex={0}
    >
      <img alt="โปรโมชั่นที่ 3" className="absolute inset-0 max-w-none object-cover rounded-[8px] size-full transition duration-300" src={imgFrame1618873365} style={{ opacity: promoSlide === 3 ? 1 : 0.62 }} />
      <div aria-hidden className="absolute stroke-grad border-[1.5px] border-[#c64302] border-solid inset-0 rounded-[8px]" />
    </div>
  );
}

function Group221() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame48 />
      <Frame49 />
      <Frame50 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[16px] h-[492.15px] items-center ml-0 mt-0 relative row-1 w-[638px]">
      <Frame47 />
      <Frame26 />
      <Group221 />
    </div>
  );
}

function Group224() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[50px] mt-[175.65px] place-items-start relative row-1">
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Group225() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group220 />
      <Group224 />
    </div>
  );
}

function Container4() {
  return (
    <div className="col-1 flex h-[43.657px] items-center justify-center ml-[1026px] mt-0 relative row-1 w-[414px]">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="h-[43.657px] relative w-[414px]" data-name="Container">
          <svg className="absolute block inset-0 size-full" fill="none" height="43.6573" preserveAspectRatio="none" viewBox="0 0 414 43.6573" width="414">
            <g clipPath="url(#clip0_0_62)" id="Container">
              <path d={svgPaths.p29ae8080} fill="url(#paint0_radial_0_62)" id="Vector" />
            </g>
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(207) rotate(90) scale(33.3174 315.947)" gradientUnits="userSpaceOnUse" id="paint0_radial_0_62" r="1">
                <stop stopColor="#B01F02" />
                <stop offset="0.721154" stopColor="#FF6D00" />
              </radialGradient>
              <clipPath id="clip0_0_62">
                <rect fill="white" height="43.6573" width="414" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="col-1 h-[43.657px] ml-0 mt-0 relative row-1 w-[414px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="43.6573" preserveAspectRatio="none" viewBox="0 0 414 43.6573" width="414">
        <g clipPath="url(#clip0_0_133)" id="Container">
          <g id="Vector">
            <path d={svgPaths.p29ae8080} fill="url(#paint0_radial_0_133)" />
            <path d={svgPaths.p29ae8080} fill="url(#paint1_radial_0_133)" />
          </g>
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(207) rotate(90) scale(33.3174 315.947)" gradientUnits="userSpaceOnUse" id="paint0_radial_0_133" r="1">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#E63E6D" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(207) rotate(90) scale(33.3174 315.947)" gradientUnits="userSpaceOnUse" id="paint1_radial_0_133" r="1">
            <stop stopColor="#B01F02" />
            <stop offset="0.721154" stopColor="#FF6D00" />
          </radialGradient>
          <clipPath id="clip0_0_133">
            <rect fill="white" height="43.6573" width="414" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="col-1 flex h-[43.657px] items-center justify-center ml-[1026px] mt-[90.29px] relative row-1 w-[414px]">
      <div className="flex-none rotate-180">
        <div className="h-[43.657px] relative w-[414px]" data-name="Container">
          <svg className="absolute block inset-0 size-full" fill="none" height="43.6573" preserveAspectRatio="none" viewBox="0 0 414 43.6573" width="414">
            <g clipPath="url(#clip0_0_152)" id="Container">
              <path d={svgPaths.p2be3d9f0} fill="url(#paint0_radial_0_152)" id="Vector" />
            </g>
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(207) rotate(90) scale(33.3174 315.947)" gradientUnits="userSpaceOnUse" id="paint0_radial_0_152" r="1">
                <stop stopColor="#B01F02" />
                <stop offset="0.721154" stopColor="#FF6D00" />
              </radialGradient>
              <clipPath id="clip0_0_152">
                <rect fill="white" height="43.6573" width="414" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="col-1 flex h-[43.657px] items-center justify-center ml-0 mt-[90.29px] relative row-1 w-[414px]">
      <div className="-scale-y-100 flex-none">
        <div className="h-[43.657px] relative w-[414px]" data-name="Container">
          <svg className="absolute block inset-0 size-full" fill="none" height="43.6573" preserveAspectRatio="none" viewBox="0 0 414 43.6573" width="414">
            <g clipPath="url(#clip0_0_203)" id="Container">
              <path d={svgPaths.p29ae8080} fill="url(#paint0_radial_0_203)" id="Vector" />
            </g>
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(207) rotate(90) scale(33.3174 315.947)" gradientUnits="userSpaceOnUse" id="paint0_radial_0_203" r="1">
                <stop stopColor="#B01F02" />
                <stop offset="0.721154" stopColor="#FF6D00" />
              </radialGradient>
              <clipPath id="clip0_0_203">
                <rect fill="white" height="43.6573" width="414" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group223() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <div className="col-1 h-[100px] ml-0 mt-0 relative row-1 w-[462px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="100" preserveAspectRatio="none" viewBox="0 0 462 100" width="462">
          <path d={svgPaths.p29ec2f00} fill="url(#paint0_linear_0_150)" id="Rectangle 34646976" stroke="url(#paint1_linear_0_150)" strokeWidth="2.5" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_150" x1="462" x2="7.06413" y1="0" y2="125.589">
              <stop stopColor="#B01F02" />
              <stop offset="0.509615" stopColor="#FF5300" />
              <stop offset="1" stopColor="#A51802" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_150" x1="-6.0239e-07" x2="463.258" y1="100" y2="6.21365">
              <stop offset="0.0147841" stopColor="#B01F02" stopOpacity="0" />
              <stop offset="0.5" stopColor="#FF5500" />
              <stop offset="1" stopColor="#B01F02" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="[word-break:break-word] col-1 font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[normal] ml-[128px] mt-[23px] not-italic relative row-1 text-[32px] text-center text-white whitespace-nowrap">ค่ายเกมทั้งหมด</p>
    </div>
  );
}

function Group213() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[489px] mt-[21.87px] place-items-start relative row-1">
      <Group223 />
    </div>
  );
}

function Group222() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
      <Group213 />
    </div>
  );
}

function Group227() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-[107px] ml-0 mt-0 relative row-1 w-[105px]" data-name="Gemini_Generated_Image_ykhxbvykhxbvykhx 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[106.54%] left-[0.14%] max-w-none top-0 w-[337.04%]" src={imgGeminiGeneratedImageYkhxbvykhxbvykhx1} />
        </div>
      </div>
      <p className="[word-break:break-word] col-1 font-['IBM_Plex_Sans_Thai:Bold',sans-serif] leading-[normal] ml-[22px] mt-[107px] not-italic relative row-1 text-[#fafafa] text-[24px] text-center whitespace-nowrap">สล็อต</p>
    </div>
  );
}

function Frame29() {
  const { category, setCategory } = useSite();
  return (
    <div
      aria-selected={category === "slot"}
      data-size="lg"
      className="bg-gradient-to-b cat from-[rgba(176,31,2,0.6)] h-[156px] relative rounded-[8px] shrink-0 to-[rgba(255,60,0,0.6)] w-full"
      onClick={() => setCategory("slot")}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") setCategory("slot");
      }}
      role="tab"
      tabIndex={0}
    >
      <div aria-hidden className="absolute stroke-grad border-[2.5px] border-[#c64302] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start pl-[25px] pr-[26px] py-[8px] relative size-full">
        <Group227 />
      </div>
    </div>
  );
}

function Group228() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-[74.9px] ml-0 mt-0 relative row-1 w-[73.872px]" data-name="Gemini_Generated_Image_ykhxbvykhxbvykhx 1">
        <div className="absolute inset-0 opacity-50 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[129.62%] left-[-128.25%] max-w-none top-[-14.81%] w-[436.88%]" src={imgGeminiGeneratedImageYkhxbvykhxbvykhx1} />
        </div>
      </div>
      <p className="[word-break:break-word] col-1 font-['IBM_Plex_Sans_Thai:Bold',sans-serif] leading-[normal] ml-[17px] mt-[74.9px] not-italic opacity-60 relative row-1 text-[#fafafa] text-[14px] text-center whitespace-nowrap">คาสิโน</p>
    </div>
  );
}

function Frame51() {
  const { category, setCategory } = useSite();
  return (
    <div
      aria-selected={category === "casino"}
      data-size="sm"
      className="bg-[rgba(0,0,0,0.2)] cat content-stretch flex items-center justify-center pl-[25px] pr-[26px] py-[8px] relative rounded-[8px] shrink-0 size-[114px]"
      onClick={() => setCategory("casino")}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") setCategory("casino");
      }}
      role="tab"
      tabIndex={0}
    >
      <div aria-hidden className="absolute stroke-grad border-[2.5px] border-[#c64302] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Group228 />
    </div>
  );
}

function Group230() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-[74.9px] ml-0 mt-0 relative row-1 w-[73.872px]" data-name="Gemini_Generated_Image_ykhxbvykhxbvykhx 1">
        <div className="absolute inset-0 opacity-50 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[129.62%] left-[-224.44%] max-w-none top-[-14.85%] w-[436.88%]" src={imgGeminiGeneratedImageYkhxbvykhxbvykhx1} />
        </div>
      </div>
      <p className="[word-break:break-word] col-1 font-['IBM_Plex_Sans_Thai:Bold',sans-serif] leading-[normal] ml-[24px] mt-[74.9px] not-italic opacity-60 relative row-1 text-[#fafafa] text-[14px] text-center whitespace-nowrap">กีฬา</p>
    </div>
  );
}

function Frame52() {
  const { category, setCategory } = useSite();
  return (
    <div
      aria-selected={category === "sport"}
      data-size="sm"
      className="bg-[rgba(0,0,0,0.2)] cat content-stretch flex items-center justify-center pl-[25px] pr-[26px] py-[8px] relative rounded-[8px] shrink-0 size-[114px]"
      onClick={() => setCategory("sport")}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") setCategory("sport");
      }}
      role="tab"
      tabIndex={0}
    >
      <div aria-hidden className="absolute stroke-grad border-[2.5px] border-[#c64302] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Group230 />
    </div>
  );
}

function Group231() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-[74.9px] ml-0 mt-0 relative row-1 w-[73.872px]" data-name="Gemini_Generated_Image_ykhxbvykhxbvykhx 1">
        <div className="absolute inset-0 opacity-50 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[129.62%] left-[-327.54%] max-w-none top-[-14.85%] w-[436.88%]" src={imgGeminiGeneratedImageYkhxbvykhxbvykhx1} />
        </div>
      </div>
      <p className="[word-break:break-word] col-1 font-['IBM_Plex_Sans_Thai:Bold',sans-serif] leading-[normal] ml-[25px] mt-[74.9px] not-italic opacity-60 relative row-1 text-[#fafafa] text-[14px] text-center whitespace-nowrap">หวย</p>
    </div>
  );
}

function Frame53() {
  const { category, setCategory } = useSite();
  return (
    <div
      aria-selected={category === "lotto"}
      data-size="sm"
      className="bg-[rgba(0,0,0,0.2)] cat content-stretch flex items-center justify-center pl-[25px] pr-[26px] py-[8px] relative rounded-[8px] shrink-0 size-[114px]"
      onClick={() => setCategory("lotto")}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") setCategory("lotto");
      }}
      role="tab"
      tabIndex={0}
    >
      <div aria-hidden className="absolute stroke-grad border-[2.5px] border-[#c64302] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Group231 />
    </div>
  );
}

function Frame28() {
  return (
    <div aria-label="หมวดหมู่เกม" className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" role="tablist">
      <Frame29 />
      <Frame51 />
      <Frame52 />
      <Frame53 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="col-1 content-stretch flex h-[669px] items-center justify-center ml-0 mt-0 pb-[47px] pt-[52px] px-[82px] relative rounded-[8px] row-1 w-[320px]" style={{ backgroundImage: "linear-gradient(-1.4938248932414666deg, rgba(165, 56, 2, 0.6) 43.509%, rgba(0, 0, 0, 0.48) 158.64%)" }}>
      <div aria-hidden className="absolute stroke-grad border-3 border-[#c64302] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame28 />
    </div>
  );
}

/** One provider tile. Card geometry is the authored Figma card; the artwork is
 *  the provider's own 5:6 key art, which matches the card's ratio exactly. */
function ProviderTile({ provider }: { provider: Provider }) {
  return (
    <div
      aria-label={provider.name}
      className="bg-gradient-to-b from-[16%] from-[rgba(18,21,37,0)] h-[233.093px] relative rounded-[14.127px] shrink-0 tile to-[#121525] w-[194.244px]"
      data-name="game cover"
      role="button"
      tabIndex={0}
    >
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <img
          alt={provider.name}
          className="absolute inset-0 max-w-none object-cover size-full"
          loading="lazy"
          src={provider.src}
        />
      </div>
      <div aria-hidden className="absolute stroke-grad border-[2.775px] border-[#121525] border-solid inset-0 pointer-events-none rounded-[14.127px]" />
    </div>
  );
}

/** Four across, as authored. The scroll viewport is pinned to the height of the
 *  category panel beside it, so a 63-provider category and a 5-provider one
 *  leave the section exactly the same height. */
function ProviderGrid({ category }: { category: Category }) {
  return (
    <div className="provider-scroll h-[669px] w-full">
      <div className="gap-x-[39px] gap-y-[32px] grid grid-cols-[repeat(4,194.244px)] pb-[10px] pr-[14px]">
        {PROVIDERS[category].map((provider) => (
          <ProviderTile key={provider.id} provider={provider} />
        ))}
      </div>
    </div>
  );
}

function Frame40() {
  const { category } = useSite();
  const onGridClick = useGameGridClick();
  return (
    <div
      /* Flush with Frame27's own top edge, so the first tile row lines up with
         the top of the category panel beside it rather than its first button. */
      className="anim-fade col-1 content-stretch flex flex-col gap-[32px] items-start ml-[352px] mt-0 relative row-1 w-[896.978px]"
      key={category}
      onClick={onGridClick}
    >
      <ProviderGrid category={category} />
    </div>
  );
}

function Group226() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[96px] mt-[168.09px] place-items-start relative row-1">
      <Frame27 />
      <Frame40 />
    </div>
  );
}

function Group229() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group222 />
      <Group226 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="[word-break:break-word] col-1 content-stretch flex flex-col font-['IBM_Plex_Sans_Thai:Bold',sans-serif] items-start leading-[normal] ml-[61px] mt-[186.24px] not-italic relative row-1 w-[266.943px]">
      <p className="h-[112.412px] mb-[-20px] relative shrink-0 text-[#fafafa] text-[65px] w-full">ทำไม ?</p>
      <p className="h-[87.198px] mb-[-20px] relative shrink-0 text-[#fafafa] text-[50px] w-full">ต้องเลือก</p>
      <p className="bg-clip-text relative shrink-0 text-[60px] text-[transparent] text-shadow-[0px_0px_27.4px_rgba(191,82,0,0.6)] w-full" style={{ backgroundImage: "linear-gradient(-83.32071229259435deg, rgb(176, 31, 2) 3.483%, rgb(255, 109, 0) 50.463%, rgb(176, 31, 2) 97.442%)" }}>
        LSMF88
      </p>
    </div>
  );
}

function Group233() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <div className="border-[2.5px] border-[#c64302] border-solid col-1 h-[308px] ml-0 mt-[153.24px] relative rounded-[8px] row-1 w-[656px]" style={{ backgroundImage: "linear-gradient(-0.3355551319298371deg, rgba(255, 85, 0, 0.6) 43.509%, rgba(0, 0, 0, 0.48) 158.64%)" }} />
      <Frame38 />
      <div className="col-1 flex h-[461px] items-center justify-center ml-[328px] mt-0 relative row-1 w-[328px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[461px] relative w-[328px]" data-name="IMG_4286 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[153.51%] left-[-18.11%] max-w-none top-[0.08%] w-[143.84%]" src={imgImg42862} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="col-1 ml-[672px] mt-[52.24px] relative rounded-[8px] row-1 w-[660px]" style={{ backgroundImage: "linear-gradient(-0.44288675868725136deg, rgba(255, 85, 0, 0.6) 43.509%, rgba(0, 0, 0, 0.48) 158.64%)" }}>
      <div className="content-stretch flex items-center justify-center overflow-clip pb-[17px] pt-[32px] px-[24px] relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[0px] w-[607px] whitespace-pre-wrap">
          <p className="font-['IBM_Plex_Sans_Thai:Medium',sans-serif] mb-0 text-[24px]">
            <span className="leading-[normal] text-[#ff6d00]">ทำไมคุณควรตัดสินใจเลือกเรา</span>
            <span className="leading-[normal] text-[#e6c200]">{` `}</span>
            <span className="leading-[normal] text-[#ff6d00]">?</span>
          </p>
          <p className="leading-[normal] mb-0 text-[24px]">​</p>
          <p className="leading-[normal] mb-0 text-[24px]">เว็บคาสิโนออนไลน์ที่ครองใจผู้เล่นทั่วโลก ไม่ใช่แค่ประเทศจีน</p>
          <p className="leading-[normal] mb-0 text-[24px]">{`ด้วยมาตรฐานระดับโลก เทคโนโลยี และการบริการดีที่สุด `}</p>
          <p className="leading-[normal] mb-0 text-[24px]">ไร้ปัญหา ให้บริการครบทั้ง dg บาคาร่าออนไลน์ ไฮโล เสือมังกร</p>
          <p className="leading-[normal] mb-0 text-[24px]">{` รูเล็ต หรือ โป๊กเกอร์ บริษัทพัฒนาต่อเนื่องรวดเร็ว มั่นคง `}</p>
          <p className="leading-[normal] mb-0 text-[24px]">พร้อมการ ใช้งาน ผ่าน Casino App ยิ่งตอกย้ำ ความเป็นเจ้า</p>
          <p className="leading-[normal] mb-0 text-[24px]">ตลาดของ เกมคาสิโน ภาพ Full HD ได้ประสบการณ์พร้อมกับ</p>
          <p className="leading-[normal] text-[24px]">สนุกทุกที่และลุ้นโชค ไปกับเกมส์ของเรา</p>
        </div>
      </div>
      <div aria-hidden className="absolute stroke-grad border-[2.5px] border-[#c64302] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Group232() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Group233 />
      <Frame35 />
    </div>
  );
}

function Group210() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group232 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center leading-[0] relative shrink-0">
      <div className="shrink-0" data-reveal><Group225 /></div>
      <div className="shrink-0" data-reveal><Group229 /></div>
      <div className="shrink-0" data-reveal><Group210 /></div>
    </div>
  );
}

function Group200() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <div className="col-1 ml-[575.25px] mt-0 relative row-1 size-[74px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="col-1 ml-[479.92px] mt-0 relative row-1 size-[74px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <div className="col-1 ml-[287.82px] mt-0 relative row-1 size-[74px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <div className="col-1 ml-[191.47px] mt-0 relative row-1 size-[74px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[74px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
      <div className="col-1 ml-[383.56px] mt-0 relative row-1 size-[74px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
      <div className="col-1 ml-[95.74px] mt-0 relative row-1 size-[74px]" data-name="image 7">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
    </div>
  );
}

function Group201() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group200 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center justify-center left-[265px] top-[78px] w-[809px]">
      <div className="anim-glow h-[144px] relative shrink-0 w-[459px]" data-name="LSMF88 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLsm99Ai1} />
      </div>
      <div className="[word-break:break-word] font-['Kanit:Light',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-center text-white w-[min-content]">
        <p className="leading-[2.055] mb-0">LSMF88 ศูนย์รวมเว็บพนันออนไลน์ทุกชนิด ฝาก-ถอนด้วยระบบ</p>
        <p className="leading-[2.055]">ออโต้ทำรายการไม่กี่วินาที พร้อมรูปแบบการเล่นง่าย สมัครง่ายในไม่กี่ขั้น ตอนบริการด้วยระบบออนไลน์มาตรฐานสากล เท่าไหร่ก็จ่าย</p>
      </div>
      <Group201 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="h-[488px] relative shrink-0 w-[1340px]" data-reveal>
      <div className="absolute backdrop-blur-[33.411px] h-[488px] left-0 rounded-tl-[53.457px] rounded-tr-[53.457px] top-0 w-[1340px]" style={{ backgroundImage: "linear-gradient(-0.2602759316696108deg, rgba(255, 85, 0, 0.6) 43.509%, rgba(0, 0, 0, 0.48) 158.64%)" }} />
      <Frame22 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[56px] items-center left-0 top-[1102.35px] w-[1440px]">
      <Frame30 />
      <Frame32 />
    </div>
  );
}

export default function DesktopSite() {
  return (
    <div className="relative size-full" data-name="desktop">
      {/* Page background — the bottom-most layer of the whole site. */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-black inset-0" />
        <img alt="" className="absolute inset-0 max-w-none object-center object-cover size-full" src={imgDesktop} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(180deg, rgba(5,3,2,0.35) 0%, rgba(5,3,2,0.12) 35%, rgba(5,3,2,0.45) 100%)" }} />
      </div>
      <Frame34 />
      <div className="-translate-x-1/2 absolute flex h-[209px] items-center justify-center left-1/2 top-[906px] w-[1518px]">
        <div className="-rotate-90 flex-none">
          <div className="bg-[#160d00] blur-[35px] h-[1518px] relative w-[209px]" />
        </div>
      </div>
      <Frame23 />
      <Frame31 />
      <Frame36 />
    </div>
  );
}