# URL Shortener Service

A modern URL shortener service built with Node.js, Express, and MongoDB, featuring URL analytics and user management.

## Tech Stack

- Backend: Node.js + Express.js
- Database: MongoDB
- Authentication: JWT


## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm

## Local Development Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/dexter-ifti/url-shortener.git
   cd url-shortener
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   ```bash
   cp .env.example .env
   ```
   Configure the following variables in `.env`:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/urlshortener
   JWT_SECRET=your_jwt_secret
   BASE_URL=http://localhost:3000
   ```

4. **Start MongoDB**
   ```bash
   # Make sure MongoDB is running locally
   mongod
   ```

5. **Run the Application**
   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

## API Endpoints

### URL Operations
- `POST /api/v1/url`
  - Shorten a new URL
  - Body: `{ "longUrl": "https://example.com" }`

- `GET /api/v1/url/analytics/:shortId`
  - Get URL statistics


## Features

- **URL Shortening**
  - Custom short code generation

- **Analytics**
  - Click tracking

## Error Handling

The API returns standard HTTP status codes:
- 200: Success
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Server Error

## Security Measures

- Input validation
- CORS configuration

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email tiftikhar@student.iul.ac.in or open an issue in the repository.

## GitAds Sponsored
[![Sponsored by GitAds](https://gitads.dev/v1/ad-serve?source=dexter-ifti/url-shortner@github)](https://gitads.dev/v1/ad-track?source=dexter-ifti/url-shortner@github)

