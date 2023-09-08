import { UserAttrs, UserModel } from '../models/user'

export class UserService {
    constructor(private _userModel: UserModel) { }
    async signup(signupArgs: UserAttrs) {
        const user = this._userModel.build(signupArgs)
        return await user.save()
    }
    async login(id: string) {
        return await this._userModel.findById(id)
    }
}