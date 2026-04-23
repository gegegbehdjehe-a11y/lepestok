import { motion } from 'motion/react';
import { Flower, Palette, Package, Heart, Leaf, Gift, ArrowRight, Phone } from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'Монобукети',
    desc: 'Класичні букети з одного виду квітів. Троянди, тюльпани, хризантеми.',
    price: 'від 800 грн',
    icon: <Flower />,
  },
  {
    id: 2,
    title: 'Авторські композиції',
    desc: 'Унікальні мікси від наших флористів. Кожен букет неповторний.',
    price: 'від 1500 грн',
    icon: <Palette />,
  },
  {
    id: 3,
    title: 'Квіти в коробці',
    desc: 'Елегантні шляпні коробки з флористичною губкою для тривалої свіжості.',
    price: 'від 1200 грн',
    icon: <Package />,
  },
  {
    id: 4,
    title: 'Весільна флористика',
    desc: 'Букети нареченої, бутоньєрки та повне оформлення вашої урочистості.',
    price: 'за запитом',
    icon: <Heart />,
  },
  {
    id: 5,
    title: 'Кімнатні рослини',
    desc: 'Орхідеї, фікуси та інші рослини в стильних дизайнерських горщиках.',
    price: 'від 500 грн',
    icon: <Leaf />,
  },
  {
    id: 6,
    title: 'Подарунки та декор',
    desc: "М'які іграшки, кульки та солодощі як ідеальне доповнення до букета.",
    price: 'від 200 грн',
    icon: <Gift />,
  },
];

export default function Catalog() {
  return (
    <section id="catalog" className="py-24 bg-soft-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sage font-bold text-sm tracking-widest uppercase mb-4"
          >
            НАШ КАТАЛОГ
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif mb-6"
          >
            ІДЕАЛЬНИЙ БУКЕТ ДЛЯ <br className="hidden md:block" /> БУДЬ-ЯКОЇ ПОДІЇ
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-dark-text/60 max-w-2xl mx-auto"
          >
            Виберіть з наших найкращих пропозицій або замовте індивідуальний дизайн у професійних флористів.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-light-gray p-8 rounded-2xl border-b-0 border-blush transition-all duration-300 hover:shadow-2xl hover:border-b-4"
            >
              {/* Price Pill */}
              <div className="absolute top-6 right-6 bg-sage text-white text-xs font-bold px-3 py-1 rounded-full">
                {item.price}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 bg-blush text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blush/20 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                {item.icon}
              </div>

              <h3 className="text-2xl font-serif mb-4 group-hover:text-sage transition-colors">
                {item.title}
              </h3>
              
              <p className="text-dark-text/70 mb-8 leading-relaxed">
                {item.desc}
              </p>

              <a 
                href="#" 
                className="flex items-center gap-2 text-sage font-bold group-hover:gap-4 transition-all"
              >
                Замовити <ArrowRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Section Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-xl mb-8 font-medium">
            Потрібен особливий букет? Наші флористи створять його для вас.
          </p>
          <a
            href="tel:+380991177577"
            className="inline-flex items-center gap-3 border-2 border-sage text-sage px-10 py-5 rounded-full font-bold text-lg hover:bg-sage hover:text-white transition-all transform active:scale-95"
          >
            <Phone size={24} /> ОБГОВОРИТИ ЗАМОВЛЕННЯ
          </a>
        </motion.div>
      </div>
    </section>
  );
}
