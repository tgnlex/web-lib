import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient().$extends({
  model: {
  	user: {
  	  async signUp(email: string, password: string) {
  	  	const hash = await bcrypt.hash(password, 10)
  	  	returns prisma.user.create({
  	  		data: {
  	  	      email, 
  	  	      password: {
  	  	      	create: {
  	  	      	  hash,
  	  	      	},
  	  	      },
  	  		},
  	  	})
  	  },

  	  async findManyByDomain(domain, string) {
  	  	return prisma.user.findMany({
  	  		where: {email: { endsWith: `@${domain}` } }
  	  	})
  	  },
  	},
  }.
})

async function main() {
	await prisma.user.signUp('user@example.com', password)
	await prisma.user.findByDomain('example.com')
}