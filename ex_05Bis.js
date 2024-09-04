function getBasketContent(selectedFruits) {
const fruits = ["strawberry", "strawberry", "strawberry", "apple", "apple","lime", "lime", "peach", "pear", "pear"];

 if (selectedFruits > fruits.length) {
        console.log("Too many fruit(s) selected.");
        return []    
        }
else {       
console.log(`${fruits.length} fruit(s) seleted`);
return fruits.slice(0, selectedFruits)}
return fruits
}

if (typeof getBasketContent === "function") {
	const fruits = getBasketContent(6)
	showMyBasket(fruits)
}
