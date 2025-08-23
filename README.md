MultiSelectDropdown Component

A flexible and customizable React multi-select dropdown component with search/filtering support, optional portal rendering, and accessible keyboard navigation. Supports both single and multiple selection modes with styled tags for selected items.

Features
    - Multi-select or single-select modes
    - Search and filter options dynamically
    - Optional "outlined" styling variant
    - Optional portal rendering for dropdown (useful for overflow or positioning)
    - Keyboard accessible with ARIA roles for accessibility
    - Highlights search matches in option labels
    - Customizable option label field (works with objects or strings)
    - Remove tags inline in multi-select mode
    - Responsive and styled with clean CSS

Getting Started
Prerequisites

Make sure you have Node.js and npm or yarn installed.
    Node.js >= 12
    npm or yarn

Installation
Clone the repository and install dependencies:

git clone <your-repo-url>
cd multi-select-dropdown

    npm install
    # or
    yarn install

Running the Component Locally
To start a development server with live reload:

    npm start
    # or
    yarn start

This will run the app and open http://localhost:3000 where you can test the component in isolation.

Building for Production
To build the optimized production bundle:

    npm run build
    # or
    yarn build

The output will be in the build/ directory.

==============================================================================

Using Storybook
Storybook is configured to develop and test the component interactively.
Running Storybook
Start the Storybook server:

    npm run storybook
    # or
    yarn storybook

Open your browser at http://localhost:6006 to explore the MultiSelectDropdown component with various props and configurations.

Storybook Stories
    - Default story demonstrates the dropdown with example options.
    - You can toggle props like filtering, multiple, outlined, usePortal, optionLabel, and   placeholder via the Storybook controls panel.

==============================================================================

Usage
Here is a basic example of using the MultiSelectDropdown component in your React app:

import React from 'react';
import MultiSelectDropdown from './MultiSelectDropdown';

const options = [
  { id: 1, name: 'Option 1' },
  { id: 2, name: 'Option with icon' },
  { id: 3, name: 'Long Option 3' },
];

function App() {
  return (
    <div>
      <h1>MultiSelectDropdown Example</h1>
      <MultiSelectDropdown
        options={options}
        optionLabel="name"
        multiple={true}
        filtering={true}
        placeholder="Select options..."
      />
    </div>
  );
}

export default App;

==============================================================================

Props           Type        Default         Description
options         array       []              Array of options (strings or objects)
multiple        boolean     true            Enable multiple selection
outlined        boolean     false           Use outlined style variant
optionLabel     string      ''              Field name to use for option label (if object)
filtering       boolean     true            Enable search/filter functionality
usePortal       boolean     false           Render dropdown menu in a portal at document body
placeholder     string      'Select...'     Placeholder text when no selection


Accessibility
    - Supports keyboard navigation with Enter, Space, and Escape keys
    - ARIA roles for combobox and listbox
    - Screen-reader friendly with live region for "No options found"



