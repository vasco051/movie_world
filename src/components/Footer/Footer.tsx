import clsx from "clsx";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { staticLinks } from "../../assets/exportData/links";

import logo from "../../assets/images/logo.png";

import styles from "./Footer.module.scss";
import { IFooter } from "./IFooter";


const Footer: FC = () => {
  const location = useLocation()

  const footerContent: IFooter = {
    info: [
      { to: "/private-policy", label: "политика конфиденциальности" },
      { to: "/terms-use", label: "пользовательское соглашение" },
      { to: "/support", label: "поддержка" },
      { to: "/supported-devices", label: "поддерживаемые устройства" }
    ]
  };

  const pagesIgnoreFooter = [
    staticLinks.basic,
    staticLinks.login
  ]

  if (pagesIgnoreFooter.includes(location.pathname)) return null

  return (
    <footer className={styles.footer}>
      <div className={clsx(styles.footer__wrapper, "container")}>
        <Link to={staticLinks.movies}>
          <img src={logo} alt="logo" className={styles.footer__logo}/>
        </Link>

        <ul className={styles.footer__info}>
          {footerContent.info.map(info => (
            <li key={info.to}>
              <Link to={info.to} className={styles.footer__link}>
                {info.label}
              </Link>
            </li>
          ))}
        </ul>

        <p className={styles.footer__description}>
          Disney+ es un servicio por suscripción de pago, su contenido está
          sujeto a disponibilidad. El servicio Disney+ es comercializado por
          Disney DTC LATAM, Inc., 2400 W Alameda AVE., Burbank CA 91521.
        </p>

        <p className={styles.copyright}>
          © Disney. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;