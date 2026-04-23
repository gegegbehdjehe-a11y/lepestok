import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, ShoppingBag, Flower2 as Flower } from 'lucide-react';

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 w-full z-40 bg-white/90 backdrop-blur-md p-4 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] md:hidden pointer-events-auto"
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blush text-white h-[56px] rounded-full font-bold flex items-center justify-center gap-3 relative overflow-hidden"
          >
             ЗАМОВИТИ ЗАРАЗ <ShoppingBag size={20} />
             <motion.div 
               animate={{ x: ['100%', '-100%'] }}
               transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
               className="absolute inset-0 bg-white/20 -skew-x-12"
             />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-24 md:bottom-10 right-6 w-14 h-14 bg-sage text-white rounded-full shadow-2xl z-40 flex items-center justify-center group active:scale-90 transition-transform"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:mb-1 transition-all" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
           exit={{ opacity: 0 }}
           className="fixed inset-0 z-[100] bg-soft-white flex flex-col items-center justify-center gap-6"
        >
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
             className="text-blush"
           >
              <Flower size={64} />
           </motion.div>
           <motion.h1 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="font-serif text-3xl font-bold text-sage tracking-widest"
           >
             ЛЕПЕСТОК
           </motion.h1>
           <div className="w-48 h-1 bg-light-gray rounded-full overflow-hidden relative">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-blush"
              />
           </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
