export const GeneticTraitTypes = `#graphql
  type GeneticTrait {
    id: ID
    gene: String
    acronym: String
    locus: String
  }
  extend type Query {
    geneticTrait(id: ID): GeneticTrait
    geneticTraits(filters: GeneticTraitFilters, orderBy: OrderBy, pagination: Pagination): [GeneticTrait]
  }
  extend type Mutation {
    geneticTraitCreate(data: GeneticTraitCreateDataInput!): GeneticTrait
    geneticTraitUpdate(data: GeneticTraitUpdateDataInput!, id: ID!): GeneticTrait
    geneticTraitDelete(id: ID!): ID
  }
  input GeneticTraitCreateDataInput {
    gene: String
    acronym: String
    locus: String
  }
  input GeneticTraitUpdateDataInput {
    gene: String
    acronym: String
    locus: String
  }
  input GeneticTraitFilters {
    gene: String
    acronym: String
    locus: String
  }
`;
