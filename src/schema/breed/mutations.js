import {db} from '../../connection.js'

export const BreedMutations = {
    breedCreate: async (parent, args) => {
        let id = await db('breed').insert({name: args.data.name})
        if(!id) return null;

        return await db('breed').where({'id': id[0]}).first();
    },
    breedUpdate: async (parent, args) => {
        let found = await db('breed').where({'id': args.id}).update({name: args.data.name});
        if(!found) return null;
        return await db('breed').where({'id': args.id}).first();
    },
    breedDelete: async (parent, args) => {
        return await db('breed').where({'id': args.id}).delete({});
    }
}