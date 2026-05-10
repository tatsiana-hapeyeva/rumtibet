import Box from "@mui/material/Box";

export function Logo() {
  return (
    <Box
      className="header__logo"
      component="img"
      src="/images/logo.png"
      alt="Logo"
      sx={{
        display: "block",
        width: "137px",
        height: "auto",
        "@media (max-width: 390px)": {
          width: "84px",
          height: "44px",
          objectFit: "contain",
        },
      }}
    />
  );
}
