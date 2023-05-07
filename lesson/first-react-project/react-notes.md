# Installing Dependencies

- npm i bootstrap react-router-dom reactstrap

# Add the CSS import

- We added the css import statement to the index.js file.

```js
import "bootstrap/dist/css/bootstrap.min.css";
```

## Renaming the App.js file 
Change the name of the file to jsx to allow VS Code to know how to autocomplte your html code.

## Routing

Use the browser router that you installed earlier and wrap the `APP` component in the browser router. This is done in the `index.js` file

```jsx
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

Using the routing system is like a switch. You must use BrowserRouter Wrapper Components `<Routes>` and inside the `<Routes>` wrapper you will be adding your `<Route />` components.

This is usually in your `App.jsx` file.

```jsx
<Routes>
  <Route path="/" element={<Auth updateToken={updateToken} />} />
  <Route path="/driver-log" element={<LogIndex token={token} />} />
</Routes>
```


## useEffect

If you want to run a function on page load only have an empty array at the end of the useEffect

```jsx
useEffect(() => {
  // If we have something in our local storage then lets update our State Variable so other other components can use it.
  if (localStorage.getItem("token")) {
    setToken(localStorage.getItem("token"));
  }
}, []);
```

If you want the function to run after a prop or useState variable has changed you can add that variable to the array.

```jsx
useEffect(() => {
  if (props.token) {
    getAllLogs();
  }
}, [props.token]);
```
