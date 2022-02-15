const todo = require('../api/todo');
const Todo = require('../api/todo')

Todo.methods(['get', 'post', 'put', 'delete']);
todo.updateOptinons({new: true, runValidators: true});

module.exports = Todo;