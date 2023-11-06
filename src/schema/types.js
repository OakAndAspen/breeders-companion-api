export const GeneralTypes = `#graphql
    input Pagination {
      index: Int,
      limit: Int!
    }
    input OrderBy {
      field: String!,
      desc: Int
    }
`;
