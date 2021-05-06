module.exports = async function (context, req) {
  // const apiResponse = await fetch(
  //   'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=4'
  // )
  // const data = apiResponse
  // console.log(data)
  const dataApi = [
    {
      fact: 'Puppies sleep 90 of the day for their first few weeks.',
    },
    {
      fact:
        'The Golden Retriever, one of the most popular dog breeds, was first bred in Scotland in the mid 1800s.',
    },
    {
      fact: 'Dogs are natural pack animals.',
    },
    {
      fact:
        'A German Shepherd guide dog led her blind companion the entire 2,100 mile Appalachian Trail.',
    },
  ]

  const data = await dataApi.json()

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: data,
  }
}
