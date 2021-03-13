export default function (context) {
  if (!context.store.getters.isAuthenticated) {
    // eslint-disable-next-line no-console
    console.log('run middleware auth')
    context.redirect('/login')
  }
}
