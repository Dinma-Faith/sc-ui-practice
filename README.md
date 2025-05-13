📍 FilterSection Component
This React component allows users to filter internet service provider (ISP) data based on selected locations and ISPs.

✨ Features
- Toggle between different locations (e.g., Ikeja, Lagos, Nigeria).

- Display ISP buttons (currently placeholders with repeated "MTN").

- Interactive UI with active location highlighting.

- Icons for better visual cues.

🔧 Tech Stack
- React (with useState)

- CSS for styling (class names like active, filter-label, etc.)

- SVG Icons (imported images for UI enhancement)

📁 File Structure

FilterSection/
│
├── FilterSection.jsx
├── assets/
│   ├── forwardbutton.svg   # Icon used for location section
│   └── filtermail.svg      # Icon used for ISP section
📦 Usage
To use the component:

import FilterSection from './components/FilterSection';

function App() {
  return (
    <div>
      <FilterSection />
    </div>
  );
}
