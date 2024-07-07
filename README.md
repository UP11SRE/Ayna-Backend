## Ayna Backend: Powering Real-Time Conversations

- This project thrives on facilitating seamless real-time communication through its chat room functionality. This project serves as the backend engine for this dynamic application.

# Important Note: Due to server optimization strategies, the backend might exhibit a slight delay (up to 1 minute) during the initial application load. This occurs because the backend server temporarily suspends operations during periods of inactivity. Subsequent interactions will experience faster response times.

# Leveraging Strapi:

- This project Backend utilizes Strapi, a powerful Node.js-based Content Management System (CMS), to manage its data effectively. Strapi's built-in Socket.IO plugin streamlines the integration of real-time communication features, making Ayna's chat room a smooth and interactive experience.

# SQLite: A Secure Foundation:

- Strapi's in-house SQLite database provides a solid foundation for storing Ayna's data. This secure and efficient database ensures that user information and chat history are protected.

# Secured Communication:

- This chat application prioritizes user privacy. To participate in the chat room, users must be registered. Ayna employs two Strapi collections:

# Registered Users: Stores information about all registered users.

- Chat Users: Maintains a list of users currently active within the chat room. This ensures only authorized and registered users can engage in conversations.

# Private Chat Rooms:

- This chat app leverages Socket.IO's private chat function, guaranteeing a personalized and secure chat experience. When a user joins the chat room, a private chat window is established for them. Messages sent by the user are broadcasted by the server specifically to that window, ensuring only that user receives the message.

# Getting Started:

- Clone the Ayna Backend repository.
- Install dependencies using: npm run install.
- Start the development server to test locally: using npm run develop
- server will run on http://localhost:1337

# Deployment:

- The Ayna frontend is currently hosted at: https://ayna-frontend.onrender.com
- The Ayna backend resides at: https://ayna-backend-04qn.onrender.com

- Frontend code repo: https://github.com/UP11SRE/Ayna-frontend.git

# Embrace the Power of Real-Time Connection:

- This chat app's Backend empowers the Ayna application to deliver an exceptional real-time communication experience. Join the conversation and discover a more dynamic and engaging way to connect!

# Contribution:

We welcome pull requests and contributions!

# License:

This project is licensed under the MIT License. See the LICENSE file for details.

# Project Overview Video:

For a visual demonstration of Ayna's functionalities, you can access a video walkthrough here: https://www.loom.com/share/360468407dc14490886bdeac1c377d04?sid=31ed7ea8-a248-4e20-be4c-bff720e8a5a3
