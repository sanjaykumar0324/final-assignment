# Final Assignment

## Description

This application provides a help center and blog page. It fetches FAQ data from a local JSON file and renders it on the screen. The application features blog categories and allows users to explore various blog posts. State management for blogs is handled using Redux slices to maintain state across different pages.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Why This Approach](#why-this-approach)
- [Local Data Fetching](#local-data-fetching)
- [Using Mock API](#using-mock-api)
- [Contact](#contact)

## Installation

1. Clone the repository:

   git clone https://github.com/sanjaykumar0324/final-assignment.git

2. Navigate to the project directory
3. Install dependencies using "npm install"

## Usage

To start the application, run: npm run dev
Then navigate to http://localhost:5173 in browser to view the help center and blogs.

## Features

1. FAQ section rendered from local JSON data.
2. Blog categories and posts available for browsing.
3. State management for blogs using Redux slices.
4. Responsive design for optimal viewing across devices.
5. Engaging animations for improved user experience.
6. Progressive Web App (PWA) capabilities for offline access and a native app-like experience.
7. Redirects to a "Not Found" page for any invalid navigation attempts.

## Approach for data handling


## Why I Chose Redux In Blog Section State Management

I selected **Redux** for managing the state of the blog section for several key reasons:

### 1. Centralized Management
Redux maintains a single store for the application state, which simplifies access and avoids the complications of prop drilling.

### 2. Scalability
As the application grows, Redux makes it easy to add new features and components that require access to blog data.

### 3. Predictability
With its strict unidirectional data flow, Redux ensures that state changes are easier to track and debug, enhancing overall reliability.

### 4. Middleware Support
Integration with middleware such as **Redux Thunk** allows for efficient handling of asynchronous actions, streamlining operations.

### 5. Separation of Concerns
Redux promotes a clear structure for actions, reducers, and the store, which leads to better code organization and maintainability.

## Why Redux Over Context API

While both Redux and Context API can manage state, I prefer Redux for the following reasons:

- **Complex State Handling**: Redux is more suited for applications with interconnected state.
- **Performance**: It minimizes unnecessary re-renders by allowing components to subscribe to specific state slices.
- **Developer Tools**: Redux offers advanced debugging tools that significantly enhance the development experience.

By using Redux, I can ensure that the blog section remains maintainable, scalable, and efficient as it evolves.


**Rendering Additional Data**: Other components, such as the footer, help desk cards, and service cards, are rendered using arrays from local data files. This approach allows for easy updates and management of these elements, enhancing modularity and maintainability.

## Local Data Fetching

The application fetches data from local JSON files located in the public/data folder. This approach is used to avoid issues with expiring mock API links.

## Using Mock API

If you want to test with a mock API:

1. Go to [MockAPI](https://designer.mocky.io/design)
2. Paste the JSON data into the provided field and generate a link.
3. Replace the existing links in src/redux/slices/categorySlice.js and src/redux/slices/blogSlice.js with new Mock API URL.

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
