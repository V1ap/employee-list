export const requiredMSG = "Поле обязательно для заполнения";
export const nameError = "Некорректное фамилия и имя";
const dateError = "Некорректная дата";

export const checkName = (value: string) => {
  const splitedValue = value.split(" ");

  if (splitedValue.length !== 2) return nameError;

  if (splitedValue[0].length > 100 || splitedValue[1].length > 100)
    return nameError;

  if (splitedValue[0].length < 2 || splitedValue[1].length < 2)
    return nameError;
  else return true;
};

export const validatePhone = (value: string) => {
  return !value.includes("_") || requiredMSG;
};

export const validateBirtday = (value: string) => {
  if (value.includes("_")) return requiredMSG;

  if (new Date(value.split(".").reverse().join("-")) > new Date())
    return dateError;

  const [day, month, year] = value.split(".");

  if (Number(year) > Number(new Date().getFullYear) || Number(year) < 1900)
    return dateError;

  if (Number(month) > 12 || Number(month) < 1) return dateError;

  if (Number(day) > 31 || Number(day) < 1) return dateError;

  if (
    Number(day) === 31 &&
    (Number(month) === 2 ||
      Number(month) === 4 ||
      Number(month) === 6 ||
      Number(month) === 9 ||
      Number(month) === 11)
  )
    return dateError;

  if (
    (Number(month) === 2 && Number(day) > 29 && Number(year) % 4 === 0) ||
    (Number(year) % 4 !== 0 && Number(month) === 2 && Number(day) > 28)
  )
    return dateError;

  return true;
};
