import { FC, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import { NAVBAR_LINKS } from "../../router/routes";
import { staticLinks } from "../../assets/exportData/links";

import logo from "../../assets/images/logo.png";
import Button from "../UI/button/Button";
import Navbar from "../UI/navbar/Navbar";

import clsx from "clsx";
import styles from "./Header.module.scss";


const Header: FC = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation()

  const pagesIgnoreHeader = [
    staticLinks.login,
    staticLinks.basic
  ]

  if (!user.isAuth && pagesIgnoreHeader.includes(location.pathname)) return null

  return (
    <header className={styles.header}>
      <div className={clsx("container", styles.header__wrapper)}>
        <Link to={staticLinks.movies}>
          <img src={logo} alt="logo" className={styles.header__logo}/>

        </Link>
        <div className={styles.header__rightMenu}>
          {user.isAuth && <Navbar links={NAVBAR_LINKS}/>}

          {user.isAuth
            ?
            <Link to={staticLinks.login}>
              <Button variant={"primary"} onClick={() => user.setIsAuth(!user.isAuth)}>Выйти</Button>
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
