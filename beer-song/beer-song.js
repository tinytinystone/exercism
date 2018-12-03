const lyrics = {
  goBuyBeer: 'No more bottles of beer on the wall, no more bottles of beer.\n' +
    'Go to the store and buy some more, 99 bottles of beer on the wall.\n',

  allBeerParts: beerAmount =>
    `${beerAmount} bottles of beer on the wall, ` +
    `${beerAmount} bottles of beer.\n` +
    `Take ${beerAmount === 1 ? 'it' : 'one'} down and pass it around, ` +
    `${beerAmount - 1} bottles of beer on the wall.\n`,

  getBeerParts(amount) {
    return amount > 0 ? lyrics
      .allBeerParts(amount)
      .replace(/^1 bottles/g, '1 bottle')
      .replace(/.[^0-9]1 bottles/g, ', 1 bottle')
      .replace(/[^0-9]0/g, ' no more') :
      lyrics.goBuyBeer;
  },
};

const Beer = {
  verse: beerAmount =>
    lyrics.getBeerParts(beerAmount),
  sing(from = 99, to = 0) {
    let result = '';
    for (let i = from; i >= to; i--){
      result += this.verse(i) + '\n';
    }
    return result.trim() + '\n';
  },
}

export default Beer;
