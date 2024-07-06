export const DogTypes = `#graphql
    type Dog {
      id: ID
      breed: Breed
      breeder: Breeder
      at: Breeder
      owner: Person
      name: String
      callName: String
      color: String
      birthDate: String
      gender: Gender
      comments: String
      litter: Litter
      isDeceased: Int
      isStarred: Int
    }
    enum Gender {
      M
      F
    }
    extend type Query {
      dog(id: ID): Dog
      dogs(filters: DogFilters, orderBy: OrderBy, pagination: Pagination): [Dog]
    }
    extend type Mutation {
      dogCreate(data: DogCreateDataInput!): Dog
      dogUpdate(data: DogUpdateDataInput!, id: ID!): Dog
      dogDelete(id: ID!): ID
    }
    input DogCreateDataInput {
      breed: ID
      breeder: ID
      at: ID
      owner: ID
      name: String
      callName: String
      color: String
      birthDate: String
      gender: Gender
      comments: String
      litter: ID
      isDeceased: Int
      isStarred: Int
    }
    input DogUpdateDataInput {
      breed: ID
      breeder: ID
      at: ID
      owner: ID
      name: String
      callName: String
      color: String
      birthDate: String
      gender: Gender
      comments: String
      litter: ID
      isDeceased: Int
      isStarred: Int
    }
    input DogFilters {
      breed: ID
      breeder: ID
      at: ID
      owner: ID
      name: String
      callName: String
      gender: Gender
      isDeceased: Int
      isStarred: Int
    }
`;
