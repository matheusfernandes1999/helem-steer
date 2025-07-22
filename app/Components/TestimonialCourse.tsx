'use client';
import React, { useRef, useEffect } from 'react';
import { ChevronRight, ChevronLeft, User } from 'lucide-react';

const testimonials = [
  { id: 1, name: 'Maria', feedback: 'Esse curso mudou minha forma de ensinar!', imageUrl: '' },
  { id: 2, name: 'João', feedback: 'Melhorei muito meu posicionamento no mercado!', imageUrl: '' },
  { id: 3, name: 'Ana', feedback: 'Ferramentas práticas e aplicáveis desde o primeiro dia.', imageUrl: 'https://i.pravatar.cc/150?img=32' },
  { id: 4, name: 'Carlos', feedback: 'Hoje consigo cobrar mais pelas minhas aulas.', imageUrl: '' },
  { id: 5, name: 'Laura', feedback: 'Conteúdo direto ao ponto e muito claro.', imageUrl: 'https://i.pravatar.cc/150?img=47' },
  { id: 6, name: 'Pedro', feedback: 'Excelente metodologia de ensino.', imageUrl: 'https://i.pravatar.cc/150?img=12' },
  { id: 7, name: 'Sofia', feedback: 'Resultados visíveis em pouco tempo.', imageUrl: 'https://i.pravatar.cc/150?img=25' },
  { id: 8, name: 'Miguel', feedback: 'Investimento que vale muito a pena.', imageUrl: '' },
  { id: 9, name: 'Carla', feedback: 'Professores muito qualificados.', imageUrl: 'https://i.pravatar.cc/150?img=44' },
  { id: 10, name: 'Roberto', feedback: 'Mudou completamente meu negócio.', imageUrl: 'https://i.pravatar.cc/150?img=51' },
];

const TestimonialCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  // Create infinite loop array by duplicating testimonials
  const loopedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const cardWidth = 276; // 280px width + 16px gap

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    // Start at the middle set (original testimonials)
    const initialScrollPosition = testimonials.length * cardWidth;
    scrollElement.scrollLeft = initialScrollPosition;

    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = scrollElement;
      const maxScroll = scrollWidth - clientWidth;
      
      // If we've scrolled to the end (last duplicated set), jump to the beginning of second set
      if (scrollLeft >= maxScroll - 10) {
        isScrollingRef.current = true;
        scrollElement.scrollLeft = testimonials.length * cardWidth;
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 50);
      }
      // If we've scrolled to the beginning (first duplicated set), jump to the beginning of last set
      else if (scrollLeft <= 10) {
        isScrollingRef.current = true;
        scrollElement.scrollLeft = testimonials.length * cardWidth;
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 50);
      }
    };

    scrollElement.addEventListener('scroll', handleScroll);
    
    return () => {
      scrollElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollNext = () => {
    if (scrollRef.current && !isScrollingRef.current) {
      scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (scrollRef.current && !isScrollingRef.current) {
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-10 overflow-hidden">
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Container with proper padding for arrows */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="hide-scrollbar flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            paddingLeft: 'calc(50% - 140px)', // Centers first card on mobile
            paddingRight: 'calc(50% - 140px)' // Centers last card on mobile
          }}
        >
          {loopedTestimonials.map((t, index) => (
            <div
              key={`${t.id}-${Math.floor(index / testimonials.length)}`}
              className="testimonial-card flex-shrink-0 w-[260px] bg-semantic-background-list hover:bg-semantic-background-list-hover duration-300 ease-linear transition-all rounded-xl p-6 snap-center shadow-md flex flex-col h-82"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                {t.imageUrl ? (
                  <img
                    src={t.imageUrl}
                    alt={t.name}
                    className="w-36 h-36 rounded-full object-cover border-2 border-purple-500"
                  />
                ) : (
                  <div className="w-36 h-36 rounded-full bg-semantic-background-secondary flex items-center justify-center">
                    <User className="text-gray-400 w-8 h-8" />
                  </div>
                )}
              </div>

              {/* Texto do depoimento - flex-grow para ocupar espaço disponível */}
              <div className="flex-grow flex flex-col justify-center">
                <p className="text-white text-sm text-center leading-relaxed mb-4">{t.feedback}</p>
                <p className="text-gray-400 text-xs text-center">— {t.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={scrollPrev}
          className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 p-2 rounded-full bg-[#1f1f2e] hover:bg-[#333] transition z-10"
        >
          <ChevronLeft className="text-white w-5 h-5" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollNext}
          className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 p-2 rounded-full bg-[#1f1f2e] hover:bg-[#333] transition z-10"
        >
          <ChevronRight className="text-white w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default TestimonialCarousel;