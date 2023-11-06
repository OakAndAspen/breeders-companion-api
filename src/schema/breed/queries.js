import {db} from '../../connection.js'

export const BreedQueries = {
    breeds: async (obj, args, context, info) => {
        let query = db('breed')
        let where = {
            'user': context.user.id
        };
        query.where(where)

        // Filters
        query.andWhere((builder) => {
            if(args.filters?.name) {
                builder.whereILike("name", "%"+args.filters.name+"%")
            }
        })

        // Sort
        let ob = args.orderBy;
        let orderBy = ob?.field || "lastName";
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
    breed: async (obj, args, context, info) => {
        return await db('breed').where({
            'id': args.id,
            'user': context.user.id
        }).first();
    },
}