import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { generateRandomString } from "@/utils/generateRandomString";
import styles from "./select.module.scss";
import { useState, useRef } from "react";

interface ISelectProps {
  items: string[];
  currentItem: string;
  setCurrentItem: (item: string) => void;
}

const Select: React.FC<ISelectProps> = ({
  items,
  setCurrentItem,
  currentItem,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const divRef = useRef<HTMLDivElement | null>(null);

  const closeSelectHandler = () => {
    setIsOpen(false);
  };

  const toggleSelectHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const selectItemHandler = (item: string) => {
    setIsOpen(false);
    setCurrentItem(item);
  };

  useOnClickOutside(divRef, closeSelectHandler);

  return (
    <div ref={divRef} className={styles.select__container}>
      <button
        onClick={toggleSelectHandler}
        className={styles.select__btn}
        type="button"
      >
        {currentItem}
      </button>
      {isOpen && (
        <ul className={styles.select__list}>
          {items.map((item) => {
            if (item !== currentItem) {
              return (
                <li
                  className={styles.select__item}
                  key={generateRandomString()}
                >
                  <button
                    onClick={() => selectItemHandler(item)}
                    className={styles.select__itemBtn}
                  >
                    {item}
                  </button>
                </li>
              );
            } else return null;
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;
