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
- basic ways to explicitly create an array ij JS
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
- .getAttribute('attributeName)

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
