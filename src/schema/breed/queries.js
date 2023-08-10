import {connection} from '../../connection.js'

export const BreedQueries = {
    breeds: async () => {
        //const result = await connection.select().from('breed');
        const result = await connection('breed');
        return result;
    },
    breed: async (id) => {
        const result = await connection('breed').where({'id': 1}).first();
        return result;
    },
}