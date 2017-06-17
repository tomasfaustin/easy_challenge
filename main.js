// Input: a bunch of times, minutes and seconds, formatted as a single string like: "12:32 34:01 15:23 9:27 55:22 25:56"
// Output: the sum of the times, hours, minutes, and seconds, formatted as a single string like: "2:32:41"

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
    output += (min * 60) + sec;
  }
  // get hours, minutes, and seconds
    var hour = Math.floor(output / 3600);
    var min  = Math.floor(output % 3600 / 60);
    var seconds = Math.floor(output % 60);

}

timeString("12:32 34:01 15:23 9:27 55:22 25:56")
