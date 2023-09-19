export const DogTypes = `#graphql
    type Dog {
      id: ID
      breed: Breed
      breeder: Breeder
      owner: Person
      name: String
      callName: String
      color: String
      birthDate: String
      gender: Gender
      comments: String
      litter: Litter
    }
    enum Gender {
      M
      F
    }
    extend type Query {
      dog(id: ID): Dog
      dogs: [Dog]
    }
    extend type Mutation {
      dogCreate(data: DogCreateDataInput!): Dog
      dogUpdate(data: DogUpdateDataInput!, id: ID!): Dog
      dogDelete(id: ID!): ID
    }
    input DogCreateDataInput {
      breed: ID
      breeder: ID
      owner: ID
      name: String
      callName: String
      color: String
      birthDate: String
      gender: Gender
      comments: String
      litter: ID
    }
    input DogUpdateDataInput {
      breed: ID
      breeder: ID
      owner: ID
      name: String
      callName: String
      color: String
      birthDate: String
      gender: Gender
      comments: String
      litter: ID
    }
    input DogFilter {
      breed: ID
      breeder: ID
      owner: ID
      name: String
      callName: String
      gender: Gender
    }
`;
