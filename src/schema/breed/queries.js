import {db} from '../../connection.js'

export const BreedQueries = {
    breeds: async () => {
        return await db('breed');
    },
    breed: async (obj, args, context, info) => {
        return await db('breed').where({'id': args.id}).first();
    },
}