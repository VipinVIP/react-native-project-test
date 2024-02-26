import api from './api'

type LogInUserProp = {
  email: string | undefined
  password: string | undefined
}

type SignupUserProp = LogInUserProp & {
  fullName: string | undefined
}
type LoginResp = {
  token: string
  message: string
  user_id: string
  status: boolean
}
type SignupResp = LoginResp

type LoginUserResponse = {
  loginResp: LoginResp
  statusCode: string
}
type SignUserResponse = {
  signupResp: SignupResp
  statusCode: string
}

export async function loginUser({
  email,
  password,
}: LogInUserProp): Promise<LoginUserResponse> {
  let statusCode: string = ''
  let loginResp: any

  const logInPayload = {
    user_email: email,
    password: password,
  }

  console.log(logInPayload)

  try {
    const logInResponse = await api.post('userLogin', logInPayload)
    statusCode = logInResponse.status.toString()

    loginResp = logInResponse.data
    console.log(loginResp, statusCode)
  } catch (error: any) {
    console.log('Error while logging in:', error)
  }
  return {loginResp, statusCode}
}

export async function signupUser({
  fullName,
  email,
  password,
}: SignupUserProp): Promise<SignUserResponse> {
  let statusCode: string = ''
  let signupResp: any

  const SignupPayload = {
    user_fullname: fullName,
    user_email: email,
    password: password,
  }

  console.log(SignupPayload)

  try {
    const SignupResponse = await api.post('userRegistration', SignupPayload)
    statusCode = SignupResponse.status.toString()

    signupResp = SignupResponse.data
    console.log(signupResp, statusCode)
  } catch (error: any) {
    console.log('Error while logging in:', error)
  }
  return {signupResp, statusCode}
}
