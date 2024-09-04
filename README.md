# Challenge Management System

## Overview

This project is a Challenge Management System built with React and Material-UI. It includes functionalities to manage challenges, view challenge details, create new challenges, and edit existing ones. The application features a responsive design and leverages React Router for navigation.

## Features

- **Dashboard**: View a list of challenges and hackathons.
- **Challenge Detail**: View detailed information about a specific challenge.
- **Create Challenge**: Create a new challenge with various details.
- **Edit Challenge**: Edit details of an existing challenge.

## Technologies

- **React**: A JavaScript library for building user interfaces.
- **Material-UI**: A popular React UI framework for implementing Material Design.
- **React Router**: For handling routing and navigation within the application.

## Setup Instructions

### Prerequisites

Ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd <project-directory>
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

### Running the Application

1. Start the development server:

    ```bash
    npm start
    ```

   This will open the application in your default web browser at `http://localhost:3000`.

### Project Structure

- `src/`
  - `Components/`
    - `Challenges/` - Contains components related to challenges (e.g., `Challenge`, `CreateChallenge`)
    - `Hackathon/` - Contains components related to hackathons (e.g., `ChallengeDetail`, `EditChallenge`)
    - `Header/` - Header component
    - `Navbar/` - Navbar component
  - `App.js` - Main application component and routing setup
  - `index.js` - Entry point for the React application

### Routes

- **`/challenge/:id`**: View the details of a specific challenge.
- **`/admin`**: Create a new challenge.
- **`/edit-challenge/:id`**: Edit an existing challenge.

### Styling

The application uses Material-UI for styling. Custom styles are applied using the `styled` function from Material-UI.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please reach out to [dev.nitin63@gmail.com](mailto:dev.nitin63@gmail.com).

