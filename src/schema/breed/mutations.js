import {db} from '../../connection.js'

export const BreedMutations = {
    breedCreate: async (parent, args, context) => {
        let id = await db('breed').insert({
            'user': context.user.id,
            ...args.data
        });
        if(!id) return null;

        return await db('breed').where({'id': id[0]}).first();
    },
    breedUpdate: async (parent, args, context) => {
        let found = await db('breed')
        .where({
            'id': args.id,
            'user': context.user.id
        }).update(args.data);

        if(!found) return null;
        return await db('breed')
        .where({
            'id': args.id
        }).first();
    },
    breedDelete: async (parent, args, context) => {
        return await db('breed')
        .where({
            'id': args.id,
            'user': context.user.id
        }).delete({});
    }
}