# stylelist

A simple package that concatenates your css-classes, optionally with a condition.

## Usage

This package was created to have a simplified syntax when using css-classes in JSX especially when they have conditions.

Long, badly-readable style-attributes like

```jsx
<div className={"mr-5 nav-item " + (navItemActive ? " active " : "disabled")}>Hello!</div>
```

become a little more readable:

```jsx
<div className={stylelist("nav-item", "mr-5", [navItemActive, "active"])}>Hello!</div>
```

# Documentation

## Default string-arguments

Simple string-arguments are simply concatenated. In this reduced example, it may look useless - but you can combine all argument-types together!

```jsx
<div className={stylelist("text-center", "text-muted")}></div>
```

## Array-notation

You can pass an array if you want to render css-classes conditionally. If the first element is true (or interpreted as true), the remaining array-elements will be added to the class-list.

This seems to be a little surprising, but is a really lightweight syntax for usage in your JSX-code.

```jsx
<div className={stylelist("btn", [isDisabled, "btn-error"])}></div>
```

```jsx
<div className={stylelist("btn", [isDisabled, "btn-error", "cursor-disabled"])}></div>
```

```jsx
<div className={stylelist(
		"btn",
		[isDisabled, "btn-error", "cursor-disabled"],
		[!isDisabled, "btn-success", "cursor-pointer"]
	)}>
```

## Object-notation

The object-notation is another way to render classes conditionally. You can pass an object as argument. If the value is true, the key is added to the class-list.

```jsx
<div className={stylelist("btn", { "active" : isActive })}></div>
```

# ... and why?

To reduce all the hassle with concatenated classes and the spaces before and after every element.
