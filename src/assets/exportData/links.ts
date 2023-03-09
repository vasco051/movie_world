export const staticLinks = {
  basic: "/",
  login: "/login",
  movies: "/movies",
  movieId: "/movies/:id",
  about: "/about"
};

export const dynamicLink = {
  movieId: (id: number) => `/movies/${id}`
};
