const mongodb = require('mongodb');

const mongoUri = 'mongodb://localhost/test';

mongodb.connect(mongoUri, (err, db) => {
  if (err) {
    console.log(err.message);
    process.exit(1);
  }

  db.collection('restaurants').find({
    cuisine: "English"
  }, (err, restaurants) => {
    if (err) {
      console.log(err.message);
      process.exit(1);
    }
    
    restaurants.forEach(r => {
      console.log(r.name);
    });
    db.close();
  })
});

