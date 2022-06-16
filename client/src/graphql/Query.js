import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query Users {
    users {
      id
      firstName
      lastName
      email
    }
  }
`;

export const GET_MESSAGE=gql`
query MessagesByUser($receiverId: Int!) {
  messagesByUser(receiverId: $receiverId) {
    id
    text
    receiverId
    senderId
    createAt
  }
}

`
