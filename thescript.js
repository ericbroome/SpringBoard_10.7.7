const question_1 = function() {
    const set = new Set([1, 1, 2, 2, 3, 4]);
    return Array.from(set);
    //(4) [1, 2, 3, 4]
}

const question_2 = function() {
    const result = [...new Set("referee")].join("");
    return result;
    //"ref"
}

const question_3 = function() {
    let m = new Map();
    m.set([1,2,3], true);
    m.set([1,2,3], false);
    return m;
    //Map(2) {(3) [1, 2, 3] => true, (3) [1, 2, 3] => false}
}

const hasDuplicate = function(arr) {
    const set = new Set(arr);
    return set.size !== arr.length;
}

const vowelCount = function(str) {
    const vowels = new Map([
        ['a', 0],
        ['e', 0],
        ['i', 0],
        ['o', 0],
        ['u', 0]
    ]);
    const lowStr = str.toLowerCase();
    for(element of Array.from(lowStr)) {
        let vowel = vowels.get(element);
        if(vowel != undefined) {
            vowels.set(element, ++vowel);
        }
    };
    //Now remove unused vowels
    vowels.forEach((value, key) => {
        if(value === 0)vowels.delete(key);
    });
    return vowels;
}


