import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config';
import User from '../database/user';
import IAuthentication from '../models/IAuthentication';

export default class authService {
    public static authenticateUser(
        credentials: IAuthentication
    ): Promise<Object> {
        return new Promise(async (resolve, reject) => {
            try {
                const userMatch = await User.aggregate([
                    {
                        $match: { email: credentials.email, isDeleted: false },
                    },
                    {
                        $lookup: {
                            from: 'roles',
                            localField: 'role',
                            foreignField: '_id',
                            as: 'roleMatch'
                        }
                    },
                    {
                        $unwind: "$roleMatch"
                    },
                    {
                        $project: {
                            _id: 1,
                            names: 1,
                            lastName: 1,
                            email: 1,
                            role: 1,
                            password: 1,
                            roleName: "$roleMatch.name",
                            permisions: "$roleMatch.permisions",
                        }
                    }
                ]);
                if (
                    userMatch &&                     
                    bcrypt.compareSync(credentials.password, userMatch[0].password)
                ) {
                    delete userMatch[0].password;
                    const token = jwt.sign(userMatch[0], config.jwtKey, {
                        expiresIn: '30m',
                    });
                    resolve(token);
                } else {
                    reject({ status: 401, message: 'Credenciales incorrectas' });
                }
            } catch (error) {
                reject(error);
            }
        });
    }
}
