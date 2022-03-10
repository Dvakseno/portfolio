import { atom } from 'recoil';

export enum Themes {
  NORMAL = 'normal',
  REVERSE = 'reverse',
}

export const activeTheme = atom<Themes>({
  key: 'theme',
  default: localStorage.getItem('PortfolioTheme')
    ? JSON.parse(localStorage.getItem('PortfolioTheme') || '')
    : Themes.NORMAL,
});
