const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} =  require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });


Todo.findByIdAndRemove('5a804f3196fee7e50ec0f732').then((todo) => {
  console.log(todo);
})
