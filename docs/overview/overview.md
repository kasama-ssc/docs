---
sidebar_position: 1
slug: /
---

# System Overview

The voting system is a web-based platform designed to facilitate secure and user-friendly elections for Saint Louis University. It supports multiple roles such as voters, election administrators, and technical staff, each with different access levels and functionalities.

## Key Features

- **Secure Voting**: Ensures each voter can only vote once with their unique credentials.
- **Real-Time Results**: Provides election results as soon as voting ends.
- **Admin Dashboard**: Allows election administrators to monitor voter turnout, system status, and manage roles.
- **Multiple Roles**: Different roles (IT Committee, Central COMELEC, COMELEC Members) with appropriate access levels.
- **Customizable**: Front-end (UI) and back-end features are designed to be easily customizable for different election needs.

## System Architecture

The system follows an **MVCS (Model-View-Controller-Service)** architecture, which enhances the standard MVC pattern by introducing Services to handle business logic separately from the Controllers. This ensures clean separation of concerns and improves code reusability:

- **Model**: Handles the data logic and communication with the database (e.g., user accounts, voter logs, election results).
- **View**: Manages the user interface (e.g., ballot form, admin dashboard).
- **Controller**: Processes user input, interacts with the Model, and updates the View accordingly.
- **Service**: Contains reusable business logic, including validation, calculations, and workflows, making the Controllers leaner and focused on handling requests.

### Database
The database stores key information such as:
- **Voters and Accounts**: User data for authentication and authorization.
- **Election Information**: Details about candidates, positions, and election settings.
- **Vote Records**: Logs of votes cast, ensuring transparency and accountability.

### Roles and Permissions
The system provides role-based access control to ensure different user types have the necessary permissions:
- **IT Committee**: Responsible for system setup and monitoring.
- **Central COMELEC**: Oversees the entire election process.
- **COMELEC Members**: Assist with voter management and precinct operations.

## Voting Process Flow

1. **Login**: Voters authenticate using their credentials (Google or Username and Password).
2. **Vote**: Voters are presented with a ballot for the active election.
3. **Submission**: Once votes are submitted, the system records the ballot and logs metadata (e.g., time, device).
4. **Results**: After the election closes, results are displayed to administrators.

## Technologies Used

- **Front-end**: HTML, CSS, JavaScript, jQuery
- **Back-end**: PHP, MySQL
- **Framework**: Built on the MVCS architecture to ensure separation of concerns and business logic reuse.
- **Deployment**: Typically hosted locally on WAMP or XAMPP, and on LAMP for the actual elections.