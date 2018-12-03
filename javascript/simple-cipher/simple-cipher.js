const alphabet = "abcdefghijklmnopqrstuvwxyz";

function limit(x) {
  if (x < 0) {
    return x + 26;
  } else if (x > 25) {
    return x - 26;
  } else {
    return x;
  }
}

function keyGenerator() {
  let key = "";
  const keyLength = Math.trunc(Math.random() * 100) + 100;
  for (let i = 0; i < keyLength; i++) {
    key += alphabet[Math.trunc(Math.random() * 26)];
  }
  return key;
}

class Cipher {
  constructor(key = keyGenerator()) {
    if (key === "") {
      throw new Error("Bad key");
    } else {
      for (let i = 0; i < key.length; i++) {
        if (alphabet.search(key[i]) === -1) {
          throw new Error("Bad key");
        } else {
          this.key = key;
        }
      }
    }
  }

  encode(str) {
    let result = "";
    while (str.length / this.key.length > 1) {
      this.key = this.key + this.key;
    }
    for (let i = 0; i < str.length; i += 1) {
      const num = alphabet.indexOf(str[i]) + alphabet.indexOf(this.key[i]);
      result += alphabet[limit(num)];
    }
    return result;
  }

  decode(str) {
    let result = "";
    while (str.length / this.key.length > 1) {
      this.key = this.key + this.key;
    }
    for (let i = 0; i < str.length; i += 1) {
      const num = alphabet.indexOf(str[i]) - alphabet.indexOf(this.key[i]);
      result += alphabet[limit(num)];
    }
    return result;
  }
}

export { Cipher };
