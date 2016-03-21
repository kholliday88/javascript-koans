var _; //globals

/* 
This section uses a functional extension known as Underscore.js - http://underscorejs.org/
    
    "Underscore is a utility-belt library for JavaScript that provides a lot of the functional programming support that you would expect in Prototype.js (or Ruby), but without extending any of the built-in JavaScript objects."
    
Underscore is very similar to Lodash; it basically provides a bunch of useful functions to use on arrays.
Note that the underscore library is loaded in automatically via a HTML tag and can be used via the '_' (underscore) object.

The function _([1, 2, 3]) is provided by underscore and converts the JS array into an Underscore array, which
is required for many / most Underscore features.
 */
describe("About Higher Order Functions", function () {

    it("should use filter to return array items that meet a criteria", function () {
        var numbers = [1, 2, 3];
        // % = modulus operator
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()
        var odd = numbers.filter(function (x) {
            return x % 2 !== 0;
        });

        expect(odd).toEqual(FILL_ME_IN);
        expect(odd.length).toBe(FILL_ME_IN);
        expect(numbers.length).toBe(FILL_ME_IN);
    });

    it("should use 'map' to transform each element", function () {
        var numbers = [1, 2, 3];
        var numbersPlus1 = numbers.map(function (x) {
            return x + 1
        });

        expect(numbersPlus1).toEqual(FILL_ME_IN);
        expect(numbers).toEqual(FILL_ME_IN);
    });

    it("should use 'reduce' to update the same result on each iteration", function () {
        var numbers = [1, 2, 3];
        var reduction = numbers.reduce(
            function ( /* result from last call */ memo, /* current */ x) {
                return memo + x
            }, /* initial */ 0);

        expect(reduction).toBe(FILL_ME_IN);
        expect(numbers).toEqual(FILL_ME_IN);
    });

    it("should use 'forEach' for simple iteration", function () {
        var numbers = [1, 2, 3];
        var msg = "";
        var isEven = function (item) {
            msg += (item % 2) === 0;
        };

        // New function!
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
        numbers.forEach(isEven);

        expect(msg).toEqual(FILL_ME_IN);
        expect(numbers).toEqual(FILL_ME_IN);
    });

    it("should use 'all' to test whether all items pass condition", function () {
        var onlyEven = [2, 4, 6];
        var mixedBag = [2, 4, 5, 6];

        var isEven = function (x) {
            return x % 2 === 0;
        };

        // http://underscorejs.org/#every
        expect(_(onlyEven).every(isEven)).toBe(FILL_ME_IN);
        expect(_(mixedBag).every(isEven)).toBe(FILL_ME_IN);
    });

    it("should use 'any' to test if any items passes condition", function () {
        var onlyEven = [2, 4, 6];
        var mixedBag = [2, 4, 5, 6];

        var isEven = function (x) {
            return x % 2 === 0
        };

        expect(_(onlyEven).any(isEven)).toBe(FILL_ME_IN);
        expect(_(mixedBag).any(isEven)).toBe(FILL_ME_IN);
    });

    it("should use range to generate an array", function () {
        expect(_.range(3)).toEqual(FILL_ME_IN);
        expect(_.range(1, 4)).toEqual(FILL_ME_IN);
        expect(_.range(0, -4, -1)).toEqual(FILL_ME_IN);
    });

    it("should use flatten to make nested arrays easy to work with", function () {
        expect(_([[1, 2], [3, 4]]).flatten()).toEqual(FILL_ME_IN);
    });
});