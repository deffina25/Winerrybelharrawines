import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl mb-4 tracking-wider">BELHARRA</h3>
            <p className="text-background/70 max-w-md">
              Crafting exceptional wines with passion and dedication since 1985. 
              Experience the art of winemaking at its finest.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#wines" className="hover:text-background transition-colors">Our Wines</a></li>
              <li><a href="#about" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#visit" className="hover:text-background transition-colors">Visit Us</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="hover:text-background/70 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-background/70 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-background/70 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-background/70">
              Newsletter: Sign up for exclusive offers
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>&copy; 2026 Belharra Wines. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
