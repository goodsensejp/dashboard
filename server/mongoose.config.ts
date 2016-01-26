import {Mongoose} from 'mongoose';

export default () => {

  const mongoose = new Mongoose();

  mongoose.connect('mongodb://localhost/goodsense', function(err) {
    if(err) { throw err; }

    console.log("Successfully connected to mongodb");
  });

  return mongoose; 
}