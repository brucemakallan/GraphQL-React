import gql from 'graphql-tag';

const FETCH_ALL_ARTICLES = gql`
  query {
    articles {
      id
      title
      body
      imageUrl
      author {
        firstName
        lastName
      }
    }
  }
`;

export default FETCH_ALL_ARTICLES;
