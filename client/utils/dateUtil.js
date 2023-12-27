
function dateUtil(dateString) {
  this.dateOfAppointment = new Date(dateString);
  this.yearOfAppointment = this.dateOfAppointment.getFullYear();
  this.monthOfAppointment = this.dateOfAppointment.getMonth();
  this.dayOfAppointment = this.dateOfAppointment.getDate();
}

dateUtil.prototype.getDateOfAppointment = function() {return this.dateOfAppointment;}
//format is YYYY
dateUtil.prototype.getYearOfAppointment = function() {return this.yearOfAppointment;}
//getMonth is zero-indexed, so 0 is january 11 is december
dateUtil.prototype.getMonthOfAppointment = function() {return this.monthOfAppointment;}
//integer between 1 and 31
dateUtil.prototype.getDayOfAppointment = function() {return this.dayOfAppointment;}
//0 - 6, where 0 is sunday
dateUtil.getFirstDayOfMonth = function(year, month) {
  return new Date(year, month, 1).getDay();
}
//0 - 6, where 0 is sunday
dateUtil.getLastDayOfMonth = function(year, month) {
  return new Date(year, month + 1, 0).getDay();
}
//1 - 31
dateUtil.getDaysInMonth = function(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

export default dateUtil;

