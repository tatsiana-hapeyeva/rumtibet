import { Header } from "../sections/header";
import { Hero } from "../sections/hero";
import { About } from "../sections/about";
import { Advantages } from "../sections/advantages";
import { Directions } from "../sections/directions";
import { Blog } from "../sections/blog";
import { PhotoReports } from "../sections/photo-reports";
import { SubscriptionForm } from "../sections/subscription-form";
import { Footer } from "../sections/footer";

export function HomePage() {
  return (
    <div>
      <div className="main__image">
        <Header />
        <Hero />
      </div>

      <About />
      <Advantages />
      <Directions />
      <Blog />
      <PhotoReports />
      <SubscriptionForm />

      <Footer />
    </div>
  );
}
