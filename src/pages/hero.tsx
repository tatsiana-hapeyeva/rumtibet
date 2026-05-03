import { useState } from "react";
import type { Dayjs } from "dayjs";
import { IoIosArrowDown } from "react-icons/io";
import { IoCalendarClearOutline } from "react-icons/io5";
import { SelectionForm } from "../components/selectionForm/selectionForm";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Button from "../components/button";

export function Hero() {
  const [location, setLocation] = useState("");
  const [participants, setParticipants] = useState("");
  const [tourDate, setTourDate] = useState<[Dayjs | null, Dayjs | null]>([
    null,
    null,
  ]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
      <section className="hero">
        <div className="hero__container">
          <p className="hero__slogan">
            Насладись прогулкой в горах с командой единомышленников
          </p>

          <div className="hero__search">
            <div className="tour-search__row">
              <SelectionForm
                placeholder="Локация для тура"
                help="выберите из списка"
                value={location}
                onChange={setLocation}
                options={[
                  { value: "altai", label: "Алтай" },
                  { value: "elbrus", label: "Эльбрус" },
                ]}
                IconComponent={IoIosArrowDown}
              />

              <SelectionForm
                placeholder="Дата похода"
                help="укажите диапазон"
                mode="date"
                dateValue={tourDate}
                onDateChange={setTourDate}
                IconComponent={IoCalendarClearOutline}
              />

              <SelectionForm
                placeholder="Участники"
                help="минимум 4 человека"
                value={participants}
                onChange={setParticipants}
                options={[
                  { value: "4", label: "4 человека" },
                  { value: "5", label: "5 человек" },
                  { value: "6", label: "6 человек" },
                ]}
                IconComponent={IoIosArrowDown}
              />

              <div className="tour-search__group">
                <Button color="light">Найти программу</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LocalizationProvider>
  );
}
