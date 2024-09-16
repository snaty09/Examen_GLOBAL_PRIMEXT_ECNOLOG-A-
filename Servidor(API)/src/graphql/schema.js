const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Person {
    PersonID: ID
    FirstName: String
    LastNameP: String
    LastNameM: String
    Address: String
    Phone: String
  }

  input PersonInput {
    FirstName: String
    LastNameP: String
    LastNameM: String
    Address: String
    Phone: String
  }

  type Query {
    getPersons: [Person]
  }

  type Mutation {
    createPerson(input: PersonInput): Person
    updatePerson(id: ID!, input: PersonInput): Person
    deletePerson(id: ID!): String
  }
`);

module.exports = schema;
