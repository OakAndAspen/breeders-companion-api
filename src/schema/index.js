import { AuthTypes, AuthQueries, AuthMutations } from './auth/index.js'
import { BreedTypes, BreedQueries, BreedMutations, BreedResolvers } from './breed/index.js'
import { UserTypes, UserQueries, UserMutations, UserResolvers } from './user/index.js'
import { DogTypes, DogQueries, DogMutations, DogResolvers } from './dog/index.js'
import { PersonTypes, PersonQueries, PersonMutations, PersonResolvers } from './person/index.js'

export const typeDefs = `#graphql
     type Query
     type Mutation
     ${AuthTypes}
     ${BreedTypes}
     ${UserTypes}
     ${DogTypes}
     ${PersonTypes}
`

export const resolvers = {
    Query: {
        ... AuthQueries,
        ... BreedQueries,
        ... UserQueries,
        ... DogQueries,
        ... PersonQueries
    },
    Mutation: {
        ... AuthMutations,
        ... BreedMutations,
        ... UserMutations,
        ... DogMutations,
        ... PersonMutations
    },
    Breed: BreedResolvers,
    User: UserResolvers,
    Dog: DogResolvers,
    Person: PersonResolvers
}