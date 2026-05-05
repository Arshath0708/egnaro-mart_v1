import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Monitor,
  Zap,
  Wrench,
  Droplets,
  Home,
  Factory,
  ShieldCheck,
  Truck,
  Award,
  Lock,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const categoryIcons: Record<string, React.ReactNode> = {
  Electronics: <Monitor size={32} />,
  Electricals: <Zap size={32} />,
  Hardware: <Wrench size={32} />,
  'Motor Pump & Submersible': <Droplets size={32} />,
  'Home Application': <Home size={32} />,
  'Industrial Goods': <Factory size={32} />,
};

const heroSlides = [
  {
    title: 'Up to 70% OFF on Electronics',
    subtitle: 'Shop CCTV cameras, adapters & more at unbeatable prices',
    bg: 'from-[#1a1a2e] to-[#16213e]',
    accent: 'text-[#FF9900]',
  },
  {
    title: 'Top Quality Hardware Products',
    subtitle: 'Professional tools and hardware for every project',
    bg: 'from-[#0f3460] to-[#1a1a2e]',
    accent: 'text-[#FF9900]',
  },
  {
    title: 'Fast Delivery Across Tamil Nadu',
    subtitle: 'Get your products delivered right to your doorstep',
    bg: 'from-[#16213e] to-[#0f3460]',
    accent: 'text-[#FF9900]',
  },
];

const whyChooseUs = [
  { icon: <ShieldCheck size={28} />, title: 'High Quality', desc: 'Only genuine, tested products' },
  { icon: <Truck size={28} />, title: 'Fast Delivery', desc: 'Quick shipping across Tamil Nadu' },
  { icon: <Award size={28} />, title: 'Best Warranty', desc: 'Manufacturer warranty on all items' },
  { icon: <Lock size={28} />, title: 'Secure Payment', desc: 'Safe & encrypted transactions' },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ hours: 8, minutes: 45, seconds: 30 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) return { hours: 23, minutes: 59, seconds: 59 };
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const featuredProducts = products.slice(0, 4);
  const dealProducts = products.slice(4, 8);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Carousel */}
      <section className="relative overflow-hidden">
        <div
          className={`bg-gradient-to-r ${heroSlides[currentSlide].bg} transition-all duration-700`}
        >
          <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center">
            <h1 className={`text-3xl md:text-5xl font-bold text-white mb-4 ${heroSlides[currentSlide].accent}`}>
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl">
              {heroSlides[currentSlide].subtitle}
            </p>
            <Link
              to="/products"
              className="bg-[#FF9900] hover:bg-[#e68a00] text-[#131921] font-bold px-8 py-3 rounded-md transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight size={24} />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentSlide ? 'bg-[#FF9900]' : 'bg-white/40'}`}
            />
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/products?category=${encodeURIComponent(cat)}`}
              className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 flex flex-col items-center gap-3 group transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-[#FF9900] group-hover:scale-110 transition-transform duration-300">
                {categoryIcons[cat]}
              </div>
              <span className="text-sm font-semibold text-gray-800 text-center">{cat}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
          <Link to="/products" className="text-[#FF9900] hover:underline font-semibold text-sm">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Today's Deals */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Today's Deals</h2>
              <p className="text-gray-500 text-sm mt-1">Hurry! Offers end soon</p>
            </div>
            <div className="flex items-center gap-2 bg-red-50 border border-red-200 px-4 py-2 rounded-lg">
              <span className="text-sm text-red-600 font-medium">Ends in:</span>
              <div className="flex gap-1 font-mono font-bold text-red-600">
                <span className="bg-red-600 text-white px-2 py-1 rounded text-sm">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-red-600">:</span>
                <span className="bg-red-600 text-white px-2 py-1 rounded text-sm">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-red-600">:</span>
                <span className="bg-red-600 text-white px-2 py-1 rounded text-sm">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dealProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#232f3e] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="text-[#FF9900] mb-3 flex justify-center">{item.icon}</div>
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Stay Updated</h2>
          <p className="text-gray-600 mb-6">Subscribe to get the latest deals and offers directly in your inbox.</p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF9900]"
            />
            <button
              type="submit"
              className="bg-[#FF9900] hover:bg-[#e68a00] px-8 py-3 rounded-r-md text-[#131921] font-bold transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
