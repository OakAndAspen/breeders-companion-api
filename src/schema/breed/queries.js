import {db} from '../../connection.js'

export const BreedQueries = {
    breeds: async (obj, args, context, info) => {
        return await db('breed').where({
            'user': context.user.id
        });
    },
    breed: async (obj, args, context, info) => {
        return await db('breed').where({
            'id': args.id,
            'user': context.user.id
        }).first();
    },
}