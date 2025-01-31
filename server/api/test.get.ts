export default defineEventHandler((event) => {
    console.log(event.node.req.rawHeaders, 'event.node.headers');
    
    // event.context.path to get the route path: '/api/foo/bar/baz'
    // event.context.params._ to get the route segment: 'bar/baz'
    return event.node.req.rawHeaders
  })