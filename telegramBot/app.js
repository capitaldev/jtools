const request = require('request');

const api = '592709609:AAEaPvzFgijM0wWpwQaChzZs5AfhbnHi7jg';
const base_url = 'https://api.telegram.org/bot'
const method = 'sendMessage'


let url = `${base_url}${api}/${method}`;
const params = {
  chat_id: '@jtool',
  text: 'Test'
}

request.post(
  url,
  { json: params },
  function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body)
    }
  }
);