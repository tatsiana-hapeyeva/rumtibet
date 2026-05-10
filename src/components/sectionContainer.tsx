import Box from "@mui/material/Box";

type SectionContainerProps = {
  children: React.ReactNode;
};

export function SectionContainer({ children }: SectionContainerProps) {
  return (
    <Box
      sx={{
        maxWidth: "1180px",
        width: "100%",
        mx: "auto",
        px: 2,
      }}
    >
      {children}
    </Box>
  );
}
