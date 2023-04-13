const express = require('express')
const app = express()
const port = 8080
const cors = require('cors');
const path = require('path');
const ejs = require('ejs');
const fs = require('fs');
const Transform = require('stream').Transform;
const parser = new Transform();
const newLineStream = require('new-line');

// utag_data={"page_type":Path[1],"page_name":Path[2]}
//utag.js //QA Environment
//utag.view({"page_type":Path[1],"page_name":Path[2]})

//edge case: Handle home page, one level and 2 levels.
// important page type 
//examples: Product details page/ product listing pages / 





app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(cors({
   origin: '*'
}));

// how to pass data into static html file?
app.all('*', (req, res) => {
   //Gather first & second fragment here and store value
   const pagePath = req.url;
   var pathFragments1;
   var pathFragments2;

   //if only 1 or less backslash, means that it is homepage
   if(pagePath.split("/") <= 1){
        pathFragments1 = "homepage"
        pathFragments2 = "homepage"
   } else {
       //if more than 1 back slash; then we have valid page_type / valid page_name
        pathFragments1 =  pagePath.split("/")[1]
        pathFragments2 =  pagePath.split("/")[2]
   }
   //path fragment can be "" or undefined depending on if user inputs a backslash. This ternary operator supports consistent formatting
   var requestData = {
       page_type: !pathFragments1 ? null : pathFragments1,
       page_name: !pathFragments2 ? null : pathFragments2
   }
  
   res.render(path.join(__dirname+ "/front_end_ssr/index.html"), requestData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})