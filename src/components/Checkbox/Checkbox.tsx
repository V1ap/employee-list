import styles from "./checkbox.module.scss";

interface ICheckboxProps {
  value: boolean;
  onChange: (value: boolean) => void;
  small?: boolean;
}

const Checkbox: React.FC<ICheckboxProps> = ({ value, onChange, small }) => {
  return (
    <button
      type="button"
      className={`${styles.checkbox} ${value ? styles.checked : ""} ${
        small ? styles.small : ""
      }`}
      onClick={() => onChange(!value)}
    ></button>
  );
};

export default Checkbox;
