import { Achievements } from '@/components/landing-page/achievements';
import { AboutCourses } from '@/components/landing-page/courses';
import { Hero } from '@/components/landing-page/hero';


export default function Home() {
  return (
    <div>
      <Hero/>
      <Achievements/>
      <AboutCourses/>
    </div >
  );
}
