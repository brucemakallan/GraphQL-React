import gql from 'graphql-tag';

const CREATE_USER = gql`
  mutation CreateUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    createUser(input: {firstName: $firstName, lastName: $lastName, email: $email, password: $password}) {
      user {
        id
        email
        firstName
        lastName
        articlesCount
      }
      token
      errors
    }
  }
`;

export default CREATE_USER;
