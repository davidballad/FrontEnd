//jshint esversion :6

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));
const _ = require('lodash');


const blogs = [{blogTitle:'hi there', blogContent: 'Integer porta dictum sagittis. Etiam mattis et velit a dapibus. Proin euismod lacus augue, a ornare lacus pellentesque sit amet. Aliquam id ipsum posuere, volutpat dui vel, accumsan urna. Ut feugiat orci sed quam facilisis vulputate dignissim nec orci. Sed viverra mauris magna, vestibulum ullamcorper mauris vehicula quis. Suspendisse potenti. Morbi magna lectus, pellentesque in diam sit amet, molestie scelerisque urna. Praesent et felis ac risus tristique vehicula. Quisque egestas at massa sit amet porta. Morbi bibendum blandit nisl a consectetur. Etiam in consequat ipsum. Sed in congue nisl. Etiam consequat, velit in varius iaculis, lorem nunc luctus eros, vel aliquet leo neque at leo. '}];
app.get('/', (req, res)=>{
   res.render('home', {
      title: 'Blog Site',
      blogs: blogs
   });
});


app.get('/createBlog', (req, res)=>{
   res.render('createBlog', {
      title: 'Create New Blog'
   });
});

app.post('/', (req, res)=>{
   const blog = {
      blogContent: req.body.blogContent,
      blogTitle: req.body.blogTitle
   };
   blogs.push(blog);
   res.redirect('/');

});


app.get('/blog/:title', (req, res)=>{
   const reqTitle = _.kebabCase(req.params.title);
   req.params.title = reqTitle;
      blogs.forEach((blog)=>{
         const listTitle = _.kebabCase(blog.blogTitle); 
         if(listTitle === reqTitle){
            const listContent = blog.blogContent;
            
            console.log(req.params.title);
            res.render('blog',{
               title: blog.blogTitle,
               blogContent: listContent,
               blogTitle: blog.blogTitle
            });
         } 

      });
     
      
});







app.get('/contact', (req, res)=>{
   res.render('contact',{
      title: "Contact"
   });
});
app.get('/about', (req, res)=>{
   res.render('about',{
      title: "About"
   });
});









app.listen(3000, ()=> console.log('Port 3000 ready'));