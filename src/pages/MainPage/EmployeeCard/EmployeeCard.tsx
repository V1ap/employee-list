import { ERole } from "@/types/TEmployee";
import styles from "./employeecard.module.scss";
import { Link } from "react-router-dom";

interface IEmployeeCardProps {
  name: string;
  role: keyof typeof ERole;
  phone: string;
  id: number;
}

const EmployeeCard: React.FC<IEmployeeCardProps> = ({
  name,
  role,
  phone,
  id,
}) => {
  return (
    <li className={styles.employeeCard}>
      <Link to={`/edit/${id}`} className={styles.employeeCard__link}>
        <h2 className={styles.employeeCard__name}>{name}</h2>
        <p className={styles.employeeCard__role}>{ERole[role]}</p>
        <p className={styles.employeeCard__phone}>{phone}</p>
      </Link>
    </li>
  );
};

export default EmployeeCard;
