const app = require('express')();
app.get('/', (req, res) => res.send('Hello login API'));
app.listen(3000, () => console.log('Login listen on port 3000'))