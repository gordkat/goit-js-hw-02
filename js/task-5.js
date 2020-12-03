const checkForSpam = function (message) {
  message = message.toLowerCase();
  const isIncludeSpam = message.includes('spam') || message.includes('sale');
  return isIncludeSpam;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
