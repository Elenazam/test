import {useState} from 'react';

const NavItem = () => {
  const options = [
   
    {value: '1', text: 'MXN'},
    {value: '2', text: 'USD'},
    {value: '3', text: 'EUR'},
  ];

  const [selected, setSelected] = useState(options[0].value);

  const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <div>
      <select value={selected} onChange={handleChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default NavItem;
