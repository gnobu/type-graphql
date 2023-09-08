import { Resolver, Query, Arg } from "type-graphql"
import { IUser, UserAttrs } from "./models/user"
import { UserService } from "./services/user.service"

@Resolver(IUser)
class UserResolver {
    constructor(private _userService: UserService) { }

    @Query(returns => IUser)
    async signup(@Arg("userDetails") userDetails: UserAttrs) {
        const user = await this._userService.signup(userDetails)
        return user
    }

    @Query(returns => IUser)
    async login(@Arg("id") id: string) {
        const user = await this._userService.login(id)
        return user
    }
}

export default UserResolver