const prisma = new PrismaClient()

const contextLanguage = 'en-us' // Session state

prisma.$use(async (params, next) => {
  if (params.model == 'Post' && params.action == 'create') {
    params.args.data.language = contextLanguage
  }

  return next(params)
})

const create = await prisma.post.create({
  data: {
    title: 'My post in English',
  },
})