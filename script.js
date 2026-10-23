/**
 * ==============================================================================
 * زیبانو (ZibaNo) - سامانه جامع جستجو، مقایسه، رزرو آرایشگاه و شبیه‌ساز پرو مو
 * پروژه دانشگاهی درس تجارت الکترونیک - فاز اول
 * فناوری‌ها: HTML5, CSS3, Tailwind CSS, Pure Vanilla JavaScript, LocalStorage
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// ۱. داده‌های اولیه آرایشگاه‌ها (Salons JSON Data)
// ------------------------------------------------------------------------------
const SALONS_DATA = [
  {
    id: 'salon-1',
    name: 'سالن زیبایی رویال رز (Royal Rose)',
    tagline: 'تخصصی‌ترین مرکز استایل، بالیاژ روسی و فیشیال پوست',
    city: 'تهران',
    district: 'زعفرانیه',
    address: 'تهران، زعفرانیه، خیابان اعجازی، پلاک ۴۲، طبقه ۳',
    gender: 'female',
    rating: 4.9,
    reviewsCount: 184,
    priceLevel: 'لوکس',
    priceNumber: 450000,
    image: '/src/assets/images/salon_card_royalsalon_1792743870764.jpg',
    features: ['پذیرایی VIP', 'پارکینگ اختصاصی', 'مواد ارگانیک بدون آمونیاک', 'مشاوره اختصاصی فرم صورت'],
    workingHours: 'همه روزه از ۱۰:۰۰ الی ۲۰:۰۰ (جمعه‌ها با هماهنگی)',
    phone: '۰۲۱-۲۲۴۱۸۹۹۰',
    services: [
      { id: 'srv-101', title: 'کوتاهی و لایه‌بندی تخصصی فرانسوی', category: 'haircut', durationMinutes: 45, priceToman: 450000, desc: 'کوتاهی متناسب با آناتومی چهره به همراه براشینگ ژورنالی' },
      { id: 'srv-102', title: 'بالیاژ روسی و لایت آمبره طبیعی', category: 'color', durationMinutes: 180, priceToman: 2800000, desc: 'تکنیک روز رنگ بدون آسیب با اولاپلکس اصل آمریکا' },
      { id: 'srv-103', title: 'فیشیال تخصصی و آبرسانی عمیق هیدرافیشیال', category: 'skin', durationMinutes: 75, priceToman: 950000, desc: 'پاکسازی ۱۰ مرحله‌ای لایه‌بردار و لیفتینگ پوست' },
      { id: 'srv-104', title: 'کاشت و ژلیش ناخن با پودر روسی', category: 'nail', durationMinutes: 90, priceToman: 550000, desc: 'کاشت طبیعی با مواد ضدقارچ و استحکام‌بخشی ناخن' },
      { id: 'srv-105', title: 'میکاپ لایت اروپایی و گریم تخصصی', category: 'makeup', durationMinutes: 90, priceToman: 1800000, desc: 'میکاپ ضدآب با کرم‌های ۲۴ ساعته برند هدی بیوتی' }
    ],
    specialists: [
      { id: 'spec-1', name: 'سارا معتمدی', role: 'مستر هیرکات و استایل مو', exp: '۹ سال', rating: 4.9 },
      { id: 'spec-2', name: 'مهناز افشارنژاد', role: 'کالریست و متخصص رنگ و لایت', exp: '۱۲ سال', rating: 5.0 },
      { id: 'spec-3', name: 'نیلوفر کیانی', role: 'اسکین‌تراپیست و کارشناس پوست', exp: '۷ سال', rating: 4.8 }
    ]
  },
  {
    id: 'salon-2',
    name: 'آرایشگاه آقایان کات مستر (The Cut Master)',
    tagline: 'محیطی شیک و مردانه برای فید مدرن، ریش کلاسیک و اسپا صورت',
    city: 'تهران',
    district: 'سعادت‌آباد',
    address: 'تهران، سعادت‌آباد، میدان کاج، بلوار سرو غربی، مجتمع صدف، طبقه ۲',
    gender: 'male',
    rating: 4.8,
    reviewsCount: 142,
    priceLevel: 'متوسط',
    priceNumber: 350000,
    image: '/src/assets/images/salon_card_classicbarber_1792743871897.jpg',
    features: ['قهوه دمی رایگان', 'اینترنت پرسرعت', 'ماساژور سر و شانه', 'وسایل استریل یکبار مصرف'],
    workingHours: 'شنبه تا پنجشنبه ۱۰:۳۰ الی ۲۲:۰۰',
    phone: '۰۲۱-۸۸۲۲۵۵۴۰',
    services: [
      { id: 'srv-201', title: 'هیرکات کلاسیک / اسکین فید مدرن', category: 'barber', durationMinutes: 40, priceToman: 350000, desc: 'کوتاهی سر، شستشو با شامپوی تقویتی و حالت‌دهی مات' },
      { id: 'srv-202', title: 'پکیج فرم‌دهی ریش و حوله داغ', category: 'barber', durationMinutes: 30, priceToman: 220000, desc: 'آنکادر ریش با تیغ سنتی و اسپا حوله گرم آرامش‌بخش' },
      { id: 'srv-203', title: 'اسکراب و پاکسازی پوست آقایان', category: 'skin', durationMinutes: 45, priceToman: 480000, desc: 'حذف جوش‌های سرسیاه و ماسک خاک رس پاک‌کننده منافذ' },
      { id: 'srv-204', title: 'پکیج VIP داماد و گریم نامرئی', category: 'barber', durationMinutes: 120, priceToman: 1900000, desc: 'هیرکات، اصلاح ریش، فیشیال صورت و گریم نچرال' }
    ],
    specialists: [
      { id: 'spec-4', name: 'آرش شریفی', role: 'آرت دیزاینر و مستر باربر', exp: '۱۰ سال', rating: 4.9 },
      { id: 'spec-5', name: 'کیوان بهرامی', role: 'استایلیست فید و گریم داماد', exp: '۸ سال', rating: 4.8 }
    ]
  },
  {
    id: 'salon-3',
    name: 'استودیو زیبایی لومیر (Lumière Beauty)',
    tagline: 'فضایی آرامش‌بخش با نور طبیعی برای انواع خدمات احیا، رنگ و مژه',
    city: 'اصفهان',
    district: 'مرداویج',
    address: 'اصفهان، مرداویج، خیابان شیخ کلینی، نبش کوچه یاس، عمارت لومیر',
    gender: 'female',
    rating: 4.7,
    reviewsCount: 96,
    priceLevel: 'متوسط',
    priceNumber: 420000,
    image: '/src/assets/images/hero_beauty_salon_1792743870166.jpg',
    features: ['تست حساسیت رنگ رایگان', 'اتاق اختصاصی کودکان', 'مشاوره استایلینگ آنلاین'],
    workingHours: 'شنبه تا چهارشنبه ۹:۳۰ الی ۱۹:۳۰',
    phone: '۰۳۱-۳۶۶۹۲۲۱۱',
    services: [
      { id: 'srv-301', title: 'کراتین و پروتئین‌تراپی موهای آسیب‌دیده', category: 'haircut', durationMinutes: 150, priceToman: 1800000, desc: 'صافی و احیای ۱۰۰٪ تارهای سوخته با مواد کادیوو برزیل' },
      { id: 'srv-302', title: 'اکستنشن مژه والیوم و اسپایک', category: 'makeup', durationMinutes: 90, priceToman: 650000, desc: 'کاشت تار به تار با چسب گیاهی ضدحساسیت و مژه‌های ابریشمی' },
      { id: 'srv-303', title: 'رنگساژ مو و هیدروژن‌تراپی', category: 'color', durationMinutes: 60, priceToman: 850000, desc: 'تثبیت درخشش مو با تونر کره‌ای و ماسک مغذی' }
    ],
    specialists: [
      { id: 'spec-6', name: 'روژان کاظمی', role: 'متخصص تراپی و احیای مو', exp: '۶ سال', rating: 4.8 },
      { id: 'spec-7', name: 'مریم صالحی', role: 'لاش‌آرتیست بین‌المللی', exp: '۵ سال', rating: 4.7 }
    ]
  },
  {
    id: 'salon-4',
    name: 'خانه زیبایی شیراز پالاس (Shiraz Palace)',
    tagline: 'تلاقی هنر شیرازی و متدهای نوین استایلینگ مو و پوست',
    city: 'شیراز',
    district: 'قصرالدشت',
    address: 'شیراز، خیابان قصرالدشت، نبش کوچه ۴۸، مجتمع نگین، طبقه ۱',
    gender: 'female',
    rating: 4.9,
    reviewsCount: 118,
    priceLevel: 'لوکس',
    priceNumber: 500000,
    image: '/src/assets/images/salon_card_royalsalon_1792743870764.jpg',
    features: ['حیاط سبز و کافه اختصاصی', 'پکیج همراه عروس', 'مشاوره رنگ پوست فصلی'],
    workingHours: 'همه روزه از ۱۰:۰۰ الی ۲۰:۰۰',
    phone: '۰۷۱-۳۶۲۸۹۹۰۱',
    services: [
      { id: 'srv-401', title: 'شینیون مدرن اروپایی و بافت دیزاین', category: 'haircut', durationMinutes: 60, priceToman: 700000, desc: 'شینیون‌های خطی و باز بدون آسیب با ماندگاری بالا' },
      { id: 'srv-402', title: 'آمبره و سامبره کاراملی براق', category: 'color', durationMinutes: 160, priceToman: 2200000, desc: 'رنگ‌آمیزی سایه‌روشن گرم بدون زردی مو' },
      { id: 'srv-403', title: 'پدیکور اسپا و کوکوتراپی پا', category: 'nail', durationMinutes: 60, priceToman: 490000, desc: 'اسپا پا، پارافین‌تراپی و اسکراب نمک دریایی' }
    ],
    specialists: [
      { id: 'spec-8', name: 'درسا زندیه', role: 'استایلیست ارشد شینیون', exp: '۱۱ سال', rating: 4.9 }
    ]
  },
  {
    id: 'salon-5',
    name: 'سالن استایل باران (Baran Beauty Studio)',
    tagline: 'خدمات تخصصی با قیمت اقتصادی و شفافیت کامل در فاکتور',
    city: 'تهران',
    district: 'ونک',
    address: 'تهران، میدان ونک، خیابان حقانی، نرسیده به چهارراه جهان‌کودک، پلاک ۵۴',
    gender: 'female',
    rating: 4.6,
    reviewsCount: 79,
    priceLevel: 'اقتصادی',
    priceNumber: 280000,
    image: '/src/assets/images/hero_beauty_salon_1792743870166.jpg',
    features: ['تخفیف ویژه دانشجویی', 'نوبت‌دهی سریع', 'پک وسایل شخصی بهداشتی'],
    workingHours: 'شنبه تا پنجشنبه ۹:۰۰ الی ۱۹:۰۰',
    phone: '۰۲۱-۸۸۷۶۴۲۱۰',
    services: [
      { id: 'srv-501', title: 'کوتاهی و پیتاژ ژورنالی', category: 'haircut', durationMinutes: 35, priceToman: 280000, desc: 'مدل‌های باب، کرنلی، لیر با فرم‌دهی متناسب صورت' },
      { id: 'srv-502', title: 'رنگ ریشه و براشینگ مجلسی', category: 'color', durationMinutes: 60, priceToman: 450000, desc: 'پوشش کامل تارهای سفید با رنگ بدون سولفات' },
      { id: 'srv-503', title: 'ژلیش و لمینت ناخن طبیعی', category: 'nail', durationMinutes: 45, priceToman: 280000, desc: 'تقویت صدف ناخن با رابر بیس باکیفیت و ماندگاری بالا' }
    ],
    specialists: [
      { id: 'spec-9', name: 'ستاره رضایی', role: 'هیرکات کارشناس', exp: '۶ سال', rating: 4.7 }
    ]
  },
  {
    id: 'salon-6',
    name: 'باربرشاپ کلاسیک آرا (Ara Classic Barber)',
    tagline: 'پیرایش سنتی و ادکلن‌های دست‌ساز با تجربه اصیل آرایشگری',
    city: 'مشهد',
    district: 'احمدآباد',
    address: 'مشهد، بلوار احمدآباد، خیابان رضا، نبش رضای ۱۲، طبقه همکف',
    gender: 'male',
    rating: 4.8,
    reviewsCount: 88,
    priceLevel: 'اقتصادی',
    priceNumber: 200000,
    image: '/src/assets/images/salon_card_classicbarber_1792743871897.jpg',
    features: ['اصلاح سنتی با تیغ ژاپنی', 'ماساژور سر ارگونومیک', 'رزرو بی‌معطلی'],
    workingHours: 'شنبه تا جمعه ۱۰:۰۰ الی ۲۱:۳۰',
    phone: '۰۵۱-۳۸۴۳۹۰۱۱',
    services: [
      { id: 'srv-601', title: 'پیرایش مو و سشوار حرفه‌ای', category: 'barber', durationMinutes: 30, priceToman: 200000, desc: 'کوتاهی شیک مناسب محیط اداری و دانشگاهی' },
      { id: 'srv-602', title: 'پکیج اصلاح کامل صورت و ماسک زغال', category: 'barber', durationMinutes: 35, priceToman: 220000, desc: 'پاکسازی چربی پوست و فرم‌دهی تمیز خط ریش' }
    ],
    specialists: [
      { id: 'spec-10', name: 'امیرحسین پارسا', role: 'مستر باربر باسابقه', exp: '۹ سال', rating: 4.8 }
    ]
  }
];

// ------------------------------------------------------------------------------
// ۲. داده‌های شبیه‌ساز مو و رنگ‌ها (Virtual Try-on Data)
// ------------------------------------------------------------------------------
const HAIRSTYLES = [
  {
    id: 'hs-bob',
    name: 'باب شیک فرانسوی (French Bob)',
    category: 'women_short',
    gender: 'female',
    desc: 'کوتاهی جسورانه تا خط فک با چتری نازک فرانسوی',
    svg: `<svg viewBox="0 0 400 400" fill="currentColor" class="w-full h-full opacity-90 drop-shadow-lg">
      <path d="M120,160 C110,90 150,40 200,40 C250,40 290,90 280,160 C280,210 270,240 255,260 C250,240 248,190 245,150 C240,130 220,120 200,120 C180,120 160,130 155,150 C152,190 150,240 145,260 C130,240 120,210 120,160 Z" />
      <path d="M150,115 C170,105 230,105 250,115 C240,140 225,145 200,145 C175,145 160,140 150,115 Z" opacity="0.9" />
    </svg>`
  },
  {
    id: 'hs-waves',
    name: 'لایه‌بندی بلند با براشینگ حجیم (Layered Waves)',
    category: 'women_long',
    gender: 'female',
    desc: 'امواج طبیعی و رها روی شانه‌ها، حجم‌دهنده چهره',
    svg: `<svg viewBox="0 0 400 400" fill="currentColor" class="w-full h-full opacity-90 drop-shadow-xl">
      <path d="M110,180 C100,80 140,30 200,30 C260,30 300,80 290,180 C305,250 310,340 270,380 C250,330 260,260 250,200 C245,150 230,120 200,120 C170,120 155,150 150,200 C140,260 150,330 130,380 C90,340 95,250 110,180 Z" />
    </svg>`
  },
  {
    id: 'hs-curls',
    name: 'فرهای هالیوودی درخشان (Hollywood Curls)',
    category: 'women_curly',
    gender: 'female',
    desc: 'فرهای لوکس و پرپشت برای استایل مجلسی و جشن‌ها',
    svg: `<svg viewBox="0 0 400 400" fill="currentColor" class="w-full h-full opacity-90 drop-shadow-lg">
      <circle cx="130" cy="180" r="35" opacity="0.8"/>
      <circle cx="270" cy="180" r="35" opacity="0.8"/>
      <circle cx="115" cy="240" r="40" opacity="0.8"/>
      <circle cx="285" cy="240" r="40" opacity="0.8"/>
      <circle cx="120" cy="300" r="38" opacity="0.8"/>
      <circle cx="280" cy="300" r="38" opacity="0.8"/>
      <path d="M125,160 C110,80 150,35 200,35 C250,35 290,80 275,160 C250,130 150,130 125,160 Z" />
    </svg>`
  },
  {
    id: 'hs-pixie',
    name: 'پیکسی کراپ مدرن (Modern Pixie)',
    category: 'women_short',
    gender: 'female',
    desc: 'مدل بسیار کوتاه و جسورانه با چتری تکه‌تکه در پیشانی',
    svg: `<svg viewBox="0 0 400 400" fill="currentColor" class="w-full h-full opacity-90 drop-shadow-md">
      <path d="M135,160 C130,90 155,45 200,45 C245,45 270,90 265,160 C255,145 240,135 220,135 C205,145 195,145 180,135 C160,135 145,145 135,160 Z" />
    </svg>`
  },
  {
    id: 'hs-fade',
    name: 'اسکین فید مردانه و پومپادور (Fade Pompadour)',
    category: 'men_fade',
    gender: 'male',
    desc: 'سایه‌زنی شقیقه‌ها همراه با حجم موی رو به بالا در فرق سر',
    svg: `<svg viewBox="0 0 400 400" fill="currentColor" class="w-full h-full opacity-90 drop-shadow-md">
      <path d="M140,150 C130,120 145,50 200,40 C255,50 270,120 260,150 C255,130 235,110 200,105 C165,110 145,130 140,150 Z" />
    </svg>`
  },
  {
    id: 'hs-sidepart',
    name: 'کلاسیک کات ساید‌پارت (Classic Side Part)',
    category: 'men_classic',
    gender: 'male',
    desc: 'فرق کج تمیز و مرتب، مناسب موقعیت‌های رسمی و کاری',
    svg: `<svg viewBox="0 0 400 400" fill="currentColor" class="w-full h-full opacity-90 drop-shadow-md">
      <path d="M140,150 C135,100 155,55 200,50 C245,55 265,100 260,150 C250,135 230,120 195,120 C160,120 145,135 140,150 Z" />
    </svg>`
  }
];

const HAIR_COLORS = [
  { id: 'c-1', name: 'مشکی پرکلاغی', hex: '#1C1917', cssColor: '#1A1817' },
  { id: 'c-2', name: 'قهوه‌ای بلوطی', hex: '#58311B', cssColor: '#58311B' },
  { id: 'c-3', name: 'بلوند کاراملی', hex: '#C68B45', cssColor: '#C68B45' },
  { id: 'c-4', name: 'شرابی یاقوتی', hex: '#7E1F35', cssColor: '#7E1F35' },
  { id: 'c-5', name: 'پلاتینه دودی', hex: '#D1D5DB', cssColor: '#B0B5BD' },
  { id: 'c-6', name: 'رزگلد فانتزی', hex: '#D47A88', cssColor: '#D47A88' }
];

// ------------------------------------------------------------------------------
// ۳. پرونده تحلیلی و ۸ سوال ارزیابی ایده بالغ (Academic Business Portfolio)
// ------------------------------------------------------------------------------
const BUSINESS_QUESTIONS = [
  {
    qNum: '۱',
    title: 'تبیین مسئله و درد بازار (Pain Points)',
    question: 'کدام درد عمیق و حل‌نشده در بازار هدف شناسایی شده و چرا روش‌های فعلی ناکارآمدند؟',
    summary: 'رزرو خدمات زیبایی سنتی با عدم تقارن اطلاعاتی در قیمت، اتلاف وقت تلفنی و ترس از عدم تناسب مدل مو همراه است.',
    details: [
      'درد مشتری: نرخ‌های سلیقه‌ای و پیش‌بینی‌ناپذیر، اتلاف وقت برای هماهنگی نوبت، و پشیمانی پس از هیرکات به دلیل ندیدن نتیجه روی فرم صورت.',
      'درد سالن‌دار: نرخ کنسلی نوبت‌های دقیقه نودی (No-Show بین ۲۵٪ تا ۳۵٪) و اشغال وقت پرسنل برای پاسخ‌گویی به سوالات تکراری.'
    ],
    metric: 'نرخ کنسلی سنتی: ۳۰٪ | زمان هماهنگی تلفنی: ۱۴ دقیقه'
  },
  {
    qNum: '۲',
    title: 'اندازه بازار و مشتریان هدف (TAM, SAM, SOM)',
    question: 'حجم کل بازار قابل دسترس، بازار در دسترس و سهم بازار هدف‌گذاری‌شده در فاز نخست چقدر است؟',
    summary: 'TAM بازار زیبایی کلان‌شهرهای ایران ۵۵ همت در سال، SAM آنلاین ۵.۵ همت، و سهم هدف سال نخست (SOM) بالغ بر ۱۱۰ میلیارد تومان است.',
    details: [
      'پرسونای خریدار: جوانان و شاغلین ۱۸ تا ۳۸ سال علاقه‌مند به استایل و خدمات زیبایی که به دنبال صرفه‌جویی در وقت هستند.',
      'پرسونای سالن‌دار: سالن‌های زیبایی دارای حداقل ۳ صندلی فعال که مایلند ظرفیت‌های خالی وسط هفته را با تخفیف‌های هدفمند پر کنند.'
    ],
    metric: 'TAM: ۵۵ همت | SAM: ۵.۵ همت | هدف جذب: ۲۰ سالن تا پایان ماه ششم'
  },
  {
    qNum: '۳',
    title: 'ارزش پیشنهادی منحصربه‌فرد (UVP)',
    question: 'چرا مشتریان و آرایشگاه‌ها باید زیبانو را بر روش‌های مرسوم و پلتفرم‌های عمومی ترجیح دهند؟',
    summary: 'زیبانو فقط یک سایت رزرو نیست؛ بلکه با قابلیت «پرو مجازی استایل مو»، ریسک و تردید تغییر چهره را قبل از اعمال قیچی به صفر می‌رساند.',
    details: [
      'شفافیت مطلق در پیش‌فاکتور بدون هزینه‌های غافلگیرکننده در سالن.',
      'امکان مقایسه همزمان تخصص پرسنل، امتیازات مشتریان قبلی و فاصله مکانی در یک نگاه.'
    ],
    metric: 'افزایش نرخ تصمیم‌گیری مشتری با پرو مجازی: +۴۲٪'
  },
  {
    qNum: '۴',
    title: 'مدل درآمدی و جریان‌های نقدی (Revenue Model)',
    question: 'زیبانو از چه کانال‌هایی کسب درآمد می‌کند و پایداری مالی پلتفرم چگونه تضمین می‌شود؟',
    summary: 'مدل ترکیبی (Hybrid) شامل کمیسیون ۴ تا ۶ درصدی بر روی هر نوبت، اشتراک نرم‌افزاری پنل سالن‌ها (SaaS) و پلن پرمیوم شبیه‌ساز مو.',
    details: [
      '۱. کمیسیون تراکنش نوبت: ۴٪ الی ۶٪ از ارزش هر فاکتور موفق.',
      '۲. اشتراک B2B سالن‌ها: پنل مدیریت هوشمند و باشگاه مشتریان با آبونمان ماهیانه.',
      '۳. جایگاه‌های ویژه اسپانسری (Featured Listing) برای سالن‌های برتر در بالای نتایج جستجو.'
    ],
    metric: 'دوره بازگشت سرمایه تخمینی (BEP): ۱۴ ماه'
  },
  {
    qNum: '۵',
    title: 'مزیت رقابتی و فناوری (Competitive Moat)',
    question: 'چه مانع رقابتی مانع از کپی‌برداری سریع رقبا می‌شود؟',
    summary: 'خندق فناوری زیبانو ماژول بومی‌سازی‌شده پرو مجازی مدل مو و هوش مصنوعی تطبیق چهره با آرشیو استایل‌های متناسب سلیقه ایرانی است.',
    details: [
      'پلتفرم‌های عمومی نوبت‌دهی (سایت‌های پزشکی یا دایرکتوری‌ها) فاقد نگاه عمودی و تجربه غوطه‌ورکننده برای مشتریان زیبایی هستند.',
      'اثر شبکه‌ای دوطرفه (Network Effects): با افزایش سالن‌ها، ارزش سامانه برای کاربران رشد تصاعدی می‌یابد.'
    ],
    metric: 'افزایش زمان حضور کاربر در سایت (Dwell Time): ۳.۲ برابر'
  },
  {
    qNum: '۶',
    title: 'استراتژی بازاریابی و ورود به بازار (GTM & CAC)',
    question: 'چگونه بر چالش مرغ و تخم‌مرغ در ابتدای راه‌اندازی غلبه می‌کنیم؟',
    summary: 'استراتژی جغرافیامحور فشرده (Hyper-local): تمرکز اولیه بر مناطق ۱ و ۲ تهران و ارائه شبیه‌ساز مو به عنوان قلاب ویروسی شبکه‌های اجتماعی.',
    details: [
      'سمت مشتری: کمپین‌های اینستاگرامی با تگ "قبل و بعد مویت را ببین" و کد تخفیف دانشجویی ZIBANO20.',
      'سمت سالن‌ها: ثبت‌نام با ۳ ماه اشتراک رایگان بدون کمیسیون و ارائه خدمات عکاسی دکور سالن.'
    ],
    metric: 'نسبت LTV به CAC برآوردشده: ۵.۴'
  },
  {
    qNum: '۷',
    title: 'تحلیل رقبا و ماتریس جایگاه‌یابی (Competitive Matrix)',
    question: 'رقبای فعلی کدامند و زیبانو چه فضای خالی در بازار را تصاحب می‌کند؟',
    summary: 'رقبای فعلی شامل دایرکتوری‌های سنتی بدون رزرو، صفحات اینستاگرامی و سایت‌های تخفیف گروهی هستند. زیبانو در راس ماتریس کیفیت و فناوری قرار دارد.',
    details: [
      'صفحات اینستاگرام: ابزار نمایش هستند اما بدون پرداخت امن و تقویم نوبت‌دهی مستقل عمل می‌کنند.',
      'سایت‌های تخفیفان و نت‌برگ: هویت تخفیف‌محور دارند که سالن‌های لوکس از حضور در آنها به دلیل افت ارزش برند پرهیز می‌کنند.'
    ],
    metric: 'پوشش زنجیره ارزش کامل: ۱۰۰٪ در زیبانو'
  },
  {
    qNum: '۸',
    title: 'ریسک‌های کلیدی و برنامه کاهش (Risk Mitigation)',
    question: 'مهم‌ترین تهدیدات حقوقی، عملیاتی و رفتاری چیست و چه راهکاری تدوین شده است؟',
    summary: 'ریسک دور زدن پلتفرم پس از نوبت اول، مقاومت منشی‌ها در استفاده از نرم‌افزار، و حفظ حریم خصوصی تصاویر ارسالی کاربران.',
    details: [
      'کاهش ریسک دورزدن: ارائه امتیازات کش‌بک، گارانتی بازگشت وجه در صورت نارضایتی، و خدمات وفاداری درون‌برنامه‌ای.',
      'حفظ حریم خصوصی: پردازش سمت کلاینت (Client-Side) تصاویر در شبیه‌ساز بدون ذخیره‌سازی چهره کاربر در سرور.'
    ],
    metric: 'گارانتی ۱۰۰٪ تضمین رضایت در خدمات برگزیده'
  }
];

// ------------------------------------------------------------------------------
// ۴. وضعیت برنامه (Application State)
// ------------------------------------------------------------------------------
const state = {
  salons: [...SALONS_DATA],
  filteredSalons: [...SALONS_DATA],
  selectedCategory: 'all',
  selectedCity: 'all',
  searchKeyword: '',
  sortBy: 'recommended',
  
  // مقایسه آرایشگاه‌ها
  comparisonList: [],
  
  // شبیه‌ساز مو
  tryon: {
    modelImage: '/src/assets/images/tryon_model_portrait_1792743871656.jpg',
    selectedHairstyle: HAIRSTYLES[0],
    selectedColor: HAIR_COLORS[2], // بلوند کاراملی
    scale: 100,
    offsetY: 0,
    rotation: 0,
    opacity: 90,
    showOriginal: false
  },
  
  // سالن در حال رزرو
  activeBookingSalon: null,
  selectedService: null,
  selectedSpecialist: null,
  selectedDate: 'امروز (شنبه)',
  selectedTime: '۱۶:۰۰',
  appliedDiscount: 0 // percentage
};

// ------------------------------------------------------------------------------
// ۵. مدیریت LocalStorage نوبت‌ها
// ------------------------------------------------------------------------------
const STORAGE_KEY = 'zibano_appointments';

function getSavedAppointments() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Error reading localStorage', e);
    return [];
  }
}

function saveAppointment(appt) {
  const current = getSavedAppointments();
  current.unshift(appt);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  updateAppointmentCounter();
}

function cancelAppointment(id) {
  let current = getSavedAppointments();
  current = current.filter(item => item.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  updateAppointmentCounter();
  renderAppointmentsList();
  showToast('نوبت با موفقیت لغو شد.', 'info');
}

function updateAppointmentCounter() {
  const count = getSavedAppointments().length;
  const badgeEl = document.getElementById('nav-appointments-badge');
  if (badgeEl) {
    if (count > 0) {
      badgeEl.textContent = count;
      badgeEl.classList.remove('hidden');
    } else {
      badgeEl.classList.add('hidden');
    }
  }
}

// ------------------------------------------------------------------------------
// ۶. موتور رندرینگ رابط کاربری (UI Renderers)
// ------------------------------------------------------------------------------

// تبدیل عدد به تومان با جداکننده هزارگان
function formatPrice(num) {
  return Number(num).toLocaleString('fa-IR') + ' تومان';
}

// رندر کارت‌های آرایشگاه
function renderSalons() {
  const container = document.getElementById('salons-grid');
  const countLabel = document.getElementById('salons-count-label');
  if (!container) return;

  if (countLabel) {
    countLabel.textContent = `${state.filteredSalons.length} سالن یافت شد`;
  }

  if (state.filteredSalons.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center bg-white rounded-2xl border border-stone-200">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="text-lg font-bold text-stone-800 mb-1">نتیجه‌ای با این مشخصات یافت نشد</h3>
        <p class="text-sm text-stone-500 max-w-md mx-auto mb-4">لطفاً کلیدواژه جستجو را تغییر دهید یا فیلتر دسته‌بندی و شهر را روی حالت «همه» بگذارید.</p>
        <button onclick="resetFilters()" class="px-5 py-2 text-sm bg-purple-700 text-white rounded-xl hover:bg-purple-800 transition">
          پاکسازی فیلترها
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = state.filteredSalons.map(salon => {
    const isCompared = state.comparisonList.some(s => s.id === salon.id);
    const servicesPreview = salon.services.slice(0, 3).map(s => s.title).join(' · ');

    return `
      <div class="card-luxury rounded-2xl flex flex-col justify-between overflow-hidden">
        <div>
          <!-- تصویر کارت -->
          <div class="relative h-48 w-full img-cover-zoom bg-stone-100">
            <img 
              src="${salon.image}" 
              alt="${salon.name}" 
              class="w-full h-full object-cover"
              loading="lazy"
              onerror="this.src='/src/assets/images/hero_beauty_salon_1792743870166.jpg'"
            />
            <div class="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold text-stone-800 shadow-sm flex items-center gap-1">
              <span class="text-amber-500">★</span>
              <span>${salon.rating}</span>
              <span class="text-stone-400 font-normal">(${salon.reviewsCount})</span>
            </div>
            <div class="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-medium text-white shadow-sm">
              ${salon.priceLevel}
            </div>
            <div class="absolute bottom-2 right-3 text-xs text-white drop-shadow-md">
              <span>${salon.city} · ${salon.district}</span>
            </div>
          </div>

          <!-- بدنه کارت -->
          <div class="p-5">
            <h3 class="text-base font-bold text-stone-900 mb-1 hover:text-purple-700 transition">
              ${salon.name}
            </h3>
            <p class="text-xs text-stone-500 line-clamp-1 mb-3">
              ${salon.tagline}
            </p>

            <!-- خدمات نمونه -->
            <div class="text-xs text-stone-600 bg-stone-50 p-2.5 rounded-xl mb-4 border border-stone-100/80">
              <div class="font-semibold text-stone-700 mb-1">خدمات شاخص:</div>
              <div class="truncate text-stone-500">${servicesPreview}</div>
            </div>

            <!-- ویژگی‌ها -->
            <div class="flex items-center gap-2 text-[11px] text-stone-500 flex-wrap mb-4">
              ${salon.features.slice(0, 2).map(f => `<span>✓ ${f}</span>`).join('<span class="text-stone-300">|</span>')}
            </div>
          </div>
        </div>

        <!-- فوتر کارت و دکمه‌ها -->
        <div class="p-5 pt-0 border-t border-stone-100 mt-2 flex items-center justify-between gap-3">
          <div>
            <div class="text-[11px] text-stone-400">شروع قیمت از</div>
            <div class="text-sm font-bold text-purple-900">${formatPrice(salon.priceNumber)}</div>
          </div>

          <div class="flex items-center gap-2">
            <button 
              onclick="toggleCompare('${salon.id}')" 
              title="افزودن به لیست مقایسه"
              class="p-2.5 rounded-xl border ${isCompared ? 'bg-purple-100 border-purple-400 text-purple-700' : 'border-stone-200 text-stone-500 hover:bg-stone-50'} text-xs transition cursor-pointer"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </button>
            <button 
              onclick="openBookingModal('${salon.id}')"
              class="px-4 py-2 text-xs font-bold text-white bg-gradient-to-l from-rose-600 to-purple-700 rounded-xl hover:from-rose-700 hover:to-purple-800 transition shadow-sm cursor-pointer"
            >
              رزرو نوبت
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// اعمال فیلترها و مرتب‌سازی
function applyFilters() {
  let list = [...SALONS_DATA];

  // فیلتر کلمه کلیدی
  if (state.searchKeyword.trim()) {
    const kw = state.searchKeyword.toLowerCase().trim();
    list = list.filter(s => 
      s.name.toLowerCase().includes(kw) || 
      s.tagline.toLowerCase().includes(kw) ||
      s.district.toLowerCase().includes(kw) ||
      s.services.some(srv => srv.title.toLowerCase().includes(kw) || srv.desc.toLowerCase().includes(kw))
    );
  }

  // فیلتر دسته‌بندی
  if (state.selectedCategory !== 'all') {
    list = list.filter(s => s.services.some(srv => srv.category === state.selectedCategory));
  }

  // فیلتر شهر
  if (state.selectedCity !== 'all') {
    list = list.filter(s => s.city === state.selectedCity);
  }

  // مرتب‌سازی
  if (state.sortBy === 'rating') {
    list.sort((a, b) => b.rating - a.rating);
  } else if (state.sortBy === 'price_asc') {
    list.sort((a, b) => a.priceNumber - b.priceNumber);
  } else if (state.sortBy === 'price_desc') {
    list.sort((a, b) => b.priceNumber - a.priceNumber);
  } else if (state.sortBy === 'reviews') {
    list.sort((a, b) => b.reviewsCount - a.reviewsCount);
  }

  state.filteredSalons = list;
  renderSalons();
}

function resetFilters() {
  state.searchKeyword = '';
  state.selectedCategory = 'all';
  state.selectedCity = 'all';
  state.sortBy = 'recommended';
  
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  
  const citySelect = document.getElementById('filter-city');
  if (citySelect) citySelect.value = 'all';

  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) sortSelect.value = 'recommended';

  updateCategoryTabsUI();
  applyFilters();
}

function updateCategoryTabsUI() {
  document.querySelectorAll('.cat-btn').forEach(btn => {
    const cat = btn.getAttribute('data-cat');
    if (cat === state.selectedCategory) {
      btn.className = 'cat-btn tab-active px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap cursor-pointer transition';
    } else {
      btn.className = 'cat-btn bg-stone-100 hover:bg-stone-200 text-stone-700 px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap cursor-pointer transition';
    }
  });
}

// ------------------------------------------------------------------------------
// ۷. مقایسه آرایشگاه‌ها (Salon Comparison Feature)
// ------------------------------------------------------------------------------
function toggleCompare(salonId) {
  const existingIdx = state.comparisonList.findIndex(s => s.id === salonId);
  if (existingIdx >= 0) {
    state.comparisonList.splice(existingIdx, 1);
    showToast('از لیست مقایسه حذف شد.', 'info');
  } else {
    if (state.comparisonList.length >= 3) {
      showToast('حداکثر می‌توانید ۳ آرایشگاه را همزمان مقایسه کنید.', 'error');
      return;
    }
    const salon = SALONS_DATA.find(s => s.id === salonId);
    if (salon) {
      state.comparisonList.push(salon);
      showToast(`«${salon.name}» به لیست مقایسه اضافه شد.`, 'success');
    }
  }

  updateComparisonBar();
  renderSalons();
}

function updateComparisonBar() {
  const bar = document.getElementById('comparison-floating-bar');
  const countEl = document.getElementById('compare-count');
  if (!bar) return;

  if (state.comparisonList.length > 0) {
    bar.classList.remove('hidden');
    bar.classList.add('flex');
    if (countEl) countEl.textContent = state.comparisonList.length;
  } else {
    bar.classList.add('hidden');
    bar.classList.remove('flex');
  }
}

function openComparisonModal() {
  if (state.comparisonList.length === 0) return;
  const modal = document.getElementById('comparison-modal');
  const content = document.getElementById('comparison-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="grid grid-cols-${state.comparisonList.length} gap-4 overflow-x-auto min-w-[600px]">
      ${state.comparisonList.map(s => `
        <div class="bg-stone-50 rounded-2xl p-4 border border-stone-200 flex flex-col justify-between">
          <div>
            <img src="${s.image}" class="w-full h-32 object-cover rounded-xl mb-3" />
            <h4 class="font-bold text-stone-900 text-sm mb-1">${s.name}</h4>
            <div class="text-xs text-stone-500 mb-2">${s.city} · ${s.district}</div>
            
            <div class="border-t border-stone-200 pt-2 mb-2 text-xs">
              <span class="text-stone-400">امتیاز:</span>
              <span class="font-bold text-amber-600">${s.rating} ★ (${s.reviewsCount} نظر)</span>
            </div>

            <div class="border-t border-stone-200 pt-2 mb-2 text-xs">
              <span class="text-stone-400">سطح قیمتی:</span>
              <span class="font-bold text-stone-800">${s.priceLevel}</span>
            </div>

            <div class="border-t border-stone-200 pt-2 mb-2 text-xs">
              <span class="text-stone-400">ساعت کاری:</span>
              <div class="font-medium text-stone-700">${s.workingHours}</div>
            </div>

            <div class="border-t border-stone-200 pt-2 mb-3 text-xs">
              <span class="text-stone-400">ویژگی‌ها:</span>
              <ul class="mt-1 space-y-1 text-stone-600">
                ${s.features.map(f => `<li>• ${f}</li>`).join('')}
              </ul>
            </div>
          </div>

          <button 
            onclick="closeComparisonModal(); openBookingModal('${s.id}')"
            class="w-full py-2 bg-purple-700 hover:bg-purple-800 text-white rounded-xl text-xs font-bold transition"
          >
            رزرو این سالن
          </button>
        </div>
      `).join('')}
    </div>
  `;

  modal.classList.remove('hidden');
}

function closeComparisonModal() {
  const modal = document.getElementById('comparison-modal');
  if (modal) modal.classList.add('hidden');
}

// ------------------------------------------------------------------------------
// ۸. مدال رزرو نوبت (Online Booking Flow)
// ------------------------------------------------------------------------------
function openBookingModal(salonId) {
  const salon = SALONS_DATA.find(s => s.id === salonId);
  if (!salon) return;

  state.activeBookingSalon = salon;
  state.selectedService = salon.services[0];
  state.selectedSpecialist = salon.specialists[0];
  state.appliedDiscount = 0;

  const modal = document.getElementById('booking-modal');
  if (!modal) return;

  // مقداردهی هدر سالن
  document.getElementById('booking-salon-name').textContent = salon.name;
  document.getElementById('booking-salon-address').textContent = salon.address;

  // رندر لیست خدمات
  renderBookingServicesList();

  // رندر لیست متخصصین
  renderBookingSpecialistsList();

  // رندر تاریخ‌های شمسی
  renderBookingDateSlots();

  // رندر ساعت‌ها
  renderBookingTimeSlots();

  // ریست فیلدهای فرم
  document.getElementById('client-name').value = '';
  document.getElementById('client-phone').value = '';
  document.getElementById('client-notes').value = '';
  document.getElementById('coupon-input').value = '';
  document.getElementById('coupon-message').textContent = '';

  updateBookingPriceSummary();
  modal.classList.remove('hidden');
}

function closeBookingModal() {
  const modal = document.getElementById('booking-modal');
  if (modal) modal.classList.add('hidden');
}

function renderBookingServicesList() {
  const container = document.getElementById('booking-services-list');
  if (!container || !state.activeBookingSalon) return;

  container.innerHTML = state.activeBookingSalon.services.map(srv => {
    const isSelected = state.selectedService && state.selectedService.id === srv.id;
    return `
      <label class="flex items-center justify-between p-3 rounded-xl border cursor-pointer transition ${isSelected ? 'border-purple-600 bg-purple-50/60' : 'border-stone-200 hover:bg-stone-50'}">
        <div class="flex items-center gap-3">
          <input 
            type="radio" 
            name="booking_service" 
            value="${srv.id}" 
            ${isSelected ? 'checked' : ''} 
            onchange="selectBookingService('${srv.id}')"
            class="text-purple-600 focus:ring-purple-500"
          />
          <div>
            <div class="text-xs font-bold text-stone-900">${srv.title}</div>
            <div class="text-[11px] text-stone-500">${srv.durationMinutes} دقیقه · ${srv.desc}</div>
          </div>
        </div>
        <div class="text-xs font-bold text-purple-900 whitespace-nowrap">
          ${formatPrice(srv.priceToman)}
        </div>
      </label>
    `;
  }).join('');
}

function selectBookingService(srvId) {
  state.selectedService = state.activeBookingSalon.services.find(s => s.id === srvId);
  renderBookingServicesList();
  updateBookingPriceSummary();
}

function renderBookingSpecialistsList() {
  const container = document.getElementById('booking-specialists-list');
  if (!container || !state.activeBookingSalon) return;

  container.innerHTML = state.activeBookingSalon.specialists.map(spec => {
    const isSelected = state.selectedSpecialist && state.selectedSpecialist.id === spec.id;
    return `
      <button 
        type="button" 
        onclick="selectBookingSpecialist('${spec.id}')"
        class="flex items-center gap-2.5 p-2.5 rounded-xl border text-right transition cursor-pointer ${isSelected ? 'border-purple-600 bg-purple-50/70 text-purple-950 font-semibold' : 'border-stone-200 hover:bg-stone-50 text-stone-700'}"
      >
        <div class="w-8 h-8 rounded-full bg-purple-200 text-purple-900 flex items-center justify-center font-bold text-xs shrink-0">
          ${spec.name.charAt(0)}
        </div>
        <div class="truncate">
          <div class="text-xs font-bold">${spec.name}</div>
          <div class="text-[10px] text-stone-500">${spec.role} (${spec.exp})</div>
        </div>
      </button>
    `;
  }).join('');
}

function selectBookingSpecialist(specId) {
  state.selectedSpecialist = state.activeBookingSalon.specialists.find(s => s.id === specId);
  renderBookingSpecialistsList();
}

function renderBookingDateSlots() {
  const container = document.getElementById('booking-date-slots');
  if (!container) return;

  const days = [
    { label: 'امروز', date: 'شنبه ۵ آبان' },
    { label: 'فردا', date: 'یکشنبه ۶ آبان' },
    { label: 'دوشنبه', date: '۷ آبان' },
    { label: 'سه‌شنبه', date: '۸ آبان' },
    { label: 'چهارشنبه', date: '۹ آبان' },
    { label: 'پنجشنبه', date: '۱۰ آبان' }
  ];

  container.innerHTML = days.map((d, idx) => {
    const val = `${d.label} (${d.date})`;
    const isSelected = state.selectedDate === val || (idx === 0 && !state.selectedDate);
    return `
      <button 
        type="button" 
        onclick="selectBookingDate('${val}')"
        class="px-3 py-2 rounded-xl text-xs border text-center transition cursor-pointer whitespace-nowrap ${isSelected ? 'bg-purple-700 text-white border-purple-700 font-bold shadow-sm' : 'border-stone-200 text-stone-700 hover:bg-stone-50'}"
      >
        <div>${d.label}</div>
        <div class="text-[10px] opacity-80">${d.date}</div>
      </button>
    `;
  }).join('');
}

function selectBookingDate(dateStr) {
  state.selectedDate = dateStr;
  renderBookingDateSlots();
}

function renderBookingTimeSlots() {
  const container = document.getElementById('booking-time-slots');
  if (!container) return;

  const times = ['۱۰:۰۰', '۱۱:۳۰', '۱۴:۰۰', '۱۵:۳۰', '۱۷:۰۰', '۱۸:۳۰', '۲۰:۰۰'];

  container.innerHTML = times.map(t => {
    const isSelected = state.selectedTime === t;
    return `
      <button 
        type="button" 
        onclick="selectBookingTime('${t}')"
        class="py-1.5 px-3 rounded-lg text-xs border text-center transition cursor-pointer ${isSelected ? 'bg-rose-600 text-white border-rose-600 font-bold' : 'border-stone-200 text-stone-700 hover:bg-stone-50'}"
      >
        ${t}
      </button>
    `;
  }).join('');
}

function selectBookingTime(timeStr) {
  state.selectedTime = timeStr;
  renderBookingTimeSlots();
}

function applyCouponCode() {
  const code = document.getElementById('coupon-input').value.trim().toUpperCase();
  const msg = document.getElementById('coupon-message');
  
  if (code === 'ZIBANO20') {
    state.appliedDiscount = 0.20; // 20%
    msg.textContent = 'کد تخفیف ۲۰٪ دانشجویی با موفقیت اعمال شد!';
    msg.className = 'text-xs text-emerald-600 font-medium mt-1';
  } else if (code === 'VIP50') {
    state.appliedDiscount = 0.50; // 50%
    msg.textContent = 'کد تخفیف ۵۰٪ VIP ویژه جشنواره افتتاحیه اعمال شد!';
    msg.className = 'text-xs text-emerald-600 font-medium mt-1';
  } else {
    state.appliedDiscount = 0;
    msg.textContent = 'کد تخفیف نامعتبر است. از کد ZIBANO20 استفاده کنید.';
    msg.className = 'text-xs text-rose-500 font-medium mt-1';
  }

  updateBookingPriceSummary();
}

function updateBookingPriceSummary() {
  if (!state.selectedService) return;
  const basePrice = state.selectedService.priceToman;
  const discountAmount = Math.round(basePrice * state.appliedDiscount);
  const finalPrice = basePrice - discountAmount;

  document.getElementById('summary-base-price').textContent = formatPrice(basePrice);
  document.getElementById('summary-discount').textContent = discountAmount > 0 ? `-${formatPrice(discountAmount)}` : '۰ تومان';
  document.getElementById('summary-final-price').textContent = formatPrice(finalPrice);
}

// ارسال فرم و ثبت در LocalStorage
function submitBookingForm(e) {
  e.preventDefault();

  const name = document.getElementById('client-name').value.trim();
  const phone = document.getElementById('client-phone').value.trim();
  const notes = document.getElementById('client-notes').value.trim();

  // اعتبارسنجی
  if (name.length < 3) {
    showToast('لطفاً نام و نام‌خانوادگی معتبر وارد نمایید.', 'error');
    return;
  }

  const phoneRegex = /^09[0-9]{9}$/;
  if (!phoneRegex.test(phone)) {
    showToast('شماره موبایل باید ۱۱ رقمی و با ۰۹ شروع شود.', 'error');
    return;
  }

  const trackingCode = 'ZB-' + Math.floor(10000 + Math.random() * 90000);
  const basePrice = state.selectedService.priceToman;
  const discountAmount = Math.round(basePrice * state.appliedDiscount);
  const finalPrice = basePrice - discountAmount;

  const newAppointment = {
    id: 'appt-' + Date.now(),
    trackingCode,
    salonId: state.activeBookingSalon.id,
    salonName: state.activeBookingSalon.name,
    salonAddress: state.activeBookingSalon.address,
    salonPhone: state.activeBookingSalon.phone,
    serviceTitle: state.selectedService.title,
    serviceDuration: state.selectedService.durationMinutes,
    specialistName: state.selectedSpecialist.name,
    date: state.selectedDate,
    time: state.selectedTime,
    clientName: name,
    clientPhone: phone,
    notes: notes,
    price: finalPrice,
    createdAt: new Date().toLocaleDateString('fa-IR')
  };

  saveAppointment(newAppointment);
  closeBookingModal();
  openSuccessReceiptModal(newAppointment);
}

function openSuccessReceiptModal(appt) {
  const modal = document.getElementById('receipt-modal');
  if (!modal) return;

  document.getElementById('receipt-tracking').textContent = appt.trackingCode;
  document.getElementById('receipt-salon').textContent = appt.salonName;
  document.getElementById('receipt-service').textContent = `${appt.serviceTitle} (${appt.specialistName})`;
  document.getElementById('receipt-datetime').textContent = `${appt.date} - ساعت ${appt.time}`;
  document.getElementById('receipt-client').textContent = `${appt.clientName} (${appt.clientPhone})`;
  document.getElementById('receipt-price').textContent = formatPrice(appt.price);
  document.getElementById('receipt-address').textContent = appt.salonAddress;

  modal.classList.remove('hidden');
}

function closeReceiptModal() {
  const modal = document.getElementById('receipt-modal');
  if (modal) modal.classList.add('hidden');
}

// ------------------------------------------------------------------------------
// ۹. مدیریت نوبت‌های من (My Appointments Drawer)
// ------------------------------------------------------------------------------
function openAppointmentsModal() {
  const modal = document.getElementById('appointments-modal');
  if (!modal) return;
  renderAppointmentsList();
  modal.classList.remove('hidden');
}

function closeAppointmentsModal() {
  const modal = document.getElementById('appointments-modal');
  if (modal) modal.classList.add('hidden');
}

function renderAppointmentsList() {
  const container = document.getElementById('appointments-list-container');
  if (!container) return;

  const appts = getSavedAppointments();

  if (appts.length === 0) {
    container.innerHTML = `
      <div class="py-12 text-center">
        <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <p class="text-sm font-semibold text-stone-700">شما هنوز هیچ نوبتی ثبت نکرده‌اید.</p>
        <p class="text-xs text-stone-400 mt-1">با انتخاب یکی از سالن‌ها می‌توانید به آسانی نوبت خود را رزرو کنید.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = appts.map(a => `
    <div class="bg-stone-50 rounded-2xl p-4 border border-stone-200 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-bold text-stone-900">${a.salonName}</span>
          <span class="text-[11px] font-mono bg-purple-100 text-purple-800 px-2 py-0.5 rounded-md font-bold">
            ${a.trackingCode}
          </span>
        </div>
        
        <div class="text-xs text-stone-600 mb-1">
          <span class="font-medium text-stone-800">${a.serviceTitle}</span>
          <span class="text-stone-400"> با </span>
          <span>${a.specialistName}</span>
        </div>

        <div class="text-xs text-stone-500 mb-2 flex items-center gap-2">
          <span>📅 ${a.date}</span>
          <span>⏰ ساعت ${a.time}</span>
        </div>

        <div class="text-[11px] text-stone-400 truncate mb-3">
          📍 ${a.salonAddress}
        </div>
      </div>

      <div class="border-t border-stone-200 pt-3 flex items-center justify-between">
        <span class="text-xs font-bold text-purple-900">${formatPrice(a.price)}</span>
        <button 
          onclick="cancelAppointment('${a.id}')"
          class="text-xs text-rose-600 hover:text-rose-800 font-medium transition cursor-pointer"
        >
          لغو نوبت
        </button>
      </div>
    </div>
  `).join('');
}

// ------------------------------------------------------------------------------
// ۱۰. شبیه‌ساز زیبایی: پرو مجازی مدل مو (Beauty Simulator)
// ------------------------------------------------------------------------------
function openSimulatorModal() {
  const modal = document.getElementById('simulator-modal');
  if (!modal) return;
  renderHairstylesSelector();
  renderColorSwatches();
  updateTryonCanvas();
  modal.classList.remove('hidden');
}

function closeSimulatorModal() {
  const modal = document.getElementById('simulator-modal');
  if (modal) modal.classList.add('hidden');
}

function renderHairstylesSelector() {
  const container = document.getElementById('hairstyles-list');
  if (!container) return;

  container.innerHTML = HAIRSTYLES.map(hs => {
    const isSelected = state.tryon.selectedHairstyle.id === hs.id;
    return `
      <button 
        type="button" 
        onclick="selectHairstyle('${hs.id}')"
        class="p-2 rounded-xl border text-right transition cursor-pointer ${isSelected ? 'border-purple-600 bg-purple-50 text-purple-900 font-bold shadow-sm' : 'border-stone-200 hover:bg-stone-50 text-stone-700'}"
      >
        <div class="text-xs truncate">${hs.name}</div>
        <div class="text-[10px] text-stone-400 truncate">${hs.desc}</div>
      </button>
    `;
  }).join('');
}

function selectHairstyle(hsId) {
  state.tryon.selectedHairstyle = HAIRSTYLES.find(h => h.id === hsId);
  renderHairstylesSelector();
  updateTryonCanvas();
}

function renderColorSwatches() {
  const container = document.getElementById('colors-swatches');
  if (!container) return;

  container.innerHTML = HAIR_COLORS.map(c => {
    const isSelected = state.tryon.selectedColor.id === c.id;
    return `
      <button 
        type="button"
        title="${c.name}"
        onclick="selectHairColor('${c.id}')"
        class="w-7 h-7 rounded-full transition-transform cursor-pointer border-2 ${isSelected ? 'border-purple-700 scale-110 shadow-md ring-2 ring-purple-300' : 'border-white hover:scale-105'}"
        style="background-color: ${c.hex};"
      >
      </button>
    `;
  }).join('');
}

function selectHairColor(colorId) {
  state.tryon.selectedColor = HAIR_COLORS.find(c => c.id === colorId);
  renderColorSwatches();
  updateTryonCanvas();
}

function updateTryonCanvas() {
  const hairLayer = document.getElementById('hair-overlay-layer');
  const modelImg = document.getElementById('tryon-model-image');
  if (!hairLayer || !modelImg) return;

  modelImg.src = state.tryon.modelImage;

  if (state.tryon.showOriginal) {
    hairLayer.style.display = 'none';
  } else {
    hairLayer.style.display = 'block';
    hairLayer.innerHTML = state.tryon.selectedHairstyle.svg;
    hairLayer.style.color = state.tryon.selectedColor.cssColor;
    hairLayer.style.transform = `translateY(${state.tryon.offsetY}px) scale(${state.tryon.scale / 100}) rotate(${state.tryon.rotation}deg)`;
    hairLayer.style.opacity = state.tryon.opacity / 100;
  }
}

// آپلود عکس شخصی
function handlePhotoUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(event) {
    state.tryon.modelImage = event.target.result;
    updateTryonCanvas();
    showToast('تصویر شما بارگذاری شد. اکنون می‌توانید مدل‌ها را تست کنید.', 'success');
  };
  reader.readAsDataURL(file);
}

function resetTryonModel() {
  state.tryon.modelImage = '/src/assets/images/tryon_model_portrait_1792743871656.jpg';
  state.tryon.scale = 100;
  state.tryon.offsetY = 0;
  state.tryon.rotation = 0;
  state.tryon.opacity = 90;
  state.tryon.showOriginal = false;
  
  document.getElementById('slider-scale').value = 100;
  document.getElementById('slider-offset-y').value = 0;
  document.getElementById('slider-rotation').value = 0;
  
  updateTryonCanvas();
}

function toggleBeforeAfter(showOrig) {
  state.tryon.showOriginal = showOrig;
  updateTryonCanvas();
}

// ------------------------------------------------------------------------------
// ۱۱. پرونده تحلیلی درس تجارت الکترونیک (Academic Portfolio Section)
// ------------------------------------------------------------------------------
function renderAcademicQuestions() {
  const container = document.getElementById('academic-questions-container');
  if (!container) return;

  container.innerHTML = BUSINESS_QUESTIONS.map(q => `
    <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden transition-all shadow-xs">
      <button 
        type="button" 
        onclick="toggleQuestionAccordion('${q.qNum}')"
        class="w-full p-5 text-right flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50 transition"
      >
        <div class="flex items-center gap-3">
          <span class="w-8 h-8 rounded-full bg-purple-100 text-purple-900 font-bold text-xs flex items-center justify-center shrink-0">
            ${q.qNum}
          </span>
          <div>
            <h4 class="text-sm font-bold text-stone-900">${q.title}</h4>
            <p class="text-xs text-stone-500 mt-0.5">${q.question}</p>
          </div>
        </div>
        <div id="q-icon-${q.qNum}" class="text-stone-400 transform transition-transform">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <div id="q-content-${q.qNum}" class="hidden p-5 pt-0 border-t border-stone-100 text-xs text-stone-700 bg-stone-50/50 space-y-3">
        <div class="p-3 bg-purple-50 rounded-xl text-purple-900 font-semibold border border-purple-100">
          💡 خلاصه پاسخ استراتژیک: ${q.summary}
        </div>
        <div class="space-y-1.5 text-stone-600">
          ${q.details.map(d => `<p>• ${d}</p>`).join('')}
        </div>
        <div class="text-[11px] font-mono text-stone-500 bg-white p-2 rounded-lg border border-stone-200 inline-block">
          📊 سنجه و شواهد: ${q.metric}
        </div>
      </div>
    </div>
  `).join('');
}

function toggleQuestionAccordion(num) {
  const content = document.getElementById(`q-content-${num}`);
  const icon = document.getElementById(`q-icon-${num}`);
  if (!content) return;

  const isHidden = content.classList.contains('hidden');
  if (isHidden) {
    content.classList.remove('hidden');
    icon.style.transform = 'rotate(180deg)';
  } else {
    content.classList.add('hidden');
    icon.style.transform = 'rotate(0deg)';
  }
}

// ------------------------------------------------------------------------------
// ۱۲. نمایش پیام‌های اعلانات موقت (Toast Notifications)
// ------------------------------------------------------------------------------
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ------------------------------------------------------------------------------
// ۱۳. راه‌اندازی اولیه و اتصالات رویدادها (DOM Init)
// ------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // رندر اولیه
  renderSalons();
  renderAcademicQuestions();
  updateAppointmentCounter();
  updateCategoryTabsUI();

  // فیلتر جستجوی زنده
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchKeyword = e.target.value;
      applyFilters();
    });
  }

  // فیلتر شهر
  const citySelect = document.getElementById('filter-city');
  if (citySelect) {
    citySelect.addEventListener('change', (e) => {
      state.selectedCity = e.target.value;
      applyFilters();
    });
  }

  // فیلتر مرتب‌سازی
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      applyFilters();
    });
  }

  // دکمه‌های تب دسته‌بندی
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedCategory = btn.getAttribute('data-cat');
      updateCategoryTabsUI();
      applyFilters();
    });
  });

  // اسلایدرهای شبیه‌ساز مو
  const scaleSlider = document.getElementById('slider-scale');
  if (scaleSlider) {
    scaleSlider.addEventListener('input', (e) => {
      state.tryon.scale = Number(e.target.value);
      updateTryonCanvas();
    });
  }

  const offsetSlider = document.getElementById('slider-offset-y');
  if (offsetSlider) {
    offsetSlider.addEventListener('input', (e) => {
      state.tryon.offsetY = Number(e.target.value);
      updateTryonCanvas();
    });
  }

  const rotationSlider = document.getElementById('slider-rotation');
  if (rotationSlider) {
    rotationSlider.addEventListener('input', (e) => {
      state.tryon.rotation = Number(e.target.value);
      updateTryonCanvas();
    });
  }

  // آپلود عکس کاربر
  const photoInput = document.getElementById('user-photo-upload');
  if (photoInput) {
    photoInput.addEventListener('change', handlePhotoUpload);
  }

  // فرم رزرو
  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', submitBookingForm);
  }
});
