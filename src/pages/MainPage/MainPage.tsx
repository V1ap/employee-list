import { useAppSelector } from "@/store/hooks";
import styles from "./mainpage.module.scss";
import EmployeeCard from "./EmployeeCard/EmployeeCard";
import TopSection from "./TopSection/TopSection";
import { useEffect, useState } from "react";
import { TEmployee } from "@/types/TEmployee";
import { sortedAndFilteredArray } from "@/utils/sortedAndFilteredArray";

const MainPage: React.FC = () => {
  const { employees } = useAppSelector((state) => state.employees);
  const { currentSort, currentFilter, isArchived } = useAppSelector(
    (state) => state.sortAndFilter
  );
  const [sortedAndFilteredEmployees, setSortedAndFilteredEmployees] =
    useState<TEmployee[]>(employees);

  useEffect(() => {
    setSortedAndFilteredEmployees(
      sortedAndFilteredArray(employees, currentSort, currentFilter, isArchived)
    );
  }, [employees, currentSort, currentFilter, isArchived]);

  return (
    <section className={styles.mainPage}>
      <h1 className={styles.mainPage__title}>Список сотрудников</h1>
      <TopSection />
      <ul className={styles.mainPage__list}>
        {sortedAndFilteredEmployees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            name={employee.name}
            role={employee.role}
            phone={employee.phone}
            id={employee.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default MainPage;
