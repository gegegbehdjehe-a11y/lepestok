import { Flower2, Phone, Send, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const navLinks = [
    { name: 'Каталог', href: '#catalog' },
    { name: 'Доставка', href: '#delivery' },
    { name: 'Про нас', href: '#about' },
    { name: 'Відгуки', href: '#reviews' },
    { name: 'Контакти', href: '#contact' },
  ];

  return (
    <footer className="bg-[#2C3E2D] text-white pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Info */}
          <div className="space-y-6">
            <a href="/" className="flex items-center gap-2 group">
              <Flower2 className="text-blush w-10 h-10 transition-transform group-hover:rotate-12" />
              <span className="font-serif font-bold text-3xl tracking-wide text-white">ЛЕПЕСТОК</span>
            </a>
            <p className="text-white/60 text-lg italic max-w-xs leading-relaxed font-serif">
              "Доставляємо радість у кожну домівку Харкова вже більше 10 років."
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: <Instagram size={20} />, label: 'Instagram' },
                { icon: <Facebook size={20} />, label: 'Facebook' },
                { icon: <Send size={20} />, label: 'Telegram' },
                { icon: <Phone size={20} />, label: 'Viber' },
              ].map((social, i) => (
                <a 
                  key={i}
                  href="#" 
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blush hover:text-white transition-all transform hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Nav */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-8 text-blush italic">Навігація</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-blush transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-blush rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
             <h4 className="font-serif text-xl font-bold mb-8 text-blush italic">Контакти</h4>
             <ul className="space-y-5">
               <li className="flex items-start gap-4 text-white/70">
                 <Phone className="text-blush flex-shrink-0" size={20} />
                 <a href="tel:+380991177577" className="hover:text-white transition-colors underline decoration-white/20 underline-offset-4 font-bold">+38 099 117 7577</a>
               </li>
               <li className="flex items-start gap-4 text-white/70">
                 <Send className="text-blush flex-shrink-0" size={20} />
                 <span>Telegram: @lepestok_flowers</span>
               </li>
               <li className="flex items-start gap-4 text-white/70">
                 <MapPin className="text-blush flex-shrink-0" size={20} />
                 <span>пр. Аерокосмічний, Харків</span>
               </li>
               <li className="flex items-start gap-4 text-white/70">
                 <Clock className="text-blush flex-shrink-0" size={20} />
                 <span className="uppercase font-bold tracking-wider text-xs">Працюємо цілодобово 24/7</span>
               </li>
             </ul>
          </div>

          {/* Column 4: Newsletter/Promo */}
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-24 h-24 bg-blush/10 rounded-full blur-2xl group-hover:bg-blush/20 transition-all" />
             <h4 className="font-serif text-xl font-bold mb-4">Знижка -10%</h4>
             <p className="text-white/60 text-sm mb-6">Підпишіться на наш Instagram та отримайте знижку на перше замовлення.</p>
             <a 
                href="#" 
                className="inline-block bg-blush text-white px-8 py-3 rounded-full font-bold text-sm tracking-wide shadow-lg active:scale-95 transition-all"
             >
                ПІДПИСАТИСЯ
             </a>
          </div>
        </div>

        <div className="h-[1px] w-full bg-white/10 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white/40 text-sm">
           <p>© {new Date().getFullYear()} Квітковий салон ЛЕПЕСТОК. Всі права захищені.</p>
           <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Політика конфіденційності</a>
              <a href="#" className="hover:text-white transition-colors">Умови використання</a>
           </div>
        </div>
      </div>
    </footer>
  );
}
