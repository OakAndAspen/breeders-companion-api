import {db} from '../../connection.js'

export const DogResolvers = {
    breed: async (parent, args) => {
        return await db('breed').where({
            'id': parent.breed
        }).first();
    }
}