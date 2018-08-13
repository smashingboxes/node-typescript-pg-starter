import express from 'express';
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

/* tslint:disable no-console */
app.listen(process.env.PORT || 3000, () => {
    console.log('Example app listening on port 3000')
});