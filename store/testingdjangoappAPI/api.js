import axios from "axios"
const testingdjangoappAPI = axios.create({
  baseURL: "https://testing-django-app-31743-prod.herokuapp.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_login_create(payload) {
  return testingdjangoappAPI.post(`/api/v1/login/`)
}
function api_v1_sample_list(payload) {
  return testingdjangoappAPI.get(`/api/v1/sample/`)
}
function api_v1_sample_create(payload) {
  return testingdjangoappAPI.post(`/api/v1/sample/`, payload.data)
}
function api_v1_sample_read(payload) {
  return testingdjangoappAPI.get(`/api/v1/sample/${payload.id}/`)
}
function api_v1_sample_update(payload) {
  return testingdjangoappAPI.put(`/api/v1/sample/${payload.id}/`, payload.data)
}
function api_v1_sample_partial_update(payload) {
  return testingdjangoappAPI.patch(
    `/api/v1/sample/${payload.id}/`,
    payload.data
  )
}
function api_v1_sample_delete(payload) {
  return testingdjangoappAPI.delete(`/api/v1/sample/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return testingdjangoappAPI.post(`/api/v1/signup/`, payload.data)
}
function api_v1_userdetails_list(payload) {
  return testingdjangoappAPI.get(`/api/v1/userdetails/`)
}
function api_v1_userdetails_create(payload) {
  return testingdjangoappAPI.post(`/api/v1/userdetails/`, payload.data)
}
function api_v1_userdetails_read(payload) {
  return testingdjangoappAPI.get(`/api/v1/userdetails/${payload.id}/`)
}
function api_v1_userdetails_update(payload) {
  return testingdjangoappAPI.put(
    `/api/v1/userdetails/${payload.id}/`,
    payload.data
  )
}
function api_v1_userdetails_partial_update(payload) {
  return testingdjangoappAPI.patch(
    `/api/v1/userdetails/${payload.id}/`,
    payload.data
  )
}
function api_v1_userdetails_delete(payload) {
  return testingdjangoappAPI.delete(`/api/v1/userdetails/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return testingdjangoappAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_list(payload) {
  return testingdjangoappAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return testingdjangoappAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return testingdjangoappAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return testingdjangoappAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return testingdjangoappAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function rest_auth_registration_create(payload) {
  return testingdjangoappAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return testingdjangoappAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
function rest_auth_user_read(payload) {
  return testingdjangoappAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return testingdjangoappAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return testingdjangoappAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_v1_login_create,
  api_v1_sample_list,
  api_v1_sample_create,
  api_v1_sample_read,
  api_v1_sample_update,
  api_v1_sample_partial_update,
  api_v1_sample_delete,
  api_v1_signup_create,
  api_v1_userdetails_list,
  api_v1_userdetails_create,
  api_v1_userdetails_read,
  api_v1_userdetails_update,
  api_v1_userdetails_partial_update,
  api_v1_userdetails_delete,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
