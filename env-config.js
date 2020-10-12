const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://iamrrg.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://iamrrg.herokuapp.com',
  'process.env.CLIENT_ID': 'xqrJSn3zeUqhI6rJofLmitmHOimNI3vU'
}
