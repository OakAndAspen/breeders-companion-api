import { BreedTypes, BreedQueries, BreedMutations, BreedResolvers } from './breed/index.js'
import { UserTypes, UserQueries, UserMutations, UserResolvers } from './user/index.js'

export const typeDefs = `#graphql
     type Query
     type Mutation
     ${BreedTypes}
     ${UserTypes}
`

export const resolvers = {
    Query: {
        ... BreedQueries,
        ... UserQueries
    },
    Mutation: {
        ... BreedMutations,
        ... UserMutations
    },
    Breed: BreedResolvers,
    User: UserResolvers
}