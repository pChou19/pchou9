import fetch from 'node-fetch'

const API_ENDPOINT = "https://cat-fact.herokuapp.com/facts"

const handler = async (event) => {
  let response

  try {
    response = await fetch(API_ENDPOINT, { headers: { 'api_key': 'test'}})
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({
        error: error.message
      })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: response
    })
  }
}

module.exports = { handler }
