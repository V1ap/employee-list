import { expect, test } from "vitest";
import { checkName, validateBirtday, validatePhone } from "./formHelpers";

test("checkName", () => {
  expect(checkName("")).toBe("Некорректное фамилия и имя");
  expect(checkName("123")).toBe("Некорректное фамилия и имя");
  expect(checkName("123 123 123")).toBe("Некорректное фамилия и имя");
  expect(checkName("Пак Владислав Павлович")).toBe(
    "Некорректное фамилия и имя"
  );
  expect(checkName("Пак Владислав")).toBe(true);
});

test("validatePhone", () => {
  expect(validatePhone("+7 (___) ___-____")).toBe(
    "Поле обязательно для заполнения"
  );
  expect(validatePhone("+7 (999) ___-____")).toBe(
    "Поле обязательно для заполнения"
  );
  expect(validatePhone("+7 (999) 999-9999")).toBe(true);
});

test("validateBirtday", () => {
  expect(validateBirtday("__.__.____")).toBe("Поле обязательно для заполнения");
  expect(validateBirtday("01.01.9999")).toBe("Некорректная дата");
  expect(validateBirtday("01.01.2050")).toBe("Некорректная дата");
  expect(validateBirtday("01.01.1899")).toBe("Некорректная дата");
  expect(validateBirtday("01.20.2002")).toBe("Некорректная дата");
  expect(validateBirtday("01.00.2002")).toBe("Некорректная дата");
  expect(validateBirtday("32.01.2000")).toBe("Некорректная дата");
  expect(validateBirtday("00.01.2000")).toBe("Некорректная дата");
  expect(validateBirtday("31.04.2000")).toBe("Некорректная дата");
  expect(validateBirtday("29.02.2001")).toBe("Некорректная дата");
  expect(validateBirtday("30.02.2000")).toBe("Некорректная дата");
  expect(validateBirtday("01.01.2022")).toBe(true);
});
