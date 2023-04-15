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
  if (date == null) return 'Unable to determine the time of year!';
  if (date instanceof Date == false) throw new Error("Invalid date!");
  if (Object.getOwnPropertyNames(date).length != 0) throw new Error("Invalid date!");
    try {
      date.toLocaleString();
      
    } catch(e) {
      if (e) throw new Error('Invalide date!');
    }
    let index = date.getMonth();   
      if(index >= 0 && index <= 1 || index == 11) return 'winter';
      else if(index >= 2 && index <= 4) return 'spring';
      else if(index >= 5 && index <= 7) return 'summer';
      else if(index >= 8 && index <= 10) return 'autumn';
}

module.exports = {
  getSeason
};
