import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo_f.jpeg'; // ✅ your new logo

export default function Footer() {
  return (
    <footer className="bg-[#232f3e] text-gray-300">

      {/* Newsletter */}
      <div className="bg-[#37475a] py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center gap-3">
          <p className="text-white font-semibold text-sm">Subscribe to our Newsletter</p>
          <form className="flex w-full sm:w-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 sm:w-72 px-4 py-2 rounded-l-md text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9900]"
            />
            <button
              type="submit"
              className="bg-[#FF9900] hover:bg-[#e68a00] px-6 py-2 rounded-r-md text-[#131921] font-semibold text-sm transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* About */}
        <div>
          {/* ✅ NEW LOGO */}
          <div className="mb-4">
            <img 
              src={logo} 
              alt="Egnaro Mart" 
              className="h-10 w-auto object-contain"
            />
          </div>

          <p className="text-sm leading-relaxed mb-4">
            Your trusted online store for electronics, electricals, hardware, and industrial goods. Best quality at the lowest prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#FF9900] transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-[#FF9900] transition-colors">Products</Link></li>
            <li><Link to="/about" className="hover:text-[#FF9900] transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-[#FF9900] transition-colors">Contact</Link></li>
            <li><Link to="/terms" className="hover:text-[#FF9900] transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/return-policy" className="hover:text-[#FF9900] transition-colors">Return & Refund Policy</Link></li>
          </ul>
        </div>

        {/* Account Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Account</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/cart" className="hover:text-[#FF9900] transition-colors">My Cart</Link></li>
            <li><Link to="/checkout" className="hover:text-[#FF9900] transition-colors">Checkout</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="shrink-0 mt-0.5 text-[#FF9900]" />
              <span>No:2A, Venkatesh, Sarkarsamakulam, Kovilpalayam, Tamil Nadu - 641107</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-[#FF9900]" />
              <span>(+91) 9442581506</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-[#FF9900]" />
              <span>egnaromart@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-400">
        Copyright &copy; 2026 Egnaro Mart Pvt Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}