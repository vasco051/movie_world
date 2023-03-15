export const staticLinks = {
  basic: "/",
  login: "/login",
  movies: "/movies",
  movieId: "/movies/:id",
  about: "/about",
  privatePolicy: '/private-policy',
  termsUse: '/terms-use',
  support: '/support',
  supportedDevices: '/supported-devices'
};

export const dynamicLink = {
  movieId: (id: number) => `/movies/${id}`
};
