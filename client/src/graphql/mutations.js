import {gql} from '@apollo/client'

export const SIGNUP_USER = gql`
mutation SignupUser($userNew: UserInput!) {
    signupUser(userNew: $userNew) {
      id
      email
      firstName
      lastName
    }
  }`

export const LOGIN_USER = gql`
mutation SignInUser($userSignin: UserSignInInput) {
  signInUser(userSignin: $userSignin) {
    token
  }
}
`
