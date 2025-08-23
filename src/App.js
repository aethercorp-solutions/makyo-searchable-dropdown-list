import './App.css';
import MultiSelectDropdown from './components/MultiSelectDropdown';

const options = [
  'Option 1', 
  'Option with icon', 
  'Long Long Option 3', 
  'Long Long Long Option 4', 
  'Long Long Long Long Option 5',
  'Long Long Long Long Long Option 6'
];

function App() {
  return (
    <div className='App'>
      <MultiSelectDropdown options={options} 
        multiple={true} 
        outlined={false}
        optionLabel="Label"
        filtering={true}
        />
    </div>
  );
}

export default App;
