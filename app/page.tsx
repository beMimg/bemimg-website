import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <header className="absolute left-0 top-0 z-40 flex w-full items-center justify-center p-14">
        <Nav />
      </header>
      <main className="flex flex-col bg-black">
        <Hero />
        <Work />
        <About />
      </main>
      <Footer />
    </>
  );
}
