import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./formitem.module.scss";

interface IFormItemProps {
  label?: string;
  placeholder?: string;
  type?: string;
  register: UseFormRegisterReturn;
  error?: string;
  className?: string;
}

const FormItem: React.FC<IFormItemProps> = ({
  label,
  placeholder,
  type,
  register,
  error,
  className,
}) => {
  return (
    <div className={`${styles.formItem} ${className}`}>
      {label && <label className={styles.formItem__label}>{label}</label>}
      <input
        className={styles.formItem__input}
        placeholder={placeholder}
        type={type ? type : "text"}
        {...register}
      />

      {error && <p className={styles.formItem__error}>{error}</p>}
    </div>
  );
};

export default FormItem;
