# MY MERN WEEK 1 ASSIGNMENT WALKTHROUGH.
My assignment has the following flow to meet the instructors demand.

## Student
### Machio Promise Arauna.

## File structure
________________________________________
week1_assignment/
│____________________________________________________________
├── Models/
│   └── books.js
│____________________________________________________________
├── node_modules/
├── Screenshot/
│____________________________________________________________
├── connect.js
├── execute.js
├── indexing.js
├── pipelines.js
├── query.js
├── README.md
└── .env


## Meeting objectives.
I went deep in every file making sure all the instructors instructions were met. 

### connect.js
- Handles MongoDB connection with `mongoose.connect()`.  
- Uses **dotenv** for environment variables (`.env`).  

### execute.js
- Seeds the database with **sample book records**.  
- Clears existing data with `deleteMany()` before insertion. 


### indexing.js
Implements **Task 5: Indexing**:  
- Create index on `title`.  
- Create compound index on `author + published_year`.  
- Use `.explain("executionStats")` to show query performance. 

### pipelines.js
Implements **Task 4: Aggregation Pipelines**:  
- Calculate average book price by genre.  
- Find author with the most books.  
- Group books by publication decade and count them.

### query.js
Implements **Task 3: Advanced Queries**:  
- Find books in stock and published after 2010.  
- Use **projection** to return only title, author, price.  
- Sort by price (ascending & descending).  
- Pagination using `.skip()` and `.limit()` (5 books per page).
## Code About
The code has simply checked on the overall connection of the MongoDB database through VS code with terminal as the base connector.

## Submission details.
### Github 
https://github.com/PromiseMachio/week1_mern.git

## How to run the code,
In your terminal run

-node excecute.js

-node indexing.js

-node pipelines.js
