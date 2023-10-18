//your code here
let arr = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
function getArticlelessString(input){
	let words = input.split(" ");
	let nonArticleWords = words.filter(
		(word) => {
		let smallCaseWord = word.toLowerCase();
		if(smallCaseWord === "the" || smallCaseWord === "an" || smallCaseWord === "a"){
			return false;
		}
		return true;
	 }
	);
	 return nonArticleWords.join(" ");
}