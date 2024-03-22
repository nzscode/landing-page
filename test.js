// Will find the unique IDBCursor, and change including, collapsing the child ellements if needed.
let _id = document.getElementById("first-section");
_id.innerHTML = "Hello";

// Finds all the matching tags, returns a collection. So one must iterate through and change each one OR
// one can find the id, tag, class from within and change that.
let _tagNameList = document.getElementsByTagName("li");
for (let i = 0; i < _tagNameList.length; i++) {
    let e = _tagNameList[i];
    if (e.length > 1) {
        for (let j = 0; j < e.length; j++) {
            let t = e[j];
            t.innerHTML = "Habanero";
        }
    }

    // e.innerHTML = "Hola";
}

// let _classList = document.getElementsByClassName("container");
// for (let i = 0; i < _classList.length; i++) {
//     let e = _classList[i];
//     e.innerHTML = "Hi";
// }

/*The getElementsByClassName() and getElementsByTagName() methods return a live HTMLCollection.

The querySelectorAll() method returns a static NodeList.

The childNodes property returns a live NodeList.*/
