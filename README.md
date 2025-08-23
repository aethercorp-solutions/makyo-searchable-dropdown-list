MultiSelectDropdown
A flexible and customizable React multi-select dropdown component with search/filtering support, optional portal rendering, and accessible keyboard navigation. Supports both single and multiple selection modes with styled tags for selected items.

Features
    - Multi-select or single-select mode
    - Real-time search and filtering of options
    - Optional outlined styling variant
    - Optional portal rendering for dropdown
    - Accessible keyboard navigation (ARIA support)
    - Search highlight for matched text
    - Works with objects or strings using optionLabel
    - Inline removable tags for selected items (in multi-select mode)
    - Responsive and cleanly styled with CSS

======================================================================================================

Getting Started
Prerequisites
Ensure you have Node.js and npm or yarn:
    - Node.js >= 12
    - npm or yarn

Installation
Clone the repository and install dependencies:

    git clone https://github.com/aethercorp-solutions/makyo-searchable-dropdown-list.git
    cd multi-select-dropdown

    # Using npm
    npm install

    # or using yarn
    yarn install

Running the Component Locally
To start a development server with live reloading:

    npm run dev
    # or
    yarn dev

Visit http://localhost:5173 to test the component in isolation.

======================================================================================================

Building for Production
To generate a production-ready bundle:

    npm run build
    # or
    yarn build

The optimized output will be located in the dist/ directory.

======================================================================================================

Using Storybook
Storybook is configured to develop and test the component interactively.
Run Storybook

    npm run storybook
    # or
    yarn storybook

Then open http://localhost:6006 in your browser.

Storybook Stories
    - Default usage with example options.
    - Dynamic controls for props like:
        - multiple
        - filtering
        - outlined
        - usePortal
        - optionLabel
        - placeholder

======================================================================================================

Usage Example

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

======================================================================================================

Prop	        Type	      Default	        Description
options	        array	      []	            Array of options (strings or objects)
multiple	    boolean	      true	            Enable multiple selection
outlined	    boolean	      false	            Use outlined style variant
optionLabel	    string	      ''	            Field to display from option objects
filtering	    boolean	      true	            Enable search functionality
usePortal	    boolean	      false	            Render dropdown using a portal
placeholder	    string	      'Select...'	    Placeholder text when no selection

======================================================================================================

Accessibility
    - Full keyboard support:
        - Enter, Space, Escape, and Arrow keys
    - Proper ARIA roles: combobox, listbox, option
    - Screen-reader friendly with live updates

======================================================================================================

Deployment
To deploy the component or Storybook to GitHub Pages:

    # Deploy component build
    npm run deploy

    # Deploy Storybook
    npm run deploy-storybook

    







