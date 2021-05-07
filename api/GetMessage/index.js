const axios = require('axios')

module.exports = async function (context) {
  const response = await axios.get(
    'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=4'
  )
  context.res.json(response)
}
