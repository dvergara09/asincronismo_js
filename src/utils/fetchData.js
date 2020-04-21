const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", url_api, true);
    xhttp.onreadystatechange = () => {
      /* readystate, estado que todo está bien en http */
      if (xhttp.readyState === 4) {
        /* status, que la informacion no tuvo ningun error */
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error("Error", url_api));
      }
    };
    xhttp.send();
  });
};

module.exports = fetchData;
