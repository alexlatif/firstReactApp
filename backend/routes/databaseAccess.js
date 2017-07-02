import express from 'express';
const router = express.Router();
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

//import ToDoItem db model
import TodoItem from '../models/ToDoItem'

//adding new test item
router.post('/add', (req, res) => {
  console.log('then here');
  const item = new TodoItem(req.body)
  item.save()
  .then(response => {
    res.send(response);
  })
  .catch(error => {
    res.send(error);
  })
});

router.get('/all', (req, res)=>{
  TodoItem.find({})
  .catch(err => {res.send(error)})
  .then(items => {res.send(items)})
})

router.post('/toggle', (req, res)=>{
  TodoItem.findById(req.body.id)
  .then(item => {
    item.completed? item.completed = false: item.completed = true
    item.save()
  })
  .then(success => {
    console.log('success in saving')
    TodoItem.find()
  })
  .then(items => {
    res.send(items)
  })
  .catch(error =>{
    console.log(error)
  })
})

router.post('/remove', (req, res)=> {
  TodoItem.findById(req.body.id)
  .then(item => {
    item.remove()
  })
  .then(success => {
    console.log(success)
    TodoItem.find()
  })
  .then(items =>{
    res.send(items)
  })
  .catch(err => {
    console.log(err)
  })
})


export default router;
