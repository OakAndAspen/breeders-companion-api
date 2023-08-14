export const AuthTypes = `#graphql
    extend type Query {
      login(data: LoginInput!): String
    }
    extend type Mutation {
      passwordUpdate(data: PasswordUpdateInput!): Boolean
    }
    input LoginInput {
      email: String!
      password: String!
    }
    input PasswordUpdateInput {
      oldPassword: String!
      newPassword: String!
    }
`;
