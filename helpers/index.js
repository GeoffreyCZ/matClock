function formatTime(sec_num) {
  let minutes = Math.floor(sec_num / 60);
  let seconds = sec_num - (minutes * 60);

  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}
  return minutes+':'+seconds;
}
