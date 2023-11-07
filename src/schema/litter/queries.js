import {db} from '../../connection.js'

export const LitterQueries = {
    litters: async (obj, args, context, info) => {
        let query = db('litter')
        let where = {
            'user': context.user.id
        };
        query.where(where)

        // Filters
        let f = args.filters;
        if(f) {
            query.andWhere((builder) => {
                if(f.name) builder.whereILike("name", "%"+args.filters.name+"%")
                if(f.sire) builder.andWhere("sire", f.sire);
                if(f.dam) builder.andWhere("dam", f.dam);
                if(f.breeder) builder.andWhere("breeder", f.breeder);
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
    litter: async (obj, args, context, info) => {
        return await db('litter').where({
            'id': args.id,
            'user': context.user.id
        }).first();
    },
}