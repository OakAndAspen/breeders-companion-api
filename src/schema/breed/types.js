export const BreedTypes = `#graphql
    type Breed {
      id: ID
      name: String
    }
    extend type Query {
      breed(id: ID): Breed
      breeds: [Breed]
    }
    extend type Mutation {
      breedCreate(data: BreedCreateDataInput!): Breed
      breedUpdate(data: BreedUpdateDataInput!, id: ID!): Breed
      breedDelete(id: ID!): ID
    }
    input BreedCreateDataInput {
      name: String
    }
    input BreedUpdateDataInput {
      name: String
    }
`;
