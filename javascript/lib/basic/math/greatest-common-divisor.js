function gcd = (x, y) => {
    do {
      [x, y] = [y, x%y];
    } while (y !== 0)
    return x
}