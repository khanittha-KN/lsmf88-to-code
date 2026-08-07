/** One line of the detail panel beside the banner. `accent` is the orange used
 *  for headings like "**เงื่อนไข"; a blank `text` is a deliberate spacer. */
export type PromoLine = { text: string; accent?: boolean }

export type Promo = {
  id: string
  /** Accessible name for the banner and its thumbnail. */
  title: string
  image: string
  details: PromoLine[]
}

const BALL_BOXING_BANNER = '/images/desktop/586b06c31b94b13bed5cdeaf42be53e2ca00a215.png'

/**
 * The promotions the carousel rotates through. Everything downstream — the
 * banner, the dots, the thumbnail strip and the detail panel — is rendered from
 * this array, so adding a promotion is a single entry here and needs no
 * component changes. Auto-advance switches itself off below two entries.
 */
export const PROMOS: Promo[] = [
  {
    id: 'commission-ball-boxing',
    title: 'โปรโมชั่นคอมมิชชั่นบอล-มวย รับสูงสุด 30,000 บาท',
    image: BALL_BOXING_BANNER,
    details: [
      { text: 'มวยเดี่ยว ที่มีการเเทงถูกติดต่อกัน 5 คู่ หรือ เเทงผิดติดต่อกัน 5 คู่' },
      { text: 'บอลเดี่ยว ที่มีการเเทงถูกติดต่อกัน 5 คู่ หรือ เเทงผิดติดต่อกัน 5 คู่' },
      { text: 'สามารถเเคปบิลเเจ้งแอดมินผ่านไลน์เพื่อรับโบนัสได้ ทันที 1,000 บาท' },
      { text: '(บิลขั้นต่ำ 200 บาท ขึ้นไป)' },
      { text: '' },
      { text: '**เงื่อนไข', accent: true },
      { text: '- บอลเดี่ยวต้องมีค่าน้ำ 0.75 ขึ้นไป ไม่ต่ำกว่า -0.75 เท่านั้น' },
      { text: '- มวยเดี่ยวต้องมีค่าน้ำ 0.60 ขึ้นไป ไม่ต่ำกว่า -0.60 เท่านั้น' },
      { text: '- มวยต้องเป็นมวยก่อนชกเท่านั้น ไม่นับรวม สูง/ต่ำ ทั้ง 5 คู่' },
      { text: '- กีฬาต้องแทงก่อนการแข่งขัน เต็มเวลาเท่านั้น (HDP) ทั้ง 5 คู่' },
      { text: '- มวย หรือ บอล สามารถรวมกันได้ตามเงื่อนไข หากมี Live เข้ามาคั่นระหว่าง 5 คู่ ให้ยกเลิก แล้วเริ่มนับใหม่' },
      { text: '- โปรกีฬาสามารถแจ้งรับได้ 1 โปรโมชั่น ต่อ 1 วัน ต่อ 1 ยูสเซอร์ (เดี่ยว/สเต็ป) แจ้งรับได้ภายใน 24 ชั่วโมง โดยยึดวันที่ วันต่อวัน' },
    ],
  },
  /* PLACEHOLDER — the two entries below exist so the carousel can be reviewed
     with more than one slide. They reuse the first promotion's artwork and
     their copy is filler, not a real offer. Replace the title, image and
     details with the genuine promotion before this goes anywhere public. */
  {
    id: 'mock-welcome',
    title: '[ตัวอย่าง] โปรโมชั่นต้อนรับสมาชิกใหม่',
    image: BALL_BOXING_BANNER,
    details: [
      { text: 'ตัวอย่างโปรโมชั่นใบที่ 2 — ใช้สำหรับดูการทำงานของสไลด์เท่านั้น' },
      { text: 'ข้อความส่วนนี้จะเปลี่ยนตามโปรโมชั่นที่กำลังแสดงอยู่' },
      { text: '' },
      { text: '**เงื่อนไข (ตัวอย่าง)', accent: true },
      { text: '- รายละเอียดจริงรอทางร้านส่งมาแทนที่' },
      { text: '- หนึ่งบรรทัดต่อหนึ่งเงื่อนไข' },
    ],
  },
  {
    id: 'mock-weekly-cashback',
    title: '[ตัวอย่าง] โปรโมชั่นคืนยอดเสียรายสัปดาห์',
    image: BALL_BOXING_BANNER,
    details: [
      { text: 'ตัวอย่างโปรโมชั่นใบที่ 3 — ใช้สำหรับดูการทำงานของสไลด์เท่านั้น' },
      { text: 'ความยาวของข้อความแต่ละใบไม่จำเป็นต้องเท่ากัน' },
      { text: '' },
      { text: '**เงื่อนไข (ตัวอย่าง)', accent: true },
      { text: '- รายละเอียดจริงรอทางร้านส่งมาแทนที่' },
    ],
  },
  /* A fourth entry so the thumbnail strip below the banner fills all three of
     its slots — with three promotions the last slot sat empty. */
  {
    id: 'mock-refer-friend',
    title: '[ตัวอย่าง] โปรโมชั่นแนะนำเพื่อน',
    image: BALL_BOXING_BANNER,
    details: [
      { text: 'ตัวอย่างโปรโมชั่นใบที่ 4 — ใช้สำหรับดูการทำงานของสไลด์เท่านั้น' },
      { text: 'ใบนี้มีไว้ให้แถบรูปย่อด้านล่างแบนเนอร์ครบทั้งสามช่อง' },
      { text: '' },
      { text: '**เงื่อนไข (ตัวอย่าง)', accent: true },
      { text: '- รายละเอียดจริงรอทางร้านส่งมาแทนที่' },
    ],
  },
]

export const PROMO_COUNT = PROMOS.length
/** How long each promotion holds before the carousel advances. */
export const PROMO_INTERVAL_MS = 6000
