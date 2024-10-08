---
sidebar_position: 2
---

# Database Schema

This section outlines the database schema for the election system. The schema is organized into multiple tables, each serving a specific purpose within the system. Below is the structure of each table, including its fields, primary keys, and foreign keys.

---

### Database Tables

#### `admin`
This table stores the details of system administrators.

| Field     | Type         | Null | Key        | Extra             |
|-----------|--------------|------|------------|-------------------|
| id        | int          | NO   | PRI        | auto_increment    |
| username  | varchar(50)  | NO   |            |                   |
| password  | varchar(255) | NO   |            |                   |
| role_id   | int          | NO   | MUL        |                   |

**Foreign Keys**:
- `role_id` references `admin_roles(id)`

---

#### `admin_roles`
This table defines the roles available for administrators.

| Field       | Type         | Null | Key        | Extra             |
|-------------|--------------|------|------------|-------------------|
| id          | int          | NO   | PRI        | auto_increment    |
| name        | varchar(255) | NO   |            |                   |
| description | text         | YES  |            |                   |

---

#### `candidates`
This table holds the information about candidates running for various positions.

| Field      | Type         | Null | Key        | Extra             |
|------------|--------------|------|------------|-------------------|
| id         | int          | NO   | PRI        | auto_increment    |
| position_id| int          | NO   | MUL        |                   |
| firstname  | varchar(50)  | NO   |            |                   |
| lastname   | varchar(50)  | NO   |            |                   |
| party      | varchar(255) | NO   |            |                   |
| nickname   | varchar(100) | YES  |            |                   |

**Foreign Keys**:
- `position_id` references `positions(id)`

---

#### `positions`
This table lists the positions for which candidates are running.

| Field       | Type         | Null | Key        | Extra             |
|-------------|--------------|------|------------|-------------------|
| id          | int          | NO   | PRI        | auto_increment    |
| title       | varchar(255) | NO   |            |                   |
| department  | varchar(255) | NO   |            |                   |

---

#### `position_year_levels`
This table associates positions with specific year levels.

| Field       | Type         | Null | Key        | Extra             |
|-------------|--------------|------|------------|-------------------|
| position_id | int          | NO   | PRI        |                   |
| year_level  | int          | NO   | PRI        |                   |

**Foreign Keys**:
- `position_id` references `positions(id)`

---

#### `system_status`
This table tracks the current status of the election system.

| Field      | Type         | Null | Key   | Extra          |
|------------|--------------|------|-------|----------------|
| id         | int          | NO   | PRI   | auto_increment |
| status     | varchar(255) | NO   |       |                |
| updated_at | timestamp    | YES  |       | auto-updated   |

---

#### `voters`
This table stores the information about registered voters.

| Field     | Type         | Null | Key   | Extra          |
|-----------|--------------|------|-------|----------------|
| id        | int          | NO   | PRI   | auto_increment |
| idnumber  | int          | NO   | UNI   |                |
| firstname | varchar(50)  | NO   |       |                |
| lastname  | varchar(50)  | NO   |       |                |
| school    | varchar(255) | NO   |       |                |
| year      | int          | NO   |       |                |

---

#### `voter_activity_logs`
This table logs voter activities within the system.

| Field            | Type         | Null | Key        | Extra             |
|------------------|--------------|------|------------|-------------------|
| id               | int          | NO   | PRI        | auto_increment    |
| voter_id         | int          | NO   | MUL        |                   |
| activity_type_id | int          | NO   | MUL        |                   |
| timestamp        | timestamp    | NO   |            | auto-updated      |

**Foreign Keys**:
- `voter_id` references `voters(id)`
- `activity_type_id` references `voter_activity_types(id)`

---

#### `voter_activity_types`
This table defines the different types of voter activities.

| Field       | Type  | Null | Key   | Extra          |
|-------------|-------|------|-------|----------------|
| id          | int   | NO   | PRI   | auto_increment |
| description | text  | NO   |       |                |

---

#### `voter_metadata`
This table stores additional metadata associated with voters.

| Field      | Type         | Null | Key   | Extra          |
|------------|--------------|------|-------|----------------|
| id         | int          | NO   | PRI   | auto_increment |
| voter_id   | int          | YES  | MUL   |                |
| key_name   | varchar(50)  | YES  |       |                |
| key_value  | varchar(255) | YES  |       |                |
| timestamp  | datetime     | YES  |       | auto-updated   |

---

#### `voter_passwords`
This table contains hashed passwords for voters.

| Field     | Type         | Null | Key   | Extra          |
|-----------|--------------|------|-------|----------------|
| voter_id  | int          | NO   | PRI   |                |
| password  | varchar(255) | NO   |       |                |

**Foreign Keys**:
- `voter_id` references `voters(id)`

---

#### `voter_turnout_history`
This table logs the voter turnout for different schools and years.

| Field          | Type         | Null | Key   | Extra          |
|----------------|--------------|------|-------|----------------|
| id             | int          | NO   | PRI   | auto_increment |
| school         | varchar(255) | YES  |       |                |
| school_turnout | decimal(5,2) | YES  |       |                |
| overall_turnout| decimal(5,2) | YES  |       |                |
| year           | year         | NO   |       | Default: 2023  |

---

#### `votes`
This table stores the votes cast by voters for specific candidates.

| Field       | Type  | Null | Key   | Extra          |
|-------------|-------|------|-------|----------------|
| id          | int   | NO   | PRI   | auto_increment |
| voters_id   | int   | NO   | MUL   |                |
| candidate_id| int   | NO   | MUL   |                |

**Foreign Keys**:
- `voters_id` references `voters(id)`
- `candidate_id` references `candidates(id)`

---

### Constraints
- Each table has well-defined primary keys.
- Foreign keys are established to maintain referential integrity between related tables.

---

### Entity-Relationship Diagram (ERD)

To provide more clarity on the structure of the database, the following Entity-Relationship Diagram (ERD) visually represents the key entities and relationships within the system.

![ER Diagram](/img/er-diagram.svg)