# Angular Portfolio Example

This directory contains example Angular components demonstrating full-stack development skills.

## 🅰️ Angular Setup Instructions

To create a full Angular version of the portfolio:

```bash
# Install Angular CLI globally
npm install -g @angular/cli

# Create a new Angular project
ng new portfolio-angular --style=scss --routing

# Navigate to the project
cd portfolio-angular

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

# Add Tailwind to your styles.scss
# @tailwind base;
# @tailwind components;
# @tailwind utilities;

# Generate components
ng generate component components/header
ng generate component components/hero
ng generate component components/skills
ng generate component components/projects
ng generate component components/education
ng generate component components/contact
ng generate component components/footer

# Run the development server
ng serve
```

## 📦 Included Example Components

- `portfolio.component.ts` - Main portfolio component with TypeScript
- `portfolio.component.html` - Template with Angular directives
- `portfolio.component.scss` - Styles using SCSS
- Demonstrates Angular features:
  - Component-based architecture
  - TypeScript interfaces
  - Data binding
  - Event handling
  - Angular directives (*ngFor, *ngIf)
  - Services for data management

## 🎯 Key Angular Features Demonstrated

- ✅ Component-based architecture
- ✅ TypeScript integration
- ✅ Two-way data binding
- ✅ Reactive forms
- ✅ Routing and navigation
- ✅ Services and dependency injection
- ✅ HTTP client for API calls
- ✅ Angular Material integration (optional)
- ✅ RxJS for reactive programming

## 🚀 Build for Production

```bash
ng build --configuration production
```

## 📝 Integration with Existing Portfolio

The Angular version can coexist with the React version, allowing you to showcase expertise in both frameworks.
