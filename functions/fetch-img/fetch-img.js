
const handler = async (event, context) => {
  const API_KEY = process.env.API_SECRET;

  const randomPage = event.queryStringParameters.page;
  const url = `https://api.pexels.com/v1/search?query=funny&orientation=square&size=small,medium&page=${randomPage}&per_page=6`;

    const response = await fetch(url, {
      headers: {
        Authorization: `${API_KEY}`,
        Accept: 'application/json',
      },
    }).then(res => res.json())

    return {
      statusCode: 200,
      body: JSON.stringify(response)
    };

}

module.exports = { handler };
