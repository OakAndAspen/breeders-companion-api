import { BreedTypes, BreedQueries, BreedMutations, BreedResolvers } from './breed/index.js'

export const typeDefs = `#graphql
     type Query
     type Mutation
     ${BreedTypes}
`

export const resolvers = {
    Query: {
        ... BreedQueries
    },
    Mutation: {
        ... BreedMutations
    },
    Breed: BreedResolvers
}