const express = require('express')
const app = express()
const port = 8080
const cors = require('cors');
const path = require('path');


// utag_data={"page_type":Path[1],"page_name":Path[2]}
//utag.js //QA Environment
//utag.view({"page_type":Path[1],"page_name":Path[2]})

//edge case: Handle home page, one level and 2 levels.
// important page type 
//examples: Product details page/ product listing pages / 

app.use(cors({
   origin: '*'
}));
// how to pass data into static html file?
app.all('*', (req, res) => {
   res.sendFile(path.join(__dirname+ "/front_end_ssr/index.html"))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})