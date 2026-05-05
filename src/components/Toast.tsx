import { useToast } from '../context/ToastContext';
import { CheckCircle } from 'lucide-react';

export default function Toast() {
  const { message } = useToast();

  if (!message) return null;

  return (
    <div className="fixed top-20 right-4 z-[100] animate-slide-in">
      <div className="bg-gray-900 text-white px-5 py-3 rounded-lg shadow-2xl flex items-center gap-2">
        <CheckCircle size={18} className="text-green-400" />
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  );
}
