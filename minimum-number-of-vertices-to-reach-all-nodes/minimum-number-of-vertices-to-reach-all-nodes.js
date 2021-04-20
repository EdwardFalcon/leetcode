/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
 var findSmallestSetOfVertices = function(n, edges) {
    const vertices = new Set(edges.map(edge => edge[1]))
    return Array(n).fill()
        .map((_, i) => i)
        .filter(i => !vertices.has(i));
};