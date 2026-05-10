import Box from "@mui/material/Box";

export function IconTextList({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      {children}
    </Box>
  );
}

export function IconTextListItem({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        "& > img": {
          width: 50,
          height: 50,
          flexShrink: 0,
        },
      }}
    >
      {children}
    </Box>
  );
}
