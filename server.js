const express = require('express');
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));

//app.get('/', (req, res)=>{
    //res.send("Hello from Express");
    //res.send("<h1>Hello from Express</h1>");
    //res.json({msg:"hello"});
    //res.send(req.header('host'))
    //res.send(req.header('user-agent'))
//});
/* app.post('/contact', (req, res)=>{
    //res.send(req.body);
    //res.send(req.body.name);
    if(!req.body.name){
        return res.status(400).send('Name is Required');
    }
    //Database Stusff
    res.status(201).send('Thank you + req.body.name');

app.post('/login', (req, res)=>{
        if(!req.header('x-auth-token')){
            return res.status(400).send('no token')
        }
        if(req.header('x-auth-token')!=='123456'){
            return res.status(401).send('not autorized')
        }
        res.send('Logged In');
    })
}); */

/*app.put('/put/:id', (req, res)=>{
// database stuff
res.json({
    id: req.params.id, 
    title: req.body.title
});
});*/

app.listen(5000, ()=> console.log('server started on 5000'));