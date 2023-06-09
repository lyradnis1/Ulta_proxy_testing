async function logJSONData(url) {
    const response = await fetch(url);
    const jsonData = await response.json();
  
    if(response.status == 200){
        //trigger utag.view
        var processedURL = new URL(url)
        var pathName = processedURL.pathname
        var pathFragments1;
        var pathFragments2;

        //if only 1 or less backslash, means that it is homepage
        if(pathName.split("/") <= 1){
             pathFragments1 = "homepage"
             pathFragments2 = "homepage"
        } else {
            //if more than 1 back slash; then we have valid page_type / valid page_name
             pathFragments1 =  pathName.split("/")[1]
             pathFragments2 =  pathName.split("/")[2]
        }
        //path fragment can be "" or undefined depending on if user inputs a backslash. This ternary operator supports consistent formatting
        var utag_data = {
            page_type: !pathFragments1 ? null : pathFragments1,
            page_name: !pathFragments2 ? null : pathFragments2
        }
        //Utag.js
        //console.log(utag_data)
        utag.view(utag_data)
    }
  }
  
  logJSONData("http://localhost:8080/page_type/page_name")