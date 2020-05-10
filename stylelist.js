let _ = require("lodash");

/**
 * @function stylelist
 * @description Concatenates css-classes, optionally with a conditional rendering.
 * Created to have a more streamlined syntax when using JSX-classes with conditions.
 * @author karsten.wtf
 * @param  {...any} your css-classes to concatenate. Can be any number of strings (simple concatenation)
 * or arrays. If it´s an array, it checks if the first argument is true. If so, the rest of the array
 * will be added to your classlist.
 */
module.exports = function (...args) {
	// We wil return this array later
	let classListArray = [];

	// For each entry in our argument list
	args.forEach((element) => {
		if (_.isString(element)) {
			classListArray.push(element);
		}

		if(_.isPlainObject(element)){
			let classesArray = Object.entries(element);
			classesArray.forEach( (singleElement) => {
				if(singleElement[1]){
					classListArray.push(singleElement[0]);
				}
			});
		}

		if (_.isArray(element)) {
			let firstElement = element[0];

			// If the first element in the Array is a string,
			// we check if it ends with a "-".
			// If so, we concatenate the whole array together
			if (_.isString(firstElement)) {
				if (firstElement.charAt(firstElement.length - 1) == "-") {
					classListArray.push(element.join(""));
					return;
				}
			}

			// If the first element is not a string,
			// we check if it validates to boolean-true.
			// If so, we return the other elements in the array
			if (firstElement) {
				// And append the remaining elements to our output-array
				classListArray = classListArray.concat(element.slice(1, element.length));
			}
		}
	});

	// Return everything
	return classListArray.join(" ");
};
