```
 $$$$$$\        $$\                 $$$$$$$\                      $$\       $$\                                           $$\ 
$$  __$$\       $$ |                $$  __$$\                     $$ |      $$ |                                          $$ |
$$ /  $$ | $$$$$$$ | $$$$$$\        $$ |  $$ | $$$$$$\   $$$$$$$\ $$$$$$$\  $$$$$$$\   $$$$$$\   $$$$$$\   $$$$$$\   $$$$$$$ |
$$ |  $$ |$$  __$$ | \____$$\       $$ |  $$ | \____$$\ $$  _____|$$  __$$\ $$  __$$\ $$  __$$\  \____$$\ $$  __$$\ $$  __$$ |
$$ |  $$ |$$ /  $$ | $$$$$$$ |      $$ |  $$ | $$$$$$$ |\$$$$$$\  $$ |  $$ |$$ |  $$ |$$ /  $$ | $$$$$$$ |$$ |  \__|$$ /  $$ |
$$ |  $$ |$$ |  $$ |$$  __$$ |      $$ |  $$ |$$  __$$ | \____$$\ $$ |  $$ |$$ |  $$ |$$ |  $$ |$$  __$$ |$$ |      $$ |  $$ |
 $$$$$$  |\$$$$$$$ |\$$$$$$$ |      $$$$$$$  |\$$$$$$$ |$$$$$$$  |$$ |  $$ |$$$$$$$  |\$$$$$$  |\$$$$$$$ |$$ |      \$$$$$$$ |
 \______/  \_______| \_______|      \_______/  \_______|\_______/ \__|  \__|\_______/  \______/  \_______|\__|       \_______|
```

# ODA Dashboard

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Build Status](https://travis-ci.org/your-username/oda-dashboard.svg?branch=main)](https://travis-ci.org/your-username/oda-dashboard)

## Overview

The ODA Dashboard provides comparison tools for products and their gross prices per unit. Built on the Spike Free Angular Admin Template, this application offers a user-friendly interface for analyzing product pricing.

## Key Features

- **Gross Price Overview**: Compares gross prices for up to 15 products (capped for better visualization).
- **Product Performance**: Displays products in the same order as the Gross Price Overview, showing price and purchase priority.
- **Product Cards**: Presents product prices with a 1-5 star rating system.
- **Data Fetching**: Dedicated service for fetching data from the Gross Price Overview component.
- **Filtering**: Dropdown menu for selecting a limited pool of products.

## Design Choices

- **Performance vs. Feature Completeness**: Prioritized core functionality to meet deadlines.
- **Data Capping**: Limited Gross Price Overview to 15 results for improved visualization.

## Future Improvements

- **Scrollable Results**: Implement scrolling for the Gross Price Overview component.
- **Searchable Products**: Add a search bar for more effective product filtering.
- **Clickable Cards**: Enable redirection to the ODA website upon clicking product cards.

## Technical Details

- Framework: Angular
- Template: Spike Angular Admin Template
- Data Source: [https://oda.com/api/v1](https://oda.com/api/v1)

## Getting Started

### Prerequisites

- Node.js and npm (or yarn)
- Angular CLI

### Installation

1. Clone the repository:
```bash 
git clone https://github.com/setzener/oda-dashboard.git
```

2. Install dependencies:
```bash 
cd oda-dashboard npm install
```

### Running the Application

1. Start the development server:
```bash 
ng serve
```

   Your application should now be running at `http://localhost:4200`.

2. For production build:
```bash 
ng build
```

### Testing

To run unit tests:
```bash 
ng test
```

For end-to-end tests:
```bash 
ng e2e
```

## Acknowledgments

- Special thanks to the creators of the Spike Free Angular Admin Template.
- Appreciation for the open-source community and contributors.
