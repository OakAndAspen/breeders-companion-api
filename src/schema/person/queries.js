import {db} from '../../connection.js'

export const PersonQueries = {
    persons: async (obj, args, context, info) => {
        let query = db('person')
        
        // Filters
        let where = {
            'user': context.user.id
        };

        query.where(where)

        query.andWhere((builder) => {
            if(args.filters?.name) {
                builder.whereILike("firstName", "%"+args.filters.name+"%")
                builder.orWhereILike("lastName", "%"+args.filters.name+"%")
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
    person: async (obj, args, context, info) => {
        return await db('person').where({
            'id': args.id,
            'user': context.user.id
        }).first();
    },
}