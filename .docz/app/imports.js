export const imports = {
  'hello.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "hello" */ 'hello.mdx'),
}
