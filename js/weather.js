$(document).ready(function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    var fahrenheit;
    var celsius;
    var temp1;
    var temp2;
    var image;

    $.getJSON("https://api.darksky.net/forecast/" + "e981699250d8ab7f9ef1c9bd8e4ab31e" + "/" + position.coords.latitude + "," + position.coords.longitude + "?callback=?", function(data) {
        temp1 = Math.round(data.currently.temperature);
        temp2 = Math.round(data.currently.temperature);
        fahrenheit = temp1;
        celsius = Math.round((fahrenheit - 32) * (5/9));
        $("#temperature").html(fahrenheit + "<sup>o</sup>" + "F");

        if (temp2 >= 80) {
          image = "url('http://www.youwall.com/wallpapers/201404/sunny-mountains-wallpaper.jpg')";
        } else if (temp2 < 80 & temp2 >= 50 ) {
          image = "url('http://candidbelle.com/wp-content/uploads/2013/09/fall-weather-.jpg')";
        } else if (temp2 < 50) {
          image = "url('https://static.bhphotovideo.com/explora/sites/default/files/Correct.jpg')";
        };

        $("body").css("background-image", image);


          $("#convertTemp").on("click", function() {
            if (fahrenheit === temp1) {
              $("#temperature").html(celsius + "<sup>o</sup>" + "C");
              temp1 = celsius;
            } else if (celsius === temp1) {
              $("#temperature").html(fahrenheit + "<sup>o</sup>" + "F");
              temp1 = fahrenheit;
            };
          });


      });
    });
});
