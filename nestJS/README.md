# NestJS Posts API Blueprint

A production-ready REST API scaffold built from scratch with NestJS, implementing robust modular architecture, structural validation, global request/response lifecycle tracking, and strict error uniformity.

---

## 🛠️ System Architecture & Workflow

The application leverages NestJS's highly modular architecture to enforce separation of concerns across the processing of incoming HTTP requests.

## 🚀 Core Implementations

### 1. In-Memory CRUD Engine
Encapsulated inside a modular domain configuration (`PostsModule`), routing logic (`PostsController`), and a stateful operational core (`PostsService`) to handle in-memory list items seamlessly.

### 2. Payload Validation Layer
Leverages `class-validator` and `class-transformer` properties within Data Transfer Objects (DTOs) coupled with a configuration-locked `ValidationPipe` to enforce strict property constraints and automated schema mutations:
- **`whitelist: true`**: Automatically strips away properties not explicitly defined within the payload DTO.
- **`forbidNonWhitelisted: true`**: Rejects payloads containing unmapped parameters with a strict `400 Bad Request` execution error.
- **`transform: true`**: Automatically transforms network payload signatures into concrete DTO object instances.

### 3. Request Lifecycle Utilities
- **`LoggingInterceptor`**: Uses reactive `rxjs` operators to intercept the global application flow, capturing executing controller operational latency (`ms`) on every round-trip network response.
- **`AuthGuard Stub`**: Intercepts structural processing contexts to assert authorization credentials by checking for valid incoming `Authorization: Bearer <token>` schemas.
- **`GlobalExceptionFilter`**: Standardizes system failure states (4xx, 5xx) into structural JSON responses containing a predictable data layer layout: `statusCode`, `timestamp`, `path`, and contextual `message`.