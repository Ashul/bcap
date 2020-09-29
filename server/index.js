import express from 'express';
import serverRenderer from './middleware/renderer.js';

const PORT = process.env.PORT || 3009;
const path = require('path');
const app = express();
const router = express.Router();

router.use(express.static(path.resolve(path.join(__dirname, '../build/index.html')), {maxAge: '30d'}));
router.use('/static', express.static(path.resolve(__dirname, '../build/static')));
app.use('/assets', express.static(path.resolve(__dirname, '../../assets')));

router.get('/index.html', (req, res) => {
    res.redirect(301, '/');
  });
router.use(serverRenderer);

app.use(router);

app.listen(PORT, (error) => {
    if(error) {
        return console.log('SOmething bad happened', error);
    }
    console.log("listening on", PORT, '....', process.env.PORT);
})