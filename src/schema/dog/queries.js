import {db} from '../../connection.js'

export const DogQueries = {
    dogs: async (obj, args, context, info) => {
        let query = db('dog')
        let where = {
            'user': context.user.id
        };
        query.where(where)

        // Filters
        let f = args.filters;
        if(f) {
            query.andWhere((builder) => {
                if(f.name) builder.whereILike("name", "%"+args.filters.name+"%")
                if(f.breed) builder.andWhere("breed", f.breed);
                if(f.breeder) builder.andWhere("breeder", f.breeder);
                if(f.at) builder.andWhere("at", f.at);
                if(f.owner) builder.andWhere("owner", f.owner);
                if(f.gender) builder.andWhere("gender", f.gender);
                if(f.isDeceased !== undefined) builder.andWhere("isDeceased", f.isDeceased);
            })
        }

        // Sort
        let ob = args.orderBy;
        let orderBy = ob?.field || "name";
        let direction = !!ob?.desc ? "desc" : "asc";
        query.orderBy(orderBy, direction)

        // Pagination
        let p = args.pagination;
        if(p) {
            let limit = p.limit;
            let index = p.index || 0;
            query.limit(limit).offset(limit * index)
        }
        
        return await query;
    },
    dog: async (obj, args, context, info) => {
        return await db('dog').where({
            'id': args.id,
            'user': context.user.id
        }).first();
    },
}