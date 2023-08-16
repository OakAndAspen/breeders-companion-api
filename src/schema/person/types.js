export const PersonTypes = `#graphql
    type Person {
      id: ID
      firstName: String
      lastName: String
      email: String
      phoneNumber: String
      comments: String
    }
    extend type Query {
      person(id: ID): Person
      persons: [Person]
    }
    extend type Mutation {
      personCreate(data: PersonCreateDataInput!): Person
      personUpdate(data: PersonUpdateDataInput!, id: ID!): Person
      personDelete(id: ID!): ID
    }
    input PersonCreateDataInput {
      firstName: String
      lastName: String
      email: String
      phoneNumber: String
      comments: String
    }
    input PersonUpdateDataInput {
      firstName: String
      lastName: String
      email: String
      phoneNumber: String
      comments: String
    }
`;
