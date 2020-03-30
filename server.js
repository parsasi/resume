require('./database/database')((err , database) => {
  if(!err){
    const app = require('./app')(database)
    const PORT = process.env.PORT || 3000
    app.listen(PORT , () => {
      console.log('App is listening on ' + PORT)
    });
  }else{
    console.log('Error connecting to the database')
  }
})
