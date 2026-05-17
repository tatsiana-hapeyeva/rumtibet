import { useState } from "react";
import type { Dayjs } from "dayjs";
import { IoIosArrowDown } from "react-icons/io";
import { IoCalendarClearOutline } from "react-icons/io5";
import { SelectionForm } from "../components/selectionForm/selectionForm";
import { SelectionHelp } from "../components/selectionHelp";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Button from "../components/button";
import { SectionContainer } from "../components/sectionContainer";

export function Hero() {
  const [location, setLocation] = useState("");
  const [participants, setParticipants] = useState("");
  const [tourDate, setTourDate] = useState<[Dayjs | null, Dayjs | null]>([
    null,
    null,
  ]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
      <section id="hero" className="hero">
        <SectionContainer>
          <p className="hero__slogan">
            Насладись прогулкой в горах с командой единомышленников
          </p>

          <div className="hero__mobile-button">
            <Button tone="light">Найти программу</Button>
          </div>

          <div className="hero__search">
            <div className="tour-search__row">
              <div className="tour-search__group">
                <SelectionForm
                  placeholder="Локация для тура"
                  value={location}
                  onChange={setLocation}
                  options={[
                    { value: "altai", label: "Алтай" },
                    { value: "elbrus", label: "Эльбрус" },
                  ]}
                  IconComponent={IoIosArrowDown}
                />
                <SelectionHelp text="выберите из списка" />
              </div>

              <div className="tour-search__group">
                <SelectionForm
                  placeholder="Дата похода"
                  mode="date"
                  dateValue={tourDate}
                  onDateChange={setTourDate}
                  IconComponent={IoCalendarClearOutline}
                />
                <SelectionHelp text="укажите диапазон" />
              </div>

              <div className="tour-search__group">
                <SelectionForm
                  placeholder="Участники"
                  value={participants}
                  onChange={setParticipants}
                  options={[
                    { value: "4", label: "4 человека" },
                    { value: "5", label: "5 человек" },
                    { value: "6", label: "6 человек" },
                  ]}
                  IconComponent={IoIosArrowDown}
                />
                <SelectionHelp text="минимум 4 человека" />
              </div>

              <Button tone="light">Найти программу</Button>
            </div>
          </div>
        </SectionContainer>
      </section>
    </LocalizationProvider>
  );
}
