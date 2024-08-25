import { TEmployee } from "@/types/TEmployee";

export const sortedAndFilteredArray = (
  employees: TEmployee[],
  currentSort: string,
  currentFilter: string,
  isArchived: boolean
) => {
  Intl.DateTimeFormat("ru");
  let result = [...employees];

  if (currentSort === "По алфавиту") {
    result.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (currentSort === "Сначало моложе") {
    result.sort(
      (a, b) =>
        new Date(b.birthday.split(".").reverse().join("-")).getTime() -
        new Date(a.birthday.split(".").reverse().join("-")).getTime()
    );
  }

  if (currentSort === "Сначало старше") {
    result.sort(
      (a, b) =>
        new Date(a.birthday.split(".").reverse().join("-")).getTime() -
        new Date(b.birthday.split(".").reverse().join("-")).getTime()
    );
  }

  if (currentFilter === "Водитель") {
    result = result.filter((employee) => employee.role === "driver");
  }

  if (currentFilter === "Официант") {
    result = result.filter((employee) => employee.role === "waiter");
  }

  if (currentFilter === "Повар") {
    result = result.filter((employee) => employee.role === "cook");
  }

  if (isArchived) {
    result = result.filter((employee) => employee.isArchive);
  } else {
    result = result.filter((employee) => !employee.isArchive);
  }

  return result;
};
