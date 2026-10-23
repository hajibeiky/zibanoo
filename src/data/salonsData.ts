import { Salon } from '../types/salon';

export const INITIAL_SALONS: Salon[] = [
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
    image: '/src/assets/images/salon_card_royalsalon_1792743870764.jpg',
    features: ['پذیرایی VIP', 'پارکینگ اختصاصی', 'مواد ارگانیک بدون آمونیاک', 'مشاوره اختصاصی فرم صورت'],
    workingHours: 'همه روزه از ۱۰:۰۰ الی ۲۰:۰۰ (جمعه‌ها با هماهنگی)',
    phone: '۰۲۱-۲۲۴۱۸۹۹۰',
    services: [
      {
        id: 'srv-101',
        title: 'کوتاهی و لایه‌بندی تخصصی فرانسوی',
        category: 'haircut',
        durationMinutes: 45,
        priceToman: 450000,
        description: 'کوتاهی متناسب با آناتومی چهره به همراه براشینگ ژورنالی و شستشوی گیاهی'
      },
      {
        id: 'srv-102',
        title: 'بالیاژ روسی و لایت آمبره طبیعی',
        category: 'color',
        durationMinutes: 180,
        priceToman: 2800000,
        description: 'تکنیک روز رنگ بدون آسیب با مواد اولاپلکس اصل آمریکا و شفافیت ماندگار'
      },
      {
        id: 'srv-103',
        title: 'فیشیال تخصصی و آبرسانی عمیق با دستگاه هیدرافیشیال',
        category: 'skin',
        durationMinutes: 75,
        priceToman: 950000,
        description: 'پاکسازی ۱۰ مرحله‌ای لایه‌بردار و لیفتینگ پوست با سرم‌های هیالورونیک اسید'
      },
      {
        id: 'srv-104',
        title: 'کاشت و ژلیش ناخن با پودر روسی',
        category: 'nail',
        durationMinutes: 90,
        priceToman: 550000,
        description: 'کاشت طبیعی، مانیکور روسی تخصصی و استحکام‌بخشی ناخن طبیعی'
      },
      {
        id: 'srv-105',
        title: 'میکاپ لایت اروپایی و گریم تخصصی',
        category: 'makeup',
        durationMinutes: 90,
        priceToman: 1800000,
        description: 'میکاپ ضدآب با کرم‌های ۲۴ ساعته برند هدی بیوتی و شارلوت تیلبری'
      }
    ],
    specialists: [
      {
        id: 'spec-1',
        name: 'سارا معتمدی',
        role: 'مستر هیرکات و استایل مو',
        experienceYears: 9,
        rating: 4.9,
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
      },
      {
        id: 'spec-2',
        name: 'مهناز افشارنژاد',
        role: 'کالریست و متخصص رنگ و لایت',
        experienceYears: 12,
        rating: 5.0,
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80'
      },
      {
        id: 'spec-3',
        name: 'نیلوفر کیانی',
        role: 'اسکین‌تراپیست و کارشناس پوست',
        experienceYears: 7,
        rating: 4.8,
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80'
      }
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
    image: '/src/assets/images/salon_card_classicbarber_1792743871897.jpg',
    features: ['قهوه دمی رایگان', 'اینترنت پرسرعت', 'ماساژور سر و شانه', 'وسایل استریل یکبار مصرف'],
    workingHours: 'شنبه تا پنجشنبه ۱۰:۳۰ الی ۲۲:۰۰',
    phone: '۰۲۱-۸۸۲۲۵۵۴۰',
    services: [
      {
        id: 'srv-201',
        title: 'هیرکات کلاسیک / اسکین فید مدرن',
        category: 'barber',
        durationMinutes: 40,
        priceToman: 350000,
        description: 'کوتاهی سر، شستشو با شامپوی تقویتی، خط‌زنی لیزری و استایل با وکس مات'
      },
      {
        id: 'srv-202',
        title: 'پکیج فرم‌دهی ریش و حوله داغ',
        category: 'barber',
        durationMinutes: 30,
        priceToman: 220000,
        description: 'آنکادر ریش با تیغ سنتی، نرم‌کننده روغن آرگان و اسپا حوله گرم آرامش‌بخش'
      },
      {
        id: 'srv-203',
        title: 'اسکراب و پاکسازی پوست آقایان',
        category: 'skin',
        durationMinutes: 45,
        priceToman: 480000,
        description: 'حذف جوش‌های سرسیاه، بخور گرم و ماسک خاک رس پاک‌کننده منافذ'
      },
      {
        id: 'srv-204',
        title: 'پکیج VIP داماد و گریم نامرئی',
        category: 'barber',
        durationMinutes: 120,
        priceToman: 1900000,
        description: 'هیرکات، اصلاح ریش، فیشیال صورت، حالت‌دهی و گریم متعادل‌سازی نچرال'
      }
    ],
    specialists: [
      {
        id: 'spec-4',
        name: 'آرش شریفی',
        role: 'آرت دیزاینر و مستر باربر',
        experienceYears: 10,
        rating: 4.9,
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
      },
      {
        id: 'spec-5',
        name: 'کیوان بهرامی',
        role: 'استایلیست فید و گریم داماد',
        experienceYears: 8,
        rating: 4.8,
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
      }
    ]
  },
  {
    id: 'salon-3',
    name: 'استودیو زیبایی لومیر (Lumière Beauty)',
    tagline: 'فضایی آرامشبخش با نور طبیعی برای انواع خدمات احیا، رنگ و مژه',
    city: 'اصفهان',
    district: 'مرداویج',
    address: 'اصفهان، مرداویج، خیابان شیخ کلینی، نبش کوچه یاس، عمارت لومیر',
    gender: 'female',
    rating: 4.7,
    reviewsCount: 96,
    priceLevel: 'متوسط',
    image: '/src/assets/images/hero_beauty_salon_1792743870166.jpg',
    features: ['تست حساسیت رنگ رایگان', 'اتاق اختصاصی کودکان', 'مشاوره استایلینگ آنلاین', 'ضمانت سلامت مو'],
    workingHours: 'شنبه تا چهارشنبه ۹:۳۰ الی ۱۹:۳۰',
    phone: '۰۳۱-۳۶۶۹۲۲۱۱',
    services: [
      {
        id: 'srv-301',
        title: 'کراتین و پروتئین‌تراپی موهای دمیج',
        category: 'haircut',
        durationMinutes: 150,
        priceToman: 1800000,
        description: 'صافی شلاقی و احیای ۱۰۰٪ تارهای آسیب‌دیده با فرمولاسیون برزیلی کادیوو'
      },
      {
        id: 'srv-302',
        title: 'اکستنشن مژه والیوم و اسپایک',
        category: 'makeup',
        durationMinutes: 90,
        priceToman: 650000,
        description: 'کاشت تار به تار با چسب گیاهی ضدحساسیت و مژه‌های ابریشمی بسیار سبک'
      },
      {
        id: 'srv-303',
        title: 'رنگساژ مو و هیدروژن‌تراپی',
        category: 'color',
        durationMinutes: 60,
        priceToman: 850000,
        description: 'تثبیت درخشش مو با تونر کره‌ای و ماسک مغذی ابریشم'
      }
    ],
    specialists: [
      {
        id: 'spec-6',
        name: 'روژان کاظمی',
        role: 'متخصص تراپی و احیای مو',
        experienceYears: 6,
        rating: 4.8,
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
      },
      {
        id: 'spec-7',
        name: 'مریم صالحی',
        role: 'لاش‌آرتیست بین‌المللی',
        experienceYears: 5,
        rating: 4.7,
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80'
      }
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
    image: '/src/assets/images/salon_card_royalsalon_1792743870764.jpg',
    features: ['حیاط سبز و کافه اختصاصی', 'پکیج همراه عروس', 'مشاوره رنگ پوست فصلی'],
    workingHours: 'همه روزه از ۱۰:۰۰ الی ۲۰:۰۰',
    phone: '۰۷۱-۳۶۲۸۹۹۰۱',
    services: [
      {
        id: 'srv-401',
        title: 'شینیون مدرن اروپایی و بافت دیزاین',
        category: 'haircut',
        durationMinutes: 60,
        priceToman: 700000,
        description: 'شینیون‌های خطی و باز بدون آسیب با ماندگاری بالا'
      },
      {
        id: 'srv-402',
        title: 'آمبره و سامبره کاراملی براق',
        category: 'color',
        durationMinutes: 160,
        priceToman: 2200000,
        description: 'رنگ‌آمیزی سایه‌روشن گرم بدون زردی مو'
      },
      {
        id: 'srv-403',
        title: 'پدیکور اسپا و کوکوتراپی پا',
        category: 'nail',
        durationMinutes: 60,
        priceToman: 490000,
        description: 'اسپا پا، پارافین‌تراپی، اسکراب نمک دریایی و ماساژ ریلکسیشن'
      }
    ],
    specialists: [
      {
        id: 'spec-8',
        name: 'درسا زندیه',
        role: 'استایلیست ارشد شینیون و بافت',
        experienceYears: 11,
        rating: 4.9,
        avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80'
      }
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
    image: '/src/assets/images/hero_beauty_salon_1792743870166.jpg',
    features: ['تخفیف ویژه دانشجویی', 'نوبت‌دهی سریع', 'پک وسایل شخصی بهداشتی'],
    workingHours: 'شنبه تا پنجشنبه ۹:۰۰ الی ۱۹:۰۰',
    phone: '۰۲۱-۸۸۷۶۴۲۱۰',
    services: [
      {
        id: 'srv-501',
        title: 'کوتاهی و پیتاژ ژورنالی',
        category: 'haircut',
        durationMinutes: 35,
        priceToman: 280000,
        description: 'مدل‌های باب، کرنلی، لیر با فرم‌دهی حرفه‌ای'
      },
      {
        id: 'srv-502',
        title: 'رنگ ریشه و براشینگ مجلسی',
        category: 'color',
        durationMinutes: 60,
        priceToman: 450000,
        description: 'پوشش کامل تارهای سفید با رنگ بدون سولفات'
      },
      {
        id: 'srv-503',
        title: 'ژلیش و لمینت ناخن طبیعی',
        category: 'nail',
        durationMinutes: 45,
        priceToman: 280000,
        description: 'تقویت صدف ناخن با رابر بیس باکیفیت و ماندگاری ۳۰ روزه'
      }
    ],
    specialists: [
      {
        id: 'spec-9',
        name: 'ستاره رضایی',
        role: 'هیرکات کارشناس',
        experienceYears: 6,
        rating: 4.7,
        avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=150&auto=format&fit=crop&q=80'
      }
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
    image: '/src/assets/images/salon_card_classicbarber_1792743871897.jpg',
    features: ['اصلاح سنتی با تیغ ژاپنی', 'ماساژور سر ارگونومیک', 'رزرو بی‌معطلی'],
    workingHours: 'شنبه تا جمعه ۱۰:۰۰ الی ۲۱:۳۰',
    phone: '۰۵۱-۳۸۴۳۹۰۱۱',
    services: [
      {
        id: 'srv-601',
        title: 'پیرایش مو و سشوار حرفه‌ای',
        category: 'barber',
        durationMinutes: 30,
        priceToman: 200000,
        description: 'کوتاهی شیک مناسب محیط اداری و دانشگاهی'
      },
      {
        id: 'srv-602',
        title: 'پکیج اصلاح کامل صورت و ماسک زغال',
        category: 'barber',
        durationMinutes: 35,
        priceToman: 220000,
        description: 'پاکسازی چربی پوست و فرم‌دهی تمیز خط ریش'
      }
    ],
    specialists: [
      {
        id: 'spec-10',
        name: 'امیرحسین پارسا',
        role: 'مستر باربر باسابقه',
        experienceYears: 9,
        rating: 4.8,
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80'
      }
    ]
  }
];

export const HAIRSTYLE_PRESETS = [
  {
    id: 'hs-1',
    name: 'مدل باب شیک فرانسوی (French Bob)',
    category: 'women_short',
    gender: 'female',
    svgType: 'bob',
    description: 'کوتاهی جسورانه تا خط فک با چتری نازک، مناسب فرم صورت‌های بیضی و قلبی'
  },
  {
    id: 'hs-2',
    name: 'لایه‌بندی بلند با براشینگ حجیم (Layered Waves)',
    category: 'women_long',
    gender: 'female',
    svgType: 'long_wavy',
    description: 'حجم‌دهنده طبیعی دور چهره با انتهای موج‌دار، ایده‌آل برای صورت‌های گرد و مستطیلی'
  },
  {
    id: 'hs-3',
    name: 'پیکسی کراپ مدرن (Modern Pixie)',
    category: 'women_short',
    gender: 'female',
    svgType: 'pixie',
    description: 'استایل کوتاه مینیمال و پرانرژی با بافت‌های تکه‌تکه در تاج سر'
  },
  {
    id: 'hs-4',
    name: 'فرهای مجلسی هالیوودی (Hollywood Curls)',
    category: 'women_curly',
    gender: 'female',
    svgType: 'curly',
    description: 'فرهای پرپشت و لوکس روی شانه‌ها، درخششی کلاسیک برای مهمانی‌ها و مراسم'
  },
  {
    id: 'hs-5',
    name: 'اسکین فید مردانه و پومپادور (Fade Pompadour)',
    category: 'men_fade',
    gender: 'male',
    svgType: 'fade_male',
    description: 'سایه‌زنی با دقت میلی‌متری در شقیقه‌ها و موی پرحجم به سمت بالا در بالای سر'
  },
  {
    id: 'hs-6',
    name: 'کلاسیک کات ساید‌پارت (Side Part Classic)',
    category: 'men_classic',
    gender: 'male',
    svgType: 'classic_male',
    description: 'فرق کج شیک و اداری با بافت نرم و تمیز، همیشه روی مد'
  }
];

export const HAIR_COLORS = [
  { id: 'c-1', name: 'مشکی طبیعی پرکلاغی', hex: '#1C1917', overlay: 'rgba(28, 25, 23, 0.75)' },
  { id: 'c-2', name: 'قهوه‌ای شکلاتی بلوطی', hex: '#58311B', overlay: 'rgba(88, 49, 27, 0.65)' },
  { id: 'c-3', name: 'بلوند کاراملی عسلی', hex: '#C68B45', overlay: 'rgba(198, 139, 69, 0.60)' },
  { id: 'c-4', name: 'شرابی یاقوتی متالیک', hex: '#7E1F35', overlay: 'rgba(126, 31, 53, 0.60)' },
  { id: 'c-5', name: 'پلاتینه دودی یخی', hex: '#D1D5DB', overlay: 'rgba(209, 213, 219, 0.70)' },
  { id: 'c-6', name: 'رزگلد پاستلی فانتزی', hex: '#D47A88', overlay: 'rgba(212, 122, 136, 0.60)' }
];
