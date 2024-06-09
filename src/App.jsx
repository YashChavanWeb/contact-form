import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    employmentStatus: '',
    birthdate: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    phone: false,
    gender: false,
    employmentStatus: false,
    birthdate: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Validate required fields
    setFormErrors({
      ...formErrors,
      [name]: value === '' // If value is empty, set error to true
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if there are any errors
    const hasErrors = Object.values(formErrors).some(error => error);

    if (!hasErrors) {
      // You can handle form submission here
      console.log(formData);

      // Display a popup
      alert('Form submitted!');
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const inputClass = (fieldName) => {
    // Return 'is-invalid' class if there's an error, otherwise return 'is-valid'
    return formErrors[fieldName] ? 'is-invalid' : formData[fieldName] !== '' ? 'is-valid' : '';
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Contact-Form</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row justify-content-center mt-3">
          <div className="col-lg-6 border">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className={`form-control ${inputClass('name')}`} id="name" name="name" value={formData.name} onChange={handleChange} required />
                <div className="invalid-feedback">Please enter your name.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className={`form-control ${inputClass('email')}`} id="email" name="email" value={formData.email} onChange={handleChange} required />
                <div className="invalid-feedback">Please enter a valid email address.</div>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input type="tel" className={`form-control ${inputClass('phone')}`} id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                <div className="invalid-feedback">Please enter your phone number.</div>
              </div>
              <div className="mb-3">
                <label className="form-label">Gender</label>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gender" id="male" value="male" onChange={handleChange} required />
                  <label className="form-check-label" htmlFor="male">Male</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gender" id="female" value="female" onChange={handleChange} required />
                  <label className="form-check-label" htmlFor="female">Female</label>
                </div>
                <div className="invalid-feedback">Please select your gender.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="employmentStatus" className="form-label">Employment Status</label>
                <select className={`form-select ${inputClass('employmentStatus')}`} id="employmentStatus" name="employmentStatus" value={formData.employmentStatus} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="student">Student</option>
                  <option value="working">Working</option>
                  <option value="retired">Retired</option>
                </select>
                <div className="invalid-feedback">Please select your employment status.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="birthdate" className="form-label">Birthdate</label>
                <input type="date" className={`form-control ${inputClass('birthdate')}`} id="birthdate" name="birthdate" value={formData.birthdate} onChange={handleChange} required />
                <div className="invalid-feedback">Please enter your birthdate.</div>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
