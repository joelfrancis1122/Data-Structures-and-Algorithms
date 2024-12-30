class TrieNode{
    constructor(){
        this.children={}
        this.isEndOfWord=false
    }
}
class Trie{
    constructor(){
        this.root=new TrieNode()
        this.count = 0 
    }

    insert(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char]=new TrieNode()
                
            }
            node=node.children[char]
        }
        node.isEndOfWord=true
        this.count++

    }

    search(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return node.isEndOfWord===true
    }

    startsWith(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return true
    }
    size(){
        console.log(this.count)
    }
    longest(){
        let res='';
        // let node=this.root;
        let node=this._findLongest()
        if(res.length<node.length){
            res=node[0]
        }
         console.log(res);
          

        }
        // if(out.length<res.length){
        //     return out;
        // }
        // return res
    
    _findLongest(node=this.root,current=''){
        let longest=[]
        if(node.isEndOfWord===true){
            longest.push(current);
            console.log(longest)
            return longest

        }
        let str=''
        for(let char in node.children){
            str+=node.children[char]
            this._findLongest(node.children[char],current+str)
        }
    }
}



let trie = new Trie();

trie.insert("apple");
console.log(trie.search("apple"));   // Output: true
console.log(trie.search("app"));     // Output: false
console.log(trie.startsWith("app")); // Output: true
trie.insert("app");
console.log(trie.search("app"));     // Output: true
trie.size()
trie.longest();
// trie._findLongest()
