# General Assembly WDI Project 2: My Hand-Making Diary

[Heroku Pages](https://my-hand-making-diary.herokuapp.com/)

[GitHub Repo](https://github.com/huangfuin1101/wdi-project-two-My-hand-making-Diary)

My Hand-Making Diary is my second individual project from General Assembly's Web Development Immersive. This project was built in week and was my first dive into backend technologies.
My Hand-Making Diary is a hand-made brand I've been managed for years. This app is a blog with Pinterest style that user can sign up to edit or add more hand-made product and also can give the review for each item. The aim for this app is for hand-made lovers to share, to learn and to communicate.

## Home Page
![Home Page](screenshots/home.png)

## Login Mode
![Login Mode](screenshots/log-in-mode.png)

## Index Page
![Index Page](screenshots/index.png)

## Show Page
![Show Page](screenshots/show-page.png)

## Sign Up Page
![Sign Up Page](screenshots/signup.png)

## Create Page
![Create Page](screenshots/add.png)

## Edit and delete
![Edit and delete](screenshots/edit-delete.png)

## Review Page
![](screenshots/reviews.png)


## Profile page
![Profile page](screenshots/profile.png)


## Technologies Used

* Git
* GitHub
* Heroku
* Node.js
* MongoDB
* express: v4.16.4
* express-ejs-layout: v2.5.0
* ejs: v2.6.1
* express-session: v1.15.6
* body-parser: v1.18.3
* mongoose: v5.3.7
* method-override: v3.5.0
* JavaScript (ECMAScript 6)
* CSS3 with animation
* Bulma
* Google Fonts
* Fontawesome
* Adobe Illustrator

### Brief
To build a RESTful personal blog with Pinterest style, the app had meet some criteria as below:

* Has models for handmade product and user reviews.
* A user model and user authentication.
* Allows user to create, edit, delete product and give/delete reviews only when user has logged in.
Has a User model and user authentication


### Featured Piece of Code
This function lets user can view that what items been added and reviewed by the user and the it would appear on the Profile page once the user log in. From [.controllers/userController.js](https://github.com/huangfuin1101/wdi-project-two-My-hand-making-Diary/blob/master/controllers/userController.js)
```
function userShow(req, res, next) {
  User
    .findById(req.params.id)
    .populate('comments addedHandmades')
    .then(user => {
      res.render('profile', user);
    })
    .catch(err => {
      console.log('There was an error', err);
      next();
    });
}
```

### Styling
This app follows black and white style of the brand image with a clean looking that matches minimalism. I used Bulma, google font and Font Awesome plus CSS as styling tools for this app.

### Wins and Blockers
The biggest win I would say was the inspiration and images of the App. I took the pictures of the handmade products which I made it by my own and used to sell it in the market.

Another big win also a challenge was that the user created/deleted a review. At the beginning, I couldn't get the reviews and the username been populated even though the reviews were actually been created.

### Future Features
There are some features I would like to add in the future:
* Describing more details for content of handmadeModel.
* Adding a search bar in Index page to look for particular item.
* Creating another two models for Tools and Materials page that link to the Show page once each individual items been clicked will get future details about it.
* Adding more features user profile, for example user can upload own profile image.
* Adding another authentication check for user password.
* Adding admin route to access all the path without sign up as a user first.
