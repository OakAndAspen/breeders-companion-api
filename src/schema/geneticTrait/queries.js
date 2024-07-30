import {db} from '../../connection.js'

export const GeneticTraitQueries = {
    geneticTraits: async (obj, args, context, info) => {
        let query = db('geneticTrait')
        let where = {
            'user': context.user.id
        };
        query.where(where)

        // Filters
        query.andWhere((builder) => {
            if(args.filters?.gene) {
                builder.whereILike("gene", "%"+args.filters.gene+"%")
            }
        })
        query.andWhere((builder) => {
            if(args.filters?.acronym) {
                builder.whereILike("acronym", "%"+args.filters.acronym+"%")
            }
        })
        query.andWhere((builder) => {
            if(args.filters?.locus) {
                builder.whereILike("locus", "%"+args.filters.locus+"%")
            }
        })

        // Sort
        let ob = args.orderBy;
        let orderBy = ob?.field || "gene";
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
    geneticTrait: async (obj, args, context, info) => {
        return await db('geneticTrait').where({
            'id': args.id,
            'user': context.user.id
        }).first();
    },
}