# Faster development using Express

Most Node.js developers rely on frameworks to better organize their code, Express is the most popular Node web framework, and is the underlying library for a number of other popular Node web frameworks. Node.js was released in 2009 and Express in 2010, the two are so much correlated that we can often assume that `a Node backed` = `an express-based backend`.

Express is an unopiniated framework, which means that it gives a lot of freedom to developers on how to structure their app, and since it is very minimal you'll often have to rely on other packages to build **middlewares**, for authentication, sessions, cookies, ... This also explains why there are other frameworks with far more features included, based on express, such as [Next](https://nextjs.org/), [Adonis](https://adonisjs.com/), [Nest](https://nestjs.com/), ...

## Basic setup and routing

We're going to use NPM (Node Package Manager), to install express.

Let's create a new folder, navigate in it then type:

```bash
npm i express
```

This will create a bunch of files:

- A `package.json` which will allow us to list our external dependencies and create automated scripts
- A `package-lock.json` which will link all the dependencies and find the latest compatible version between all of them, to prevent breaking changes in a package to affect the others
- A `node_modules` folder that [we should .gitignore](https://sebhastian.com/git-ignore-node_modules/), that will contain the dependencies.

Then we can create our server root, by creating an `index.mjs` file with the following content.

```javascript
import express from 'express'

const PORT = 3000
const app = express()

app.get('/', (req, res) => res.send({ info: `Hello World!` }))

app.listen(PORT, () => console.log(`Server started: http://localhost:${PORT}/`))
```

The `app.get("/", ...)` is called a route. Everytime you reach the url `/` with the `get` http method a **request listener** will be triggered. A request listener is a function that takes two arguments.

- The first one describes the incoming request
- The second one the response

Adding a new route is dead simple:

```javascript
// POST request on /signup will trigger this function
app.post('/signup', (req, res) => {
  /* ... */
})
```

You can find more info on basic routing in [the official Express documentation](https://expressjs.com/en/starter/basic-routing.html)

## Advanced routing

If you read through this and thought to yourself that Express wasn't that big of a game-changer, here is where it shines.

**[Everything you need to know is in this guide](https://expressjs.com/en/guide/routing.html)**

- You can create a group of routes in a separate file, using the [Router](https://expressjs.com/en/4x/api.html#router) class.
- You can get parameters from the url, for example in `//mywebsite.com/user/4/edit` extract the `4`
- You can create [Regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) based routes, for instance `app.get(/ful$/gi, (req, res) => {})` will match on `/beautiful`, `meaningful`, etc.

## Middleware

### An analogy

[Middlewares](https://expressjs.com/en/guide/using-middleware.html) are an important aspect of Express. They are part of the request-response workflow. To better understand them, imagine your backend is a candy jar:

![A jar of candy](./candyjar.webp)
There is this big candy jar hanging in the hall of your grandma's house, and today is you lucky day, you're allowed to take one item, and **one only**, from the jar. You've made up your mind; you want the green fuzzy gummy bear! So you put your hand in the glass container and start fetching for your sugary reward. As your hand reaches the first layers of wrapped candies and lollipop, you still keep digging because that's not what you are after. Eventually your hand reaches a known texture, it's your precious gummy bear : the request is fulfilled!

**How is that related to express?**

_A request is like your hand_, it first hits the request listener that are located on top of the file, then sequentially hits those located at the bottom until a response is returned. Middleware are just request listener with an extra argument, that we'll call `next()`. This `next()` argument is a function that will allow us to move on to the next request listener in the execution order (the one that's written below) without sending a response yet.

### Basic middleware example

The following example shows a basic use of middleware function:

```js
// This middleware being on top will be called on each request
app.use((req, res, next) => {
  console.log('The first middleware is called')
  console.log(
    `${req.method.padStart(6, ' ')} on ${
      req.url
    } at ${new Date().toISOString()}`
  )

  // We can inject a variable in the request for further use
  // in subsequent request listener
  req.someContext = 'Hello!'

  // The next method ensures we'll get to the next request listener in line
  next()
})

app.get('/', (req, res) => res.send({ info: req.someContext }))

app.get('/bye', (req, res) => res.send({ info: req.someContext }))

// If the requested url isn't either '/' or '/bye'
// this middleware will be called
app.use((req, res, next) => {
  console.log('No matching route found!')
  next()
})

app.get('*', (req, res) => res.status(404).send({ error: `Not found` }))
```

The schema of a request passing through request listeners/middlewares :

![Middleware schema](./middleware.png)

### Various types of middleware

There is a lot of potential use case for middleware functions, most are already available in express or as npm packages, among others we have:

- Logging middleware (just like the example above)
- [Static file middleware](https://expressjs.com/en/starter/static-files.html), that automatically maps every file in a directory (`public` by default) to a route. For instance, images, html/css files, browser js files, ...
- ["JSON Body parser middleware"](https://expressjs.com/en/api.html#express.json), this middleware will parse (read and interpret) the body of incoming request to use
- Cookies and sessions middleware
- Authorization middleware. Usually this middleware will be written on top of pages that are password protected. It will return a `401 Unauthorized` response if authentication has failed, or the `next()` function otherwise.

### An "almost real-life" middleware example

To illustrate the last point of the previous list, this could be the structure of a real life application. The authentication strategy may vary (session-based, token-based, [SSO](https://en.wikipedia.org/wiki/Single_sign-on), ...), but the core mechanic remains the same: we put a middleware on top of all our "protected" routes (which are only available if the user is logged in).

```js
// Allows us to parse the request body
app.use(express.json())

app.post('/api/signup', (req, res) => {
  /* Registers a user, using req.body */
})

app.post('/api/signin', (req, res) => {
  /* Logs a user in, if credentials are ok creates a session variable */
})

// All the endpoints below this middleware will require to be authenticated
app.use((req, res, next) => {
  if (!your.authentication.strategy.userLogin /* up to you */)
    return res
      .status(401)
      .send({ error: 'You need to log in to access this endpoint' })

  next()
})

app.get('/api/users', (req, res) => {
  /* Displays a list of user */
})

app.get('/api/posts', (req, res) => {
  /* Displays a list of post */
})

// ...
```

## Exercises

- Get back to your previous code and install express
- Create a POST `/user` route, to add a new user to your table
- Create a GET `/users` route, to get the list of all users
- Create a GET `/user/:id` route, to get a single user
- Create a PATCH `/user/:id` route, to edit an user
