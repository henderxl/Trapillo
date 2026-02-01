import React, { useState } from 'react';
import { Heart, Leaf, Package, Sparkles, ArrowRight, Instagram, Facebook, PointerIcon } from 'lucide-react';
import Navbar from './components/Navbar';
import ProductModal from './components/ProductModal';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<{
    img: string;
    title: string;
    desc: string;
  } | null>(null);

  const scrollToCollection = () => {
    const element = document.querySelector('#coleccion');
    if (element) {
      const offset = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/573197540017', '_blank');
  };

  const products = [
    {
      img: "https://iili.io/3zOU1Hv.jpg",
      title: "Bolso Trenzado Marfil",
      desc: "Diseño exclusivo con patrón trenzado y detalles en contraste dorado"
    },
    {
      img: "https://iili.io/3zOUaKg.jpg",
      title: "Hobo Camel Borla",
      desc: "Elegante bolso con borla decorativa y acabado texturizado"
    },
    {
      img: "https://iili.io/3zOUcla.jpg",
      title: "Bolso Rosa Pétalo",
      desc: "Delicado diseño en rosa suave con detalles dorados"
    },
    {
      img: "https://iili.io/3zOUlUJ.jpg",
      title: "Circular Camel Tassel",
      desc: "Diseño circular moderno con borla XL y cierre magnético"
    },
    {
      img: "https://iili.io/3zOUMDN.jpg",
      title: "Tote Blanco Nieve",
      desc: "Espacioso y versátil con tejido en punto alto"
    },
    {
      img: "https://iili.io/3zOUWxI.jpg",
      title: "Shopper Negro Noche",
      desc: "Elegante bolso negro con patrón de punto bajo"
    },
    {
      img: "https://iili.io/3zOUhiX.jpg",
      title: "Mini Aqua Fresh",
      desc: "Compacto y llamativo en tono turquesa vibrante"
    },
    {
      img: "https://iili.io/3zOUNls.jpg",
      title: "Duo Pink & Yellow",
      desc: "Diseño bicolor alegre en tonos contrastantes"
    }
  ];

  return (
    <div className="min-h-screen bg-warm-beige">
      <Navbar openWhatsApp={openWhatsApp} />
      
      {/* Hero Section */}
      <header id="inicio" className="relative h-screen flex items-center justify-center bg-gradient-to-b from-soft-rose to-warm-beige overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558304970-abd247ea5d0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')] opacity-10 bg-cover bg-center transform scale-105 animate-subtle-zoom" />
        <div className="absolute inset-0 bg-gradient-to-b from-dusty-pink/20 to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <Heart className="w-8 h-8 text-terra animate-wave" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-terra mb-6 text-shadow">
              Bolsos Artesanales
            </h1>
            <p className="text-xl md:text-2xl text-terra/80 max-w-2xl mx-auto mb-12 leading-relaxed">
              Descubre la magia del trapillo en cada uno de nuestros bolsos tejidos a mano,
              donde el arte y la sostenibilidad se encuentran
            </p>
            <button 
              onClick={openWhatsApp}
              className="group bg-terra text-white px-10 py-4 rounded-full text-lg hover:bg-terra/90 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-3 mx-auto"
            >
              Contactar por WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-terra rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-3 bg-terra rounded-full" />
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="sobre-nosotros" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-soft-rose to-warm-beige opacity-20" />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-10 text-terra text-shadow">El Arte del Trapillo</h2>
            <div className="prose prose-lg mx-auto text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed">
                El trapillo es un material textil sostenible que da una segunda vida a retales de tela.
                Cada bolso es único gracias a la naturaleza artesanal del proceso y las diferentes
                texturas que logramos crear.
              </p>
              <p className="text-xl leading-relaxed">
                Nuestros bolsos son tejidos a mano con técnicas tradicionales de crochet,
                fusionando la artesanía ancestral con diseños contemporáneos que se adaptan
                a tu estilo de vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-warm-beige relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-soft-rose to-transparent opacity-30" />
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              {
                icon: Heart,
                title: "Hecho con Amor",
                desc: "Cada puntada tejida con dedicación y cariño",
                color: "text-terra"
              },
              {
                icon: Leaf,
                title: "Eco-friendly",
                desc: "Materiales sostenibles para un futuro mejor",
                color: "text-sage"
              },
              {
                icon: Package,
                title: "Durabilidad",
                desc: "Diseñados para acompañarte por años",
                color: "text-honey"
              },
              {
                icon: Sparkles,
                title: "Diseño Único",
                desc: "Cada pieza cuenta su propia historia",
                color: "text-ocean"
              }
            ].map((feature, index) => (
              <div key={index} className="hover-lift text-center p-8 rounded-2xl bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500">
                <feature.icon className={`w-14 h-14 ${feature.color} mx-auto mb-6`} />
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Gallery */}
      <section id="coleccion" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-terra text-shadow">Nuestra Colección</h2>
            <p className="text-xl text-terra/80 max-w-2xl mx-auto">
              Cada bolso es una obra de arte única, tejida con amor y materiales sostenibles
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-terra/90 via-terra/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-white/90 mb-4 text-sm">{product.desc}</p>
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="bg-white text-terra hover:bg-warm-beige px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 w-full flex items-center justify-center gap-2 group-hover:shadow-lg"
                  >
                    Ver Detalles
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-terra text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558304970-abd247ea5d0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-terra to-terra/70" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">¿Lista para llevar arte en tus manos?</h2>
            <p className="text-xl mb-12 text-white/90 leading-relaxed">
              Cada bolso cuenta una historia de sostenibilidad, artesanía y estilo único.
              Únete a nuestra comunidad de amantes de la moda consciente.
            </p>
            <button 
              onClick={openWhatsApp}
              className="bg-white text-terra px-10 py-4 rounded-full text-lg font-semibold hover:bg-warm-beige transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Contactar por WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-terra/95 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Bolsos Artesanales</h3>
            <p className="text-white/80 text-lg mb-8">Artesanía sostenible para el mundo moderno</p>
            <div className="flex justify-center space-x-8 mb-10">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: PointerIcon, label: "Pinterest" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:text-warm-beige transition-colors flex items-center gap-2 hover-lift"
                >
                  <social.icon className="w-6 h-6" />
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
            <div className="text-white/60 text-sm">
              © 2025 Bolsos Artesanales. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        whatsappNumber="573197540017"
      />
    </div>
  );
}

export default App;