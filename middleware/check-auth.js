export default function (context) {
  // eslint-disable-next-line no-console
  console.log('run middleware check-auth')
  context.store.dispatch('initAuth', context.req)
}
