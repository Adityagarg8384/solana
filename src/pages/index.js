import { Achievements } from '@/components/landing-page/achievements';
import { AboutCourses } from '@/components/landing-page/courses';
import { Hero } from '@/components/landing-page/hero';
import { Navbar } from '@/components/Navbar/navbar';


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Achievements/>
      <AboutCourses/>
    </div >
  );
}
