import Button from "../components/button";
import { SectionContainer } from "../components/sectionContainer";

export function About() {
  return (
    <section className="about">
      <SectionContainer>
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
      </SectionContainer>
    </section>
  );
}
