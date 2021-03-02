# Lifecycle Methods

- Make a fetch request -> 
- When an item is added to the cart, remove the Add To Cart button 
- Toggle between viewing the cart and viewing the items shopping page.
- Set an interval to show time of shopping, and correctly clear the interval when necessary
- When the image of an item is clicked, it will show the second image
- Perform the filter and preserve state correctly

[Lifecycle Methods Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)


# How to Run 
All of the toy data is stored in the db.json file. You'll want to access this data using a JSON server. In order to do this, run the following two commands:

```
npm install -g json-server
json-server --watch db.json
```

This will create a server storing all of our lost toy data with restful routes at http://localhost:3000/items. You can also check out http://localhost:3000/items/:id