# Lecture 2: Advanced Hash Table Operations

## Warm-up (10 minutes)

## Written Question (5 minutes)

What's better a hash table or an array? Explain.

A hash table is generally better than an array for operations that require fast lookups, insertions, and deletions. This is because a hash table has an average time complexity of O(1) for these operations, thanks to its use of a hash function to compute an index into an array where the data is stored.

In contrast, an array has a time complexity of O(n) for lookups, insertions, and deletions in the worst case, because it may require scanning through the entire array or shifting elements to maintain order.

However, arrays are better when you need to access elements by their index, as this operation is O(1) in arrays. Arrays are also more memory efficient when the number of elements is small or when the maximum number of elements is known in advance.

In summary, hash tables are better for dynamic sets of data where fast access, insertion, and deletion are required, while arrays are better for static or fixed-size collections where indexed access is needed.

## Lecture Content (20 minutes)

Dive deeper into hash table operations and performance tuning:

### Load Factor:

Definition and its impact on performance. Explain when to resize a hash table.


The load factor of a hash table is defined as the number of elements in the hash table divided by the number of buckets (or slots) in the table. It is a measure of how full the hash table is. A higher load factor means more elements are stored in the hash table, which can lead to more collisions and decreased performance. Conversely, a lower load factor means fewer elements are stored, which can lead to wasted space.

When the load factor exceeds a certain threshold (commonly 0.75), it is time to resize the hash table to maintain efficient operations. Resizing typically involves creating a new hash table with more buckets and rehashing all the existing elements into the new table.


### Resizing a Hash Table:

Discuss how and why a hash table might need resizing, including what rehashing involves.

A hash table might need resizing to maintain efficient operations when the load factor exceeds a certain threshold (commonly 0.75). Resizing involves creating a new hash table with more buckets and rehashing all existing elements into the new table. Rehashing means recalculating the hash values for each element based on the new table size and inserting them into the new table. This process helps distribute the elements more evenly, reducing collisions and maintaining the average time complexity of O(1) for insertions, deletions, and searches.

### Complexity Analysis:

Discuss the average and worst-case time complexities for insertions, deletions, and searches.


The average time complexity for hash table operations (insertions, deletions, and searches) is O(1). This is because the hash function computes an index in constant time, and the operations are performed directly at that index.

However, in the worst case, the time complexity can be O(n) if there are many collisions and all elements are stored in the same bucket. This can happen if the hash function is not well-designed or if the load factor is too high.

### Advanced Collision Resolution Techniques:

Brief overview of techniques like linear probing, quadratic probing, and double hashing.
Collision resolution techniques are used to handle cases where multiple elements are hashed to the same index. Some advanced techniques include:

- **Linear Probing**: When a collision occurs, the algorithm checks the next available slot in the table (linearly) until an empty slot is found.
- **Quadratic Probing**: Similar to linear probing, but the algorithm checks slots at increasing intervals (e.g., 1, 4, 9, 16, etc.) to reduce clustering.
- **Double Hashing**: Uses a second hash function to determine the interval between probes, reducing the likelihood of clustering and improving performance.

## Problem Solving (35 minutes)

Challenge students with a task to implement a hash table that resizes itself based on the load factor. This will involve calculating the load factor and writing a rehash function.

### Recap (15 minutes)

Recap the day’s lesson focusing on why managing the load factor and choosing the right collision resolution technique can drastically affect the performance of a hash table.

### Additional Resources

- https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
- https://www.codewars.com/kata/554ca54ffa7d91b236000023
