export const BreedTypes = `#graphql
  type Breed {
    id: ID
    name: String
    wolfiness: Float
  }
  extend type Query {
    breed(id: ID): Breed
    breeds(filters: BreedFilters, orderBy: OrderBy, pagination: Pagination): [Breed]
  }
  extend type Mutation {
    breedCreate(data: BreedCreateDataInput!): Breed
    breedUpdate(data: BreedUpdateDataInput!, id: ID!): Breed
    breedDelete(id: ID!): ID
  }
  input BreedCreateDataInput {
    name: String
    wolfiness: Float
  }
  input BreedUpdateDataInput {
    name: String
    wolfiness: Float
  }
  input BreedFilters {
    name: String
  }
`;
