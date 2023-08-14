import {db} from '../../connection.js'
import * as jose from 'jose'
import bcrypt from 'bcrypt';

export const AuthQueries = {
    login: async (obj, args, context, info) => {

        // Find user and check password
        let user = await db('user').where({'email': args.data.email}).first();
        let passwordsMatch = await bcrypt.compare(args.data.password, user.password);
        if(!passwordsMatch) return false;

        // Create token
        const secret = new TextEncoder().encode('mysupersecretphrase');
        const alg = 'HS256';
        const jwt = await new jose.SignJWT({'user': user })
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setIssuer('breederscompanion')
        .setExpirationTime('2h')
        .sign(secret);
        
        return jwt;
    },
}