import {db} from '../../connection.js'

export const HealthConditionQueries = {
    healthConditions: async (obj, args, context, info) => {
        let query = db('healthCondition')
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
    healthCondition: async (obj, args, context, info) => {
        return await db('healthCondition').where({
            'id': args.id,
            'user': context.user.id
        }).first();
    },
}