# Quick Glossary Web App (Clean Architecture with React)


### Overview
This is a single-page responsive web application built using React and the Clean Architecture approach. It serves as a dictionary frontend that:
- Accepts a word input.
- Makes a request to the [Free Dictionary API](https://dictionaryapi.dev/).
- Displays the definition and related results.
- Provides a **Reset** button to clear all displayed data.

You can access the website here: https://quick-glossary.netlify.app/

### Features
- **Responsive Design:** Optimized for both mobile and desktop screens.
- **Clean Architecture:** Separation of concerns with clear domain, application, and infrastructure layers.
- **Single Page Input:** Simple UI for inputting words and displaying results.
- **Reset Functionality:** Easily clear results with a dedicated reset button.
- **API Integration:** Uses the Free Dictionary API to fetch word definitions.

### Architecture
- **Presentation Layer:** React components.
- **Domain Layer:** Business logic related to dictionary operations.
- **Data Layer:** API use case module handling requests to the Free Dictionary API.

### Setup (without Docker)
- Node version: 23.8.0
- NPM version: 10.9.2

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/caioarodrigues/quick-glossary.git
   cd quick-glossary
   npm install 
   npm run dev
