const fetch = require("node-fetch");

const { API_KEY } = process.env.WMATA_KEY
const API_ENDPOINT = "https://api.wmata.com/StationPrediction.svc/json/GetPrediction/";
const stationCode = event.queryStringParameters && event.queryStringParameters.name;

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT+stationCode, { headers: { 'api_key': API_KEY } })
    .then((response) => response.json())
    .then((data) => ({
      statusCode: 200,
      headers: { "Content-Type": "application/json; charset=utf-8"},
      body: JSON.stringify({data}),
    }))
    .catch((error) => ({ statusCode: 422, body: String(error) }));
};