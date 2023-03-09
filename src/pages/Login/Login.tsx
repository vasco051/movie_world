import { FC, useContext } from "react";
import { Link } from "react-router-dom";

import { staticLinks } from "../../assets/exportData/links";
import { Context } from "../../index";

import logo from "../../assets/images/login/logo.png";
import Button from "../../components/UI/button/Button";
import Input from "../../components/UI/input/Input";
import PageWrapper from "../../components/Wrappers/PageWrapper/PageWrapper";

import styles from "./Login.module.scss";


const Login: FC = () => {
  const { user } = useContext(Context);

  return (
    <PageWrapper className={styles.login}>
      <div className={styles.login__wrapper}>
        <div className={styles.login__logoWrapper}>
          <img src={logo} alt="logo" className={styles.login__logo}/>
        </div>

        <h2 className={styles.login__title}>Введите свой ник для входа</h2>

        <Input
          type="text"
          placeholder="Введите ваш никнейм..."
          className={styles.login__input}
        />

        {/* Т.к Бэка нет, то тут сразу переход на movies */}
        <Link to={staticLinks.movies} onClick={() => user.setIsAuth(true)}>
          <Button variant={"primary"} className={styles.login__button}>
            Войти
          </Button>
        </Link>
      </div>
    </PageWrapper>
  );
};

export default Login;
