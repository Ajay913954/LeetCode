/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    let count ={};

    for(let i =0; i<s.length; i++){
        if(count[s[i]]){
            count[s[i]]++;
        }else{
            count[s[i]]=1;
        }
    }
    for(let i =0; i<t.length; i++){
        if(!count[t[i]]){
            return false;
        }
        count[t[i]]--;
    }
    return true;
};