let stylelist = require("./stylelist");

test("test simple classes 1", () => {
	expect(stylelist("class1", "class2")).toBe("class1 class2");
});

test("test simple classes 2", () => {
	expect(stylelist("class-name")).toBe("class-name");
});

test("test simple classes 3", () => {
	expect(stylelist("class-name", "class1", "class2", "class-3")).toBe("class-name class1 class2 class-3");
});

test("array-notation for conditions 1", () => {
	expect(stylelist("class1", [true, "class2", "class3"])).toBe("class1 class2 class3");
});

test("array-notation for conditions 2", () => {
	expect(stylelist("class1", "class2", [false, "class3", "class4"])).toBe("class1 class2");
});

test("array-notation for conditions 3", () => {
	expect(stylelist("class1", "class2", [1 < 2, "class3", "class4"])).toBe("class1 class2 class3 class4");
});

test("array-notation for conditions 4", () => {
	expect(stylelist("class1", "class2", [10 < 2, "class3", "class4"])).toBe("class1 class2");
});

test("object-notation for conditions 1", () => {
	expect(stylelist("class1", "class2", {"active" : true})).toBe("class1 class2 active");
});

test("object-notation for conditions 2", () => {
	expect(stylelist("class1", "class2", {"active" : false})).toBe("class1 class2");
});

test("object-notation for conditions 3", () => {
	expect(stylelist("class1", "class2", {"active" : false, "current" : true})).toBe("class1 class2 current");
});

test("dash-notation 1", () => {
	expect(stylelist("class1", "class2", ["class-", 3])).toBe("class1 class2 class-3");
});

test("dash-notation 2", () => {
	expect(stylelist("class1", "class2", ["class-", "5"])).toBe("class1 class2 class-5");
});