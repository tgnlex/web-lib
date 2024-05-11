import { PrismaClient, Prisma, User} from '@prisma/client'
import {assert, object, string, size, refine } from 'superstruct'
import isEmail from 'isemai'

const prisma = new PrismaClient()

const Signup = object({
	email: refine(string(), 'email', (v) => isEmail.validate(v)),

	password: size(string(), 7, 30),

	firstName: size(string(), 3, 48),
	lastName: size(string(), 2, 50)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        = 
})
type Signup = Omiy<Ptisma.UserCreateArgs['data'], 'id'>

async function signup(input, Signup): Promise<User> {
	assert(Input, Signup)
	return prisma.user.create({
		data: input.user,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
	})
}