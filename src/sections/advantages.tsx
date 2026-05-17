import Button from "../components/button";
import { SectionContainer } from "../components/sectionContainer";
import { IconTextList, IconTextListItem } from "../components/iconTextList";
import Typography from "@mui/material/Typography";
import { SectionHeading } from "../components/sectionHeading";

export function Advantages() {
  return (
    <section className="advantages">
      <SectionContainer>
        <div className="advantages__container">
          <div className="advantages__content">
            <SectionHeading>
              <Typography variant="h2" component="h2">
                наше предложение
              </Typography>
              <Typography variant="h1" component="h1">
                Лучшие программы для тебя
              </Typography>
            </SectionHeading>
            <Typography variant="body1">
              Его корни уходят в один фрагмент классической латыни 45 года н.э.,
              то есть более двух тысячелетий назад. Ричард МакКлинток, профессор
              латыни из колледжа.
            </Typography>

            <div className="advantages__points">
              <IconTextList>
                <IconTextListItem>
                  <img
                    src="/images/experienced-guide-icon.png"
                    alt="Experienced guide icon"
                  />
                  <div>
                    <Typography variant="h3" component="h3">
                      Опытный гид
                    </Typography>
                    <Typography variant="body2">
                      Для современного мира базовый вектор развития предполагает
                      независимые способы реализации соответствующих условий
                      активизации.
                    </Typography>
                  </div>
                </IconTextListItem>

                <IconTextListItem>
                  <img src="/images/safe-hike-icon.png" alt="Safe hike icon" />
                  <div>
                    <Typography variant="h3" component="h3">
                      Безопасный поход
                    </Typography>
                    <Typography variant="body2">
                      Для современного мира базовый вектор развития предполагает
                      независимые способы реализации соответствующих условий
                      активизации.
                    </Typography>
                  </div>
                </IconTextListItem>

                <IconTextListItem>
                  <img
                    src="/images/loyal-prices-icon.png"
                    alt="Loyal prices icon"
                  />
                  <div>
                    <Typography variant="h3" component="h3">
                      Лояльные цены
                    </Typography>
                    <Typography variant="body2">
                      Для современного мира базовый вектор развития предполагает
                      независимые способы реализации соответствующих условий
                      активизации.
                    </Typography>
                  </div>
                </IconTextListItem>
              </IconTextList>
            </div>

            <Button>Стоимость программ</Button>
          </div>

          <div className="advantages__photos">
            <img
              className="advantages__photo"
              src="/images/advantages-photo-1.jpg"
            />
            <img
              className="advantages__photo"
              src="/images/advantages-photo-2.jpg"
            />
            <img
              className="advantages__photo"
              src="/images/advantages-photo-3.jpg"
            />
            <img
              className="advantages__photo"
              src="/images/advantages-photo-4.jpg"
            />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
