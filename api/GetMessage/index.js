const axios = require('axios')

module.exports = async function (context, req) {
  async function getUser() {
    try {
      const response = await axios.get(
        'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=4'
      )
      return response
    } catch (error) {
      console.error(error)
      return 'something went wrong'
    }
  }
  const data = getUser()
  context.res.json(data)
}
