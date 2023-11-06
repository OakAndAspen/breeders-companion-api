import { GeneralTypes } from './types.js'
import { AuthTypes, AuthQueries, AuthMutations } from './auth/index.js'
import { BreedTypes, BreedQueries, BreedMutations, BreedResolvers } from './breed/index.js'
import { UserTypes, UserQueries, UserMutations, UserResolvers } from './user/index.js'
import { DogTypes, DogQueries, DogMutations, DogResolvers } from './dog/index.js'
import { PersonTypes, PersonQueries, PersonMutations, PersonResolvers } from './person/index.js'
import { BreederTypes, BreederQueries, BreederMutations, BreederResolvers } from './breeder/index.js'
import { LitterTypes, LitterQueries, LitterMutations, LitterResolvers } from './litter/index.js'

export const typeDefs = `#graphql
     type Query
     type Mutation
     ${GeneralTypes}
     ${AuthTypes}
     ${BreedTypes}
     ${UserTypes}
     ${DogTypes}
     ${PersonTypes}
     ${BreederTypes}
     ${LitterTypes}
`

export const resolvers = {
    Query: {
        ... AuthQueries,
        ... BreedQueries,
        ... UserQueries,
        ... DogQueries,
        ... PersonQueries,
        ... BreederQueries,
        ... LitterQueries
    },
    Mutation: {
        ... AuthMutations,
        ... BreedMutations,
        ... UserMutations,
        ... DogMutations,
        ... PersonMutations,
        ... BreederMutations,
        ... LitterMutations
    },
    Breed: BreedResolvers,
    User: UserResolvers,
    Dog: DogResolvers,
    Person: PersonResolvers,
    Breeder: BreederResolvers,
    Litter: LitterResolvers
}