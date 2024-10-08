---
sidebar_position: 3
---

# System Architecture

This section provides an overview of the election system's architecture, detailing its core components and their roles within the MVCS (Model-View-Controller-Service) structure.

## 1. Architectural Overview

The election system follows the **MVCS (Model-View-Controller-Service)** pattern, which ensures modularity, scalability, and maintainability.

---

## 2. Core Components

#### **1. Model**
The **Model** handles the database and data logic of the system. It is responsible for defining the data structures, relationships, and handling database interactions.

- **Key Responsibilities**:
  - Define database schema and relationships.
  - Handle CRUD (Create, Read, Update, Delete) operations.
  - Manage database interactions like vote submissions and retrieval of results.

---

#### **2. View**
The **View** is responsible for the front-end of the application, providing the user interface (UI) that interacts with the system.

- **Key Responsibilities**:
  - Display voter login, voting options, and results to users.
  - Handle the user experience through intuitive UI design.
  - Interact with the Controller by sending and receiving data.

---

#### **3. Controller**
The **Controller** acts as a middle layer between the Model and the View. It processes incoming HTTP requests, calls the necessary models for data, and sends responses back to the view.

- **Key Responsibilities**:
  - Receive user requests (e.g., vote submission, login).
  - Validate data and business logic.
  - Call the appropriate Model to fetch or store data.
  - Return processed data to the View for display.

---

#### **4. Service**
The **Service** layer provides reusable business logic that the Controller utilizes. Services may handle tasks like vote counting, user validation, or generating election reports.

- **Key Responsibilities**:
  - Centralize and abstract business logic.
  - Provide reusable methods for Controllers to call.
  - Improve testability and separation of concerns.

---

## 3. Modular MVCS Components for Each Feature

The system is designed with separate **MVCS** components for each key feature, ensuring modularity and clear separation of responsibilities. This approach allows each feature to be maintained and extended independently.

### Example: Login Feature

- **LoginController**: Handles login-related requests and interacts with the service layer.
- **LoginService**: Contains the business logic for authentication and session management.
- **LoginModel**: Manages the database queries related to user credentials.
- **login.php (View)**: Displays the login form and manages the front-end interaction.
- **logout.php (View)**: Handles user logout actions.

### Example: Voting Feature

- **VotingController**: Manages vote submission requests.
- **VotingService**: Handles the logic for validating and processing votes.
- **VotingModel**: Interacts with the database for vote storage and retrieval.
- **voting.php (View)**: Displays the voting interface for users.
  
By organizing the system in this way, each feature has its own set of MVC and service components. This structure keeps the codebase manageable and reduces dependencies between different parts of the system.

---

## 4. Database Layer

The database is central to the election system, storing critical information like user credentials, votes, and election metadata.

- **Entities**:
  - **Users**: Stores voter and admin credentials.
  - **Votes**: Records of all submitted votes.
  - **Positions and Candidates**: Data about election positions and the candidates running for each.
  - **Metadata**: Stores information related to the election's technical status (e.g., system logs, timestamps).

- **Relationships**:
  - Each voter is associated with a set of votes.
  - Each vote references a position and a candidate.

## 5. Use of Action Inputs and Index.php Entry Point

The system uses **forms** extensively throughout the election process, allowing different functionalities like vote submissions, admin actions, and status changes. Each form has a hidden input for the **"action"** value, which determines the specific action the system should take when the form is submitted.

### Hidden Action Inputs

- **Purpose**: The hidden input allows the system to differentiate between different form submissions and trigger the appropriate logic.
- **Example**:
    ```html
    <form method="POST" action="index.php">
        <input type="hidden" name="action" value="submit-ballot">
        <!-- Additional form fields -->
        <button type="submit">Submit</button>
    </form>
    ```
    In this case, when the form is submitted, the system will process the `"submit-ballot"` action in the backend.

- **Handling in the Controller**:
    - When a form is submitted, the system checks the `"action"` value and determines the logic to execute.

### Entry Point: index.php

The **`index.php`** file serves as the central entry point for the system. It initializes the application and routes all incoming requests to the correct controller based on the form's hidden `action` input.

- **Routing**:
    - The system inspects the `action` value from the incoming POST requests.
    - Depending on the value, the request is dispatched to the corresponding controller method.
    - Also, by using POST methods, no sensitive information is exposed through the URL, reducing the risk of manipulation and unauthorized access.

- **Example**:
    ```php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $action = $_POST['action'] ?? '';
        switch ($action) {
            case 'submit-ballot':
                // Call the vote controller
                break;
            case 'preview-ballot':
                // Call the corresponding controller
                break;
            // Other cases
        }
    }
    ```

### Exposed Folders

Only the **public** folder is exposed to users. This ensures a secure structure where other parts of the application, such as configuration files, business logic, and private assets, are not directly accessible.

- **Public Folder**:
    - Contains publicly accessible resources like CSS, JavaScript, and image assets.
    - `index.php` resides in the public folder and handles all incoming requests.
    - Helps ensure that sensitive information and server-side logic are kept private.

This setup enhances security and simplifies request handling by centralizing control logic in `index.php`.

---

## 6. Election Flow

The general flow of the election process is as follows:

1. **Voter Login**: Voters log in using Google or their credentials.
2. **Voting**: Voters submit their votes, which are validated and stored in the database.
3. **Vote Counting**: Votes are counted in real-time, with results displayed to authorized admins.
4. **Result Reporting**: After the election ends, results are published and visualized using charts and graphs.

---

## 7. System Status and Logging

The system features a **System Status** component that helps administrators monitor the current state of the election (open, closed, or offline). Comprehensive logging is also implemented to track user activities, errors, and system performance.

- **Status Types**:
  - **Online**: Election is active, and users can cast votes.
  - **Closed**: Election has ended, and no further votes can be cast.
  - **Offline**: Election is temporarily halted.

Logs are used to audit activity and troubleshoot issues during the election process.

---

This architecture allows for scalability, security, and maintainability, making the election system reliable and easy to extend as needed.

