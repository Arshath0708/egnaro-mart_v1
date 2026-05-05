import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Zap, Truck, Shield } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { useState } from 'react';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'specifications' | 'reviews'>('description');

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">Product not found</p>
          <Link to="/products" className="text-[#FF9900] hover:underline font-semibold">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const savings = product.originalPrice - product.price;
  const thumbnails = [
    product.image,
    `https://picsum.photos/seed/${product.id}a/400/400`,
    `https://picsum.photos/seed/${product.id}b/400/400`,
    `https://picsum.photos/seed/${product.id}c/400/400`,
  ];
  const [selectedImg, setSelectedImg] = useState(0);

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) addToCart(product);
    showToast('Added to cart!');
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-[#FF9900]">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-[#FF9900]">Products</Link>
          <span className="mx-2">/</span>
          <Link to={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-[#FF9900]">
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Images */}
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-3">
              <img
                src={thumbnails[selectedImg]}
                alt={product.name}
                className="w-full h-80 md:h-[420px] object-cover"
              />
            </div>
            <div className="flex gap-2">
              {thumbnails.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImg(i)}
                  className={`w-20 h-20 rounded-md overflow-hidden border-2 transition-colors ${
                    i === selectedImg ? 'border-[#FF9900]' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < Math.floor(product.rating)
                        ? 'fill-[#FF9900] text-[#FF9900]'
                        : 'text-gray-300'
                    }
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-3xl font-bold text-gray-900">
                &#8377;{product.price.toLocaleString('en-IN')}
              </span>
              <span className="text-lg text-gray-400 line-through">
                &#8377;{product.originalPrice.toLocaleString('en-IN')}
              </span>
              <span className="bg-red-100 text-red-600 text-sm font-semibold px-2 py-0.5 rounded">
                {product.discount}% OFF
              </span>
            </div>

            <p className="text-green-600 font-medium text-sm mb-4">
              You Save: &#8377;{savings.toLocaleString('en-IN')}
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

            {/* Quantity */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm font-semibold text-gray-700">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-3 py-1.5 hover:bg-gray-100 transition-colors text-lg font-bold"
                >
                  -
                </button>
                <span className="px-4 py-1.5 border-x border-gray-300 font-semibold">
                  {qty}
                </span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-3 py-1.5 hover:bg-gray-100 transition-colors text-lg font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={handleAdd}
                className="flex-1 bg-[#FF9900] hover:bg-[#e68a00] text-[#131921] font-bold py-3 rounded-md flex items-center justify-center gap-2 transition-colors"
              >
                <ShoppingCart size={18} />
                Add to Cart
              </button>
              <Link
                to="/checkout"
                onClick={handleAdd}
                className="flex-1 bg-[#131921] hover:bg-[#2d3a4a] text-white font-bold py-3 rounded-md flex items-center justify-center gap-2 transition-colors"
              >
                <Zap size={18} />
                Buy Now
              </Link>
            </div>

            {/* Delivery info */}
            <div className="border-t border-gray-200 pt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Truck size={16} className="text-[#FF9900]" />
                <span>Free delivery on orders above &#8377;500</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield size={16} className="text-[#FF9900]" />
                <span>Manufacturer warranty included</span>
              </div>
              <p className="text-sm text-gray-500">Sold by: <span className="font-semibold text-gray-700">Egnaro Mart</span></p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex border-b border-gray-200">
            {(['description', 'specifications', 'reviews'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 text-sm font-semibold capitalize transition-colors ${
                  activeTab === tab
                    ? 'text-[#FF9900] border-b-2 border-[#FF9900]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="p-6">
            {activeTab === 'description' && (
              <div className="prose max-w-none text-gray-700 leading-relaxed">
                <p>{product.description}</p>
                <p className="mt-4">
                  This product is sourced directly from the manufacturer and comes with full warranty
                  support. At Egnaro Mart, we ensure that every product meets the highest quality
                  standards before it reaches you.
                </p>
              </div>
            )}
            {activeTab === 'specifications' && (
              <table className="w-full max-w-lg">
                <tbody>
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <tr key={key} className="border-b border-gray-100">
                      <td className="py-2.5 pr-4 text-sm font-semibold text-gray-700 w-40">
                        {key}
                      </td>
                      <td className="py-2.5 text-sm text-gray-600">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {activeTab === 'reviews' && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={
                          i < Math.floor(product.rating)
                            ? 'fill-[#FF9900] text-[#FF9900]'
                            : 'text-gray-300'
                        }
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    {product.rating} out of 5 ({product.reviews} reviews)
                  </span>
                </div>
                <div className="border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className={i < 4 ? 'fill-[#FF9900] text-[#FF9900]' : 'text-gray-300'} />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">Rajesh K.</span>
                  </div>
                  <p className="text-sm text-gray-600">Good quality product. Works as expected. Delivery was on time.</p>
                </div>
                <div className="border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className={i < 5 ? 'fill-[#FF9900] text-[#FF9900]' : 'text-gray-300'} />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">Priya M.</span>
                  </div>
                  <p className="text-sm text-gray-600">Excellent value for money. Highly recommend this product.</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className={i < 4 ? 'fill-[#FF9900] text-[#FF9900]' : 'text-gray-300'} />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">Arun S.</span>
                  </div>
                  <p className="text-sm text-gray-600">Decent product for the price. Packaging was good.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
