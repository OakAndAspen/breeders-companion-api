import {db} from '../../connection.js'

export const DogResolvers = {
    breed: async (parent, args) => {
        return await db('breed').where({
            'id': parent.breed
        }).first();
    },
    owner: async (parent, args) => {
        return await db('person').where({
            'id': parent.owner
        }).first();
    },
    litter: async (parent, args) => {
        return await db('litter').where({
            'id': parent.litter
        }).first();
    },
    breeder: async (parent, args) => {
        return await db('breeder').where({
            'id': parent.breeder
        }).first();
    }
}