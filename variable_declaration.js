/**Task

Declare a constant variable, PI, and assign it the value Math.PI. 
You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
Read a number,r , denoting the radius of a circle from stdin.
Use PI and r to calculate the  and  of a circle having radius .
Print  as the first line of output and print  as the second line of output. 


Area = π r2
perimetr =  2 × π × Radius
*/


function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI;
    let r = readLine();
    // Print the area of the circle:
    console.log(PI * (r * r));
    
    // Print the perimeter of the circle:
    console.log(2 * PI * r);
    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}

/**We use the var keyword to declare variables. The scope of a variable declared using this keyword
 *  is within the context wherever it was declared. For variables declared outside any function, 
 * this means they are globally available throughout the program.
 *  For variables declared within a function, this means they are only available within the function itself.
 * ----------------*/
"use strict"
process.stdin.on('data', function (data) {
    main(+(data));
});
/**** Ignore above this line. ****/

function main(input) {
    var a = input;

    // If 'a' is odd:
    if (a % 2 == 1) {
        var a = input + 1;
        console.log("if(a): " + a);
    }

    console.log("main(a): " + a);
};
 
 /* We use the let keyword to declare variables that are limited in scope to the block, statement, 
 * or expression in which they are used. This is unlike the var keyword, 
 * which defines a variable globally or locally to an entire function regardless of block scope 
 * ---------------*/
"use strict"
process.stdin.on('data', function (data) {
    main(+(data));
});
/**** Ignore above this line. ****/

function main(input) {
    let a = input;

    // If 'a' is odd:
    if (a % 2 == 1) {
        // Increment 'a' by 1
        let a = input + 1;
        console.log("if(a): " + a);
    }

    console.log("main(a): " + a);
};
 
 /* We use the const keyword to create a read-only reference to a value, meaning the value referenced by
 *  this variable cannot be reassigned. Because the value referenced
 *  by a constant variable cannot be reassigned, JavaScript requires that constant variables always 
 * be initialized.*/
"use strict"
process.stdin.on('data', function (data) {
    main(+(data));
});
/**** Ignore above this line. ****/

function main(input) {
    const a = input;

    // This will throw "SyntaxError: Missing initializer in const declaration"
    const b; 

    console.log(a);
};