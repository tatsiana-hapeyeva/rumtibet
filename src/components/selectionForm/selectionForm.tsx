import { useState } from "react";
import type { Dayjs } from "dayjs";
import FormHelperText from "@mui/material/FormHelperText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Popover from "@mui/material/Popover";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";

import "./selectionForm.css";

type Option = {
  value: string;
  label: string;
};

type SelectionFormProps = {
  placeholder: string;
  help: string;
  IconComponent: React.ElementType;
  mode?: "select" | "date";
  value?: string;
  onChange?: (value: string) => void;
  options?: Option[];
  dateValue?: [Dayjs | null, Dayjs | null];
  onDateChange?: (range: [Dayjs | null, Dayjs | null]) => void;
};

export function SelectionForm({
  placeholder,
  help,
  IconComponent,
  mode = "select",
  value = "",
  onChange,
  options = [],
  dateValue = null,
  onDateChange,
}: SelectionFormProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const isOpen = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const selectedOption = options.find((option) => option.value === value);

  const displayValue =
    mode === "date"
      ? dateValue && dateValue[0] && dateValue[1]
        ? `${dateValue[0].format("DD.MM.YYYY")} - ${dateValue[1].format("DD.MM.YYYY")}`
        : placeholder
      : selectedOption
        ? selectedOption.label
        : placeholder;

  return (
    <div className="tour-search__group">
      <button type="button" className="selection-form" onClick={handleOpen}>
        <span className="selection-form__value">{displayValue}</span>
        <span className="selection-form__icon">
          <IconComponent />
        </span>
      </button>

      {mode === "select" ? (
        <Menu
          anchorEl={anchorEl}
          open={isOpen}
          onClose={handleClose}
          slotProps={{
            paper: {
              style: {
                width: anchorEl?.offsetWidth,
              },
            },
          }}
        >
          {options.map((option) => (
            <MenuItem
              key={option.value}
              onClick={() => {
                onChange?.(option.value);
                handleClose();
              }}
            >
              {option.label}
            </MenuItem>
          ))}
        </Menu>
      ) : (
        <Popover
          anchorEl={anchorEl}
          open={isOpen}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <DateRangeCalendar
            value={dateValue}
            onChange={(newRange) => {
              onDateChange?.(newRange);
              handleClose();
            }}
          />
        </Popover>
      )}

      <FormHelperText className="selection-form__help">{help}</FormHelperText>
    </div>
  );
}
