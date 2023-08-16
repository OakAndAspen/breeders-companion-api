import { AuthTypes, AuthQueries, AuthMutations } from './auth/index.js'
import { BreedTypes, BreedQueries, BreedMutations, BreedResolvers } from './breed/index.js'
import { UserTypes, UserQueries, UserMutations, UserResolvers } from './user/index.js'
import { DogTypes, DogQueries, DogMutations, DogResolvers } from './dog/index.js'
import { PersonTypes, PersonQueries, PersonMutations, PersonResolvers } from './person/index.js'
import { BreederTypes, BreederQueries, BreederMutations, BreederResolvers } from './breeder/index.js'

export const typeDefs = `#graphql
     type Query
     type Mutation
     ${AuthTypes}
     ${BreedTypes}
     ${UserTypes}
     ${DogTypes}
     ${PersonTypes}
     ${BreederTypes}
`

export const resolvers = {
    Query: {
        ... AuthQueries,
        ... BreedQueries,
        ... UserQueries,
        ... DogQueries,
        ... PersonQueries,
        ... BreederQueries
    },
    Mutation: {
        ... AuthMutations,
        ... BreedMutations,
        ... UserMutations,
        ... DogMutations,
        ... PersonMutations,
        ... BreederMutations
    },
    Breed: BreedResolvers,
    User: UserResolvers,
    Dog: DogResolvers,
    Person: PersonResolvers,
    Breeder: BreederResolvers
}