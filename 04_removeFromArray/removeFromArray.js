const removeFromArray = function(arr, ...el) {
    let newarr = []
    for(let i=0; i<arr.length; i++){
        if(!el.includes(arr[i])){
            newarr.push(arr[i])
        }
    }
    return newarr
};

// Do not edit below this line
module.exports = removeFromArray;
