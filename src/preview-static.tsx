import { Menu, ShoppingCart } from "lucide-react";
import { Button } from "./components/ui/button";

export default function PreviewStatic() {
  return (
    <div className="min-h-screen bg-[#f5f1ed]">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-[#8B4513] rounded-full" />
            </div>
            <div className="text-white">
              <div className="text-xs tracking-widest">BELHARRA</div>
              <div className="text-[10px] tracking-wider opacity-80">WINES</div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-white text-sm tracking-wide">
            <a href="#wines" className="hover:opacity-70 transition-opacity">WINES</a>
            <a href="#tasting-room" className="hover:opacity-70 transition-opacity">TASTING ROOM</a>
            <a href="#about" className="hover:opacity-70 transition-opacity">ABOUT</a>
            <a href="#contact" className="hover:opacity-70 transition-opacity">CONTACT</a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/20">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1763786470714-c76a122efa0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxpZm9ybmlhJTIwdmluZXlhcmQlMjBhdXR1bW58ZW58MXx8fHwxNzY5MTExMTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Vineyard"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
              HANDCRAFTED<br />
              <span className="inline-block">WINES <span className="font-serif italic text-yellow-600">of California</span></span>
            </h1>
            <Button 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#8B4513] transition-all px-8 py-6 text-base tracking-wider mt-8"
            >
              Discover The Wines
            </Button>
          </div>
        </div>

        {/* Wine Bottle Overlay */}
        <div className="absolute right-0 bottom-0 w-64 h-96 hidden lg:block">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-tl-3xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-80 bg-gradient-to-b from-gray-900 via-red-950 to-black rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Raw Authentic Section */}
      <section className="py-20 bg-[#f5f1ed]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-6xl md:text-7xl mb-8">
                <span className="text-[#8B4513] font-light italic">Raw</span><br />
                <span className="font-serif italic text-5xl md:text-6xl">Authentic</span><br />
                <span className="text-4xl md:text-5xl">BORN FROM THE WILD.</span>
              </h2>
              <p className="text-gray-700 leading-relaxed max-w-md">
                From the rugged mountains to the wild valleys, our wines are 
                shaped by the land and nurtured with heart. Each bottle reflects 
                the spirit of adventure and the untamed beauty of California's wilderness.
              </p>
            </div>

            <div className="relative">
              <svg viewBox="0 0 300 400" className="w-full max-w-md mx-auto opacity-20">
                <path d="M50,50 L250,50 L250,350 L200,380 L100,380 L50,350 Z" fill="none" stroke="#8B4513" strokeWidth="2"/>
                <circle cx="150" cy="200" r="20" fill="#8B4513"/>
                <path d="M100,100 Q150,150 200,100" fill="none" stroke="#8B4513" strokeWidth="1"/>
              </svg>
              <div className="absolute top-1/2 right-0 -translate-y-1/2">
                <div className="text-6xl">🌴</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Wines Section */}
      <section id="wines" className="py-20 bg-[#4a2c1f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-6xl md:text-7xl mb-8 leading-tight">
                <span className="text-yellow-600">DISCOVER</span><br />
                WINES
              </h2>
              <Button 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#4a2c1f] transition-all px-8 py-4 text-base tracking-wider"
              >
                Go To Shop
              </Button>
            </div>

            <div className="relative">
              <div className="flex gap-4 justify-center items-end">
                <div className="w-20 h-64 bg-gradient-to-b from-gray-900 via-red-950 to-black rounded-lg shadow-2xl transform rotate-[-5deg]" />
                <div className="w-24 h-72 bg-gradient-to-b from-gray-900 via-red-950 to-black rounded-lg shadow-2xl" />
                <div className="w-20 h-64 bg-gradient-to-b from-gray-900 via-red-950 to-black rounded-lg shadow-2xl transform rotate-[5deg]" />
              </div>

              {/* Price Tag */}
              <div className="absolute -right-4 top-1/3 bg-white text-[#4a2c1f] p-6 rounded-lg shadow-xl">
                <div className="text-xs mb-1">3 Organic Reds</div>
                <div className="text-2xl font-bold mb-1">Belharra Grant Loves</div>
                <div className="text-xs mb-3">Our signature collection</div>
                <div className="text-4xl mb-3">$99</div>
                <div className="text-sm text-gray-600">$120 Retail</div>
                <Button className="w-full mt-4 bg-[#4a2c1f] text-white hover:bg-[#3a1c0f]">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tasting Room Section */}
      <section id="tasting-room" className="py-20 bg-[#f5f1ed]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1632854269219-4ec2553b913c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lJTIwdGFzdGluZyUyMGdsYXNzJTIwdmluZXlhcmR8ZW58MXx8fHwxNzY5MTExMTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Tasting Room"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 opacity-30">
                <div className="text-9xl">🍷</div>
              </div>
            </div>

            <div>
              <h2 className="text-6xl md:text-7xl mb-6">
                <span className="font-serif italic text-[#8B4513]">Tasting</span><br />
                <span className="text-5xl">ROOM</span>
              </h2>
              <h3 className="text-2xl mb-4">Belharra at Maison Fayard, Napa</h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                Immerse yourself in the world of Maison Fayard. An enchanting space that 
                celebrates the art of winemaking, offering a journey into the essence of 
                wine, the artistry of winemaking, and the artistry of the land. Experience 
                wine like artistry of winemaking. From the practices of old-world winemaking 
                to innovative and welcoming imbibing in the tasting room, our boutique wine 
                and tour caters.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white p-4 rounded border border-gray-300">
                  <label className="text-xs text-gray-600 block mb-2">PARTY SIZE</label>
                  <select className="w-full text-sm bg-transparent border-none focus:outline-none">
                    <option>2 GUESTS</option>
                    <option>4 GUESTS</option>
                    <option>6 GUESTS</option>
                  </select>
                </div>
                <div className="bg-white p-4 rounded border border-gray-300">
                  <label className="text-xs text-gray-600 block mb-2">DATE</label>
                  <select className="w-full text-sm bg-transparent border-none focus:outline-none">
                    <option>MAR 15, 2025</option>
                  </select>
                </div>
                <div className="bg-white p-4 rounded border border-gray-300">
                  <label className="text-xs text-gray-600 block mb-2">TIME</label>
                  <select className="w-full text-sm bg-transparent border-none focus:outline-none">
                    <option>2:00 PM</option>
                  </select>
                </div>
              </div>

              <Button className="w-full bg-[#8B4513] text-white hover:bg-[#6a3410] py-6 text-lg tracking-wider">
                BOOK NOW
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#f5f1ed] border-t border-[#d4c4b0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <div className="text-sm tracking-widest text-gray-700 mb-2">BELHARRA WINES</div>
              <div className="text-xs text-gray-500">Napa Valley, California</div>
            </div>

            <div className="relative">
              <div className="w-32 h-32 rounded-full border-4 border-[#8B4513] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xs tracking-wider text-[#8B4513]">CRAFTED</div>
                  <div className="text-lg font-serif italic text-[#8B4513]">Handmade</div>
                  <div className="text-xs tracking-wider text-[#8B4513]">IN THE WILD</div>
                </div>
              </div>
            </div>

            <div className="flex gap-6 text-gray-600">
              <a href="#" className="hover:text-[#8B4513] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
              </a>
              <a href="#" className="hover:text-[#8B4513] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="hover:text-[#8B4513] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}