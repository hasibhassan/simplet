const axios = require('axios').default

module.exports = async function (context, req) {
  async function getUser() {
    try {
      const response = await axios.get(
        'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=4'
      )
      console.log(response)
      return response
    } catch (error) {
      console.error(error)
      return 'something went wrong'
    }
  }
  const data = getUser()
  return {
    // status: 200, /* Defaults to 200 */
    body: data,
    headers: {
      'Content-Type': 'application/json',
    },
  }
}
