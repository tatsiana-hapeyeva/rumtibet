import FormHelperText from "@mui/material/FormHelperText";

type SelectionHelpProps = {
  text: string;
};

export function SelectionHelp({ text }: SelectionHelpProps) {
  return (
    <FormHelperText
      sx={{
        color: "var(--color-accent-support)",
        fontSize: "14px",
      }}
    >
      {text}
    </FormHelperText>
  );
}
