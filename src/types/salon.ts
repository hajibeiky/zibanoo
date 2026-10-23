export interface ServiceItem {
  id: string;
  title: string;
  category: 'haircut' | 'color' | 'skin' | 'nail' | 'makeup' | 'barber';
  durationMinutes: number;
  priceToman: number;
  description: string;
}

export interface Specialist {
  id: string;
  name: string;
  role: string;
  experienceYears: number;
  rating: number;
  avatar: string;
}

export interface Salon {
  id: string;
  name: string;
  tagline: string;
  city: string;
  district: string;
  address: string;
  gender: 'female' | 'male' | 'both';
  rating: number;
  reviewsCount: number;
  priceLevel: 'اقتصادی' | 'متوسط' | 'لوکس';
  image: string;
  services: ServiceItem[];
  specialists: Specialist[];
  features: string[];
  workingHours: string;
  phone: string;
}

export interface Appointment {
  id: string;
  trackingCode: string;
  salonId: string;
  salonName: string;
  salonAddress: string;
  salonPhone: string;
  serviceId: string;
  serviceTitle: string;
  servicePrice: number;
  finalPrice: number;
  discountApplied: number;
  specialistId: string;
  specialistName: string;
  appointmentDate: string; // Persian date string e.g. "۱۴۰۳/۰۸/۱۵"
  appointmentTime: string; // e.g. "۱۴:۳۰"
  clientName: string;
  clientPhone: string;
  notes?: string;
  status: 'تایید شده' | 'لغو شده';
  createdAt: string;
}

export interface HairstyleOption {
  id: string;
  name: string;
  category: 'women_short' | 'women_long' | 'women_curly' | 'men_fade' | 'men_classic';
  gender: 'female' | 'male';
  previewPath: string; // SVG or rendered silhouette
  description: string;
}

export interface ColorOption {
  id: string;
  name: string;
  hex: string;
  filterStyle: string;
}
