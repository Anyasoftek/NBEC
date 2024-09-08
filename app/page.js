import Image from "next/image";
import Navbar from "./components/Navbar";
import Aboutus from "./components/AboutUs";
import FeatureShowcase from "./components/FeatureCard";
import ProductSection from "./components/Products";
import DealerCallToAction from "./components/Action";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
<main className="relative bg-white flex justify-center items-center flex-col overflow-hidden mx-auto ">
      
        <Navbar/>
        <Aboutus/>
        <div>
        <FeatureShowcase/>
        </div>
        <ProductSection/>
        <div className="w-full px-0"> 
    <DealerCallToAction/>
  </div>
  <Testimonials/>
  <div className="w-full md:px-28 px-20">
  <Newsletter/>
  </div>
 
  <Footer/>
  
 
 
       
      
    </main>
  )}
