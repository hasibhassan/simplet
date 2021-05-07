const fetch = require('node-fetch')

module.exports = async function (context) {
  await fetch(
    'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=4'
  )
    .then((response) => response.json())
    .then((response) => context.res.json(response))
}
