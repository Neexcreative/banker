'use client';

import { useState } from 'react';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      quote: "Working with this motion designer was a game-changer for our brand. The animations created for our product launch exceeded our expectations and significantly increased engagement.",
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechVision Inc."
    },
    {
      id: 2,
      quote: "Exceptional technical skill combined with creative vision. The explainer video perfectly communicated our complex service in a way that was both clear and visually stunning.",
      name: "Michael Chen",
      position: "CEO",
      company: "Global Finance Group"
    },
    {
      id: 3,
      quote: "The attention to detail and commitment to quality is outstanding. Our music video effects were delivered on time and the results were beyond what we imagined possible.",
      name: "Alicia Rodriguez",
      position: "Creative Producer",
      company: "Rhythm Records"
    },
    {
      id: 4,
      quote: "Reliable, professional, and incredibly talented. The social media package transformed our online presence with consistent, high-quality motion graphics that our audience loves.",
      name: "David Wilson",
      position: "Social Media Manager",
      company: "Digital Marketing Agency"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-red-600">Client</span> Testimonials
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Hear what clients have to say about their experience working with me.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="bg-black border border-gray-800 rounded-lg p-8 md:p-12 shadow-lg">
            <div className="mb-6">
              <svg className="h-10 w-10 text-red-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl text-gray-300 italic mb-6">{testimonials[activeIndex].quote}</p>
              <div className="flex items-center">
                {/* Client avatar placeholder */}
                <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                  <span className="text-red-600 font-bold text-sm">{testimonials[activeIndex].name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-bold">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-400 text-sm">{testimonials[activeIndex].position}, {testimonials[activeIndex].company}</p>
                </div>
              </div>
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-red-600 w-6' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-black border border-gray-800 rounded-full p-2 text-gray-400 hover:text-white hover:border-red-600 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-12 bg-black border border-gray-800 rounded-full p-2 text-gray-400 hover:text-white hover:border-red-600 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
