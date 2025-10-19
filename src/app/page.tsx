import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import ImageTicker from "@/components/ImageTicker";
import Services from "@/components/Services";

export default function Home() {
  return (
    <section>
      <Header/>
      <Hero />
      <ImageTicker/>
      <Services/>
    </section>
  );
}
