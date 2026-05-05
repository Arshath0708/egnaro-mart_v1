import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 bg-[#FF9900] hover:bg-[#e68a00] text-[#131921] w-11 h-11 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
    >
      <ArrowUp size={20} />
    </button>
  );
}
