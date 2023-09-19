import {db} from '../../connection.js'

export const BreederResolvers = {
    owner: async (parent, args) => {
        return await db('person').where({
            'id': parent.owner
        }).first();
    },
    litters: async (parent, args) => {
        return await db('litter').where({
            'breeder': parent.id
        });
    }
}