import { api } from "./client";

export const loginEnd = (credentials) => {
  return api.post('/auth/login', credentials)
}

export const sendVerificationEmail = (credentials) => {
  return api.post('/auth/sendVerificationEmailForRegistration', credentials);
}