import {db} from '../../connection.js'

export const HealthConditionMutations = {
    healthConditionCreate: async (parent, args, context) => {
        let id = await db('healthCondition').insert({
            'user': context.user.id,
            ...args.data
        });
        if(!id) return null;

        return await db('healthCondition').where({'id': id[0]}).first();
    },
    healthConditionUpdate: async (parent, args, context) => {
        let found = await db('healthCondition')
        .where({
            'id': args.id,
            'user': context.user.id
        }).update(args.data);

        if(!found) return null;
        return await db('healthCondition')
        .where({
            'id': args.id
        }).first();
    },
    healthConditionDelete: async (parent, args, context) => {
        return await db('healthCondition')
        .where({
            'id': args.id,
            'user': context.user.id
        }).delete({});
    }
}