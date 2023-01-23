function compareTime(dateTime1,dateTime2){
    dateTime1 = new Date(dateTime1);
    dateTime2 = new Date(dateTime2);
    return dateTime1.getTime() > dateTime2.getTime();
}
module.exports = { compareTime };