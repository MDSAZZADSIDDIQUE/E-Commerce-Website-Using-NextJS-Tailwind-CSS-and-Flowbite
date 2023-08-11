import Hero from "@/components/Hero";
import Navbar from "../layouts/Navbar";
import Footer from "@/layouts/Footer";
import CTA from "@/components/CTA";
import ReveresedCTA from "@/components/ReversedCTA";
import ProductCard from "@/components/ProductCard";
import ProductGallery from "@/components/ProductGallery";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <CTA />
      <ReveresedCTA />
      <CTA />
      <Footer />
    </main>
  );
};

export default Home;
