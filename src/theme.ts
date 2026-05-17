import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#ffffff",
    },
    text: {
      primary: "#18121e",
    },
  },

  typography: {
    fontFamily: '"Nunito Sans", sans-serif',

    h1: {
      fontFamily: '"Nunito Sans", sans-serif',
      fontSize: "32px",
      lineHeight: "120%",
      fontWeight: 800,
      color: "#18121e",
    },

    h2: {
      fontFamily: '"Nunito Sans", sans-serif',
      fontSize: "24px",
      lineHeight: "20px",
      fontWeight: 400,
      color: "#f2be22",
    },

    h3: {
      fontFamily: '"Nunito Sans", sans-serif',
      fontSize: "18px",
      lineHeight: "20px",
      letterSpacing: "0.012em",
      fontWeight: 700,
      color: "#18121e",
    },

    h4: {
      fontFamily: '"Nunito Sans", sans-serif',
      fontSize: "24px",
      lineHeight: 1.2,
      fontWeight: 700,
      color: "#FDFDFD",
    },

    h5: {
      fontFamily: '"Nunito Sans", sans-serif',
      fontSize: "24px",
      lineHeight: "32px",
      fontWeight: 700,
      color: "#18121E",
    },

    body1: {
      fontFamily: '"Nunito Sans", sans-serif',
      fontSize: "18px",
      color: "#18121e",
    },

    body2: {
      fontFamily: '"Nunito Sans", sans-serif',
      fontSize: "14px",
      color: "#18121e",
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: "NEXT ART";
          src: url("/fonts/NEXT ART_Light.otf") format("opentype");
          font-weight: 300;
          font-style: normal;
        }

        @font-face {
          font-family: "NEXT ART";
          src: url("/fonts/NEXT ART_Regular.otf") format("opentype");
          font-weight: 400;
          font-style: normal;
        }

        @font-face {
          font-family: "NEXT ART";
          src: url("/fonts/NEXT ART_Semibold.otf") format("opentype");
          font-weight: 600;
          font-style: normal;
        }

        @font-face {
          font-family: "NEXT ART";
          src: url("/fonts/NEXT ART_Bold.otf") format("opentype");
          font-weight: 700;
          font-style: normal;
        }

        @font-face {
          font-family: "NEXT ART";
          src: url("/fonts/NEXT ART_Heavy.otf") format("opentype");
          font-weight: 800;
          font-style: normal;
        }

        @font-face {
          font-family: "Nunito Sans";
          src: url("/fonts/NunitoSans-Regular.ttf") format("truetype");
          font-weight: 400;
          font-style: normal;
        }

        @font-face {
          font-family: "Nunito Sans";
          src: url("/fonts/NunitoSans-Italic.ttf") format("truetype");
          font-weight: 400;
          font-style: italic;
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        * {
          margin: 0;
          padding: 0;
        }

        html,
        body,
        #root {
          height: 100%;
        }

        body {
          font-family: "Nunito Sans", sans-serif;
          font-size: 18px;
          color: #18121e;
          background: #ffffff;
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
          margin: 0;
        }

        img,
        picture,
        video,
        canvas,
        svg {
          display: block;
          max-width: 100%;
        }

        input,
        button,
        textarea,
        select {
          font: inherit;
        }

        ul,
        ol {
          list-style: none;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
      `,
    },

    MuiButton: {
      styleOverrides: {
        root: {
          padding: "16px",
          border: "none",
          borderRadius: "4px",
          font: "inherit",
          textTransform: "none",
          boxSizing: "border-box",
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: "14px",
        },
      },
    },
  },
});

export default theme;
