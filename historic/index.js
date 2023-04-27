const app = require('express')();
app.get('/', (req, res) => res.send('Hello historic API'));
app.listen(3000, () => console.log('Historic listen on port 3000'))