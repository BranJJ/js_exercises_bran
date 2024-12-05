// DOM Manipulation:
document.body.prepend("This is the start.");
document.body.append("Start learning the DOM.");

const pagetitle = document.getElementById("pageTitle");

// 1. element.innerHTML
// Setting HTML markup contained within the element.

// Implement Code here
// pagetitle.innerHTML = "<pre>Document Object Model: DOM</pre>"; /* This one has vulnerabilities */

/* Better practice */
pagetitle.innerText = "";
const pre = document.createElement("pre");
pre.innerText = "Document Object Model: DOM";
pagetitle.appendChild(pre);


// 2. element.innerText
// Rendering text content of a node and its descendants.

// Implement Code here


// 3. element.style
// Modifying the style of HTML elements

// Implement Code here
pagetitle.style.height = "3em";
pagetitle.style.border = "4px solid black"
pagetitle.style.color = "#f00"

// 4. getElementById
// refer to the example above (line 4)


// 5. getElementsByTagName
// Using getElementsByTagName method, search for elements that match a tag name

// Implement Code here
const spans = document.getElementsByTagName("span");
spans[0].innerText = "Test";
spans[1].innerText = "Hello World";

// Using getElementsByTagName method, search for elements that match a tag's index

// Implement Code here
for (let index = 0; index < spans.length; index++) {
    spans[index].innerText = `This is span tag number ${index + 1}.\n`;
}

// 6. createElement
// Adding a new HTML element in JavaScript.

// Implement Code here
const paragraph = document.createElement("p");
paragraph.innerText = "Appended Paragraph";
document.body.append(paragraph)

// 7. querySelector
// Selecting the first instance of h2 tag and adding an innerText

// Implement Code here
const subtitle = document.querySelector("h2");
subtitle.innerText = "This is a subtitle.";

// Using querySelectorAll method, search for elements that match a tag's class

// Implement Code here
const subtitles = document.querySelectorAll("h2");
for (let index = 0; index < subtitles.length; index++) {
    subtitles[index].innerText = `This is a subtitle ${index + 1}.`;
};

/* This will take over the earlier for-loop querySelectorAll */
subtitles.forEach((item, key) => {
    item.innerText = `Alternate subtitle ${key + 1}.`;
});

/* Target class (customClass) using querySelector */
const customH4 = document.querySelector(".customClass");
customH4.innerText = "Custom class targetted.";
customH4.style.color = "#f00";

/* Target ID (customID) using querySelector */
const customIDH5 = document.querySelector("#customID");
customIDH5.innerText = "Custom ID targetted.";
customIDH5.style.border = "1px solid purple";


// 8. element.append()
// Adding a new HTML element inside an existing element.
const updateListItems = document.querySelector("#menu");

const menu = new Array(
    {name:"Home", link: "home.html"},
    {name:"About", link: "about.html"},
    {name:"Contact", link: "contact.html"},
    {name:"Sign In", link: "login.html"},
    {name:"Admin", link: "admin.html"}
);

menu.forEach((menuItem, key) => {
    // create list item first
    const listItem = document.createElement("li");
    listItem.setAttribute("key", key);
    // create the link per list item 
    const anchor = document.createElement("a");
    anchor.setAttribute("href", menuItem.link);
    anchor.innerText = menuItem.name;
    // add the link to the list item
    listItem.append(anchor);
    // finally append listItem to the updatedListItems
    updateListItems.append(listItem);
});


console.log(updateListItems)
// Implement Code here


// 9. parentNode.appendChild(node)
// Adding a node using appendChild

// Implement Code here


// ----------------------------------------------
// Refer to ./form/form.html and ./form/script.js
// ----------------------------------------------

// 10. element.setAttribute()
// Setting the Attributes of HTML select input

// 11. element.getAttribute()
// get the Attributes's value(s) of selected options

// 12. element.addEventListener()
// Adding an event listener to a button
