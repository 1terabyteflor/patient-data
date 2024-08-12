# Patient Data Management 
This web application built in React serves as a patient management system where users can view, edit, and add patient information from [this API](https://63bedcf7f5cfc0949b634fc8.mockapi.io/users).

### Setup 

- Clone this repository
- Install dependencies with `npm install`
- Run the application locally with `npm run start` 

The application should now be running at http://localhost:3000

### Technologies

- React: Core framework.
- Tailwind CSS: The UI is styled entirely with Tailwind CSS to create a responsive design with a mobile first approach and some smooth transitions. 
- Axios: HTTP client for making API requests.
- Framer Motion: Smooth animations to optimize the user experience, particularly in the patient list and form components.
- ESLint/Prettier: Code linting and formatting to ensure code quality.
- Vercel: Platform to deploy the repository in Github.

### Features 
- Get a list of patient records from an API.
- Patient records are displayed individually in a list.
- Each patient card includes an option to expand or collapse additional details.
- Edit/add patients: Users can edit existing patient information or add a new one through a form component.
- The UI is fully responsive, adapting seamlessly to mobile, tablet, and desktop screens.

### Design patterns and architecture
The application follows a Component-Based Architecture with principles inspired by Atomic Design too. This means that components are self-contained, reusable, and maintainable. Each component and custom hook is designed to handle its own state and logic to use modularity.

Tailwind was chosen for its ease in implementing a responsive, mobile-first design without the need for extensive custom styles.
Framer Motion integrates animations into the user interface, providing a smooth and engaging experience.
The project is organized into API, components, hooks, models, styles, and utils directories to keep the codebase clean to navigate and mantain.
