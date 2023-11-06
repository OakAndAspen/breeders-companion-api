import {db} from '../../connection.js'

export const BreedQueries = {
    breeds: async (obj, args, context, info) => {
        let query = db('breed')
        
        // Filters
        let where = {
            'user': context.user.id
        };

        query = query.where(where)
        
        if(args.filters?.name) {
            query = query.andWhereILike("name", "%"+args.filters.name+"%")
        }

        // Sort
        let ob = args.orderBy;
        let orderBy = ob?.field || "name";
        let direction = !!ob?.desc ? "desc" : "asc";
        query = query.orderBy(orderBy, direction)

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