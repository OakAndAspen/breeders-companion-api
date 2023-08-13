export const UserTypes = `#graphql
    type User {
      id: ID
      firstName: String
      lastName: String
      email: String
      password: String
    }
    extend type Query {
      user(id: ID): User
      users: [User]
    }
    extend type Mutation {
      userCreate(data: UserCreateDataInput!): User
      userUpdate(data: UserUpdateDataInput!, id: ID!): User
      userDelete(id: ID!): ID
    }
    input UserCreateDataInput {
      firstName: String
      lastName: String
      email: String
      password: String
    }
    input UserUpdateDataInput {
      firstName: String
      lastName: String
      email: String
      password: String
    }
`;
