module.exports = async function (context, req) {
  const apiResponse = await fetch(
    'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=4'
  )
  const data = apiResponse
  console.log(data)

  return {
    // status: 200, /* Defaults to 200 */
    body: data,
    headers: {
      'Content-Type': 'application/json',
    },
  }
}
