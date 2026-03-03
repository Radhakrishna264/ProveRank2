# ProveRank2

A Node.js backend API built with Express, MongoDB (Mongoose), and Socket.io.

## Architecture

- **Runtime**: Node.js 20
- **Entry Point**: `server.js`
- **Port**: 3000
- **Database**: MongoDB Atlas (via `MONGO_URI` env var)

## Project Structure

```
server.js          - Main entry point (Express + Socket.io)
config/db.js       - MongoDB connection
middleware/
  errorHandler.js  - Global error handler
utils/
  asyncHandler.js  - Async route wrapper utility
routes/            - API route definitions (empty, to be filled)
controllers/       - Route handler logic (empty, to be filled)
models/            - Mongoose data models (empty, to be filled)
uploads/           - File upload destination
```

## Key Dependencies

| Package | Purpose |
|---|---|
| express | Web framework |
| mongoose | MongoDB ODM |
| socket.io | Real-time WebSocket support |
| dotenv | Environment variable loading |
| bcryptjs | Password hashing |
| jsonwebtoken | JWT authentication |
| multer | File uploads |
| pdf-parse | PDF text extraction |
| xlsx | Excel file parsing |
| @tensorflow/tfjs | ML / ranking inference |
| helmet | Security headers |
| express-rate-limit | Rate limiting |
| express-validator | Input validation |

## Environment Variables

| Variable | Description |
|---|---|
| `PORT` | Server port (default: 3000) |
| `MONGO_URI` | MongoDB Atlas connection string |

## Workflows

- **Start application**: `node server.js` — runs the backend on port 3000

## Deployment

- Target: VM (always-on, required for WebSocket support)
- Run command: `node server.js`
