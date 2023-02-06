## Available Scripts

To see the app in a development environment you can navigate to: 
# `https://neo-thevisualagency.web.app`

---------------------------------------------------

Or if you want to get your hands dirty with the code and see what happens when you delete all files you can clone the repository, run 
# `npm install`
and then run
### `npm start`
to start the development server, the app runs on [http://localhost:3000](http://localhost:3000).

The page will reload if you make edits.\
You will also see any lint errors in the console.

At the end if you want a production version of the website locally you can run
### `npx serve build`

---------------------------------------------------

In every environment you can always run this lines from the browser console

```javascript
const event = new Event("change-graph", {
    detail: {
        rows: 4,
        cols: 7,
        timeRange: 12
    }
});
document.dispatchEvent(event);
```

to change the number of columns, rows and the time of the grid displaying the asteroids (I wanted to implement a User Interface for it but I really didn't have any more time)
The value gets cached so you'd have to cleare the cache to return to the default values without doing it manually.
