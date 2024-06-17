// themeUtils.js

export const darkAccentColor = 'from-[#FF1CF7] to-[#4de5f0] bg-gradient-to-bl';
export const lightAccentColor = 'from-[#f4ff5d] to-[#ff0ad6] bg-gradient-to-bl';

export const getTheme = (theme: any) => {
  return theme === 'dark' ? true : false;
};

export const getBgAccentColor = (theme: string | undefined) => {
  const isDarkTheme = theme === 'dark';
  return isDarkTheme ? darkAccentColor : lightAccentColor;
};
