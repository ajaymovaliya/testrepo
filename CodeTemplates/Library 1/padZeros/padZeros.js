/**
	Modify the description here. Modify the function name and parameters as needed. One function per
	template is recommended; create a new code template for each new function.

	@param {String} arg1 - arg1 description
	@return {String} return description
*/
function padZeros(str, max) {
	return str.length < max ? padZeros("0" + str, max): str;
}