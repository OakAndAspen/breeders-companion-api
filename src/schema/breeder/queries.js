import {db} from '../../connection.js'

export const BreederQueries = {
    breeders: async (obj, args, context, info) => {
        let query = db('breeder')
        let where = {
            'user': context.user.id
        };
        query.where(where)

        // Filters
        let f = args.filters;
        if(f) {
            query.andWhere((builder) => {
                if(f.name) builder.whereILike("name", "%"+f.name+"%")
                if(f.country) builder.andWhereILike("country", "%"+f.country+"%")
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
    breeder: async (obj, args, context, info) => {
        return await db('breeder').where({
            'id': args.id,
            'user': context.user.id
        }).first();
    },
}