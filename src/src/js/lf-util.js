/*LightForum utilities script V0.0.1dev*/
/**
 * Output a message to the console
 * @param  {String} c The string to be output to the console
 * @return {Output}   The given string in the console
 */
function say (c) {
	console.log(c)
}
/**
 * Change the content of an element
 * @param  {Id} i The id of the element to change
 * @param  {String} c The content to be inserted
 * @return {Output}   An elements content changed
 */
function modifyElement(i, c) {
	document.getElementById(i).innerHTML = c;
}