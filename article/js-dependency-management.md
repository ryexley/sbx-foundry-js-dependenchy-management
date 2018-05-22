# JavaScript Dependency Management
For modern web sites and applications, JavaScript has become a critical component for a good user experience. For this reason, it is getting more and more critical that we take the time necessary to design the JavaScript in our sites and applications in ways that make it reliable, maintainable and free of defects. There are many things that factor in to well-designed JavaScript, but the one I’d like to focus on today is the use of dependency injection.

For the purposes of this article, I am going to assume a fairly simplistic definition of the term “dependency injection” and discuss an approach in which we simply pass dependencies to our modules as parameters to a constructor. There are many ways in which dependency injection can be achieved, and this article will be the first in a series of articles through which we will discuss a number of different techniques.

## To import or to inject?

When building modern web sites and applications with JavaScript, it’s generally considered a good practice to keep your modules loosely coupled, and as small and focused as possible. One of the primary advantages that this gives you and your team is the resulting modules are typically very testable. Having tests for your code can give you great confidence when you need to change your code that you can do so without breaking it. How you manage the dependencies of your modules can have a significant impact on how easily it is to write tests for it.

There are two primary ways that you can acquire a reference to a dependency in a module, you can either `import` it, or you can pass it in as a constructor parameter. Let’s take a look at these two approaches and discuss the advantages and disadvantages of each. Let’s start with an example of a dependency that we might wish to share among a number of different modules. For this example, we’ll go with a simple math module:

NOTE: _All of the code samples in this article will be presented in ECMAScript 2015+ syntax, and assumes that you are familiar with that._

```javascript
// ./src/util/math.js

export function add(a, b) {
	return a + b;
}

export function subtract(a, b) {
	return a - b;
}

export function multiply(a, b) {
	return a * b;
}

export function divide(a, b) {
	return a / b;
}
```

Let’s take a look at what it would look like to `import` this module from another one:

```js
// ./src/module-a.js

import * as math from 'util/math';

export function ModuleA() {
	// do some important stuff here
}
```

Now let’s see what this might look like if we inject our `math` module as a dependency instead:

```js
// ./src/module-b.js

export function ModuleB(math) {
	// do some more important stuff here
}
```

Those two examples don't actually appear to be all that different at first glance. The difference between how each module gets a reference to the `math` module that it needs internally will become much more noticeable when we try to write some tests for these modules, so let's look at what that would look like.

```js
// ./src/module-a.spec.js

describe('ModuleA', () => {

});
```

