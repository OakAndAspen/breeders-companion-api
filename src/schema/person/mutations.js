import {db} from '../../connection.js'

export const PersonMutations = {
    personCreate: async (parent, args, context) => {
        let id = await db('person').insert({
            'user': context.user.id,
            ...args.data
        });
        if(!id) return null;

        return await db('person').where({'id': id[0]}).first();
    },
    personUpdate: async (parent, args, context) => {
        let found = await db('person')
        .where({
            'id': args.id,
            'user': context.user.id
        }).update(args.data);

        if(!found) return null;
        return await db('person')
        .where({
            'id': args.id
        }).first();
    },
    personDelete: async (parent, args, context) => {
        return await db('person')
        .where({
            'id': args.id,
            'user': context.user.id
        }).delete({});
    }
}