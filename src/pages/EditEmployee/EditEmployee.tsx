import { useNavigate, useParams } from "react-router-dom";
import styles from "./editemployee.module.scss";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import FormItem from "@/components/FormItem/FormItem";
import {
  checkName,
  nameError,
  requiredMSG,
  validateBirtday,
  validatePhone,
} from "@/utils/formHelpers";
import { useState } from "react";
import { roles } from "@/consts/roles";
import { useHookFormMask } from "use-mask-input";
import Select from "@/components/Select/Select";
import Checkbox from "@/components/Checkbox/Checkbox";
import { addEmployee, editEmployee } from "@/store/slices/employeesSlice";
import { ERole } from "@/types/TEmployee";
import { toast } from "react-toastify";

interface IFormEditEmployee {
  name: string;
  phone: string;
  birthday: string;
}

const EditEmployee = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { employees } = useAppSelector((state) => state.employees);
  const { register, handleSubmit, formState } = useForm<IFormEditEmployee>({
    mode: "onChange",
    defaultValues:
      id && id !== "new"
        ? { ...employees.find((employee) => employee.id === Number(id)) }
        : {},
  });
  const [role, setRole] = useState<keyof typeof ERole>(
    id && id !== "new"
      ? employees.find((employee) => employee.id === Number(id))?.role ||
          roles[0].value
      : roles[0].value
  );

  const [isArchive, setIsArchive] = useState<boolean>(
    id && id !== "new"
      ? employees.find((employee) => employee.id === Number(id))?.isArchive ||
          false
      : false
  );

  const handleChangeRole = (value: string) => {
    setRole(roles.find((role) => role.name === value)?.value || roles[0].value);
  };

  const handleChangeArchive = (value: boolean) => {
    setIsArchive(value);
  };

  const registerWithMask = useHookFormMask(register);

  const onSubmit: SubmitHandler<IFormEditEmployee> = (data) => {
    if (id && id !== "new") {
      dispatch(editEmployee({ ...data, role, isArchive, id: Number(id) }));
      toast.success("Сотрудник изменен");
    } else {
      dispatch(addEmployee({ ...data, role, isArchive }));
      toast.success("Сотрудник добавлен");
    }
    navigate("/");
  };
  return (
    <section className={styles.editEmployee}>
      <h1 className={styles.editEmployee__title}>
        {id && id !== "new"
          ? "Редактирование сотрудника"
          : "Добавление сотрудника"}
      </h1>
      <form
        className={styles.editEmployee__form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormItem
          label="Фамилия и имя"
          type="text"
          register={register("name", {
            required: requiredMSG,
            pattern: {
              value: /^[а-яА-ЯёЁ\s]+$/,
              message: nameError,
            },
            validate: checkName,
          })}
          error={formState.errors.name?.message}
        />
        <FormItem
          label="Телефон"
          type="text"
          register={registerWithMask("phone", ["+7 (999) 999-9999"], {
            required: requiredMSG,
            validate: validatePhone,
          })}
          error={formState.errors.phone?.message}
        />
        <FormItem
          label="Дата рождения"
          type="text"
          register={registerWithMask("birthday", ["99.99.9999"], {
            required: requiredMSG,
            validate: validateBirtday,
          })}
          error={formState.errors.birthday?.message}
        />
        <div className={styles.editEmployee__formItem}>
          <p className={styles.editEmployee__label}>Должность</p>
          <Select
            items={roles.map((role) => role.name)}
            currentItem={
              roles.find((roleObj) => roleObj.value === role)?.name ||
              roles[0].value
            }
            setCurrentItem={handleChangeRole}
          />
        </div>
        <div className={`${styles.editEmployee__formItem} ${styles.checkbox}`}>
          <p className={styles.editEmployee__label}>В архиве</p>
          <Checkbox
            value={isArchive}
            onChange={handleChangeArchive}
            small={true}
          />
        </div>
        <button className={styles.editEmployee__btn}>
          {id && id !== "new" ? "Сохранить" : "Добавить"}
        </button>
      </form>
    </section>
  );
};

export default EditEmployee;
