import { createMuiTheme } from "@material-ui/core/styles";

import { colors } from "./constant";

const fontSize = 16; // px
const htmlFontSize = 16; // 16px is the default font-size used by browsers.
const coef = fontSize / 14;

export const theme = createMuiTheme({

  typography: {
    // fontFamily: "'Montserrat', sans-serif",
    pxToRem: (size) => `${(size / htmlFontSize) * coef}rem`,
    h1: {
      fontSize: "24px",
      // fontFamily: "'Montserrat', sans-serif",
      textTransform: "uppercase",
      lineHeight: "1.56",
      color: colors.primary,
      fontWeight: "700",
      letterSpacing:"1px",
      marginBottom: "15px",
    },
    h2: {
      fontSize: "14px",
      fontWeight: "800",
      letterSpacing:"1.25px",
      lineHeight: "1.56",
      color: colors.primary,
    },
    h6: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "normal",
    },
    subtitle1: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "normal",
    },
    body1: { fontSize: 14, lineHeight: 1.57, fontWeight: "normal" },
    gutterBottom: { marginBottom: 16 },
  },
  shape: {
    borderRadius: 6,
  },
  props: {
    MuiTextField: {
      fullWidth: true,
      InputLabelProps: {
        shrink: true,
      },
    },
    MuiOutlinedInput: {
      notched: false,
    },
  },
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: 6,
      },
    },
    MuiSelect: {
      select: {
        "&:focus": {
          borderRadius: "inherit",
          backgroundColor: "transparent",
        },
      },
    },
    MuiFormControl: {
      root: {
        width: "100%",
      },
    },
    MuiInput: {
      root: {
        width: "100%",
      },
    },
    MuiInputBase: {
      input: {
        height: "50px",
        lineHeight: "50px",
        padding: "0 15px !important",
        borderRadius: "6px",
        border: "1px solid #e7e4f1",
        // fontFamily: "'Montserrat', sans-serif",
        color: colors.black,
        fontSize: "16px",
        transition: "all 0.3s",
        boxSizing: "border-box",
        "&::placeholder": {
          color: colors.black,
          fontSize: "16px",
          transition: "all 0.3s",
          opacity: "1",
        },
        "& .Mui-focused": {
          "& .MuiInputBase-input": {
            borderColor: colors.primary,
            "&::placeholder": {
              opacity: "0",
            },
          },
        },
      },
      root: {
        "&.Mui-focused": {
          "& .MuiInputBase-input": {
            borderColor: colors.primary,
            "&::placeholder": {
              opacity: "0",
            },
          },
        },
      },
    },
    MuiTextField: {
      root: {
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        "&.Mui-focused .MuiOutlinedInput-notchedOutline, &.Mui-focused:hover .MuiOutlinedInput-notchedOutline": {
          borderWidth: "1px",
          borderColor: colors.primary,
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: colors.borderGray,
        },
        "& .MuiSelect-selectMenu": {
          border: "none",
        },
      },
      notchedOutline: {
        borderColor: colors.borderGray,
      },
    },
    MuiInputLabel: {
      outlined: {
        position: "relative",
        transform: "none !important",
        fontSize: "14px",
        fontWeight: "600",
        color: colors.black,
        marginBottom: "5px",
        display: "block",
      },
      root: {
        "&.Mui-focused": {
          color: colors.black,
        },
      },
    },
    MuiButton: {
      root: {
        letterSpacing: 0,
      },
    },
    MuiTypography: {
      root: {
        letterSpacing: 0,
      },
    },
  },
});
