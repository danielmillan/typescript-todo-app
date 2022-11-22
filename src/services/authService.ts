import User from "../database/user";

export default class authService {
    public static authenticateUser(email: String, password: String): Promise<Object>{
        return new Promise (async (resolve, reject) => {
            try {
                const userMatch = await User.findOne({email: email}, { isDeleted: false}).lean();
                if (userMatch){
                    if(userMatch.password === password){
                        resolve(userMatch);
                    }
                }else{
                    resolve('Credenciales incorrectas');
                }
            } catch (error) {
                reject(error)
            }
        })
    }
}