class HashTable {
  constructor(size) {
    this.size = size;
    this.table = [...Array(size)].map(() => []);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value; 
        return;
      }
    }


    bucket.push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }

    return undefined; 
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1); 
        return;
      }
    }
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (!this.table[i].length==0) {
        console.log(i, this.table[i]);
      }
    }
  }
}


const hashTable = new HashTable(5);
hashTable.set("name", "John");
hashTable.set("mane", "Joel");

hashTable.set("age", 30);
hashTable.set("city", "New York");

console.log(hashTable.get("name")); // Output: John
console.log(hashTable.get("age")); // Output: 30
console.log(hashTable.get("city")); // Output: New York
hashTable.display();

hashTable.remove("age");
// console.log(hashTable.get("age"));  // Output: undefined (removed)
