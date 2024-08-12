# Patient Data Management 
This web application built in React enables users to manage patient data from [this API](https://63bedcf7f5cfc0949b634fc8.mockapi.io/users).

### Setup 

- Clone this repository
- Install dependencies with `npm install`
- Run the application locally with `npm run start` 
The application should now be running at http://localhost:3000

### Technologies

- React: Core framework.
- Tailwind CSS: The UI is styled entirely with Tailwind CSS to create a responsive design with a mobile first approach and some smooth transitions. 
- Axios: HTTP client for making API requests.
- The application is divided into reusable and self-contained components and hooks. Each component handles its own state and logic, making the code modular and easy to maintain.
- Framer Motion: Animation library applied to form and patient list. 
- ESLint/Prettier: Code linting and formatting to ensure code quality.


### Features 
- Get patient records: Fetches a list of patient records from an API.
- Display patients: Patient records are displayed individually in a list.
- Each patient card includes an option to expand or collapse additional details.
- Edit/add patients: Users can edit existing patient information or add a new one through a form component.
- Responsive for mobile/tablet/desktop.