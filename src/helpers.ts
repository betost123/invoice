export enum MediaQuery {
  XS = "@media (max-width: 576px)",
  SM = "@media (min-width: 576px)",
  MD = "@media (min-width: 768px)",
  LG = "@media (min-width: 992px)",
  XL = "@media (min-width: 1200px)",
  XXL = "@media (min-width: 1440px)",
}

export const isEvenNumber = (number: number) => {
  return number % 2 === 0;
};
