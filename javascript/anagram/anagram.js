export default class Anagram {
  constructor(word) {
    this.word = word;
  }
  matches(wordsList) {
    const sortedWord = [...this.word.toLowerCase()].sort().join("");
    return wordsList.filter(
      w =>
        [...w.toLowerCase()].sort().join("") === sortedWord &&
        w.toLowerCase() !== this.word.toLowerCase()
    );
  }
}
