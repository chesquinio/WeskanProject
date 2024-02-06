// This routes don´t require authentication
export const publicRoutes = [
  "/",
  "/nueva-verificacion",
  "/empresa",
  "/productos",
  "/catalogo",
];

// Routes used for authentication
export const authRoutes = [
  "/iniciar-sesion",
  "/registrarse",
  "/recuperar",
  "/confirmar",
  "/error",
];

// The prefix for API authentication routes
export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/catalogo";
