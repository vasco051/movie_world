import { FC, useContext } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { FormikValues, useFormik } from "formik";

import { Context } from "../../index";
import { staticLinks } from "../../assets/exportData/links";

import logo from "../../assets/images/login/logo.png";
import Button from "../../components/UI/button/Button";
import Input from "../../components/UI/input/Input";
import PageWrapper from "../../components/Wrappers/PageWrapper/PageWrapper";
import Loader from "../../components/UI/Loader/Loader";

import { IUser } from "../../models/userModels";

import styles from "./Login.module.scss";


const Login: FC = observer(() => {
  const { auth } = useContext(Context);
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: "applicant3@mail.ru",
      password: "admin12345"
    },
    onSubmit: async (values) => {
      const userData: IUser = {
        email: values.email,
        password: values.password
      }

      const response = await auth.authorization(userData)

      if ("data" in response) {
        navigate(staticLinks.movies)

      } else {
        formik.setErrors({ password: "Вы ввели некорректные данные" })
      }
    },
    validate: values => {
      const errors: FormikValues = {}

      // TODO чекнуть библиотеку по валидации
      if (!values.email) {
        errors.email = "Введите адрес почты"
      }
      if (!values.password) {
        errors.password = "Введите пароль"
      }
      return errors
    }
  })


  return (
    <PageWrapper className={styles.login}>
      <div className={styles.login__wrapper}>
        <div className={styles.login__logoWrapper}>
          <img src={logo} alt="logo" className={styles.login__logo}/>
        </div>

        <h2 className={styles.login__title}>Войдите в свой аккаунт</h2>

        <form onSubmit={formik.handleSubmit}>
          <div className={styles.login__inputs}>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              onChange={formik.handleChange}
              value={formik.values.email}
              className={styles.login__input}
            />

            {formik.errors.email && formik.touched.email &&
              <p className={styles.login__error}>{formik.errors.email}</p>
            }

            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className={styles.login__input}
            />

            {formik.errors.password && formik.touched.password &&
              <p className={styles.login__error}>{formik.errors.password}</p>
            }
          </div>

          {auth.isLoading
            ? <Loader/>
            :
            <Button
              type="submit"
              variant={"primary"}
              className={styles.login__button}
            >
              Войти
            </Button>
          }
        </form>
      </div>
    </PageWrapper>
  );
});

export default Login;
