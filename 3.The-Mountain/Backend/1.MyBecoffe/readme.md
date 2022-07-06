# my.BeCoffe

![MyBeCoffe](mybecoffe.png)

You have been selected to make a working prototype for the new cooking bootcamp of the Jean-Pierre Coffe Academy ("In Coffe we trust"), a 7-months intensive cooking training with some of the best chefs around the world.

One part of the training consists of a daily activity called "The Recette", each day at 1:30PM a learner choses one of his favorite recipe and shares it with the rest of the class.

- Type of challenge: **consolidation**
- Duration: **3 weeks**
- Team challenge: **solo**
- Deadline: **10/12/2021 19:00**
- [Submission form](https://forms.gle/eZRL1bVAbU4X4iFv5)

## Learning objectives

- Create a fullstack application
- Learn a new backend language
- Learn an MVC framework

## The Mission

Your job is to design their platform, "MyBecoffe" so that :

- People related to the BeCoffe Academy are listed in a database. Relevant informations to save are: `first name`, `last name`, `email` (for logging in), `password`, `account_type` (chef or learner). You can add more fields if you want (twitter account, profile picture, ... it's up to you!)
- Learners can pick a daily slot for "The Recette", you must ensure that for any given date there is one (no less, no more) talk by a learner. For each of them you must at least store the topic of the recipe, the date it will be (or was) presented, and the learner who presented it.
- Learners must be present every week day. To verify that this was indeed the case you should design a mechanism so that when a learner presses a button it stores the arrival & when they press the button back at the end of the day it store the departure time. Make a table to store all learners arrival and departure time. Chefs do not need to check in/out of class, they are Chefs after all...
- People that are not logged in cannot see any information
- Learners can see all previous and future "The recette" listed on a page, and their own attendance informations.
- Chefs can see past and future "The Recette" and everyones attendances information.
- **BONUS:** Learners can edit their own profile and delete their own Recette
- **BONUS:** Chefs can edit everyone's profile (including their own), and everyone's Recette.
- **BONUS:** Create a promo system so that learners and chef can be splitted into different subgroups.

## Important notice

- Make sure to plan what you are going to do, do not directly jump right into the coding part!
- You should host the website (ex: Heroku) so that there is an online example available for your coach to validate your work.
- You should also upload your source on Github.
- DO NOT INCLUDE YOUR DATABASE CREDENTIALS ON GITHUB, NEVER (use a separate file and .gitignore it!)
- Several people can have the same first name or last name (it happens), however email addresses should always be unique.
- The checkin/out feature is not the easiest, keep it for the end. Focus on the essentials first!
