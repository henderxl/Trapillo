import React from 'react';
import { X } from 'lucide-react';

interface ProductModalProps {
  product: {
    img: string;
    title: string;
    desc: string;
  } | null;
  onClose: () => void;
  whatsappNumber: string;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, whatsappNumber }) => {
  if (!product) return null;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`¡Hola! Me interesa el ${product.title}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden animate-fade-in-up">
        <div className="flex flex-col md:flex-row h-full">
          {/* Image Section */}
          <div className="relative w-full md:w-1/2">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
            >
              <X className="w-5 h-5 text-terra" />
            </button>
            <div className="relative h-64 md:h-full">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 p-6 overflow-y-auto max-h-[60vh] md:max-h-[80vh]">
            <h3 className="text-2xl font-bold text-terra mb-3">{product.title}</h3>
            <p className="text-gray-600 mb-6">{product.desc}</p>
            
            <div className="space-y-4">
              <div className="bg-warm-beige/30 p-4 rounded-lg">
                <h4 className="font-semibold text-terra mb-2">Características</h4>
                <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                  <li>• Material: Trapillo de alta calidad</li>
                  <li>• Tejido a mano con técnica de crochet</li>
                  <li>• Forro interior resistente</li>
                  <li>• Herrajes en tono dorado</li>
                </ul>
              </div>
              
              <div className="bg-warm-beige/30 p-4 rounded-lg">
                <h4 className="font-semibold text-terra mb-2">Medidas Aproximadas</h4>
                <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                  <li>• Alto: 25-30 cm</li>
                  <li>• Ancho: 30-35 cm</li>
                  <li>• Profundidad: 12-15 cm</li>
                </ul>
              </div>
            </div>

            <button
              className="w-full mt-6 bg-terra text-white py-3 rounded-full hover:bg-terra/90 transition-all duration-300 font-medium"
              onClick={handleWhatsAppClick}
            >
              Consultar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;