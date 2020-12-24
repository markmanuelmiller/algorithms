// Princeton Lecture 1

// Eager approach - converted from Java to JavaScript

class QuickFind {
  constructor(N) {
    this.id = [];

    this.initializeArray(N);
  }

  /**
   * Initialize id array
   * @param {number} N
   */
  initializeArray(N) {
    for (let i = 0; i < N; i++) {
      this.id[i] = i;
    }
  }

  /**
   *
   * @param {number} p
   * @param {number} q
   */
  connected(p, q) {
    return this.id[p] === this.id[q];
  }

  /**
   * Creates a union between p and q
   * q => p
   * @param {number} p
   * @param {number} q
   */
  union(p, q) {
    const pid = this.id[p];
    const qid = this.id[q];
    for (let i = 0; i < this.id.length; i++) {
      if (this.id[i] === pid) this.id[i] = qid;
    }
  }
}

// testing
// let a = new QuickFind(5);
// console.log(a);
// console.log(a.connected(1, 2));
// a.union(1, 2);
// console.log(a.id);
// console.log(a.connected(1, 2));

// this is too slow!
// can we do better? sure we can

// Quick Union

class QuickUnion {
  constructor(N) {
    this.id = [];

    for (let i = 0; i < N; i++) {
      this.id[i] = i;
    }
  }

  /**
   * Find the root node
   * @param {number} i
   */
  _root(i) {
    while (i !== this.id[i]) {
      i = this.id[i];
    }
    return i;
  }

  /**
   * Connect two nodes
   * @param {number} p
   * @param {number} q
   */
  connected(p, q) {
    return this._root(p) === this._root(q);
  }

  /**
   * Create a union between p and q, where q is parent and p is child
   * @param {number} p
   * @param {number} q
   */
  union(p, q) {
    const i = this._root(p);
    const j = this._root(q);
    this.id[i] = j;
  }
}

// testing
let a = new QuickUnion(10);
console.log(a);
console.log(a.connected(1, 2)); // false
a.union(1, 2);
console.log(a.id);
console.log(a.connected(1, 2)); // true
a.union(5, 2);
a.union(4, 5);
a.union(3, 5);
a.union(9, 3);
a.union(8, 9);
console.log(a.id);
console.log(a.connected(8, 5)); // true

// can we do better? sure we can!

// Improvement 1 - Weighting

// Improvement 2 - Path Compression
