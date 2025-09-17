// #1
function funcOne() {
    let a = 5;
    if (a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - Prediction:
// When funcOne() is called, it will alert: "inside the funcOne function 3"
// Explanation: The variable `a` is declared inside the function with `let`, so it's scoped to the function. It starts at 5, and since 5 > 1, it's reassigned to 3.

// #1.2 - What if `const` is used instead of `let`?
// If `a` is declared with `const`, the reassignment `a = 3` will throw a TypeError.


// #2
let a = 0;
function funcTwo() {
    a = 5;
}


function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - Prediction:
// funcThree() → alerts "inside the funcThree function 0"
// funcTwo() → sets global `a` to 5
// funcThree() → alerts "inside the funcThree function 5"
// Explanation: `a` is declared in the global scope with `let`. funcTwo modifies it, and funcThree reads it.


// #2.2 - What if `const` is used instead of `let`?
// If `a` is declared with `const`, funcTwo() will throw a TypeError when trying to reassign `a`.


// #3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}



// #3.1 - Prediction:
// funcFour() → sets a global property `a` on the window object
// funcFive() → alerts "inside the funcFive function hello"
// Explanation: Assigning to `window.a` creates a global variable `a`. funcFive accesses it.



// #4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}



// Prediction:
// funcSix() → alerts "inside the funcSix function test"
// Explanation: The inner `let a = "test"` shadows the outer `a = 1`. The inner scope is used in the alert.


// #5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`); // Prediction: This will alert "in the if block 5"
}
alert(`outside of the if block ${a}`); // Prediction: This will alert "outside of the if block 2"

// Explanation:
// The variable `a` declared inside the `if` block using `let` is block-scoped.
// It shadows the outer `a` within that block, so inside the `if`, `a` refers to 5.
// Outside the block, the original `a` (value 2) remains unchanged.

// #5.1 - run the code in the console
// You will see two alerts:
// First: "in the if block 5"
// Second: "outside of the if block 2"

// #5.2 - What will happen if the variable is declared with const instead of let?
// If you change both declarations to `const`, like this:

/*
const a = 2;
if (true) {
    const a = 5;
    alert(`in the if block ${a}`); // This will still alert "in the if block 5"
}
alert(`outside of the if block ${a}`); // This will still alert "outside of the if block 2"
*/

// Explanation:
// `const` is also block-scoped like `let`, so the behavior remains the same.
// The only difference is that `const` variables cannot be reassigned.
// Since neither `a` is reassigned in this code, using `const` works identically here.



