
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/lovable-uploads/1df3cf2e-be3d-4edd-a4cb-91e43ef80aa3.png" 
              alt="Prime Lab Studios" 
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-400 mb-4 max-w-md">
              We're a video editing agency specializing in short-form content that drives 
              engagement and converts viewers into loyal customers.
            </p>
            <div className="flex space-x-4">
              {/* Social media links */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.223.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44.02c.08 0 .15.01.22.02 1.44.15 2.48 1.68 2.46 3.55-.02 1.84.04 3.7-.03 5.54-.08 1.8-1.33 3.28-3.09 3.45-1.93.19-3.9.11-5.85.12-1.93-.01-3.85.07-5.78-.08-1.8-.14-3.24-1.61-3.32-3.42C.98 7.4 1.01 5.6.98 3.8.96 1.93 2.04.68 3.87.52 5.24.39 6.63.25 8.02.11 9.53-.02 11.02-.01 12.53.02zM8.78 6.24c.28-.3.74-.38 1.17-.25.12.04.24.09.35.16.23.14.4.36.5.6.07.17.1.35.09.53-.01.7-.01 1.41-.01 2.12 0 .46.01.93-.02 1.39-.02.3-.14.58-.34.79-.2.21-.48.33-.77.35-.47.04-.95.02-1.42.01-.3-.01-.58-.14-.79-.34-.21-.2-.33-.48-.35-.77-.04-.47-.02-.95-.01-1.42 0-.7 0-1.41.01-2.12.01-.18.05-.36.12-.53.1-.24.27-.46.5-.6.11-.07.23-.12.35-.16.43-.13.89-.05 1.17.25zm3.44 0c.28-.3.74-.38 1.17-.25.12.04.24.09.35.16.23.14.4.36.5.6.07.17.1.35.09.53-.01.7-.01 1.41-.01 2.12 0 .46.01.93-.02 1.39-.02.3-.14.58-.34.79-.2.21-.48.33-.77.35-.47.04-.95.02-1.42.01-.3-.01-.58-.14-.79-.34-.21-.2-.33-.48-.35-.77-.04-.47-.02-.95-.01-1.42 0-.7 0-1.41.01-2.12.01-.18.05-.36.12-.53.1-.24.27-.46.5-.6.11-.07.23-.12.35-.16.43-.13.89-.05 1.17.25z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Short-form Video Editing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Social Media Content</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Brand Video Production</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Content Strategy</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>hello@primelabstudios.com</li>
              <li>+1 (555) 123-4567</li>
              <li>
                <button 
                  onClick={() => {
                    const bookCallSection = document.getElementById('book-call');
                    bookCallSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Book a Call
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Prime Lab Studios. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
