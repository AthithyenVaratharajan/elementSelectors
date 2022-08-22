const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    const seededFruits = document.querySelectorAll("li.seed");
    console.log(seededFruits);

    // 2. Get all seedless fruit elements
    // Your code here
    const seedlessFruits = document.querySelectorAll("li.seedless");
    console.log(seedlessFruits);

    // 3. Get first seedless fruit element
    // Your code here
    console.log(seedlessFruits[0]);

    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    const div = document.getElementById("wrapper");
    const divChildElements = div.children;
    const p = divChildElements[0];
    const pChildElements = p.children;
    const span = pChildElements[0];
    console.log(span);


    // 5. Get all children of element "wrapper"
    // Your code here
    console.log(divChildElements);

    // 6. Get all odd number list items in the list
    // Your code here
    for ( let i = 1; i < divChildElements.length; i+=2){
        console.log(divChildElements[i]);
    }

    // 7. Get all even number list items in the list
    // Your code here
    for ( let i = 0 ; i < divChildElements.length; i+=2){
        console.log(divChildElements[i]);
    }

    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    const section = document.getElementById("three");
    const sectionChildElements = section.children;
    const print = sectionChildElements[1];
    const printChildElements = print.children;
    const a = printChildElements[0];
    console.log(a);


    // 9. Get "Amazon" list element
    // Your code here
    const amazon = document.querySelector("a.shopping");
    console.log(amazon);

    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    const sectionthree = document.getElementById("three");

    const ul = sectionthree.children[3];
    const li = ul.children;
    console.log(li);

}

window.onload = select;
