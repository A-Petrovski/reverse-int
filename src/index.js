module.exports = function reverse (n) {
    var nString = String(n);
    var nLength = nString.length;
    var result = [];
    for ( var i = 0; i <= nLength; i++){
    if (nString[nLength-i] !== '-')
        result[i] = nString[nLength-i];
    }
    return result.join('');
}

