import React from 'react';
import { CalendarCheck2, Sparkles, FileText, Code2, Scissors } from 'lucide-react';

interface NavbarProps {
  onOpenAppointments: () => void;
  onOpenSimulator: () => void;
  onOpenPortfolio: () => void;
  onOpenSourceCode: () => void;
  onScrollToSalons: () => void;
  appointmentsCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAppointments,
  onOpenSimulator,
  onOpenPortfolio,
  onOpenSourceCode,
  onScrollToSalons,
  appointmentsCount
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F6]/90 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 text-slate-900 group whitespace-nowrap shrink-0"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 via-pink-600 to-purple-700 flex items-center justify-center text-white shadow-md shadow-rose-500/20 group-hover:scale-105 transition-transform">
            <Scissors className="w-5 h-5 text-white transform -rotate-45" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight bg-gradient-to-l from-purple-900 via-stone-900 to-rose-700 bg-clip-text text-transparent">
              زیبانـو
            </span>
            <span className="text-[10px] text-stone-500 font-medium tracking-widest">
              ZIBANO BEAUTY
            </span>
          </div>
        </a>

        {/* Zone 2: 4-5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
          <a
            href="#hero"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            صفحه اصلی
          </a>
          <button
            onClick={onScrollToSalons}
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 cursor-pointer"
          >
            جستجوی آرایشگاه‌ها
          </button>
          <button
            onClick={onOpenSimulator}
            className="flex items-center gap-1.5 text-purple-700 hover:text-purple-900 font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span>شبیه‌ساز پرو مو</span>
          </button>
          <button
            onClick={onOpenPortfolio}
            className="flex items-center gap-1.5 hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-stone-500" />
            <span>پرونده تحلیلی ایده</span>
          </button>
          <button
            onClick={onOpenSourceCode}
            className="flex items-center gap-1.5 hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 text-stone-600 hover:underline underline-offset-8 cursor-pointer"
          >
            <Code2 className="w-4 h-4 text-stone-500" />
            <span>کدهای VS Code</span>
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenAppointments}
            className="relative flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-white bg-gradient-to-l from-rose-600 to-purple-700 rounded-xl hover:from-rose-700 hover:to-purple-800 shadow-sm shadow-purple-600/20 active:scale-98 transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            <CalendarCheck2 className="w-4 h-4" />
            <span>نوبت‌های من</span>
            {appointmentsCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-white text-rose-700 text-xs font-bold flex items-center justify-center mr-0.5 shadow-sm">
                {appointmentsCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
};
