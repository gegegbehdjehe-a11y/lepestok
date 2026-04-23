import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, Flower2 } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Каталог', href: '#catalog' },
    { name: 'Доставка', href: '#delivery' },
    { name: 'Про нас', href: '#about' },
    { name: 'Відгуки', href: '#reviews' },
    { name: 'Контакти', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-soft-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <Flower2 className="text-sage w-8 h-8 transition-transform duration-300 group-hover:rotate-12" />
          <span className="font-serif font-bold text-2xl tracking-wide text-sage">ЛЕПЕСТОК</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="relative font-medium hover:text-sage transition-colors duration-300 group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blush transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="tel:+380991177577" className="flex items-center gap-2 group">
            <Phone className="text-sage w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span className="font-lato font-bold">+38 099 117 7577</span>
          </a>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#e3b1b1' }}
            whileTap={{ scale: 0.95 }}
            className="bg-blush text-white px-6 py-2.5 rounded-full font-bold transition-colors"
            id="header-order-btn"
          >
            ЗАМОВИТИ
          </motion.button>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button 
          className="lg:hidden text-sage p-2"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Toggle Menu"
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-sage z-[60] flex flex-col items-center justify-center gap-8 text-white lg:hidden"
          >
            <button 
              className="absolute top-6 right-6 p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="w-10 h-10" />
            </button>
            <Flower2 className="w-16 h-16 mb-4 opacity-50" />
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-serif font-bold hover:text-blush transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-8 flex flex-col items-center gap-4">
               <a href="tel:+380991177577" className="text-xl font-bold flex items-center gap-2">
                 <Phone /> +38 099 117 7577
               </a>
               <button className="bg-blush text-white px-10 py-4 rounded-full font-bold text-xl">
                 ЗАМОВИТИ
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
