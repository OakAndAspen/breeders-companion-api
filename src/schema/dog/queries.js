import {db} from '../../connection.js'

export const DogQueries = {
    dogs: async (obj, args, context, info) => {
        return await db('dog').where({
            'user': context.user.id
        });
    },
    dog: async (obj, args, context, info) => {
        return await db('dog').where({
            'id': args.id,
            'user': context.user.id
        }).first();
    },
}