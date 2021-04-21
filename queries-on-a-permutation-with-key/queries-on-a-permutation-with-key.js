/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function(queries, m) {    
    let p = Array(m).fill(0).map((v, i) => i + 1);
    return queries.map(query => {
        const pos = p.indexOf(query);
        p.splice(pos, 1);
        p.unshift(query)        
        return pos;
    });        
};