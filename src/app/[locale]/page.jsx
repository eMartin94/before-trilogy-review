import Footer from '@/components/Footer';
import HeroText from '@/components/HeroText';
import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';

export default function Home() {
  return (
    <div className='relative'>
      <header className='fixed top-0 left-0 w-full z-10 flex justify-center'>
        <Navbar />
      </header>
      <main className=''>
        <Hero />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
