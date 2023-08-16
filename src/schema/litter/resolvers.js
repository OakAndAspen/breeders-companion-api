import {db} from '../../connection.js'

export const LitterResolvers = {
    sire: async (parent, args) => {
        return await db('dog').where({
            'id': parent.sire
        }).first();
    },
    dam: async (parent, args) => {
        return await db('dog').where({
            'id': parent.dam
        }).first();
    },
    breeder: async (parent, args) => {
        return await db('breeder').where({
            'id': parent.breeder
        }).first();
    }
}