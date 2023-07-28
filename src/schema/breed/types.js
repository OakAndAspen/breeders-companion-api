export const BreedTypes = `#graphql
    type Breed {
      id: ID
      name: String
    }
    extend type Query {
      breed: Breed
      breeds: [Breed]
    }
    input BreedCreateDataInput {
        name: String
    }
    input BreedUpdateDataInput {
        name: String
    }
    input BreedUpdateWhereInput {
       is: ID
    }
    extend type Mutation {
      breedCreate(data: BreedCreateDataInput!): Breed
      breedUpdate(data: BreedUpdateDataInput!, where: BreedUpdateWhereInput!): Breed 
    }
`;
