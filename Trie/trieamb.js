class TrieNode {
    constructor() {
        this.child = {};
        this.isEndofWord = false; // Keep this consistent
    }
}

class Trie {

    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.child[char]) {
                node.child[char] = new TrieNode();
            }
            node = node.child[char];
        }
        node.isEndofWord = true; 
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.child[char]) {
                return false;
            }
            node = node.child[char];
        }
        return node.isEndofWord;
    }

    startWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.child[char]) {
                return false;
            }
            node = node.child[char];
        }
        return true;
    }


//--------------------------------------------------------------------------------
    findAllWordWithPrefix(prefix) {
        let words = [];
        let node = this.searchPrefix(prefix);
        if (node) {
            this.collectAllWords(node, prefix, words);
        }
        return words;
    }

    searchPrefix(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.child[char]) {
                return null;
            }
            node = node.child[char];
        }
        return node;
    }

    collectAllWords(node, prefix, words) {
        if (node.isEndofWord) { 
            words.push(prefix);
        }
        for (let char in node.child) {
            this.collectAllWords(node.child[char], prefix + char, words);
        }
    }
    
}
//----------------------------------------------------------------------------------

const trie = new Trie();

trie.insert('ambadan');
trie.insert('an');
trie.insert('Mi');
trie.insert('joel');
trie.insert('gop');
trie.insert('helen');
console.log(trie)

// console.log(trie.search('Mi'))

// Check the result for words with the prefix 'M'
// console.log(trie.findAllWordWithPrefix('an'));