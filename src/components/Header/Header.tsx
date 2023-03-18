import clsx from "clsx";
import { observer } from "mobx-react-lite";
import { FC, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { staticLinks } from "../../assets/exportData/links";

import logo from "../../assets/images/logo.png";

import { Context } from "../../index";
import { NAVBAR_LINKS } from "../../router/routes";

import Button from "../UI/button/Button";
import Navbar from "../UI/navbar/Navbar";

import styles from "./Header.module.scss";


const Header: FC = observer(() => {
  const { authStore } = useContext(Context);
  const location = useLocation();

  const pagesIgnoreHeader = [
    staticLinks.login,
    staticLinks.basic
  ];

  if (!authStore.isAuth && pagesIgnoreHeader.includes(location.pathname)) {
    return null;
  }

  return (
    <header className={styles.header}>
      <div className={clsx("container", styles.header__wrapper)}>
        <Link to={staticLinks.movies}>
          <img src={logo} alt="logo" className={styles.header__logo}/>

        </Link>
        <div className={styles.header__rightMenu}>
          {authStore.isAuth && <Navbar links={NAVBAR_LINKS}/>}

          {authStore.isAuth
            ?
            <Link to={staticLinks.login}>
              <Button variant={"primary"} onClick={() => authStore.setAuth(false)}>Выйти</Button>
            </Link>
            :
            <Link to={staticLinks.login}>
              <Button variant={"primary"}>Вход / Регистрация</Button>
            </Link>
          }
        </div>
      </div>
    </header>
  );
});

export default Header;
