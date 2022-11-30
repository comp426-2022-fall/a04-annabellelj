#!/usr/bin/env node
import express from 'express'
import minimist from 'minimist'
import{roll} from './lib/roll.js';

const app = express();
const args = minimist(process.argv.slice(2));
const port = args.port || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/app/',(req,res) => {
    res.send("200 OK");
});

app.get("app/roll/",(req,res) => {
    res.send(roll(6,2,1));
});

app.post('/app/roll/',(req,res) => {
    const sides = parseInt(req.body.sides);
    const dice = parseInt(req.body.dice);
    const rolls = parseInt(req.body.rolls);
    console.log(roll(sides,dice,rolls));
    res.send(roll(parseInt(req.body.sides) || 6, parseInt(req.body.dice) || 2, parseInt(req.body.rolls) || 1));
});

app.get('/app/roll/:sides/',(req,res) => {
    res.send(roll(parseInt(req.params.sides),2,1));
});

app.get('/app/roll/:sides/:dice/',(req,res) => {
    res.send(roll(parseInt(req.params.sides),parseInt(req.params.dice),1));
});

app.get('/app/roll/:sides/:dice/:rolls',(req,res) => {
    const sides = parseInt(req.params.sides);
    const dice = dparseInt(req.params.dice);
    const rolls = parseInt(req.params.rolls);
    console.log(roll(sides,dice,rolls));
    res.send(roll(sides,dice,rolls));
});



app.use((req,res) => {
    res.status(404).send('404 NOT FOUND');
});

app.listen(port);
