const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let resultString = [];
  let result;
  let addition = [];
  let additionString = '';
  if(options.repeatTimes == undefined) {
   options.repeatTimes = 1;
  }
  if(options.separator == undefined) {
   options.separator = '+';
  }
  if(options.addition === undefined) {
   options.addition = [];
  }
  else if(typeof(options.addition) !== 'string') {
   options.addition = ['' + options.addition];
  }
  if(options.additionRepeatTimes == undefined) {
   options.additionRepeatTimes = 1;
  }
  if(options.additionSeparator == undefined) {
   options.additionSeparator = '|';
  }
  for(let i = 0; i < options.additionRepeatTimes; i++) {
   addition.push(options.addition);
  }
   additionString = addition.join(options.additionSeparator);
   for(let i = 0; i < options.repeatTimes; i++) {
     resultString.push(str + additionString)
   }
   result = resultString.join(options.separator);
   return result;
 }

module.exports = {
  repeater
};
