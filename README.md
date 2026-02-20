# xdt-vue

## Vue Developer Coding Interview

The main goal of this little homework assignment is to check your knowledge of Vue.js.

Please do NOT use any AI tools. We want to see YOUR code and how YOU solve the problems.  

**The maximum allowed time for the solution is 2 hours (estimated time is 1 hour).**

Good luck, and see you on the other side. ;)

### Assignment

Create an initial commit (it will contain this project as is) and push it to your Git repository (GitHub, GitLab, Bitbucket, or whatever repo you prefer that is publicly available).

Now, a clock is ticking, and you have 2 hours to complete the assignment. How frequently you commit and push changes is up to you.
Keep in mind that any commit pushed to the repository after the 2-hour deadline will be considered as a late submission (and doesn't count...sort of).

Install the packages with npm install command and run the application with npm run serve command (you can also use your other favorite package manager).

1. In the _TodoList_ component, change the rendering of the element with class todo-list-content.
   The element will be rendered only if there is at least one todo. Otherwise, render an element
   with class no-todos and a message describing there are no todos yet.

2. In the _TodoCheckbox_ component, propagate the onKeyUp event fired by element with class
   checkbox-content. In the _TodoList_ component, catch this event and handle it with handleKeyUp
   function.

3. Implement the function handleDelete in the _TodoList_ component. The function will remove a
   todo item with the specified ID from the todos collection.

4. Create a new component _TodoResults_, that will display the count of finished todo items. Add
   this component under the _TodoList_ component.

5. Add styles to the _TodoResults_ component, so it looks like this:
   a. Text is horizontally aligned
   b. The component is vertically separated from _TodoList_ and _TodoForm_ components
   c. The count of done todos has a green color, if at least one todo is completed and red
      otherwise.

6. Create and use a custom composable in the _TodoResults_ component that will return the count
   of completed todo items.

7. Use a composable to work with the collection of todo items instead of passing it through props.
   (You can also use Pinia instead of a composable.)

8. Instead of getting the initial todo list from todo-data.js, fetch the todo list from API
   https://jsonplaceholder.typicode.com/todos and transform obtained data to the correct format
   used by this application. (You can install any additional packages.)

9. (Bonus) Create 2 unit tests for your composable used in _TodoResults_ component.

Let us know when you're done and send us the link to your repository.


## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
