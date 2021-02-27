//find all child nodes of the bulleted list,
// "list item a", etc.
const bulletList = document.querySelector("ul.bullet-list");
console.log(bulletList);

const bulletChildAll = bulletList.childNodes;
console.log(bulletChildAll);

//find the first child in the bulleted list
const bulletItemFirst = document.querySelector("li.bullet-item:first-child");
console.log(bulletItemFirst);

//find the first numbered item
const numberItemFirst = document.querySelector("li.number-item:first-child");
console.log(numberItemFirst);

//get the child elements of the ul, not all nodes
//returns an HTML collection, must be converted
//to an array with Array.from()
const bulletChildren = bulletList.children;
console.log(bulletChildren);
const bulletChildrenArray = Array.from(bulletChildren);
console.log(bulletChildrenArray);

//update the text content of the first bullet
const bulletUpdated = (bulletChildren[0].textContent = "Julie");

//child node name for the first bulleted list item
const bulletNodeName1 = bulletChildAll[0].nodeName;
console.log(bulletNodeName1);

//child node type for the first bulleted list item
const bulletNodeType1 = bulletChildAll[0].nodeType;
console.log(bulletNodeType1); //type 3: text

//parent element of the first numbered item,
//gives ol element and all of its child items
const parentNumbers = numberItemFirst.parentElement;
console.log(parentNumbers);

//parent node of the first numbered item,
//in this case, produces the same result
//as parentElement
const parentNumberNode = numberItemFirst.parentNode;
console.log(parentNumberNode);

// parent of a parent
//gives the ol parent with all child elements,
//also the parent div container and all its child
//elements (the h3)
const grandparentNumbers = numberItemFirst.parentElement.parentElement;
console.log(grandparentNumbers);

//siblings, the 3 sections, main,
//newsletter, final text
const finalText = document.querySelector("#final-text");
console.log(finalText);

//previous sibling only produces the node,
//not all elements
const newsletterSection = finalText.previousSibling;
console.log(newsletterSection);

//siblings within the bulleted list
const bulletItemLast = document.querySelector("li.bullet-item:last-child");
console.log(bulletItemLast);

//2nd to last item node
const bulletItem5Node = bulletItemLast.previousSibling;
console.log(bulletItem5Node);

//2nd to last item element
const bulletItem5Element = bulletItemLast.previousElementSibling;
console.log(bulletItem5Element);

//first bullet and next bullet, already declared first bullet
console.log(bulletItemFirst);

const bulletItemSecond = bulletItemFirst.nextElementSibling;
console.log(bulletItemSecond);
