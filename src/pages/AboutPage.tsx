import { Quote, Users, Package, ShieldCheck, Clock } from 'lucide-react';

const testimonials = [
  {
    name: 'Mr. Prem Kumar',
    role: 'Contractor',
    text: 'Egnaro Mart has been my go-to store for all electrical and hardware needs. The quality is top-notch and prices are unbeatable. Delivery is always on time!',
  },
  {
    name: 'Mr. Raghual',
    role: 'Business Owner',
    text: 'I have been purchasing from Egnaro Mart for my business. Their range of industrial goods is impressive and the customer service is excellent. Highly recommended!',
  },
  {
    name: 'Mr. Suresh',
    role: 'Homeowner',
    text: 'Found everything I needed for my home renovation at Egnaro Mart. From water heater to paint brushes, everything was genuine and well-priced. Will definitely order again!',
  },
];

const stats = [
  { icon: <Clock size={28} />, value: '25+', label: 'Years Experience' },
  { icon: <Users size={28} />, value: '3000+', label: 'Happy Customers' },
  { icon: <Package size={28} />, value: '500+', label: 'Products' },
  { icon: <ShieldCheck size={28} />, value: '100%', label: 'Quality Assured' },
];

export default function AboutPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero */}
      <section className="bg-[#232f3e] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">About Egnaro Mart</h1>
          <p className="text-gray-300 text-lg">Your trusted partner for quality electronics & hardware</p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            We have been running a company called <strong>Ansel Power System</strong> for over 25 years.
            We opened <strong>Egnaro Mart</strong> as a sister company to carry all products directly from
            manufacturer to consumer at the lowest possible price. Through this website you can buy
            electronics, electricals, hardware, and industrial goods — all best quality.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#131921] py-12">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-[#FF9900] mb-2 flex justify-center">{stat.icon}</div>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-lg shadow-md p-6">
              <Quote size={24} className="text-[#FF9900] mb-3" />
              <p className="text-gray-700 text-sm leading-relaxed mb-4">{t.text}</p>
              <div>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
