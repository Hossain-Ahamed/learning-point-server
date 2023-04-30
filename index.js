const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());


const port = process.env.PORT || 5000;
const carousel = require('./data/carousel/carousel.json');
const courses = require('./data/courses/courses.json');
const blog = require('./data/blog/blog.json')

app.get('/', (req, res) => {
    res.send('learning point server is running');
})



//carousel img
app.get('/carousel', (req, res) => {
    res.send(carousel.filter(item => item.isActive === true));
})



// all courses
app.get('/courses', (req, res) => {
    res.send(courses.filter(item => item.isActive === true));
})



// individual course
app.get('/courses/:courseID', (req, res) => {
    let data = courses.find(item => item._id === req.params.courseID && item.isActive === true)
    data ? res.send(data) : res.send([]);
})


// all blog
app.get('/blog', (req, res) => {
    res.send(blog);
})



app.listen(port, () => {
    console.log('server is running on port ', port);
})