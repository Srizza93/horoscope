# Horoscope Node App

This simple Node.js application provides a single endpoint that takes a birthday as input and returns the corresponding zodiac sign. The app is built using Express and includes error handling and testing.

## Getting Started Locally

### Clone the Repository

```
git clone https://github.com/Srizza93/horoscope.git
```

### Navigate to the Project Directory

```
cd horoscope
```

### Install Dependencies

```
npm install
```

### Run the App

```
npm run app
```

The app will be accessible at http://localhost:3000.

## API Endpoint

# Get Zodiac Sign

- **URL: /api/birthday/date/:month/:day**
- **Method: GET**
- **Parameters:**
  - **month:** The month of the birthday (01-12).
  - **day:** The day of the birthday (01-31).
- **Response:**
  - Successful response:
  ```
  {
    "sign": "Zodiac Sign"
  }
  ```
  - Error response (status code 500):
  ```
  {
    "error": "Internal Server Error"
  }
  ```

## Running Tests

The application includes test cases using Jest and Supertest. To run the tests, use the following command:

```
npm test
```

## Dockerization

The app includes a Dockerfile for containerization. To build and run the Docker container, use the following commands:

```
docker build -t horoscope-app .
docker run -p 3000:3000 horoscope-app
```

The application will be accessible at http://localhost:3000.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests. Your contributions are welcome!
