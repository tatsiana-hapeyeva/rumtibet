import { Logo } from "../components/logo";
import { Navigation } from "../components/navigation";
import Button from "../components/button";

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <nav className="header__menu">
          <Navigation />
          <div className="header__button">
            <Button>Консультация</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
