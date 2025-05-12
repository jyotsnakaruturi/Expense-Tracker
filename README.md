# Expense Tracker

## Project Description

The **Expense Tracker** application is a full-stack web app built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). This application helps users track their expenses in a structured way and provides useful financial insights.

Key features of the application:
- **Backend**: Node.js and Express.js to handle API requests.
- **Database**: MongoDB to store user expense data.
- **Frontend**: React.js for a responsive and interactive user interface.
- **Email Alerts**: Automated email alerts when an expense exceeds $10,000 for better financial oversight.
- **Expense Reports**: Visual representation of expenses using pie charts, offering insights into spending habits.

## Installation

To get started with this project, follow the instructions below to set it up on your local machine.

### Prerequisites
Make sure you have the following installed:
- **Node.js**: [Install Node.js](https://nodejs.org/en/)
- **MongoDB**: [Install MongoDB](https://www.mongodb.com/try/download/community)

### Steps

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/yourusername/expense-tracker.git
    ```

2. Navigate to the project directory:
    ```bash
    cd expense-tracker
    ```

3. Install backend dependencies:
    ```bash
    cd backend
    npm install
    ```

4. Set up your MongoDB database:
    - If you're running MongoDB locally, ensure that it's running and accessible at `mongodb://localhost:27017/expense-tracker`.
    - Alternatively, you can use a cloud MongoDB service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

5. Set up email sending (using services like [Nodemailer](https://nodemailer.com/)):
    - Create a `.env` file in the backend directory and add your email configuration:
    ```env
    EMAIL_SERVICE=your-email-service
    EMAIL_USER=your-email@example.com
    EMAIL_PASS=your-email-password
    ```

6. Start the backend server:
    ```bash
    npm start
    ```

7. Install frontend dependencies:
    ```bash
    cd ../frontend
    npm install
    ```

8. Start the frontend development server:
    ```bash
    npm start
    ```

### Running the App
After following the setup steps, you can navigate to `http://localhost:3000` in your browser to access the **Expense Tracker** app.

## Features

- **Track Expenses**: Users can add, view, update, and delete their expenses.
- **Expense Alerts**: Automatic email alerts are sent if an expense exceeds $10,000.
- **Visual Reports**: Pie charts show a breakdown of expenses, making it easy to understand spending patterns.

## Usage

1. **Adding Expenses**: 
   - Users can enter expense details (e.g., category, amount, description) through the interface.
   
2. **Viewing Expenses**: 
   - The expense list displays all recorded expenses with options to filter and sort.
   
3. **Expense Reports**: 
   - View a visual representation of spending in pie chart form.

4. **Email Notifications**: 
   - When an expense exceeds $10,000, the system will automatically send an email notification.

## Contributing

If you'd like to contribute to the development of the Expense Tracker app, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -m 'Add feature'`).
4. Push to your fork (`git push origin feature/your-feature`).
5. Create a new pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Nodemailer](https://nodemailer.com/)
