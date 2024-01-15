1995 - first version by Brandon Eich in 10 days.

What you need.

- Typing skills .
- File Management.
- Persistence.
- Patience
- Logic(not math)
- HTML $ CSS

JAVASCRIPT VARIABLES

- Write code that is generalizable as possible!
- variable are like containres that hold sth temporarily.

* Declaring
  ARRAYS

- containers with sub-containers.
- basic ways to explicitly create an array in JS
  var colors = new Array('red', 'green', 'blue');
  var colors = ['red', 'green', 'blue']

SEQUENCE SELECTION AND LOOP

- structured programming makes use of these three structures.

* Sequence - first you do this , then you do that, and then finally you do this over there.
* selection - if some condition is met do this otherwise do that.
* loop - while a condition is true do that.

FUNCTIONS

- building blocks of components.
- A function lets you combine a grp of instructions together and give them a name.

* Returning data

- a function can return data after having perfomed whatever operations that function does on that data.

  ***

- dot syntax and methods we use (.) or periods to separate objects from their properties or methods in javascript.
- insertBefore()
- replaceChild()
- removeChild()
- appendChild()
- cloneNode()
- createElement()
- createAttribute()
- createTextNode()

- getElementById() - manipulates the DOM using a unique ID assigned to an element.
- getElementsByTagName()- method used to retrieve a collection of all elements in a document with a specified tag name.
- getElementByClassName() - selects elements based on class name.
- querySelector() - method that allows one to select and retrieve the first element that matches a specified CSS selctor in the document.
- if no matching element is found it returns `null`.
- querySelectorAll() - returns a nodelist containing all the elements that match the selector in the document order. if no matching elements are found , it returns an empty nodelist.

WORKING WITH PROPERTIES

- .style.property = 'value';
- .innerHTML = 'value';
- .className = 'value';

WITH ELEMENTS

- .setAttribute('attributeName', 'value')
- .removeAttribute('attributeName')
- .getAttribute('attributeName')

CREATING ELEMENTS AND TEXT NODES

- createElement - allows one to create a new HTML element.
- removingChild()/remove() - method allows one to remove a specified child node from its parent node.

CAPTURING EVENTS WITH JAVASCRIPT
EVENT LISTENER

- is a function that waits for a specific event to cocur and then respond to the event.
- events can be user interactions like clicks, key presses, mouse movements or system events like completion of an asycnhronous operation.
- to set up an event listener you use addEventListener() method.

EVENT OBJECT.

- an object that contains information about an event that has occcurred such as key press, mouse click or a system event.
- when an event occurs the browser automatically creates an event object and passes it as an arguement to the event handler.(the function that responds to the event).
  **_ Common properties of the event object: _**
  `type` - type of the event(click, keydown)
  `target` - DOM element that triggerd the event.
  `clientX` and `clientY` - horizontal and vertical coordinates of the event relative to the viewport.
  `keyCode` - key code of the key that was pressed(for keyboard events)

PREVENTING DEFAULT BEHAVIOUR

- event.preventDefault() - crucial method in js often used in conjuction with event handling.
- used to prevent the default action associated with an event from being executed.

**_ SCOPE IN JAVASCRIPT _**
Global scope - values in this scope can be accessed anywhere in the script
Local scope - values are only accessible to the function they are defined in.
  if you forget to use var, let and const - values become global automatical.

  STRATEGIES 
  - Never use global scope.(avoid as much as possible)

 1 ** Namespacing and Closures **
  IIFE(Immediately Invoked Function Exepression)
  - Wrap code in an immediately invoked function expression.
  - this anonymous function runs as soon as the script loads and it will also keep variable out of the global scope.

2 ** Strategy 2 'use strict' directive
- helps cut down on accidential declarations of varibles without using the var keyword.
IIFE AND 'USE STRICT' TOGETHER -- RECOMMENDED.

3 ** Using const and let instead of var ** 
- they both help minimize the chances that a variable holds an unexpected value.

HOISTING IN JAVASCRIPT
** var**
- by default javascript hoist variables. this means you can use them before you specifically declare them. 
- this can lead to unexpected results.
You should declare variable first
const and let are not hoisted.

 
