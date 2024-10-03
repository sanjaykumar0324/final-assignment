# Final Assignment 

## Description
This application provides a help center and blog platform. It fetches FAQ data from a local JSON file and renders it on the screen. The application features blog categories and allows users to explore various blog posts. State management for blogs is handled using Redux slices to maintain state across different pages.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Local Data Fetching](#local-data-fetching)
- [Using Mock API](#using-mock-api)


## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/sanjaykumar0324/final-assignment.git

2. Navigate to the project directory
3. Install dependencies using "npm install"

## Usage
 To start the application, run: npm run dev
 Then navigate to http://localhost:5173 in your browser to view the help center and blogs.

## Features
1. FAQ section rendered from local JSON data.
2. Blog categories and posts available for browsing.
3. State management for blogs using Redux slices.
4. Responsive design for optimal viewing across devices.

## Local Data Fetching
The application fetches data from local JSON files located in the public/data folder. This approach is used to avoid issues with expiring mock API links.

## Using Mock API
If you want to test with a mock API:

1. Go to Mocki.io.
2. Paste your JSON data into the provided field and generate a link.
3. Replace the existing links in src/redux/slices/categorySlice.js and src/redux/slices/blogSlice.js with your new Mock API URL.

## Contact
For inquiries, please email me at [sanju4232908@gmail.com](mailto:sanju4232908@gmail.com).



## Screenshots

Here are some screenshots of the application:

![BlogListing_hero_section ](public/screenshots/bloglist_hero.png)
![BlogListing_blogs ](public/screenshots/bloglist_blog.png)
![BlogListing_blogs1 ](public/screenshots/bloglist_blog1.png)
![contactUs ](public/screenshots/contact_us.png)
![contactUs_helpdesk ](public/screenshots/contact_us_helpdesk.png)
![contactUs_faq ](public/screenshots/faq.png)
![footer ](public/screenshots/footer.png)

