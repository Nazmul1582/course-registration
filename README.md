## React Course Registration


### Features

1. Show fake data in react project from another path or location
2. Add selected course and show course's name in the cart.
3. Show alert if course remains already in the cart.
4. Calculate selected course's total credit and show in the cart.
5. Conditionally maintains credit hour remaining and total credit.
6. Calculate selected course's total price and show in the cart.


### State Management of this project

In this project I have managed total 5 state. Fristly in Courses component, when I've got all courses data using fetch api, I've stored the api response in courses state. Then i applied map method to the courses state and displayed all courses. I've created courses state and have used it in the same component.

In App component, I've managed 4 state for selected course, credit hour remaining, total credit and total price. I've created these states in App component and passed as props in Cart component and used these in Cart component. To update these 4 states, I've created a handler and passed it as props in Courses component. Then passed Courses component to Course component. Then used this handler from Course component. The handler tiggered from Course component (every single course) by clicking select button and updated state in the App component and displayed updated data in Cart component.