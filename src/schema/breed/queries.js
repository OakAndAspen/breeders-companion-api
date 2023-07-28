import {connection} from '../../connection.js'

export const BreedQueries = {
    breeds: async () => {
        const result = await connection.select().from('breed');
        return result;
    },
}