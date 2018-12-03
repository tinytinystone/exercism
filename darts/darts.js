function solve(x, y){
  if(isNaN(x) || isNaN(y)){
    return null;
  }
  const max = Math.max(x, y)

  if (max > 10) return 0;
  if (max > 5) return 1;
  if (max > 1) return 5;
  return 10;
}

export default solve;
