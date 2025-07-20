import { Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">Surya Majji</h3>
            <p className="text-gray-300">
              Data Engineer specializing in scalable data architectures and cloud ecosystems.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-300 hover:text-blue-400 transition-colors">About</Link>
              <Link to="/skills" className="block text-gray-300 hover:text-blue-400 transition-colors">Skills</Link>
              <Link to="/projects" className="block text-gray-300 hover:text-blue-400 transition-colors">Projects</Link>
              <Link to="/contact" className="block text-gray-300 hover:text-blue-400 transition-colors">Contact</Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/SuryaMajji-pdx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="mailto:smajjipdx.de@gmail.com"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Surya Majji. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
