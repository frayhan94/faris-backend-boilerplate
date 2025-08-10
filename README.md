# Backend Boilerplate

A robust NestJS backend boilerplate based on the lms-developer-api structure.

## Tech Stack

- **NestJS** - Progressive Node.js framework
- **TypeScript** - Type-safe JavaScript
- **JWT** - Authentication and authorization
- **bcryptjs** - Password hashing
- **Class Validator** - Request validation
- **Jest** - Testing framework
- **Docker** - Containerization

## Project Structure

```
src/
├── common/                    # Shared utilities
│   ├── decorators/           # Custom decorators
│   ├── dto/                  # Data Transfer Objects
│   ├── filters/              # Exception filters
│   ├── guards/               # Route guards
│   ├── interceptors/         # Request/Response interceptors
│   ├── middleware/           # Custom middleware
│   ├── pipes/                # Validation pipes
│   └── utils/                # Utility functions
├── modules/                  # Feature modules
│   └── auth/                 # Authentication module
│       ├── dto/              # Auth DTOs
│       ├── entities/         # Auth entities
│       └── strategies/       # Passport strategies
├── app.controller.ts         # Main app controller
├── app.module.ts            # Root module
├── app.service.ts           # Main app service
└── main.ts                  # Application entry point
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Start development server:**
   ```bash
   npm run start:dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   npm run start:prod
   ```

## Available Scripts

- `npm run start` - Start the application
- `npm run start:dev` - Start in development mode with hot reload
- `npm run start:debug` - Start in debug mode
- `npm run start:prod` - Start in production mode
- `npm run build` - Build the application
- `npm run format` - Format code with Prettier
- `npm run lint` - Run ESLint
- `npm run test` - Run unit tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:cov` - Run tests with coverage
- `npm run test:e2e` - Run end-to-end tests

## Docker Support

**Build and run with Docker:**
```bash
npm run docker:build
npm run docker:run
```

**Development with Docker Compose:**
```bash
docker-compose up -d
```

## API Endpoints

### Health Check
- `GET /` - Hello World
- `GET /health` - Health check

### Authentication
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `GET /auth/profile` - Get user profile (Protected)

## Environment Variables

```env
# Application
PORT=3000
NODE_ENV=development

# JWT
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRES_IN=1d
```

## Features

- **Authentication & Authorization** with JWT
- **Request Validation** with class-validator
- **Global Exception Handling**
- **CORS Support**
- **API Versioning**
- **Rate Limiting** with Throttler
- **Docker Support**
- **Testing Setup** with Jest
- **TypeScript** for type safety
- **Modular Architecture**

## Security Features

- Password hashing with bcryptjs
- JWT token-based authentication
- Request validation and sanitization
- CORS configuration
- Rate limiting
- Global exception filtering

## Development Guidelines

- Use dependency injection
- Follow modular architecture
- Implement proper error handling
- Write unit and e2e tests
- Use DTOs for request/response validation
- Follow NestJS best practices
- Use TypeScript for type safety