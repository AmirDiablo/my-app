import React, { useState } from 'react';
import dorm1 from "../assets/assets/dorm.jpg"
import dorm2 from "../assets/assets/dorm2.png"
import dorm3 from "../assets/assets/dorm3.jpg"
import dorm4 from "../assets/assets/dorm4.jpg"
import dorm5 from "../assets/assets/dorm5.jpg"
import dorm6 from "../assets/assets/dorm6.jpg"
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate()

  const images = [
    { id: 1, src: dorm1, title: 'اتاق‌های استراحت' },
    { id: 2, src: dorm2, title: 'سالن مطالعه' },
    { id: 3, src: dorm3, title: 'سلف سرویس' },
    { id: 4, src: dorm4, title: 'فضای ورزشی' },
    { id: 5, src: dorm5, title: 'لابی خوابگاه' },
    { id: 6, src: dorm6, title: 'محیط بیرونی' },
  ];

  return (
    <section id="gallery" className="py-16 bg-gray-50 mx-5 lg:mx-30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          گالری تصاویر خوابگاه
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          تصاویری از محیط خوابگاه، اتاق‌ها، امکانات رفاهی و فضای کلی دانشگاه
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div 
              key={image.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.title}
                className="w-full h-48 object-cover hover:scale-105 transition duration-300"
                onClick={()=> {navigate("/dorm/restroom"), scrollTo(0, 0)}}
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;