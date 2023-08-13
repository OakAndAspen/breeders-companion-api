import {db} from '../../connection.js'

export const UserMutations = {
    userCreate: async (parent, args) => {
        let id = await db('user').insert(args.data);
        if(!id) return null;

        return await db('user').where({'id': id[0]}).first();
    },
    userUpdate: async (parent, args) => {
        let found = await db('user').where({'id': args.id}).update(args.data);
        if(!found) return null;
        return await db('user').where({'id': args.id}).first();
    },
    userDelete: async (parent, args) => {
        return await db('user').where({'id': args.id}).delete({});
    }
}