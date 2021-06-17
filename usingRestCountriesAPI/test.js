var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://restcountries.eu/rest/v2/all");
        xhr.onload = function () {
          var data = JSON.parse(this.response);
          //console.log(data)
          for(let i=0; i<data.length; i++){
            console.log(data[i].flag);
          }
        };
        xhr.send();