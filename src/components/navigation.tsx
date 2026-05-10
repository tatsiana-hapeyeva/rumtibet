import { useState } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { IoIosArrowForward } from "react-icons/io";
import { SectionContainer } from "./sectionContainer";

const MOBILE_WIDTH = "390px";

const navItems = [
  { label: "Главная", href: "#hero" },
  { label: "Про гида", href: "#advantages" },
  { label: "Программа тура", href: "#about" },
  { label: "Стоимость", href: "#directions" },
  { label: "Блог", href: "#blog" },
  { label: "Контакты", href: "#footer" },
];

const desktopLinkSx = {
  color: "var(--color-accent-support)",
  whiteSpace: "nowrap",
};

const mobileLinkSx = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  color: "var(--color-accent-support)",
  lineHeight: "18px",
  whiteSpace: "nowrap",
  "&:hover": {
    color: "var(--color-accent-primary)",
  },
};

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SectionContainer>
        <Box
          sx={{
            py: "16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "24px",
              alignItems: "center",
              [`@media (max-width: ${MOBILE_WIDTH})`]: {
                display: "none",
              },
            }}
          >
            <Box
              component="nav"
              sx={{
                display: "flex",
                gap: "24px",
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  underline="none"
                  sx={desktopLinkSx}
                >
                  {item.label}
                </Link>
              ))}
            </Box>
          </Box>

          <IconButton
            onClick={() => setOpen(true)}
            aria-label="Открыть меню"
            sx={{
              display: "none",
              width: "30px",
              height: "30px",
              p: 0,
              color: "#FDFDFD",
              [`@media (max-width: ${MOBILE_WIDTH})`]: {
                display: "inline-flex",
              },
            }}
          >
            <MenuIcon sx={{ fontSize: "30px" }} />
          </IconButton>
        </Box>
      </SectionContainer>

      {open && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            backgroundColor: "var(--color-accent-secondary)",
            zIndex: 1300,
          }}
        >
          <IconButton
            onClick={() => setOpen(false)}
            aria-label="Закрыть меню"
            sx={{
              position: "absolute",
              top: "16px",
              right: "16px",
              width: "24px",
              height: "24px",
              p: 0,
              color: "var(--color-accent-support)",
            }}
          >
            <CloseIcon sx={{ fontSize: "24px" }} />
          </IconButton>

          <Box
            sx={{
              position: "absolute",
              top: "50px",
              left: "16px",
              width: "258px",
              height: "154px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                underline="none"
                onClick={() => setOpen(false)}
                sx={mobileLinkSx}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    pt: "4px",
                    pr: "2px",
                    pl: "2px",
                  }}
                >
                  <IoIosArrowForward size={14} />
                </Box>

                {item.label}
              </Link>
            ))}
          </Box>
        </Box>
      )}
    </>
  );
}
