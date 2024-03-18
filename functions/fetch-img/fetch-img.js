import axios from "axios";
import { createClient } from "pexels";

const handler = async (event, context) => {

  // const API_KEY = import.meta.env.VITE_API_KEY;
  const API_KEY = 'dR2lQuevhNw5pOQM62nxZ1QhyyNOzoU2D7Ola9cKdlbLdOShgvU6TPCN'

  const client = createClient('dR2lQuevhNw5pOQM62nxZ1QhyyNOzoU2D7Ola9cKdlbLdOShgvU6TPCN')

  const randomPage = event.queryStringParameters;
  
  const url = `https://api.pexels.com/v1/search?query=funny&orientation=square&size=small,medium&page=${randomPage}&per_page=6`;

  try {
    const data = await fetch(url, {
      headers: {
        Authorization: 'dR2lQuevhNw5pOQM62nxZ1QhyyNOzoU2D7Ola9cKdlbLdOShgvU6TPCN',
      }
    });

    const response = await data.json();

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    }
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ error: error.message }),
    }
  }
}

module.exports = { handler }
