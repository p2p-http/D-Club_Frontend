import { api } from "./client";

export const loginEnd = (credentials) => api.post('/auth/login', credentials)

export const sendVerificationEmail = (credentials) => api.post('/auth/sendVerificationEmailForRegistration', credentials);

export const createPassword = (credentials) => api.post('/auth/createPassword', credentials)

export const sendForgotPasswordEmail = (credentials) => api.post('/auth/forgotPassword', credentials)

export const resetPassword = (credentials) => api.post('/auth/resetPassword', credentials)

export const supportEnd = (credentials) => api.post('/support/queryEmailToSupport', credentials)

export const updateProfileEnd = (credentials, token) =>
  api.post('/profile/update', credentials, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const updateProfileImg = (formData, token) =>
  api.post('/profile/uploadProfilePicture', formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });

