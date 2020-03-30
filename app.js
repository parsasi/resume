module.exports = (db) => {
    const express = require('express');
    const path = require('path');
    const app = express();

    app.use(express.static(path.join(__dirname, 'build')));
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
    app.get('/experiences' , (req,res) => {
        db.getExperiences((err , data) => {
            if(err){
                res.json(err)
                return
            }
            res.json(data)
            return
        })
    })
    app.get('/education' , (req,res) => {
        db.getEducations((err , data) => {
            if(err){
                res.json(err)
                return
            }
            res.json(data)
            return
        })
    })
    app.get('/skills' , (req,res) => {
        db.getSkills((err , data) => {
            if(err){
                res.json(err)
                return
            }
            res.json(data)
            return
        })
    })
    app.get('/interests' , (req,res) => {
        db.getInterests((err , data) => {
            if(err){
                res.json(err)
                return
            }
            res.json(data)
            return
        })
    })
    app.get('/general' , (req,res) => {
        db.getGenerals((err , data) => {
            if(err){
                res.json(err)
                return
            }
            res.json(data)
            return
        })
    })
    app.get('/worksamples' , (req,res) => {
        db.getWorkSamples((err , data) => {
            if(err){
                res.json(err)
                return
            }
            res.json(data)
            return
        })
    })
    return app;
}