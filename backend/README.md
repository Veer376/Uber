# API Documentation

## User Endpoints

### 1. Register a New User

**Endpoint:** `POST /users/register`

**Description:** Registers a new user.

**Request Headers:**

- `Content-Type: application/json`

**Request Body:**

- `fullname`
    - `firstname`: String, required. The user's first name.
    - `lastname`: String, required. The user's last name.
- `email`: String, required. The user's email address.
- `password`: String, required. The user's password.

### 2. User Login

**Endpoint:** `POST /users/login`

**Description:** Authenticates a user.

**Request Headers:**

- `Content-Type: application/json`

**Request Body:**

- `email`: String, required. The user's email address.
- `password`: String, required. The user's password.
