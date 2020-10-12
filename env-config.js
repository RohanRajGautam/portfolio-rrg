const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://rrg.vercel.app' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://rrg.vercel.app',
  'process.env.CLIENT_ID': 'xqrJSn3zeUqhI6rJofLmitmHOimNI3vU'
}
