import {db} from '../../connection.js'

export const DogMutations = {
    dogCreate: async (parent, args, context) => {
        let id = await db('dog').insert({
            'user': context.user.id,
            ...args.data
        });
        if(!id) return null;

        return await db('dog').where({'id': id[0]}).first();
    },
    dogUpdate: async (parent, args, context) => {
        let found = await db('dog')
        .where({
            'id': args.id,
            'user': context.user.id
        }).update(args.data);

        if(!found) return null;
        return await db('dog')
        .where({
            'id': args.id
        }).first();
    },
    dogDelete: async (parent, args, context) => {
        return await db('dog')
        .where({
            'id': args.id,
            'user': context.user.id
        }).delete({});
    }
}