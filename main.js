function timeString(str) {
  // split string into an array
  str = str.split(' ');
  // create output for number conversion
  var output = 0;
  // loop through array
  for (var i = 0; i < str.length; i++) {
  // split strings at colon
    var newStr = str[i].split(':');
  // get minutes and seconds
    var min = parseInt(newStr[0]);
    var sec = parseInt(newStr[1]);
    output += ((min * 60) + sec);
  }
  // get hours, minutes, and seconds
    var hours = Math.floor(output / 3600);
    var minutes  = Math.floor((output % 3600) / 60);
    var seconds = Math.floor(output % 60);

    console.log(hours + ":" + minutes + ":" + seconds)
}

timeString("12:32 34:01 15:23 9:27 55:22 25:56")
