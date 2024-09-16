import { gql } from 'apollo-angular';

export const GET_PERSONS = gql`
  query GetPersons {
    getPersons {
      PersonID
      FirstName
      LastNameP
      LastNameM
      Address
      Phone
    }
  }
`;

export const CREATE_PERSON = gql`
  mutation CreatePerson($input: PersonInput) {
    createPerson(input: $input) {
      PersonID
      FirstName
      LastNameP
      LastNameM
      Address
      Phone
    }
  }
`;

export const UPDATE_PERSON = gql`
  mutation UpdatePerson($id: ID!, $input: PersonInput) {
    updatePerson(id: $id, input: $input) {
      PersonID
      FirstName
      LastNameP
      LastNameM
      Address
      Phone
    }
  }
`;

export const DELETE_PERSON = gql`
  mutation DeletePerson($id: ID!) {
    deletePerson(id: $id)
  }
`;
