class LRUCache {

    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        if (!this.cache.has(key)) {
            return -1;
        }
        const value = this.cache.get(key);

        // Move the accessed key to the end to mark it as recently used
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }

    put(key, value) {

        // If key already exists, delete it first
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }

        // If the cache exceeds the capacity, remove the least recently used item (first item)
        if (this.cache.size >= this.capacity) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }

        // Insert the new key-value pair
        this.cache.set(key, value);
    }

    display() {
        console.log([...this.cache]);
    }
}

// define the LRU cache with the capacity 
const lruCache = new LRUCache(3);


lruCache.put(1, 'one');
lruCache.put(2, 'two');
lruCache.put(3, 'three');
lruCache.display(); // [[1, 'one'], [2, 'two'], [3, 'three']]

console.log(lruCache.get(2));    // Moves key 2 to the most recent, returns 'two'
lruCache.display(); // [[1, 'one'], [3, 'three'], [2, 'two']]

lruCache.put(4, 'four'); // Evicts key 1 (least recently used)
lruCache.display(); // [[3, 'three'], [2, 'two'], [4, 'four']]
console.log(lruCache.get(1)); // Output: -1 (since key 1 was evicted)
