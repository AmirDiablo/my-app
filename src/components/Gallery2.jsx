import React, { useState, useRef, useEffect } from 'react';
import dorm1 from "../assets/assets/dorm.jpg"
import dorm2 from "../assets/assets/dorm2.png"
import dorm3 from "../assets/assets/dorm3.jpg"
import dorm4 from "../assets/assets/dorm4.jpg"
import dorm5 from "../assets/assets/dorm5.jpg"
import dorm6 from "../assets/assets/dorm6.jpg"

const CurvedTeamGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const teamMembers = [
    {
      id: 1,
      name: "سارا محمدی",
      position: "مدیر پروژه",
      image: dorm1
    },
    {
      id: 2,
      name: "علی رضایی",
      position: "توسعه‌دهنده ارشد",
      image: dorm2
    },
    {
      id: 3,
      name: "نازنین کریمی",
      position: "طراح UX/UI",
      image: dorm3
    },
    {
      id: 4,
      name: "محمد حسینی",
      position: "تحلیل‌گر داده",
      image: dorm4
    },
    {
      id: 5,
      name: "فاطمه احمدی",
      position: "متخصص بازاریابی",
      image: dorm5
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  // محاسبه موقعیت‌های منحنی
  const getCardPosition = (index) => {
    const total = teamMembers.length;
    const relativeIndex = (index - currentIndex + total) % total;
    
    const positions = [
      { scale: 0.6, x: -350, y: 80, opacity: 0.5, zIndex: 10, rotation: -20, blur: 4 }, // چپ
      { scale: 0.8, x: -180, y: 30, opacity: 0.7, zIndex: 20, rotation: -10, blur: 2 }, // چپ-وسط
      { scale: 1, x: 0, y: 0, opacity: 1, zIndex: 30, rotation: 0, blur: 0 }, // مرکز
      { scale: 0.8, x: 180, y: 30, opacity: 0.7, zIndex: 20, rotation: 10, blur: 2 }, // راست-وسط
      { scale: 0.6, x: 350, y: 80, opacity: 0.5, zIndex: 10, rotation: 20, blur: 4 }, // راست
    ];

    return positions[relativeIndex] || positions[0];
  };

  // چرخش خودکار
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 py-12 px-4">
      
      {/* گالری خمیده */}
      <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          ref={containerRef}
          className="relative w-full max-w-6xl h-[400px] flex items-center justify-center"
        >
          {/* خط منحنی پشت‌زمینه */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-1 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent rounded-full"></div>
          
          {/* تصاویر تیم */}
          {teamMembers.map((member, index) => {
            const position = getCardPosition(index);
            
            return (
              <div
                key={member.id}
                className="absolute transition-all duration-700 ease-out cursor-pointer"
                style={{
                  transform: `translateX(${position.x}px) translateY(${position.y}px) scale(${position.scale}) rotateY(${position.rotation}deg)`,
                  opacity: position.opacity,
                  zIndex: position.zIndex,
                  filter: `blur(${

                position.blur}px)`,
                }}
                onClick={() => setCurrentIndex(index)}
              >
                <div className="relative group">
                  {/* تصویر اصلی با رنگ طبیعی */}
                  <div className="w-64 h-80 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Overlay اطلاعات فقط هنگام hover */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold text-center mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {member.name}
                    </h3>
                    <p className="text-blue-300 text-sm text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {member.position}
                    </p>
                  </div>
 */}
                  {/* هایلایت برای تصویر فعال */}
                  {index === currentIndex && (
                    <div className="absolute inset-0 border-2 border-blue-400 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.5)] animate-pulse"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* دکمه‌های ناوبری */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-lg rounded-full w-14 h-14 flex items-center justify-center hover:bg-white/30 transition-all duration-300 group z-50 border border-white/30"
        >
          <svg className="w-6 h-6 text-white transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-lg rounded-full w-14 h-14 flex items-center justify-center hover:bg-white/30 transition-all duration-300 group z-50 border border-white/30"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* نقاط ناوبری */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-125 shadow-lg' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default CurvedTeamGallery;