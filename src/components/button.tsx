import MuiButton, {
  type ButtonProps as MuiButtonProps,
} from "@mui/material/Button";

type Props = MuiButtonProps & {
  tone?: "dark" | "light";
};

export default function Button({ tone = "dark", sx, ...props }: Props) {
  return (
    <MuiButton
      sx={{
        ...(tone === "dark"
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
    />
  );
}
