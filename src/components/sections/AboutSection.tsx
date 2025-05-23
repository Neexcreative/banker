'use client';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-red-600">About</span> Me
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl border-2 border-red-600">
            <img 
              src="/marlon2.png" 
              alt="Marlon Silva" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
          
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-4">Marlon Franca (Marloneex)</h3>
            <p className="text-gray-300 mb-6">
              I am a passionate motion designer and video production specialist with over 5 years of experience creating compelling visual content for brands and businesses. My work combines technical expertise with creative storytelling to deliver impactful results.
            </p>
            <p className="text-gray-300 mb-6">
              Specializing in motion graphics, video editing, and 3D animation, I bring concepts to life with a keen eye for detail and a commitment to excellence. My approach focuses on understanding client objectives and translating them into visually stunning content that engages audiences.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="text-red-600 font-bold mb-2">Skills</h4>
                <ul className="text-gray-300">
                  <li className="mb-1">• Graphic Desing</li>
                  <li className="mb-1">• Video Production</li>
                  <li className="mb-1">• Motion Graphic</li>
                  <li className="mb-1">• 3D Render</li>
                </ul>
              </div>
              <div>
                <h4 className="text-red-600 font-bold mb-2">Softwares</h4>
                <ul className="text-gray-300">
                  <li className="mb-1">• Adobe Suite</li>
                  <li className="mb-1">• DaVinci Resolve</li>
                  <li className="mb-1">• Cinema 4D</li>
                  <li className="mb-1">• MS Office</li>
                </ul>
              </div>
            </div>
            
            <a 
              href="/CVMarlonSilva.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
