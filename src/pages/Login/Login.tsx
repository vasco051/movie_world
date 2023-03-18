import { useFormik } from "formik";
import { observer } from "mobx-react-lite";
import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { staticLinks } from "../../assets/exportData/links";

import logo from "../../assets/images/login/logo.png";
import Button from "../../components/UI/button/Button";
import Input from "../../components/UI/input/Input";
import Loader from "../../components/UI/Loader/Loader";
import PageWrapper from "../../components/Wrappers/PageWrapper/PageWrapper";

import { Context } from "../../index";

import { IUser } from "../../models/userModels";

import styles from "./Login.module.scss";


const Login: FC = observer(() => {
  const { authStore } = useContext(Context);
  const navigate = useNavigate();


  const formik = useFormik({
    initialValues: {
      email: "applicant3@mail.ru",
      password: "admin12345"
    },
    onSubmit: async (values) => {
      const userData: IUser = {
        email: values.email,
        password: values.password
      };

      const response = await authStore.authorization(userData);

      if ("data" in response) {
        navigate(staticLinks.movies);

      }
      else if (response.errors) {
        formik.setErrors(response.errors);
      }
    }
  });


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
            {formik.errors?.email &&
              <p className={styles.login__error}>{formik.errors.email}</p>
            }

            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Пароль"
              onChange={formik.handleChange}
              value={formik.values.password}
              className={styles.login__input}
            />
            {formik.errors?.password &&
              <p className={styles.login__error}>{formik.errors.password}</p>
            }

            {!formik.errors.email && !formik.errors.password && authStore.isError &&
              <p className={styles.login__error}>{authStore.isError}</p>
            }

          </div>

          {authStore.isLoading
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
