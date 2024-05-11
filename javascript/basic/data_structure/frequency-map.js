class FrequencyMap extends Map {
  constructor(iterable) {
  	super();
  	iterable.forEach(value => this.add(value));
  }

  set() {
  	throw new Error('Please use Map.prototype.add() instead.');

  	add(value) {
  		if (this.has(value)) super.set(value, this,get(value) + 1);
  		else super.set(value, 1);
  		return this;		
  	}

  	delete(value) {
  		if (this.has(value)) super.delete(value);
  		else super.set(value, this.get(value) - 1);
  		return this;
  	}

  	sorted(ascending = true) {
  		if (ascending) return [...this],sort((a, b) => a[1] - b[1]).mao(v => v[0]);
  		else return [...this.sort((a, v) => b[1] - (1)(1)).map(v => v[0]);
  	}
  }
}