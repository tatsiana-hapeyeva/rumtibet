import TextField from "@mui/material/TextField";
import type { ChangeEvent } from "react";

type ProfileFieldProps = {
  label: string;
  name: string;
  value: string;
  editable?: boolean;
  multiline?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

export default function ProfileField({
  label,
  name,
  value,
  editable = true,
  multiline = false,
  required = false,
  error = false,
  helperText = " ",
  onChange,
}: ProfileFieldProps) {
  const isReadOnly = !editable;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "140px 1fr",
        alignItems: multiline ? "start" : "center",
        columnGap: "16px",
      }}
    >
      <span style={{ paddingTop: multiline ? "12px" : "0" }}>{label}</span>

      <TextField
        fullWidth
        name={name}
        value={value}
        onChange={onChange}
        multiline={multiline}
        minRows={multiline ? 3 : undefined}
        required={required}
        error={error}
        helperText={helperText}
        slotProps={{ htmlInput: { readOnly: isReadOnly } }}
        sx={
          isReadOnly
            ? {
                "& .MuiInputBase-root": {
                  backgroundColor: "#c2c4c3",
                },
                "& .MuiInputBase-input": {
                  color: "#463f4b",
                },
              }
            : {}
        }
      />
    </div>
  );
}
