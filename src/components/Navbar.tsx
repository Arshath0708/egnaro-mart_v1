import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { categories } from '../data/products';
import logo from '../assets/logo.png'; // ✅ IMPORT LOGO

export default function Navbar() {
  const { totalItems } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState('');
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/products?search=${encodeURIComponent(search)}`);
    setSearch('');
  };

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
      <nav className="bg-[#131921] text-white">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center gap-4">

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* ✅ LOGO SECTION UPDATED */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img 
              src={logo} 
              alt="Egnaro Mart" 
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="hidden sm:flex flex-1 max-w-2xl">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Egnaro Mart..."
              className="flex-1 px-4 py-2 rounded-l-md text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9900]"
            />
            <button
              type="submit"
              className="bg-[#FF9900] hover:bg-[#e68a00] px-4 rounded-r-md transition-colors"
            >
              <Search size={20} className="text-[#131921]" />
            </button>
          </form>

          {/* Cart */}
          <Link to="/cart" className="relative flex items-center gap-1 shrink-0 group">
            <ShoppingCart size={26} className="group-hover:text-[#FF9900] transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#FF9900] text-[#131921] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
            <span className="hidden md:inline text-sm font-medium group-hover:text-[#FF9900] transition-colors">
              Cart
            </span>
          </Link>
        </div>

        {/* Mobile search */}
        <form onSubmit={handleSearch} className="sm:hidden px-4 pb-2">
          <div className="flex">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Egnaro Mart..."
              className="flex-1 px-4 py-2 rounded-l-md text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9900]"
            />
            <button
              type="submit"
              className="bg-[#FF9900] hover:bg-[#e68a00] px-4 rounded-r-md transition-colors"
            >
              <Search size={18} className="text-[#131921]" />
            </button>
          </div>
        </form>
      </nav>

      {/* Category strip */}
      <div className="bg-[#232f3e] text-gray-200 text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`${mobileMenu ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row gap-1 py-1.5`}>
            {categories.map((cat) => (
              <Link
                key={cat}
                to={`/products?category=${encodeURIComponent(cat)}`}
                className="px-3 py-1.5 hover:text-white hover:bg-white/10 rounded transition-colors whitespace-nowrap"
                onClick={() => setMobileMenu(false)}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}