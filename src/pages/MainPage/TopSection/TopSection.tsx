import Select from "@/components/Select/Select";
import styles from "./topsection.module.scss";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setFilter,
  setIsArchiveed,
  setSort,
} from "@/store/slices/sortAndFilterSlice";
import Checkbox from "@/components/Checkbox/Checkbox";
import { useNavigate } from "react-router-dom";

const TopSection: React.FC = () => {
  const navigate = useNavigate();
  const { currentSort, sorts, currentFilter, filters, isArchived } =
    useAppSelector((state) => state.sortAndFilter);
  const dispatch = useAppDispatch();

  const handleChangeSort = (value: string) => {
    dispatch(setSort(value));
  };

  const handleChangeFilter = (value: string) => {
    dispatch(setFilter(value));
  };

  const handleChangeIsArchive = (value: boolean) => {
    dispatch(setIsArchiveed(value));
  };

  const addEmployee = () => {
    navigate("/edit/new");
  };

  return (
    <section className={styles.topSection}>
      <div className={styles.topSection__top}>
        <div className={styles.topSection__item}>
          <p className={styles.topSection__label}>Сортировка</p>
          <Select
            items={sorts}
            currentItem={currentSort}
            setCurrentItem={handleChangeSort}
          />
        </div>
        <div className={styles.topSection__item}>
          <p className={styles.topSection__label}>Фильтрация</p>
          <Select
            items={filters}
            currentItem={currentFilter}
            setCurrentItem={handleChangeFilter}
          />
        </div>
        <div className={styles.topSection__item}>
          <p className={styles.topSection__label}>В архиве</p>
          <Checkbox value={isArchived} onChange={handleChangeIsArchive} />
        </div>
      </div>
      <button
        className={styles.topSection__btn}
        type="button"
        onClick={addEmployee}
      >
        Добавить пользователя
      </button>
    </section>
  );
};

export default TopSection;
