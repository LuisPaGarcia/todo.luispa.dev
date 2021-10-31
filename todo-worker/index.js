
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  const got = require('got')

  try {
    const response = await got('https://pokeapi.co/api/v2/pokemon/ditto')
    const config = {
      headers: { 'content-type': 'text/plain' },
    }
    return new Response(response, config)
  } catch (error) {
    return new Response("An error occured. " + error.message, { status: 500 })    
  }
}
