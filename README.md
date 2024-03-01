# Node Express REST API with Mock Data

This is a simple RESTful API built with Node.js and Express.js. The purpose of this API is to demonstrate how to create endpoints and handle HTTP requests and responses without a database, using mock data instead. The project was created as a tool for my private purposes of learning about REST API testing.

## Prerequisites

- Node.js installed on your local machine.

## Getting Started

1. **Clone this repository to your local machine:**

    ```
    git clone https://github.com/lukasveselovsky/Node_Express_API.git
    ```

2. **Navigate to the project directory:**

    ```
    cd your-repository
    ```

3. **Install dependencies:**

    ```
    npm install
    ```

4. **Run the server:**

    ```
    npm start
    ```

   The server will start running on `http://localhost:5000`.

## API Endpoints

- **GET /api/users**

  finds all users

- **GET /api/users/:id**

  Retrieves details of a specific user by ID.

- **POST /api/users**

  Creates a new user. Requires a JSON object with user details in the request body.

- **PUT /api/users/:id**

  Updates details of a specific user by ID. Requires a JSON object with updated user details in the request body.

- **DELETE /api/users/:id**

  Deletes a user by ID.

## Usage

You can use tools like cURL, Postman, or any HTTP client library to interact with the API endpoints.

Example:

```bash
curl http://localhost:5000/api/users
```

## Mock Data

Mock data is stored in the user.json directory. You can modify this data to suit your needs or add more mock data files as required.

## Contributing

Contributions are welcome! If you find any issues or would like to add features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

---
