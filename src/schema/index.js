import { AuthTypes, AuthQueries, AuthMutations } from './auth/index.js'
import { BreedTypes, BreedQueries, BreedMutations, BreedResolvers } from './breed/index.js'
import { UserTypes, UserQueries, UserMutations, UserResolvers } from './user/index.js'
import { DogTypes, DogQueries, DogMutations, DogResolvers } from './dog/index.js'

export const typeDefs = `#graphql
     type Query
     type Mutation
     ${AuthTypes}
     ${BreedTypes}
     ${UserTypes}
     ${DogTypes}
`

export const resolvers = {
    Query: {
        ... AuthQueries,
        ... BreedQueries,
        ... UserQueries,
        ... DogQueries
    },
    Mutation: {
        ... AuthMutations,
        ... BreedMutations,
        ... UserMutations,
        ... DogMutations
    },
    Breed: BreedResolvers,
    User: UserResolvers,
    Dog: DogResolvers
}