const Node = function(val, next) {
    val = val || null;
    next = next || null;
    return {val, next};
}

export default Node;
