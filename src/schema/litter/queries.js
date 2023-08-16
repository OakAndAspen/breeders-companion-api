import {db} from '../../connection.js'

export const LitterQueries = {
    litters: async (obj, args, context, info) => {
        return await db('litter').where({
            'user': context.user.id
        });
    },
    litter: async (obj, args, context, info) => {
        return await db('litter').where({
            'id': args.id,
            'user': context.user.id
        }).first();
    },
}