import {db} from '../../connection.js'

export const BreederQueries = {
    breeders: async (obj, args, context, info) => {
        return await db('breeder').where({
            'user': context.user.id
        });
    },
    breeder: async (obj, args, context, info) => {
        return await db('breeder').where({
            'id': args.id,
            'user': context.user.id
        }).first();
    },
}