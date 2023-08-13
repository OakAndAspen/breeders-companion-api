import {db} from '../../connection.js'

export const UserQueries = {
    users: async () => {
        return await db('user');
    },
    user: async (obj, args, context, info) => {
        return await db('user').where({'id': args.id}).first();
    },
}