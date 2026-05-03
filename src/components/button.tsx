import MuiButton from "@mui/material/Button";

type ButtonProps = {
  children: React.ReactNode;
  color?: "dark" | "light";
  sx?: object;
};

export default function Button({
  children,
  color = "dark",
  sx,
  ...props
}: ButtonProps) {
  return (
    <MuiButton
      sx={{
        padding: "12px 24px",
        border: "none",
        borderRadius: "4px",
        font: "inherit",
        textTransform: "none",
        ...(color === "dark"
          ? {
              background: "var(--color-accent-secondary)",
              color: "var(--color-accent-support)",
            }
          : {
              background: "var(--color-accent-support)",
              color: "var(--color-text)",
            }),
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
}
