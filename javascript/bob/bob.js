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
export function hey(msg) {
  const trimmedMsg = msg.trim("");
  if (trimmedMsg === "") {
    return "Fine. Be that way!";
  } else if (
    trimmedMsg.toUpperCase() === trimmedMsg &&
    trimmedMsg.search(/[A-Z]/gi) !== -1
  ) {
    if (trimmedMsg.endsWith("?")) {
      return "Calm down, I know what I'm doing!";
    } else {
      return "Whoa, chill out!";
    }
  } else if (trimmedMsg.endsWith("?")) {
    return "Sure.";
  } else {
    return "Whatever.";
  }
}
