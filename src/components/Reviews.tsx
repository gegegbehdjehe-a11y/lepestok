import { motion } from 'motion/react';
import { Star, MapPin, Navigation, Phone } from 'lucide-react';

const reviews = [
  {
    name: 'Марина К.',
    date: '12.04.2026',
    text: 'Дуже вдячна за такий чудовий букет! Квіти неймовірно свіжі, а доставка була навіть швидшою, ніж обіцяли. Буду замовляти ще!',
    rating: 5,
  },
  {
    name: 'Олександр В.',
    date: '08.04.2026',
    text: 'Замовляв квіти для дружини посеред ночі. Привезли через годину, все пройшло ідеально. Найкращий сервіс у Харкові!',
    rating: 5,
  },
  {
    name: 'Олена П.',
    date: '02.04.2026',
    text: 'Флористи мають неперевершений смак. Композиція вийшла дуже стильною і стояла свіжою більше тижня. Дякую за радість!',
    rating: 5,
  },
  {
    name: 'Сергій М.',
    date: '28.03.2026',
    text: 'Приємно вражений сервісом та якістю. Можна бути спокійним, що квіти будуть свіжими та гарними. Рекомендую всім!',
    rating: 5,
  },
  {
    name: 'Юлія Д.',
    date: '20.03.2026',
    text: 'Сервіс на висоті! Дуже зручно, що можна замовити через месенджер і отримати фото готового букета. Все чесно і професійно.',
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-soft-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sage font-bold text-sm tracking-widest uppercase mb-4">ВІДГУКИ КЛІЄНТІВ</div>
          <h2 className="text-3xl md:text-5xl font-serif mb-8 italic">ЩО КАЖУТЬ ПРО НАШІ КВІТИ</h2>
          
          <div className="flex flex-col items-center gap-2 mb-12">
            <div className="text-5xl font-bold text-sage">4.4 / 5.0</div>
            <div className="flex gap-1 text-blush">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} className={i === 4 ? 'text-sage/20' : ''} />)}
            </div>
            <p className="text-dark-text/40 text-sm font-medium">на основі відгуків у Google Maps</p>
          </div>
        </div>

        {/* Reviews Slider/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 overflow-x-auto pb-4 custom-scrollbar">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-light-gray p-8 rounded-2xl border-l-[6px] border-blush shadow-sm relative group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blush text-white flex items-center justify-center font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-dark-text leading-none mb-1">{review.name}</h4>
                  <p className="text-xs text-dark-text/40">{review.date}</p>
                </div>
              </div>
              <div className="flex mb-4 text-sage">
                 {[...Array(review.rating)].map((_, j) => <Star key={j} fill="currentColor" size={14} />)}
              </div>
              <p className="text-dark-text/70 italic leading-relaxed">
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Map Section */}
        <div className="relative pt-24 border-t border-light-gray">
          <div className="text-center mb-12">
             <h2 className="text-3xl md:text-5xl font-serif mb-6 uppercase tracking-wider">ЯК НАС ЗНАЙТИ</h2>
             <div className="bg-blush/10 inline-flex items-center gap-3 px-6 py-3 rounded-full text-sage font-bold">
                <MapPin size={20} /> проспект Аерокосмічний (Гагаріна), Харків
             </div>
          </div>

          <div className="w-full h-[400px] bg-light-gray rounded-3xl overflow-hidden relative shadow-inner">
            {/* Placeholder Map Visual */}
            <div className="absolute inset-0 bg-[#e5e3df] flex items-center justify-center">
                <div className="absolute w-full h-full opacity-30 grayscale-[0.5]" style={{ backgroundImage: 'radial-gradient(circle, #ccc 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div 
                  initial={{ y: 0 }}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="flex flex-col items-center gap-2 z-10"
                >
                  <MapPin className="text-blush w-16 h-16 drop-shadow-xl" fill="currentColor" />
                  <div className="bg-white px-4 py-2 rounded-lg shadow-lg font-bold text-sage">ЛЕПЕСТОК</div>
                </motion.div>
                
                <a 
                  href="https://maps.app.goo.gl/VGBQW6bRYvuByWRz9" 
                  target="_blank" 
                  rel="no-referrer"
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-sage px-6 py-2 rounded-full font-bold shadow-md hover:bg-sage hover:text-white transition-all flex items-center gap-2"
                >
                   Переглянути на Google Maps
                </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
             <a 
                href="https://maps.app.goo.gl/VGBQW6bRYvuByWRz9"
                target="_blank"
                rel="no-referrer"
                className="w-full sm:w-auto bg-blush text-white px-10 py-5 rounded-full font-bold flex items-center justify-center gap-3 shadow-lg hover:shadow-blush/20 transition-all active:scale-95"
              >
                <Navigation size={22} /> ПРОКЛАСТИ МАРШРУТ
             </a>
             <a 
                href="tel:+380991177577"
                className="w-full sm:w-auto border-2 border-sage text-sage px-10 py-5 rounded-full font-bold flex items-center justify-center gap-3 transition-all hover:bg-sage hover:text-white active:scale-95"
              >
                <Phone size={22} /> ЗАТЕЛЕФОНУВАТИ
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}
