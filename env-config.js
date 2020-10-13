const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://rrg.com.np' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://rrg.com.np',
  'process.env.CLIENT_ID': 'xqrJSn3zeUqhI6rJofLmitmHOimNI3vU'
}
