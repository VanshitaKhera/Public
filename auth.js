
import "node-fetch"

// import { createRequire } from 'module';

// const fetch = require('node-fetch');

const checkAuthorization = async () => {
  const apiKey = 'ULWo70Y9yFF6qsE219p8LPy3';  
//   const url = 'https://api.openai.com/v1/your-endpoint';  

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      console.log('Authorization successful');
      console.log('Response:', data);
    } else {
      console.error('Authorization failed');
      console.error('Response:', data);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
};

checkAuthorization();
