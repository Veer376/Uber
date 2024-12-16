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

### Example Response for Register a New User

**Response:**

```json
{
    "user": {
        "_id": "uniqueUserId",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com"
    },
    "token": "generatedAuthToken"
}
```

### 2. User Login

**Endpoint:** `POST /users/login`

**Description:** Authenticates a user.

**Request Headers:**

- `Content-Type: application/json`

**Request Body:**

- `email`: String, required. The user's email address.
- `password`: String, required. The user's password.

### Example Response for User Login

**Response:**

```json
{
    "user": {
        "_id": "uniqueUserId",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com"
    },
    "token": "generatedAuthToken"
}
```

### 3. Get User Profile

**Endpoint:** `GET /users/profile`

**Description:** Retrieves the profile of the authenticated user.

**Request Headers:**

- `Authorization`: Bearer token, required. The user's authentication token.

**Response:**

```json
{
    "user": {
        "_id": "uniqueUserId",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com"
    }
}
```

### 4. User Logout

**Endpoint:** `GET /users/logout`

**Description:** Logs out the authenticated user.

**Request Headers:**

- `Authorization`: Bearer token, required. The user's authentication token.

**Response:**

```json
{
    "message": "Logged out successfully"
}
```



