
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Hi, I'm{' '}
                  <span className="text-blue-600">Surya Majji</span>
                </h1>
                <h2 className="text-2xl lg:text-3xl text-gray-700 mt-4">
                  Data Engineer
                </h2>
                <p className="text-xl text-gray-600 mt-4">
                  Based in Austin, Texas
                </p>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Experienced Data Engineer specializing in designing scalable, cost-effective 
                data architectures and optimizing ETL workflows in cloud ecosystems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get In Touch
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-red-400 text-red-600 hover:bg-red-50 px-8 py-3"
                  onClick={() => window.location.href = '/projects'}
                >
                  View My Work
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-red-400 rounded-full flex items-center justify-center">
                  <img 
                    src="/surya-majji-portfolio-austin/images/Adobe Express - file (1).jpg"
                    alt="Surya Majji" 
                    className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-blue-600">5+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-red-500">10+</h3>
              <p className="text-gray-600">Cloud Projects</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-blue-600">AWS</h3>
              <p className="text-gray-600">Certified Expert</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's discuss how I can help optimize your data infrastructure and drive insights.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            onClick={() => window.location.href = '/contact'}
          >
            Start a Conversation
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
