import {db} from '../../connection.js'

export const LitterMutations = {
    litterCreate: async (parent, args, context) => {
        let id = await db('litter').insert({
            'user': context.user.id,
            ...args.data
        });
        if(!id) return null;

        return await db('litter').where({'id': id[0]}).first();
    },
    litterUpdate: async (parent, args, context) => {
        let found = await db('litter')
        .where({
            'id': args.id,
            'user': context.user.id
        }).update(args.data);

        if(!found) return null;
        return await db('litter')
        .where({
            'id': args.id
        }).first();
    },
    litterDelete: async (parent, args, context) => {
        return await db('litter')
        .where({
            'id': args.id,
            'user': context.user.id
        }).delete({});
    }
}