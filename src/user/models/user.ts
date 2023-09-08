import mongoose, { model, Schema } from 'mongoose'
import { ObjectType, Field, InputType } from 'type-graphql'

// An interface that describes a User
@ObjectType('User')
export class IUser extends mongoose.Document {
  @Field()
  firstName: string
  @Field()
  lastName: string
  @Field()
  email: string
  @Field()
  password: string
}

// An interface that describes the properties
// that are requried to create a new User
@InputType()
export class UserAttrs {
  @Field()
  firstName: string
  @Field()
  lastName: string
  @Field()
  email: string
  @Field()
  password: string
}

export interface UserModel extends mongoose.Model<IUser> {
  build(attrs: UserAttrs): IUser
}


const userSchema = new Schema<IUser, UserModel>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: {
    type: String,
    get: (): undefined => undefined,
    required: true
  },
}, {
  toJSON: { getters: true },
  timestamps: true
})

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs)
}

const User = model<IUser, UserModel>('User', userSchema)
export default User