import Hero from '../components/home/Hero';
import SensesSection from '../components/home/SensesSection';
import WorriesSection from '../components/home/WorriesSection';
import PlaySection from '../components/home/PlaySection';
import AgesSection from '../components/home/AgesSection';

export default function Home() {
  return (
    <>
      <Hero />
      <SensesSection />
      <WorriesSection />
      <PlaySection />
      <AgesSection />
    </>
  );
}
