import { motion } from 'motion/react';
import { ChevronDown, Sparkles, Truck, Clock } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative h-[100svh] w-full bg-light-gray overflow-hidden flex items-center">
      {/* Texture Overlay */}
      <div className="absolute inset-0 floral-pattern pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        
        {/* Left Copy Block */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-[58%] text-center lg:text-left pt-20 lg:pt-0"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-block px-4 py-1.5 bg-blush/20 text-sage rounded-full mb-6 font-lato font-bold text-sm tracking-widest uppercase"
          >
            ЦІЛОДОБОВА ДОСТАВКА КВІТІВ У ХАРКОВІ
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-dark-text leading-tight mb-6"
          >
            СВІЖІ КВІТИ <br /><span className="text-sage">КОЖНОГО ДНЯ</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-dark-text/70 mb-10 max-w-2xl mx-auto lg:mx-0"
          >
            Авторські букети та композиції для ваших близьких. <br className="hidden md:block" />
            Працюємо 24 на 7 без вихідних у самому серці Харкова.
          </motion.p>

          {/* Trust Badges */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8 mb-12"
          >
            <div className="flex items-center gap-2 text-sage font-bold text-sm md:text-base">
              <Sparkles className="w-5 h-5 text-blush" /> Свіжість гарантована
            </div>
            <div className="flex items-center gap-2 text-sage font-bold text-sm md:text-base">
              <Truck className="w-5 h-5 text-blush" /> Швидка доставка
            </div>
            <div className="flex items-center gap-2 text-sage font-bold text-sm md:text-base">
              <Clock className="w-5 h-5 text-blush" /> Працюємо цілодобово
            </div>
          </motion.div>

          {/* CTA Group */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-blush text-white px-10 py-5 rounded-full font-bold text-lg shadow-lg hover:shadow-blush/20 transition-all"
            >
              ОБРАТИ БУКЕТ
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto border-2 border-sage text-sage px-10 py-5 rounded-full font-bold text-lg hover:bg-sage/5 transition-all"
            >
              ЗВ'ЯЗАТИСЬ З НАМИ
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Image/Card Block */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-[42%] relative mt-10 lg:mt-0"
        >
          <div className="relative aspect-[3/4] w-full max-w-[400px] mx-auto overflow-hidden rounded-[2rem] border-[12px] border-white shadow-2xl relative">
            {/* Background Image Placeholder */}
            <img 
              src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=600&auto=format&fit=crop" 
              alt="Квіткова композиція"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            
            {/* Floating Selection Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border-l-4 border-blush"
            >
              <h4 className="text-blush font-bold text-xs tracking-widest uppercase mb-4">ПОПУЛЯРНИЙ ВИБІР</h4>
              <div className="space-y-4">
                {[
                  { name: '101 Троянда', duration: 1.2 },
                  { name: 'Ніжні Півонії', duration: 1.4 },
                  { name: 'Авторський Мікс', duration: 1.6 }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: item.duration, duration: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-sage/10 flex items-center justify-center text-sage font-bold text-xs">
                      {idx + 1}
                    </div>
                    <span className="font-medium text-dark-text">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Decorative Pink Border Behind */}
          <div className="absolute -z-10 -bottom-6 -left-6 w-full h-full border-2 border-blush/30 rounded-[2.5rem]" />
        </motion.div>
      </div>

      {/* Bounce Chevron */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sage cursor-pointer hidden md:block"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
