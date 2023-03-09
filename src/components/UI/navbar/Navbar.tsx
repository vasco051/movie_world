import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

import { INavbar } from "./INavbar";

import clsx from "clsx";
import styles from "./Navbar.module.scss";


const Navbar: FC<INavbar> = ({ links }) => {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        {links.map((link) => (
          <li key={link.to} className={styles.navbar__item}>
            <Link
              to={link.to}
              className={clsx({
                [styles.navbar__link]: true,
                [styles.navbar__link_active]: location.pathname === link.to
              })}
            >
              {link.icon && <link.icon/>}
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
