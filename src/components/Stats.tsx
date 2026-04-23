import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const stats = [
  { value: 10000, label: 'доставлених букетів', suffix: '+' },
  { value: 24, label: 'години на добу працюємо', suffix: '' },
  { value: 15, label: 'професійних флористів', suffix: '' },
  { value: 4.4, label: 'середня оцінка клієнтів', suffix: '/5' },
];

const benefits = [
  { title: 'Тільки свіжі квіти', text: 'Прямі поставки від найкращих теплиць декілька разів на тиждень.' },
  { title: 'Цілодобова робота', text: 'Приймаємо та доставляємо ваші замовлення 24/7 без вихідних.' },
  { title: 'Швидка доставка', text: 'Доставимо букет по Харкову вже за одну годину після замовлення.' },
  { title: 'Фотозвіт до відправки', text: 'Надсилаємо фото готового букета у месенджер перед доставкою.' },
  { title: 'Зручна оплата', text: 'Приймаємо картки всіх банків світу, готівку та онлайн перекази.' },
  { title: 'Анонімна доставка', text: 'Можемо зробити приємний сюрприз інкогніто для отримувача.' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-serif text-white">
      {endInZero(value) ? Math.floor(count) : count.toFixed(1)}{suffix}
    </span>
  );
}

const endInZero = (n: number) => n % 1 === 0;

export default function Stats() {
  return (
    <section id="about" className="overflow-hidden">
      {/* Top Main Section */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Stats Grid */}
        <div className="lg:w-[40%] bg-sage p-12 md:p-20 flex flex-col justify-center">
           <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-blush text-sm font-bold tracking-widest uppercase mb-4"
          >
            ПРО НАС
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-2 relative">
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="text-white/80 font-medium text-sm md:text-base leading-tight uppercase tracking-wide">
                  {stat.label}
                </p>
                {i % 2 === 0 && <div className="hidden sm:block absolute top-0 right-0 w-[1px] h-full bg-white/20" />}
              </div>
            ))}
          </div>
        </div>

        {/* Right Benefits Block */}
        <div className="lg:w-[60%] bg-soft-white p-12 md:p-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif mb-12"
          >
            ЧОМУ ОБИРАЮТЬ <span className="text-sage">ЛЕПЕСТОК</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 group cursor-default"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage/10 text-sage flex items-center justify-center group-hover:bg-sage group-hover:text-white transition-colors duration-300">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-dark-text">{benefit.title}</h4>
                  <p className="text-dark-text/60 text-sm leading-relaxed">{benefit.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Full Width CTA Bar */}
      <div className="w-full bg-soft-white py-12 border-t border-light-gray">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <p className="text-xl md:text-2xl font-serif text-sage italic">
            Зробіть приємне близьким прямо зараз — ми доставимо ваші почуття.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blush text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl uppercase tracking-wider"
          >
            ПЕРЕЙТИ ДО КАТАЛОГУ
          </motion.button>
        </div>
      </div>
    </section>
  );
}
