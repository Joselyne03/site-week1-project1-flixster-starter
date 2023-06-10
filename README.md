## Week 1 Assignment: Flixster

Submitted by: Joselyne Malan

Estimated time spent: 17 hours spent in total

Deployed Application (optional): [Flixster Deployed Site](ADD_LINK_HERE)

### Application Features

#### Core Features

- [x] User can view a list of current movies from The Movie Database API as a grid view
  - The grid element should have an id of `movies-grid`
  - Each movie wrapper element should have a class of `movie-card`
- [x] For each movie displayed, user can see the following details:
  - Title - the element should have a class of `movie-title`
  - Image - the `img` element should have a class of `movie-poster`
  - Votes - the element should have a class of `movie-votes`
- [x] User can load more current movies by clicking a button at the bottom of the list
  - The button should have an id of `load-more-movies-btn`.
  - When clicked, the page should not refresh.
  - New movies should simply be added to the bottom
- [x] Allow users to search for movies and display them in a grid view
  - There should be a search input element with an id of `search-input`
  - Users should be able to type into the input
  - When a user hits 'Enter', it should send a search request to the movies API
  - The results from the search should be displayed on the page
  - There should be a close icon with an id of `close-search-btn` that exits the search, clears results, and shows the current movies displayed previously
- [X] Website accounts for basic HTML/CSS accessibility features
- [X] Website should be responsive

#### Stretch Features

- [ ] Deploy website using GitHub Pages.
- [ ] Allow user to view more details about a movie within a popup.
- [ ] Improve the user experience through CSS & animation.
- [ ] Allow movie video trailers to be played using [embedded YouTube](https://support.google.com/youtube/answer/171780?hl=en)
- [ ] Implement anything else that you can get done to improve the app functionality!

### Walkthrough Video
-
<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/834964324?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Flixster demo"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

### Reflection

- Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

The topics discussed in lab did prepare me to complete the assignment. The topics such functions,query selectors and DOM connectors between HTML and JavaScript was covered in great depth and made me feel very perpared to implement them into this project. However, the topic on API was difficult to understand especially when it came to building the URL becuase it used a different form API which had distinct documentation for its usage.

- If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time, I definutely would have styled my website in a more attractive way. As of now I have been focusing on implementing the functionality of the website more than the front end apperence. I would have improved my search bar functionality and figure out how its input can read a whole phrase rather than just a phrase. I would have have also implemented a pop up for the movie description

- Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

Building the skeleton of thje website was realtaively simple, however I did run into some issues on planning the layout of the movie content. I was debating on either placing a div inside the HTML or in JavaScript. After consulting with my peers I shifted my focus on implementing the content of the movie inside JavaScript. It also took time to understand how parameters and global variabes are handled especially in event handlers. I am used to defining the type of variables within fucntions and global variables as a point of reference but since JavaScript does not use types it was hard for me to keep track of variable usage. 

### Open-source libraries used

- Add any links to open-source libraries used in your project.
https://www.programiz.com/javascript/online-compiler/
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
https://developer.themoviedb.org/docs
codepen.io/javascript
https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.
Ethan Pineda
Ashaun Thomas
Devarsh Thaker
Luis Bravo
