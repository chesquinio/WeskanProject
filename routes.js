// This routes don´t require authentication
export const publicRoutes = ["/", "/empresa", "/productos"];

// Routes used for authentication
export const authRoutes = ["/iniciar-sesion", "/registrarse"];

// The prefix for API authentication routes
export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/catalogo";
