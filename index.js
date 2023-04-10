const express = require('express')
const app = express()
const port = 8080
const cors = require('cors');


     //pdp page, do it on local front end
// Recreate pageview on front end
// send data to 
//On 200 okay response from server
// utag_data={"page_type":Path[1],"page_name":Path[2]}
//utag.js //QA Environment
//utag.view({"page_type":Path[1],"page_name":Path[2]})

//edge case: Handle home page, one level and 2 levels.
// important page type 
//examples: Product details page/ product listing pages / 

app.use(cors({
   origin: '*'
}));

app.all('*', (req, res) => {
   res.send({"name":"200 complete"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})