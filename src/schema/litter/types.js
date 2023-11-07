export const LitterTypes = `#graphql
    type Litter {
      id: ID
      sire: Dog
      dam: Dog
      breeder: Breeder
      name: String
      whelpingStartDate: String
      puppies: [Dog]
    }
    extend type Query {
      litter(id: ID): Litter
      litters(filters: LitterFilters, orderBy: OrderBy, pagination: Pagination): [Litter]
    }
    extend type Mutation {
      litterCreate(data: LitterCreateDataInput!): Litter
      litterUpdate(data: LitterUpdateDataInput!, id: ID!): Litter
      litterDelete(id: ID!): ID
    }
    input LitterCreateDataInput {
      sire: ID
      dam: ID
      breeder: ID
      name: String
      whelpingStartDate: String
    }
    input LitterUpdateDataInput {
      sire: ID
      dam: ID
      breeder: ID
      name: String
      whelpingStartDate: String
    }
    input LitterFilters {
      sire: ID
      dam: ID
      breeder: ID
      name: String
    }
`;
