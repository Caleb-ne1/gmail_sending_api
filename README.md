# Email Sending API

This project is a Node.js-based email-sending API using the Express framework and Nodemailer for email transport. It allows you to send emails through a simple POST request.

## Features

- Send emails using Gmail's SMTP server.

- Input validation for required fields.

- Environment variable support for secure configuration.


## Prerequisites

Before running the project, ensure you have the following installed:

- Node.js (v14 or later recommended)

- npm or yarn

- A Gmail account for sending emails


## Installation

- Clone the repository:

```bash
git clone https://github.com/Caleb-ne1/gmail_sending_api.git
cd gmail_sending_api
```

- Install dependencies:

```bash
npm install
# or
yarn install
```

- Set up environment variables:

Create a .env file in the root directory and add the following variables:

PORT=3003

GMAIL=your-email@gmail.com

PASSWORD=your-email-password

- Start the server:

npm run email_sender
# or
node email_sender

## Usage

Endpoint

```bash
URL: /send

Method: POST

Content-Type: application/json

Request Body

{
  "name": "caleb kibet",
  "email": "calebkibet@gmail.com",
  "subject": "Test Email",
  "message": "This is a test email."
}

Example Response

Success:

{
  "success": true,
  "message": "Email sent successfully!",
  "data": {}
}

Failure:

{
  "success": false,
  "error": "Failed to send email. Please try again later."
}
```

## Project Structure

```bash
project/
├── controllers/
│   └── sendMailController.js    # handles email sending requests
├── services/
│   └── sendMailService.js # logic for sending emails using Nodemailer
├── .env    # environment variables 
├── email_sender.js    # main entry point of the application
├── package.json       # project dependencies 
```

## Dependencies

- express: Web framework for handling HTTP requests.

- nodemailer: Library for sending emails.

- dotenv: Loads environment variables from a .env file.

- cors: Middleware for handling cross-origin requests.

