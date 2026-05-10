import "./assets/styles/index.css";
import "./assets/styles/main.css";
import "./assets/styles/normalize.css";

import { Header } from "./pages/header";
import { Hero } from "./pages/hero";
import { About } from "./pages/about";
import { Advantages } from "./pages/advantages";
import { Directions } from "./pages/directions";
import { Blog } from "./pages/blog";
import { PhotoReports } from "./pages/photo-reports";
import { SubscriptionForm } from "./pages/subscription-form";
import { Footer } from "./pages/footer";

function App() {
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

export default App;
