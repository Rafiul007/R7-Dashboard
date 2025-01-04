import { createTheme } from '@mui/material/styles';

export const enum THEME_MODE {
  LIGHT = 'light',
  DARK = 'dark',
}

// Define custom colors for light and dark modes
const lightColors = {
  primaryMain: '#4CAF50',
  primaryLight: '#81C784',
  primaryDark: '#388E3C',
  secondaryMain: '#FF5722',
  secondaryLight: '#FF8A65',
  secondaryDark: '#D84315',
  errorMain: '#F44336',
  errorLight: '#E57373',
  errorDark: '#D32F2F',
  warningMain: '#FF9800',
  warningLight: '#FFB74D',
  warningDark: '#F57C00',
  infoMain: '#2196F3',
  infoLight: '#64B5F6',
  infoDark: '#1976D2',
  successMain: '#4CAF50',
  successLight: '#81C784',
  successDark: '#388E3C',
  backgroundDefault: '#F5F5F5',
  backgroundPaper: '#FFFFFF',
  textPrimary: '#212121',
  textSecondary: '#757575',
};

const darkColors = {
  primaryMain: '#81C784',
  primaryLight: '#A5D6A7',
  primaryDark: '#388E3C',
  secondaryMain: '#FF8A65',
  secondaryLight: '#FFAB91',
  secondaryDark: '#D84315',
  errorMain: '#EF5350',
  errorLight: '#E57373',
  errorDark: '#D32F2F',
  warningMain: '#FFB74D',
  warningLight: '#FFD54F',
  warningDark: '#FFA000',
  infoMain: '#64B5F6',
  infoLight: '#90CAF9',
  infoDark: '#1976D2',
  successMain: '#66BB6A',
  successLight: '#81C784',
  successDark: '#388E3C',
  backgroundDefault: '#121212',
  backgroundPaper: '#1E1E1E',
  textPrimary: '#FFFFFF',
  textSecondary: '#BDBDBD',
};

// Function to generate theme based on mode
export const createCustomTheme = (mode: THEME_MODE.LIGHT | THEME_MODE.DARK) => {
  const colors = mode === THEME_MODE.LIGHT ? lightColors : darkColors;

  return createTheme({
    palette: {
      mode,
      primary: {
        main: colors.primaryMain,
        light: colors.primaryLight,
        dark: colors.primaryDark,
      },
      secondary: {
        main: colors.secondaryMain,
        light: colors.secondaryLight,
        dark: colors.secondaryDark,
      },
      error: {
        main: colors.errorMain,
        light: colors.errorLight,
        dark: colors.errorDark,
      },
      warning: {
        main: colors.warningMain,
        light: colors.warningLight,
        dark: colors.warningDark,
      },
      info: {
        main: colors.infoMain,
        light: colors.infoLight,
        dark: colors.infoDark,
      },
      success: {
        main: colors.successMain,
        light: colors.successLight,
        dark: colors.successDark,
      },
      background: {
        default: colors.backgroundDefault,
        paper: colors.backgroundPaper,
      },
      text: {
        primary: colors.textPrimary,
        secondary: colors.textSecondary,
      },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 600,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.5,
      },
      button: {
        textTransform: 'none',
        fontWeight: 500,
      },
    },
    spacing: 8, // Base spacing value (used for padding/margin)
    shape: {
      borderRadius: 12, // Default border radius
    },
  });
};
