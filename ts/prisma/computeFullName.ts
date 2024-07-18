import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient().$extends ({
  result: {
  	user: {
  		fullName: {
  			needs: {
  				compute(user) {
  					return ${user.firstName} ${user.lastName}
  				},
  			},
  		},
  	},
  },
})
async function main() {

	const user = await prisma.user.findFirst()
}

main()