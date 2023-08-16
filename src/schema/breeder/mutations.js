import {db} from '../../connection.js'

export const BreederMutations = {
    breederCreate: async (parent, args, context) => {
        let id = await db('breeder').insert({
            'user': context.user.id,
            ...args.data
        });
        if(!id) return null;

        return await db('breeder').where({'id': id[0]}).first();
    },
    breederUpdate: async (parent, args, context) => {
        let found = await db('breeder')
        .where({
            'id': args.id,
            'user': context.user.id
        }).update(args.data);

        if(!found) return null;
        return await db('breeder')
        .where({
            'id': args.id
        }).first();
    },
    breederDelete: async (parent, args, context) => {
        return await db('breeder')
        .where({
            'id': args.id,
            'user': context.user.id
        }).delete({});
    }
}