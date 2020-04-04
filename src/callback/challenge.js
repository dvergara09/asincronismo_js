let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", url_api, true);
  xhttp.onreadystatechange = function(event) {
    /* readystate, estado que todo está bien en http */
    if (xhttp.readyState === 4) {
      /* status, que la informacion no tuvo ningun error */
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error("Error" + url_api);
        return callback(error, null);
      }
    }
  };
  xhttp.send();
}
