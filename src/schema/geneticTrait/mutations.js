import {db} from '../../connection.js'

export const GeneticTraitMutations = {
    geneticTraitCreate: async (parent, args, context) => {
        let id = await db('geneticTrait').insert({
            'user': context.user.id,
            ...args.data
        });
        if(!id) return null;

        return await db('geneticTrait').where({'id': id[0]}).first();
    },
    geneticTraitUpdate: async (parent, args, context) => {
        let found = await db('geneticTrait')
        .where({
            'id': args.id,
            'user': context.user.id
        }).update(args.data);

        if(!found) return null;
        return await db('geneticTrait')
        .where({
            'id': args.id
        }).first();
    },
    geneticTraitDelete: async (parent, args, context) => {
        return await db('geneticTrait')
        .where({
            'id': args.id,
            'user': context.user.id
        }).delete({});
    }
}