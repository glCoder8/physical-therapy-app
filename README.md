# Physical Therapy Data Visualization App

This project is a web application designed to help a physical therapy practice visualize their data. The app provides two main pages for visualizing different aspects of the data:

- General Practice Metrics
- Time to Sign Off

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)

## Features

- **General Practice Metrics**: Displays a bar chart showing the geographic breakdown of cases.
- **Time to Sign Off**: Displays a line chart showing the typical time of day for note sign off.
- **Persistent Filters**: Filters for clinic and provider that maintain their state when navigating between pages.
- **Responsive Design**: The application is fully responsive and works on all devices.
- **No Data Handling**: Displays a "No data available" message when there is no data to show.
- **Styling**: Uses Bootstrap for styling, with custom styles for enhanced appearance.

## Technologies Used

- React
- React Bootstrap
- Recharts
- Papaparse
- Docker
- CSS

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/glCoder8/physical-therapy-app.git
   cd physical-therapy-app
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Build and run the Docker container:**
   ```sh
   docker-compose up --build
   ```
4. **Open the application:**

   Open your browser and navigate to 'http://localhost:3000'

5. **Alernative to run the project:**
   ```sh
   npm run start
   ```

## Usage

- Navigate between the "General Practice Metrics" and "Time to Sign Off" pages using the navigation bar.
- Use the filters to select different clinics and providers. The charts will update accordingly and maintain the filter states when switching pages.
