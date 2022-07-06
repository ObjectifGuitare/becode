# Anatomy of a Modern JavaScript Application

## Learning Objectives

You now know JavaScript well enough to write simple and complex frontend applications. You know the language, and you know its power, but something is still missing. The code seems convoluted and all over the place. Is this really how established developers work, you may wonder?  
At the end of this challenge you will:

- be able to organize your code with multiple functions
- be able to organize your code in multiple files
- be able to use a package manager to import third-party libraries in your code
- be able to use linters and formatters to make your code cleaner and more bug-free
- be able to optimize your code to be shipped to a browser faster

## Your mission

> It's Monday morning. I sit at my desk, start the computer, and my two screens light up.
>
> I open up my text editor and the terminal in the first screen. I type two simple words in the terminal: `npm start` and press <kbd>ENTER</kbd>. A few seconds later a browser tab launches in the second screen with a local server where I can see the application as I develop it.
>
> I need to add a small new feature. I already have the code in my head, and start typing it out. Before I even save, a red squiggly line under a piece of recent code alerts me that there is a problem, and suggests a fix. I accept the fix, which is automatically applied to my code. Phew, that would have taken 30 minutes of my time to find and fix manually.
>
> I realize that I need to work with dates in this new feature, and dates are tricky. Fortunately, there is a library that makes it easier. I type `npm install --save date-fns`, add a line to the top of my file to import such library, and voilà, I'm good to go!
>
> I keep typing, instantly solve two more problems, and hit Save. I'm not the best at keeping my code tidy and well indented, but my text editor is set to auto-format the code on save. Awesome, I don't even have to think about it and there I have my variables well aligned, my functions well indented, my nested conditionals well laid out. It's so much easier to read now.
>
> I now see that I could organize my code a little better, and that I could add an additional explanation for future me in a comment. I save again.
>
> I glance at my second screen. I haven't touched a thing since hitting Save, but the tab is automatically reloading with the new code applied. I watch the app load under my eyes, and I can immediately test it. Wow. That was a breeze, the new feature works!
>
> I type `npm build` in the terminal and all my SASS and JS is bundled, optimized and minified, ready to ship to the browser with optimal performance. Development never felt better.

If you also find this vision of a happy future enticing read on, and reach coding Nirvana in 5 days 😎

## Instructions

There will be a lot to take here. It's a lot of so-called _tooling_ that doesn't impact functionality directly, but it can improve several areas of development immensely.  
Let's take this short journey step by step, day by day.

### Day 1 - Refactor

1. Copy all your files over from one of your bigger projects (ex: the `Weather App`)
2. Take your existing `script.js`, and reorganize (_refactor_) the code in as many functions as you can (try to have at least 2-3 functions). Do it one step at a time: you can start from the outside and go in, or from the inside out. A few principles to keep in mind:
   - Functions should do one thing
   - Function names should say what they do
   - Avoid side effects (keep as many functions as possible [_pure_](https://www.notion.so/mjsarfatti/Enough-JS-to-Be-Dangerous-d3be5beb31ad4778ada7161fb2cc1a7b#5bada0ad2ac84f56a84871dbfa28f714))
   - Functions can often be just a few lines long
3. There is no 3! That's all for day 1 :) If you want to know more about good practices, take a peek here (but don't stress too much, some of that stuff is quite advanced): https://github.com/ryanmcdermott/clean-code-javascript#functions

💡 Refactoring can break _a lot_ of your code, if you're trying to modify big chunks. The secret is to work with small changes, and commit every step. That will help you to focus on one change, and got back to your last commit if something goes wrong. Made a real mess? Ask your coach in time, so (s)he can help you out. Refactoring is also never really finished, it's okay to call it a day after some intense changes instead of dedicating the full week to getting it perfect.

_Do you have time to spare? See if you can help someone, add "nice-to-have" features to your app, or refactor another app of yours!_

### Day 2 - JavaScript Modules

It's a lot of functions, in a long file. Guess what? In modern JavaScript, you can divide your code into multiple files for better organization, and import/export things (functions and variables) from one file to another.

1. Divide your code into multiple files. If you don't know how, start with one function per file and name the file after the function. Don't worry about exporting/importing, for now just make a file structure that kind of makes sense and reflects your code.  
   _Just remember: keep `script.js` around, it will still be the origin file for everything_
2. Done? Now rename `script.js` to `index.js` - this is an industry convention and it ensures better compatibility with several tools (you'll see 😉)
3. Read up about "ES6 Modules" and the "ES6 import/export syntax". You'll see that although very useful this syntax is not yet well supported in browsers, hence the need of a new tool.

You'll need to have `NPM` and `Node.js` installed to continue.

#### Javascript bundlers

There are a bunch of tools available to bundle our code (use modules, and many more tools). The most well known and widely used is called [Webpack](https://webpack.js.org/), some others honorable mentions are **Rollup**, **EsBuild**, **Vite** and **Parcel**. The bundler will run through all our imports/Exports and create a single javascript output file. This output file, called `bundle`, will be shrinked and optimized to run on many browsers as possible.

For simplicity we're going to use [Parcel](https://v2.parceljs.org/getting-started/webapp/) for now. Parcel is a no-config bundler, which means everything will work without the need of a complex configuration. Follow up the setup instructions and, voilà, you should now be able to use modules in your project!

:warning: Make sure to [.gitignore](https://www.pluralsight.com/guides/how-to-use-gitignore-file) your `node_modules` folder so it does not get commited on your repoository.

We've done a lot of things today, let's take some time to debrief and understand what we have done:

- We used **NPM (Node Package Manager)** to install a new dependency
  - This created a **package.json** file (and maybe a **package-lock.json** file)
  - This created a **node_modules** folder (which is pretty heavy)
- We installed a javascript bundler to import/export things
- With this bundler we can manage all of our **frontend dependencies**
