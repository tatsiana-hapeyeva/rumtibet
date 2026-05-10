import Stack from "@mui/material/Stack";

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <Stack spacing="8px" sx={{ mb: "40px" }}>
      {children}
    </Stack>
  );
}
