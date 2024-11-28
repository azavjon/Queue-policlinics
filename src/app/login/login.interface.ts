
export interface LoginData {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;  // или любой другой ответ от сервера (например, userId, role и т.д.)
  // Добавьте любые дополнительные поля, возвращаемые сервером
}
