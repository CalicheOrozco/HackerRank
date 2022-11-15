function timeConversion(s) {
  // slice to get the last 2 digits
  const time = s.slice(-2);
  // slice the first 2 digits
  let hour = s.slice(0, 2);
  if (time === "AM") {
    // if hour is 12, change it to 00
    if (hour === "12") {
      const finalHour = "00" + s.slice(2, 8);
      console.log(finalHour);
      return finalHour;
    } else {
      const finalHour = s.slice(0, 8);
      console.log(finalHour);
      return finalHour;
    }
  }
  if (time === "PM") {
    hour = parseInt(hour) + 12;
    if (hour === 24) {
      const finalHour = "12" + s.slice(2, 8);
      console.log(finalHour);
      return finalHour;
    } else {
      const finalHour = hour + s.slice(2, 8);
      console.log(finalHour);
      return finalHour;
    }
  }
}

timeConversion("04:59:59AM");
