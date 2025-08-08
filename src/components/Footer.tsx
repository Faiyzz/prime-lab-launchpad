
import { Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2" data-aos="fade-up">
            <img 
              src="/lovable-uploads/PrimaryIcon.png" 
              alt="Prime Lab Studios" 
              className="h-10 w-auto mb-4 hover:opacity-80 transition-opacity duration-300"
            />
            <p className="text-gray-400 mb-4 max-w-md">
              We're a video editing agency specializing in short-form content that drives 
              engagement and converts viewers into loyal customers.
            </p>
            <div className="flex space-x-4">
              {/* Instagram link only */}
              <a 
                href="https://www.instagram.com/primelabstudiosllc?igsh=MWI3OWtuY2hwMjEyaQ==" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Short-form Content</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Long-form Content</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Carousel Posts</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Content Strategy</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors duration-300">office@primelabstudios.com</li>
              <li className="hover:text-white transition-colors duration-300">307-400-1303</li>
              <li className="text-sm hover:text-white transition-colors duration-300">
                2232 DELL RANGE BLVD<br />
                SUITE 245<br />
                CHEYENNE, WY 82009
              </li>
              <li>
                <button 
                  onClick={() => {
                    const bookCallSection = document.getElementById('book-call');
                    bookCallSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors duration-300 text-left"
                >
                  Book a Call
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center" data-aos="fade-up" data-aos-delay="300">
          <p className="text-gray-400 text-sm">
            © 2025 Prime Lab Studios. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
