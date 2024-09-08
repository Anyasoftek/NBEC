import React from 'react';
import { Volume2, Settings, Recycle, DollarSign } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-darkgrey shadow-lg p-4 rounded-2xl">
    <Icon className="text-blue mb-2" size={34} />
    <h3 className="text-white font-semibold font-gilory mb-1">{title}</h3>
    <p className="text-gray-400 font-gilory text-xs md:text-sm">{description}</p>
  </div>
);

const FeatureShowcase = () => {
  const features = [
    {
      icon: Volume2,
      title: "Quiet & Comfortable",
      description: "Electric motor operates quietly, providing a more comfortable and peaceful ride for passengers and reducing noise pollution"
    },
    {
      icon: Settings,
      title: "Customization Option",
      description: "Offers a range of customizable features to meet the specific needs of different markets and customer preferences."
    },
    {
      icon: Recycle,
      title: "Sustainable Engineering",
      description: "Electric rickshaws produce zero emissions, helping to reduce air pollution and carbon footprint"
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "With lower operating costs compared to traditional fuel-powered vehicles, electric rickshaws offer significant savings on fuel"
    }
  ];

  return (
    <section className="  text-black md:px-0 px-6 pt-20">
      <div className="max-w-6xl w-full md:flex mx-auto">
        <div className='flex md:mr-6 flex-col'>
        <p className="text-sm mb-2 tracking-widest font-gilroy font-normal">Packed with cool stuff</p>
        <h1 className="text-2xl md:text-4xl tracking-wid font-normal mb-4 font-gilory">Features that set the standard for innovation and efficiency.</h1>
        <p className="mb-6 font-gilory font-poppins tracking-wide md:text-lg text-xs font-thin">
          Experience the power of innovation and sustainability with us. 
          Our electric rickshaws combine cutting-edge technology, 
          efficiency, and eco-friendliness to revolutionize urban 
          transport. Join us in driving a cleaner, greener future.
        </p>
        <button className=" font-gilory font-normal  border-2 font-gilory border-gray-800 md:w-60 w-52 hover:text-white   hover:bg-black cursor-pointer text-gray-900 px-6 py-2 rounded-full  mb-8">
          Explore Features
        </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;