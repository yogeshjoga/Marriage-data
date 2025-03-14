import { useState } from 'react';
import './App.css';

function App() {
  const [details, setDetails] = useState({
      firstName: '',
      lastName:'',
      city:'',
      address: '',
      amount: '',
      gold: '',
      silver: '',
      objects: '',
      option: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', JSON.stringify(details));
    alert(`Form submitted successfully! ${JSON.stringify(details)}`);

    try{
      const response = await fetch('http://localhost:8080/presentation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(details),
      });

      if(response.ok){
        const data = await response.json();
        console.log(data);
      }else{
        console.log('Failed to submit form');
      }
    }catch(err){
      console.log(err);
    }

    setDetails({
      firstName: '',
      lastName:'',
      city:'',
      address: '',
      amount: '',
      gold: '',
      silver: '',
      objects: '',
      option: '',
    })
  };

  return (
    <div
      className="form-container">
      <h1>Details</h1>
      <form onSubmit={handleSubmit} className="form">


        {/* first Name */}
        <div className="form-group">
          <label htmlFor="name">First Name: </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={details.firstName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Last Name */}
        <div className="form-group">
          <label htmlFor="name">Last Name: </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={details.lastName}
            onChange={handleChange}
            required
          />
        </div>


        {/* City */}
        <div className="form-group">
          <label htmlFor="name">City: </label>
          <input
            type="text"
            name="city"
            id="city"
            value={details.city}
            onChange={handleChange}
            required
          />
        </div>

        {/* Address */}
        <div className="form-group">
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            name="address"
            id="address"
            value={details.address}
            onChange={handleChange}
            required
          />
        </div>

        {/* Gold */}
        <div className="form-group">
          <label htmlFor="gold">Gold: </label>
          <input
            type="text"
            name="gold"
            id="gold"
            value={details.gold}
            onChange={handleChange}
          />
        </div>

        {/* Silver */}
        <div className="form-group">
          <label htmlFor="silver">Silver: </label>
          <input
            type="text"
            name="silver"
            id="silver"
            value={details.silver}
            onChange={handleChange}
          />
        </div>

         {/* Amount */}
         <div className="form-group">
          <label htmlFor="amount">Amount: </label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={details.amount}
            onChange={handleChange}
            required
          />
        </div>

        {/* Other Gifts */}
        <div className="form-group">
          <label htmlFor="otherGifts">Other Gifts: </label>
          <input
            type="text"
            name="objects"
            id="objects"
            value={details.objects}
            onChange={handleChange}
          />
        </div>

        {/* Dropdown */}
        <div className="form-group">
          <label htmlFor="option">Choose an option:</label>
          <select
            name="option"
            id="option"
            value={details.option}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="A">Presentation</option>
            <option value="B">Taken</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
