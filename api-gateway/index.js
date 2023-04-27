const proxy = require('express-http-proxy');
const app = require('express')();

const port = 1987;

const {
  HISTORIC_API_URL,
  LOGIN_API_URL,
  NOTIFICATION_API_URL,
  REFURBISH_API_URL,
  REPORT_API_URL,
  USERS_API_URL
} = require('./urls');

app.get('/', (req, res) => res.send('Hello gateway API'));
app.use('/historic', proxy(HISTORIC_API_URL));
app.use('/login', proxy(LOGIN_API_URL));
app.use('/notification', proxy(NOTIFICATION_API_URL));
app.use('/refurbish', proxy(REFURBISH_API_URL));
app.use('/report', proxy(REPORT_API_URL));
app.use('/users', proxy(USERS_API_URL));

app.listen(port, () => console.log(`App run on port ${port}`))