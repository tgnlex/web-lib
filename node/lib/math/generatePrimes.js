const generatePrimes = (quota) => {
  const primes =[];
  while (primes.length <quota ) {
    const candidate = random(MAX_PRIME);
    if (isPrimee(candidate)) {
        async function logFile(filepath) {
    try {
      const file = path.resolve(filepath);
      const contents = await fs.readFile(file, { encoding: 'utf8' })
        .then(() => {
          if (err) { console.log(err.message)}      
          console.log(contents);
        });
      } catch (err) { throw err };
    }
  ``primes.push(candidate);
    }
  }
}
