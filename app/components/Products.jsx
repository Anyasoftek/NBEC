import Image from 'next/image';
import { FaArrowCircleRight } from 'react-icons/fa'; // Import an icon
import sangam from "../../assets/sangam.svg"
import sangam2 from "../../assets/sangam2.svg"
import sangam3 from "../../assets/sangam3.svg"


const products = [
  {
    title: 'E-Rickshaw Sangam Ride',
    description: 'low maintenance\ncutting-edge technology',
    imageSrc: sangam, // Replace with actual image path
  },
  {
    title: 'Standard Sangam Ride',
    description: 'Wiring- Water Proof\nMonocoque Structure',
    imageSrc: sangam2,
  },
  {
    title: 'Deluxe Sangam Ride',
    description: 'Wiring- Water Proof\nMonocoque Structure',
    imageSrc: sangam,
  },
];

const ProductCard = ({ title, description, imageSrc }) => {
  return (
    <div className="bg-white rounded-3xl p-6 border-2 shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="relative">
        <Image src={imageSrc} alt={title} layout="responsive" width={500} height={400} className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-medium tracking-wider font-mulish text-lg mb-2">{title}</h3>
        <p className="text-gray-600 tracking-wide font-mulish whitespace-pre-line mb-4">{description}</p>
        <div className="flex justify-end">
          <FaArrowCircleRight className="text-gray-800 text-xl" />
        </div>
      </div>
    </div>
  );
};

const ProductSection = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl  font-medium ml-4 font-mulish text-left mb-8">Wide Range of Products</h2>
      <div className="grid grid-cols-1  rounded-2xl  md:flex-row justify-between  md:grid-cols-3 md:gap-12 gap-20 max-w-7xl mx-auto px-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            description={product.description}
            imageSrc={product.imageSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
