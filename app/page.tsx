import Hero from "@/components/Hero";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <header className="absolute flex items-center justify-center  z-20 top-0 left-0 w-full p-14 ">
        <Nav />
      </header>
      <main>
        <Hero />
        <div className="h-screen bg-[#18181b]"></div>
      </main>
    </>
  );
}
