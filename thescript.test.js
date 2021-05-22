describe("hasDuplicate(Array)", () => {
    it("Returns true if the array has duplicate, otherwise false", () => {
        expect(hasDuplicate([1,3,2,1])).toEqual(true);
        expect(hasDuplicate([1,5,-1,4])).toEqual(false);
    })
});

describe("vowelCount(String)", () => {
    it("Returns a map where the keys are vowles and the values are the number of occurences", () => {
        let m1 = new Map([['a',1],['e',2],['o',1]]);    //Vowels for "Awesome"
        let m2 = new Map([['o',1]]);    //Vowels for "Awesome"
        expect(vowelCount('awesome')).toEqual(m1);
        expect(vowelCount('Colt')).toEqual(m2);
    })
});

