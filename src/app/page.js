import Header from '@/components/Header/Header';
import Onboarding from '@/components/Onboarding/Onboarding';
import Footer from '@/components/Footer/Footer';
import Services from '@/components/Services/Services';

export default function Home() {
  return (
    <div>
      <Header />
      <Onboarding />
      <Services />
      <Footer />
    </div>
  );
}
