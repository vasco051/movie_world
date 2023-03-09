import { staticLinks } from "../assets/exportData/links";

import { ILink, IRoute } from "../models/IRoutes";

import About from "../pages/About/About";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import MovieById from "../pages/MovieById/MovieById";
import Movies from "../pages/Movies/Movies";

import { ReactComponent as IcAbout } from "../assets/images/navbar/About.svg";
import { ReactComponent as IcHome } from "../assets/images/navbar/Home.svg";


export const publicRoutes: IRoute[] = [
  { path: "*", element: Error },
  { path: staticLinks.basic, element: Login },
  { path: staticLinks.login, element: Login }
];

export const privateRoutes: IRoute[] = [
  { path: "*", element: Error },
  { path: staticLinks.basic, element: Movies },
  { path: staticLinks.movies, element: Movies },
  { path: staticLinks.movieId, element: MovieById },
  { path: staticLinks.about, element: About }
];

export const NAVBAR_LINKS: ILink[] = [
  { to: staticLinks.movies, label: "Главная", icon: IcHome },
  { to: staticLinks.about, label: "О нас", icon: IcAbout }
];
