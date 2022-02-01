import createRepository from '~/api/index'

export default (ctx, inject) => {
    inject('api', createRepository(ctx.$axios, ctx.$toast, ctx.store))
}