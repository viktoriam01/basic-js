const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!'

  if ((!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) && arguments.length > 0) throw new Error('Invalid date!');
  
  let month = date.getMonth()
  
  return season = (month === 11 || month === 0 || month === 1) ? "winter" :
                  (month === 2 || month === 3 || month === 4) ? "spring" :
                  (month === 5 || month === 6 || month === 7) ? "summer" :
                  "autumn"
}

module.exports = {
  getSeason
};


