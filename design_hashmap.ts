/*
Design a HashMap without using any built-in hash table libraries.

Implement the MyHashMap class:

MyHashMap() initializes the object with an empty map.
void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.
 

Example 1:

Input
["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
[[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
Output
[null, null, null, 1, -1, null, 1, null, -1]
*/

class MyHashMap {
    hash_map = {};

    constructor() {
      this.hash_map;
    }

    put(key: number, value: number): void {
      this.hash_map[key] = value;
    }

    get(key: number): number {
      let value = this.hash_map[key]
      if ( value == undefined ) {
        return -1
      }
      return value
    }

    remove(key: number): void {
      delete this.hash_map[key]
    }
}
