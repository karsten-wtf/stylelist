# stylelist
A simple package that concatenates your css-classes, optionally with a condition

## Usage
This package was created to have a simplified syntax when using css-classes in JSX especially when they have conditions.

Long, badly-readable style-attributes like

```html
	<div className={"mr-5 nav-item " + (navItemActive ? " active " : "disabled")}>Hello!</div>
```

become a little more readable:

```html
	<div className={stylelist([
		"nav-item"
		"mr-5",
		[navItemActive, "active"],
		[!navItemActive, "disabled"]
	])}>Hello!</div>
```

# Documentation
The *stylelist*-Function is pretty simple. It takes any number of arguments. If you give a string, it will simply be added to the output.

If you give an array, the first element is the render-condition and controls the rendering of the remaining elements in this array.

For example, this would render every class:

```js
	stylelist([
		true, 
		"firstClass", 
		"secondClass", 
		"someOtherClass
	]);
```

While this example wont render anything:

```js
	stylelist([
		false, 
		"firstClass", 
		"secondClass", 
		"someOtherClass"
	]);
```

## ... and why?
To reduce all the hassle with concatenated classes and the spaces before and after every element.
