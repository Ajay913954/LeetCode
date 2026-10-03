/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let result =[];
    let targetIndex =0;

    for(let num =1; num<=n; num++){
        result.push("Push");

        if(num === target[targetIndex]){
            targetIndex++;
            if(targetIndex === target.length){
                break;
            }
        }else{
            result.push("Pop");
        }
    }
    return result;
};