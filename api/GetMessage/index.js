module.exports = async function (context, req) {
  const apiResponse = await fetch(
    'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=4'
  )
  const data = apiResponse
    ? apiResponse
    : 'This HTTP triggered function unexpectedly failed.'

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: data,
  }
}
