import {db} from '../../connection.js'

export const PersonQueries = {
    persons: async (obj, args, context, info) => {
        return await db('person').where({
            'user': context.user.id
        });
    },
    person: async (obj, args, context, info) => {
        return await db('person').where({
            'id': args.id,
            'user': context.user.id
        }).first();
    },
}