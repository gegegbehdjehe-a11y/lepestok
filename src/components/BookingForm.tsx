import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Instagram, MapPin, Clock, Send, CheckCircle, Mail, SendHorizontal } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    budget: '',
    wishes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Будь ласка, вкажіть ваше ім'я";
    if (!formData.phone.trim()) newErrors.phone = "Вкажіть ваш номер телефону";
    if (!formData.address.trim()) newErrors.address = "Вкажіть адресу доставки";
    if (!formData.budget) newErrors.budget = "Оберіть орієнтовний бюджет";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      // Simulate API call
      setTimeout(() => {
        setIsSuccess(true);
      }, 800);
    }
  };

  return (
    <section id="contact" className="py-24 bg-light-gray overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="text-sage font-bold text-sm tracking-widest uppercase mb-4">ОНЛАЙН ЗАМОВЛЕННЯ</div>
          <h2 className="text-3xl md:text-5xl font-serif mb-6">ЗАМОВИТИ ДОСТАВКУ</h2>
          <p className="text-lg text-dark-text/60 max-w-2xl mx-auto">
            Заповніть форму нижче, і наш менеджер зв'яжеться з вами протягом 5 хвилин для підтвердження деталей.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Form Block */}
          <div className="w-full lg:w-[60%] bg-white p-8 md:p-12 rounded-2xl shadow-xl relative min-h-[500px]">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-sage ml-1">ВАШЕ ІМ'Я</label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Олександр"
                        className={`w-full h-[52px] px-5 rounded-lg bg-light-gray border-2 transition-all outline-none ${
                          errors.name ? 'border-red-400' : 'border-transparent focus:border-sage'
                        }`}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1 font-medium">{errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-sage ml-1">НОМЕР ТЕЛЕФОНУ</label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+38 (0__) ___-____"
                        className={`w-full h-[52px] px-5 rounded-lg bg-light-gray border-2 transition-all outline-none ${
                          errors.phone ? 'border-red-400' : 'border-transparent focus:border-sage'
                        }`}
                      />
                      {errors.phone && <p className="text-red-400 text-xs mt-1 font-medium">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-sage ml-1">АДРЕСА ДОСТАВКИ</label>
                    <input 
                      type="text" 
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      placeholder="Вул. Сумська, 1"
                      className={`w-full h-[52px] px-5 rounded-lg bg-light-gray border-2 transition-all outline-none ${
                        errors.address ? 'border-red-400' : 'border-transparent focus:border-sage'
                      }`}
                    />
                    {errors.address && <p className="text-red-400 text-xs mt-1 font-medium">{errors.address}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-sage ml-1">БЮДЖЕТ</label>
                    <select 
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      className={`w-full h-[52px] px-5 rounded-lg bg-light-gray border-2 transition-all outline-none appearance-none cursor-pointer ${
                        errors.budget ? 'border-red-400' : 'border-transparent focus:border-sage'
                      }`}
                    >
                      <option value="" disabled>Оберіть бюджет</option>
                      <option value="up-to-1000">До 1000 грн</option>
                      <option value="1000-2000">1000 грн — 2000 грн</option>
                      <option value="2000-plus">Більше 2000 грн</option>
                      <option value="custom">Індивідуальний підхід</option>
                    </select>
                    {errors.budget && <p className="text-red-400 text-xs mt-1 font-medium">{errors.budget}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-sage ml-1">ДОДАТКОВІ ПОБАЖАННЯ</label>
                    <textarea 
                      value={formData.wishes}
                      onChange={(e) => setFormData({...formData, wishes: e.target.value})}
                      placeholder="Наприклад: колір обгортки, час доставки..."
                      className="w-full h-32 py-4 px-5 rounded-lg bg-light-gray border-2 border-transparent focus:border-sage transition-all outline-none resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSubmit}
                    className="w-full h-[60px] bg-blush text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-blush/20 flex items-center justify-center gap-3 active:bg-blush/90"
                  >
                    ВІДПРАВИТИ ЗАЯВКУ <SendHorizontal size={20} />
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-6"
                >
                  <div className="w-20 h-20 bg-sage rounded-full flex items-center justify-center text-white mb-6">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-3xl font-serif text-sage mb-4">ДЯКУЄМО!</h3>
                  <p className="text-lg text-dark-text/70 mb-8 max-w-md">
                    Ваша заявка успішно прийнята. Наш флорист зв'яжеться з вами найближчим часом для обговорення деталей.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-sage font-bold flex items-center gap-2 hover:gap-4 transition-all"
                  >
                    Замовити ще один букет
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Block */}
          <div className="w-full lg:w-[40%] flex flex-col gap-6">
            <div className="flex-1 bg-sage text-white p-8 md:p-12 rounded-2xl shadow-xl flex flex-col">
              <h3 className="text-2xl font-serif mb-8 border-b border-white/20 pb-4">НАШІ КОНТАКТИ</h3>
              
              <div className="space-y-6 mb-10 flex-1">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-white/60 text-xs font-bold uppercase tracking-wider mb-1">Телефон</div>
                    <a href="tel:+380991177577" className="text-lg font-bold hover:text-blush transition-colors">+38 099 117 7577</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <div className="text-white/60 text-xs font-bold uppercase tracking-wider mb-1">Instagram</div>
                    <a href="#" className="text-lg font-bold hover:text-blush transition-colors">@lepestok_kharkiv</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-white/60 text-xs font-bold uppercase tracking-wider mb-1">Адреса</div>
                    <p className="text-lg font-bold italic">пр. Аерокосмічний, Харків</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="text-white/60 text-xs font-bold uppercase tracking-wider mb-1">Години роботи</div>
                    <p className="text-lg font-bold uppercase">Цілодобово 24/7</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                 <button className="flex-1 bg-white/10 hover:bg-white/20 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <Send size={18} /> Telegram
                 </button>
                 <button className="flex-1 bg-white/10 hover:bg-white/20 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <Mail size={18} /> Viber
                 </button>
              </div>
            </div>

            {/* Quick Badges */}
            <div className="grid grid-cols-3 gap-4">
               {[
                 { label: 'Безпечно', icon: <CheckCircle className="text-sage" /> },
                 { label: 'Швидко', icon: <Clock className="text-sage" /> },
                 { label: 'Якісно', icon: <Flower className="text-sage" /> },
               ].map((b, i) => (
                 <div key={i} className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center justify-center text-center gap-2 border border-light-gray">
                    {b.icon}
                    <span className="text-[10px] font-bold uppercase text-dark-text/40">{b.label}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Flower({ className }: { className?: string }) {
    return <Flower2 className={className} />;
}
import { Flower2 } from 'lucide-react';
