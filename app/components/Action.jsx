import Image from 'next/image';
import handshake from '../../assets/handshake.svg'; // Replace with the correct image path

const DealerCallToAction = () => {
  return (
    <section className="relative w-full h-[320px] md:h-[420px] flex items-center justify-center">
      <Image 
        src={handshake} 
        alt="Handshake" 
        layout="fill" 
        objectFit="cover" 
        quality={100} 
       
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-white font-bold text-3xl md:text-5xl mb-4">
          Join the Revolution: Become a Dealer Today!
        </h2>
        <p className="text-gray-200 text-lg md:text-xl mb-8">
          Quick approval and onboarding.
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue text-white hover:bg-white  py-2 px-10 rounded-full hover:text-black hover:bg-blue-7 transition">
            Reach Out
          </button>
          <button className="border-2 border-white text-white py-2 px-8 rounded-full hover:bg-white hover:text-black transition">
            Policy & Terms
          </button>
        </div>
      </div>
    </section>
  );
};

export default DealerCallToAction;
