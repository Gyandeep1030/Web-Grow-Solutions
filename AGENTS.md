# Web Grow Solution - JavaScript Version

A production-ready full-stack React application for Web Grow Solution IT agency, featuring React Router 6 SPA mode, JavaScript, Vite, and modern tooling.

## Tech Stack

- **Frontend**: React 18 + React Router 6 (spa) + JavaScript + Vite + TailwindCSS 3
- **Backend**: Express server integrated with Vite dev server
- **Testing**: Vitest
- **UI**: Radix UI + TailwindCSS 3 + Lucide React icons

## Project Structure

```
client/                   # React SPA frontend
├── pages/                # Route components (Index.jsx = home)
├── components/ui/        # Pre-built UI component library
├── App.jsx               # App entry point and with SPA routing setup
└── global.css            # TailwindCSS 3 theming and global styles

server/                   # Express API backend
├── index.js              # Main server setup (express config + routes)
└── routes/               # API handlers

shared/                   # Code used by both client & server
└── api.js                # Shared constants and utilities
```

## Key Features

### SPA Routing System

The routing system is powered by React Router 6:

- `client/pages/Index.jsx` represents the home page.
- Routes are defined in `client/App.jsx` using the `react-router-dom` import
- Route files are located in the `client/pages/` directory

For example, routes can be defined with:

```javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Index />} />
  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
  <Route path="*" element={<NotFound />} />
</Routes>;
```

### Web Grow Solution Branding

- Modern blue and white color scheme with dark gray accents
- Inter font family for professional typography
- Custom brand colors defined in Tailwind config
- Responsive design optimized for all devices

### Styling System

- **Primary**: TailwindCSS 3 utility classes with custom Web Grow Solution theme
- **Theme and design tokens**: Configure in `client/global.css`
- **UI components**: Pre-built library in `client/components/ui/`
- **Utility**: `cn()` function combines `clsx` + `tailwind-merge` for conditional classes

```javascript
// cn utility usage
className={cn(
  "base-classes",
  { "conditional-class": condition },
  props.className  // User overrides
)}
```

### Express Server Integration

- **Development**: Single port (8080) for both frontend/backend
- **Hot reload**: Both client and server code
- **API endpoints**: Prefixed with `/api/`

#### Example API Routes

- `GET /api/ping` - Simple ping api
- `GET /api/demo` - Demo endpoint

### Shared Code

Import consistent utilities in both client and server:

```javascript
import { API_ENDPOINTS, createSuccessResponse } from "@shared/api";
```

Path aliases:

- `@shared/*` - Shared folder
- `@/*` - Client folder

## Development Commands

```bash
npm run dev        # Start dev server (client + server)
npm run build      # Production build
npm run start      # Start production server
npm test          # Run Vitest tests
```

## Adding Features

### Add new colors to the theme

Open `client/global.css` and `tailwind.config.js` and add new tailwind colors.

### New API Route

1. **Optional**: Add constants in `shared/api.js`:

```javascript
export const API_ENDPOINTS = {
  MY_ENDPOINT: "/api/my-endpoint",
};
```

2. Create a new route handler in `server/routes/my-route.js`:

```javascript
export const handleMyRoute = (req, res) => {
  const response = {
    message: "Hello from my endpoint!",
  };
  res.json(response);
};
```

3. Register the route in `server/index.js`:

```javascript
import { handleMyRoute } from "./routes/my-route.js";

// Add to the createServer function:
app.get("/api/my-endpoint", handleMyRoute);
```

4. Use in React components:

```javascript
import { API_ENDPOINTS } from "@shared/api";

const response = await fetch(API_ENDPOINTS.MY_ENDPOINT);
const data = await response.json();
```

### New Page Route

1. Create component in `client/pages/MyPage.jsx`
2. Add route in `client/App.jsx`:

```javascript
<Route path="/my-page" element={<MyPage />} />
```

## Production Deployment

- **Standard**: `npm run build` + `npm start`
- **Docker**: Dockerfile included
- **Binary**: Self-contained executables (Linux, macOS, Windows)
- Express serves the built React SPA with fallback routing support

## Architecture Notes

- Single-port development with Vite + Express integration
- JavaScript throughout (client, server, shared)
- Full hot reload for rapid development
- Production-ready with multiple deployment options
- Comprehensive UI component library included
- Professional Web Grow Solution branding and design

## Web Grow Solution Features

The application includes:

- **Homepage**: Hero section, services preview, testimonials, trust indicators, contact CTA
- **Navigation**: Responsive navigation with logo and mobile menu
- **Pages**: Services, Portfolio, About, Contact (with placeholders ready for content)
- **Branding**: Professional blue/white theme with Inter typography
- **Responsive**: Mobile-first design that works on all screen sizes
