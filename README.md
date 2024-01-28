
# Food Delivery App 🍔🚚

Welcome to the Food Delivery App! This application provides a fast and responsive user interface for food delivery, featuring Login and Home pages with a sleek design inspired by the provided [Figma template.](https://www.figma.com/file/YlRx16dbTcyLjMWAZLb5GU/Food-Delivery-UI---Free-(Copy)?type=design&node-id=1-849&mode=design&t=mlFdmmt7gZovH9BW-0) Below, you'll find everything you need to get started, contribute, and enjoy the delicious journey.

## Features

-   **User Authentication:** Secure login system for a personalized experience.
-   **Interactive UI:** Sleek and responsive design for seamless navigation.

## Tech Stack

-   **Frontend:**
    -   ReactJS
    -   Ant Design
    - Tailwind CSS
    -   HTML5
    -   CSS3
    -   JavaScript (ES6+)

## Getting Started

### Installation

1.  **Clone the repository:**
```bash
git clone https://github.com/your-username/food-delivery-react-app.git
cd food-delivery
```
2. **Install dependencies:**
```bash
npm install
```

### Configuration
 **Frontend Configuration:**

-   Open `/src/api.js` and set the API endpoint:
```javascript
baseURL = 'http://localhost:4000/'; // Replace with your backend API endpoint
```

## Running the Application

1. **Start the frontend development server:**
```bash
cd food-delivery
npm start
```

## Running Tests

1.  **Run tests:**
```bash
npm test
```

## Project Structure

```bash
food-delivery/
|-- src/
|   |-- components/
|		|-- auth/ 
|			|-- Login.jsx
|			|-- Signup.jsx
|			|-- PrivateRoute.js
|			|-- LandingPageCarousel.jsx
|			|-- AuthForm.jsx
|			|-- api.js
|       |-- common/
|			|-- Alert.jsx
|			|-- Loader.js
|			|-- Navbar.jsx
|			|-- Page404.js
|			|-- PageNotFound.js
|       |-- home/
|			|-- Home.jsx
|			|-- DiscountSection.jsx
|			|-- CategorySection.jsx
|			|-- RestaurantSection.jsx
|			|-- api.js
|	|-- contexts/
|		|-- LoginContext.js
|	|-- tests/
|		|-- AuthForm.test.js
|   |-- App.js
|   |-- index.js
|	|-- api.js
|-- public/
|	|-- assets/
|-- package.json
|-- .gitignore
|-- package.json
|-- README.md
|-- tailwind.config.js
```
Each React component is designed with a clear and self-explanatory name. This intentional design aims to uphold the principles of Single Responsibility, promoting code reuse, maintaining code quality, and ensuring testability.


## Deployed App

Check out the deployed app at [food-delivery-sayuj.vercel.app](https://food-delivery-sayuj.vercel.app/).
