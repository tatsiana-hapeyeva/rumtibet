import "./assets/styles/index.css";
import "./assets/styles/main.css";
import "./assets/styles/normalize.css";

import { Header } from "./pages/header";
import { Hero } from "./pages/hero";
import Button from "./components/button";

function App() {
  return (
    <div>
      <div className="main__image">
        <Header />
        <Hero />
      </div>

      <section className="about">
        <div className="about__container">
          <div className="about__photos">
            <div className="about__photo-frame about__photo-frame--back">
              <img
                className="about__photo"
                src="/images/fog-over-the-mountains.jpg"
                alt="Fog over the mountains"
              />
            </div>

            <div className="about__photo-frame about__photo-frame--front">
              <img
                className="about__photo"
                src="/images/house-in-front-of-the-mountain.jpg"
                alt="House in front of the mountain"
              />
            </div>
          </div>

          <div className="about__discription">
            <h2>о нашем походе</h2>
            <h1>Исследуйте все горные массивы мира вместе с нами</h1>
            <p className="about__discription-text">
              Его корни уходят в один фрагмент классической латыни 45 года н.э.,
              то есть более двух тысячелетий назад. Ричард МакКлинток, профессор
              латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из
              самых странных слов в Lorem Ipsum, "consectetur" и занялся его
              поисками в классической латинской литературе.
            </p>
            <Button>Программа тура</Button>
          </div>
        </div>
      </section>

      <section className="advantages">
        <div className="advantages__container">
          <div className="advantages__content">
            <h2>наше предложение</h2>
            <h1>Лучшие программы для тебя</h1>
            <p>
              Его корни уходят в один фрагмент классической латыни 45 года н.э.,
              то есть более двух тысячелетий назад. Ричард МакКлинток, профессор
              латыни из колледжа.
            </p>

            <div className="advantages__points">
              <span className="advantages__points-icon"></span>
              <h3>Опытный гид</h3>
              <p>
                Для современного мира базовый вектор развития предполагает
                независимые способы реализации соответствующих условий
                активизации.
              </p>

              <span className="advantages__points-icon"></span>
              <h3>Безопасный поход</h3>
              <p>
                Для современного мира базовый вектор развития предполагает
                независимые способы реализации соответствующих условий
                активизации.
              </p>

              <span className="advantages__points-icon"></span>
              <h3>Лояльные цены</h3>
              <p>
                Для современного мира базовый вектор развития предполагает
                независимые способы реализации соответствующих условий
                активизации.
              </p>
            </div>

            <button>Стоимость программ</button>
          </div>

          <div className="advantages__photos">
            <img></img>
            <img></img>
            <img></img>
            <img></img>
          </div>
        </div>
      </section>

      <section className="directions">
        <div className="directions__container">
          <h2>по версии отдыхающих</h2>
          <h1>Популярные направления</h1>
          <div className="directions__card"></div>
          <div className="directions__card"></div>
          <div className="directions__card"></div>
          <button>Рейтинг направлений</button>
        </div>
      </section>

      <section className="blog">
        <div className="blog__container">
          <h2>делимся впечатлениями</h2>
          <h1>Блог о путешествиях</h1>
          <div className="blog__card"></div>
          <div className="blog__card"></div>
          <div className="blog__card"></div>
          <div className="blog__card"></div>
          <button>Другие материалы</button>
        </div>
      </section>

      <section className="photo-reports">
        <div className="photo-reports__container">
          <h2>фото-отчет</h2>
          <h1>Делимся впечатлениями</h1>
          <div className="photo-reports__gallery"></div>
          <button>Наш pinterest</button>
        </div>
      </section>

      <section className="subscription-form">
        <div className="subscription-form__container">
          <form>
            <h2>актуально</h2>
            <h1>Получайте полезные рассылки о путешествиях</h1>
            <label className="subscription-form__label">Введите email</label>
            <input
              className="subscription-form__input"
              placeholder="name@domain.com"
            />
            <button>Подписаться</button>
            <p>
              Подписываясь на новости, вы автоматически соглашаетесь с условиями
              обработки персональных данных и правилами рекламных рассылок
            </p>
          </form>
        </div>
      </section>

      <footer></footer>
    </div>
  );
}

export default App;
