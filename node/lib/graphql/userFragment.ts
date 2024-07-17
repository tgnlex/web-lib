import gql from 'graphql-tag';

const userFragment = gql`
  fragment User_user on User {
    firstName
    lastName
  }
`