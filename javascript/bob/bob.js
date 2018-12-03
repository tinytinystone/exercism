// class Bob {
//   hey(message) {
//     if (message.trim() === ''){
//       return 'Fine. Be that way!';
//     } else if (message.toUpperCase() === message && message.search(/[A-Z]/ig) !== -1) {
//       if (message.endsWith('?')) {
//         return 'Calm down, I know what I\'m doing!';
//       } else {
//         return 'Whoa, chill out!';
//       }
//     } else if (message.endsWith('?')) {
//       return 'Sure.';
//     } else {
//       return 'Whatever.';
//     }
//   }
// }
class Bob {
  hey(message) {
    return message.trim() === '' ? (
      'Fine. Be that way!'
    ) : message.toUpperCase() === message && message.search(/[A-Z]/ig) !== -1 ? (
      message.endsWith('?') ?
        'Calm down, I know what I\'m doing!' :
        'Whoa, chill out!'
    ) : message.endsWith('?') ? (
      'Sure.'
    ) : 'Whatever.';
  }
}
export default Bob;
