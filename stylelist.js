/**
 * @function stylelist
 * @description Concatenates css-classes, optionally with a conditional rendering.
 * Created to have a more streamlined syntax when using JSX-classes with conditions.
 * @author karsten.wtf
 * @param  {...any} your css-classes to concatenate. Can be any number of strings (simple concatenation)
 * or arrays. If it´s an array, it checks if the first argument is true. If so, the rest of the array
 * will be added to your classlist.
 */
export const stylelist = (...args) => {

	// We wil return this array later
	let classListArray = [];
	
	// For each entry in our argument list
	args.forEach((element) => {

		// If our current element is an array
		if (element instanceof Array) {

			// Let´s check if the first element is true
			if (element[0]) {

				// And append the remaining elements to our output-array
				classListArray = classListArray.concat(element.slice(1, element.length));
			}
		}

		// Most-used case: A simple string
		if (typeof element == "string") {

			// Simply push it to our array
			classListArray.push(element);
		}
	});

	// Return everything
	return classListArray.join(" ");
};