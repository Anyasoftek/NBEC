"use client"
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import people1 from "../../assets/people1.svg"
import people2 from "../../assets/people2.svg"
import people3 from "../../assets/people3.svg"
import Image from 'next/image';
import com from "../../assets/com.svg"
const testimonials = [
  {
    id: 1,
    name: "Rohini Rajan",
    role: "Doing Business Since 2023",
    feedback: "They have transformed our business with their reliability and cost-efficiency",
    image: people1, 
    image2:com,
  },
  {
    id: 2,
    name: "Aryan Pandey",
    role: "Our trusted Partner",
    feedback: "Switching to them was the best decision for our fleet",
    image: people2, 
    image2:com,
  },
  {
    id: 3,
    name: "Arpit Gupta",
    role: "Our trusted Partner",
    feedback: "Our customers love the smooth, quiet ride of NBC's electric rickshaws",
    image: people3, 
    image2:com,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className=" mx-auto py-8 md:py-12">
      <h2 className="md:text-3xl text-2xl font-bold font-gilory text-center mb-8">
        What Our Clients Say
      </h2>
      <div className="md:flex   justify-center  md:gap-8 md:space-y-0 space-y-6  p-4 md:space-x-0 space-x-0">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-supergrey shadow-lg rounded-2xl  p-8 max-w-sm w-full">
            <div className="flex flex-col md:pb-6 text-left mb-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 mb-10 mt-4 rounded-full mr-4"
              />
              <Image
                src={testimonial.image2}
                alt="com"
                className="w-6 h-6 mb-4  mr-4"
              />
              <p className="md:text-base text-sm tracking-wider font-thin font-mulish mb-4 text-gray-800">
              “{testimonial.feedback}”
            </p>
            </div>
            <div >
                <h3 className="md:text-base font-mulish mb-2 font-medium">{testimonial.name}</h3>
                <p className="text-gray-500 font-mulish md:text-sm text-sm">{testimonial.role}</p>
              </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}
