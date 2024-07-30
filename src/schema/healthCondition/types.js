export const HealthConditionTypes = `#graphql
  type HealthCondition {
    id: ID
    name: String
    canBeTested: Int
  }
  extend type Query {
    healthCondition(id: ID): HealthCondition
    healthConditions(filters: HealthConditionFilters, orderBy: OrderBy, pagination: Pagination): [HealthCondition]
  }
  extend type Mutation {
    healthConditionCreate(data: HealthConditionCreateDataInput!): HealthCondition
    healthConditionUpdate(data: HealthConditionUpdateDataInput!, id: ID!): HealthCondition
    healthConditionDelete(id: ID!): ID
  }
  input HealthConditionCreateDataInput {
    name: String
    canBeTested: Int
  }
  input HealthConditionUpdateDataInput {
    name: String
    canBeTested: Int
  }
  input HealthConditionFilters {
    name: String
  }
`;
