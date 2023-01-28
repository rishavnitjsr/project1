const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));

let items =[];

app.get("/",function(req , res){
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month:"long",
    year:"numeric"
  };
  let day = today.toLocaleString("en-US",options);

  res.render("list",{
    kindOfDay:day, newListItems:items
  });
});

app.post("/",function(req , res){
  let item = req.body.item;

  items.push(item);

res.redirect("/");

});

app.listen(3000, function(){
  console.log("Server started at port 3000");
});
