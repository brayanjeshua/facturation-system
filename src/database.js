import mongoose, { connect } from 'mongoose';
const URI = 'mongodb://localhost/mern-crud-test';

connect(URI)
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

export default mongoose;
