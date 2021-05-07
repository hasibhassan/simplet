const fetch = require('node-fetch')

module.exports = async function (context) {
  context.res.headers = { 'Access-Control-Allow-Origin': '*' }
  await fetch(
    'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=4'
  )
    .then((response) => response.json())
    .then((response) => context.res.json(response))
}
