const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const equacoes = require('./data.json');

app.use('/assets', express.static(__dirname + '/assets'));
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/fase/:index', (req, res) => {
    const { index } = req.params;
    const equacao = equacoes[index-1];
    const final = index == 3 ? true : false;
    return res.render('index',{equacao, final, index});
});

app.get('/data',(req,res)=>{
     return res.json(data);
})

app.listen(port, () => {
    console.log(`ouvindo em porta ${port}`);
});

