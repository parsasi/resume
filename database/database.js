const path = require('path')
const sqlite3 = require('sqlite3').verbose()

module.exports = function(connected) {
    const db = new sqlite3.Database(path.join(__dirname, 'db.sqlite'), function(err) {
        if (err) {
            connected(err);
            return
        }
        function getExperiences(callback) {

            const sql = `SELECT * FROM experiences WHERE visible = 1`
      
            db.all(sql, {}, function(err, rows) {
              console.log(err, rows)
              callback(err, rows)
            })
      
        }
        function getEducations(callback) {

            const sql = `SELECT * FROM education WHERE visible = 1`
      
            db.all(sql, {}, function(err, rows) {
              console.log(err, rows)
              callback(err, rows)
            })
      
        }
        function getGenerals(callback) {

            const sql = `SELECT * FROM general`
      
            db.all(sql, {}, function(err, rows) {
              console.log(err, rows)
              callback(err, rows)
            })
      
        }
        function getInterests(callback) {

            const sql = `SELECT * FROM interests WHERE visible = 1`
      
            db.all(sql, {}, function(err, rows) {
              console.log(err, rows)
              callback(err, rows)
            })
      
        }
        function getSkills(callback) {
            const sql = `SELECT * FROM skills`
            db.all(sql , {} , function(err , rows) {
                console.log(err,rows)
                callback(err , rows)
            })
        }
        function getWorkSamples(callback) {
            const sql = `SELECT * FROM work_samples`
            db.all(sql , {} , function(err , rows) {
                console.log(err,rows)
                callback(err , rows)
            })
        }
        connected(null, {
            getExperiences,
            getEducations,
            getGenerals,
            getInterests,
            getSkills,
            getWorkSamples
          })
    })
}