import { GeneralTypes } from './types.js'
import { AuthTypes, AuthQueries, AuthMutations } from './auth/index.js'
import { BreedTypes, BreedQueries, BreedMutations, BreedResolvers } from './breed/index.js'
import { UserTypes, UserQueries, UserMutations, UserResolvers } from './user/index.js'
import { DogTypes, DogQueries, DogMutations, DogResolvers } from './dog/index.js'
import { PersonTypes, PersonQueries, PersonMutations, PersonResolvers } from './person/index.js'
import { BreederTypes, BreederQueries, BreederMutations, BreederResolvers } from './breeder/index.js'
import { LitterTypes, LitterQueries, LitterMutations, LitterResolvers } from './litter/index.js'
import { GeneticTraitTypes, GeneticTraitQueries, GeneticTraitMutations, GeneticTraitResolvers } from './geneticTrait/index.js'
import { HealthConditionTypes, HealthConditionQueries, HealthConditionMutations, HealthConditionResolvers } from './healthCondition/index.js'

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
     ${GeneticTraitTypes}
     ${HealthConditionTypes}
`

export const resolvers = {
    Query: {
        ... AuthQueries,
        ... BreedQueries,
        ... UserQueries,
        ... DogQueries,
        ... PersonQueries,
        ... BreederQueries,
        ... LitterQueries,
        ... GeneticTraitQueries,
        ... HealthConditionQueries
    },
    Mutation: {
        ... AuthMutations,
        ... BreedMutations,
        ... UserMutations,
        ... DogMutations,
        ... PersonMutations,
        ... BreederMutations,
        ... LitterMutations,
        ... GeneticTraitMutations,
        ... HealthConditionMutations
    },
    Breed: BreedResolvers,
    User: UserResolvers,
    Dog: DogResolvers,
    Person: PersonResolvers,
    Breeder: BreederResolvers,
    Litter: LitterResolvers,
    GeneticTrait: GeneticTraitResolvers,
    HealthCondition: HealthConditionResolvers
}