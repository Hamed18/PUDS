# Introduction

Welcome to the Debate Club Website repository! This project is designed to create an interactive and engaging platform for debate club members, where they can organize debates, schedule events, participate in discussions, and track their progress. 
## 📜 Table of Contents
- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## 📖 About
This will be the official website of Premier University Debating Society. The site provides tools for organizing debates, displaying upcoming events, managing club members, and sharing resources.

## ✨ Features
- **Member Profiles**: Create and manage personal profiles for club members.
- **Event Scheduling**: Plan and announce upcoming debates and meetings.
- **Resource Library**: Access a library of resources like debate guidelines, articles, and videos.
- **Admin Panel**: Manage users, events, and other site content.

## 💻 Tech Stack
- **Frontend**: HTML, CSS, JavaScript, React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT-based user authentication
- **Styling**: Tailwind CSS, Bootstrap (optional)
- **Other Tools**: Git, GitHub, REST APIs

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites
- **Node.js**: Ensure you have Node.js installed. You can download it from [Node.js website](https://nodejs.org/).
- **MongoDB**: You’ll need a MongoDB server running, or you can use MongoDB Atlas for a cloud-based solution.

### Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Hamed18/PUDS.git
   cd PUDS
   ```

2. **Install Dependencies**
   ```bash
   npm install
   cd client
   npm install
   ```

3. **Configure Environment Variables**
   - Right now, there's no env file in this project. In case of need,
   - Create a `.env` file in the root directory and add the following environment variables:

     ```plaintext
     MONGO_URI=<your-mongodb-connection-string>
     JWT_SECRET=<your-jwt-secret>
     PORT=5000
     ```

4. **Run the Application**
   - Start the server:
     ```bash
     npm run dev
     ```
   - Start the client:
     ```bash
     cd client
     npm start
     ```

5. **Access the Website**
   - Open [http://localhost:3000](http://localhost:3000) in your browser to see the website in action.

## 📋 Usage
- **Explore Events**: View and RSVP to upcoming debates and meetings.
- **Join Discussions**: Participate in ongoing debate topics and add your own points.
- **Admin Access**: (for authorized users) Manage users, events, and content from the admin panel.

## 🤝 Contributing
We welcome contributions! Here’s how you can help:
1. **Fork the Repository**
2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/new-feature
   ```
3. **Commit Your Changes**
   ```bash
   git commit -m 'Add some new feature'
   ```
4. **Push to the Branch**
   ```bash
   git push origin feature/new-feature
   ```
5. **Open a Pull Request**

---

