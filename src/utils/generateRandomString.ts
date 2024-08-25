export const generateRandomString = (): string => {
  return Math.floor(Math.random() * Date.now()).toString(36);
};
