import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <header className="absolute flex items-center justify-center  z-20 top-0 left-0 w-full p-14 ">
        <Nav />
      </header>
      <main className="flex flex-col gap-40 bg-black pb-40">
        <Hero />
        <Work />
        <About />
      </main>
      <Footer />
    </>
  );
}
