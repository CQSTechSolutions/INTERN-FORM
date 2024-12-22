import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    education: "",
    resume: null,
    experience: "",
    about: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you can add code to submit the form data
  };

  const handleReset = () => {
    setFormData({
      fname: "",
      lname: "",
      email: "",
      phone: "",
      gender: "",
      dob: "",
      education: "",
      resume: null,
      experience: "",
      about: "",
    });
  };

  return (
    <div className="container">
      <h1>Intern Form</h1>
      <form onSubmit={handleSubmit} className="intern-form">
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={formData.fname}
          onChange={handleInputChange}
          placeholder="Enter First Name"
          required
        />

        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lname"
          value={formData.lname}
          onChange={handleInputChange}
          placeholder="Enter Last Name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter Email"
          required
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Enter Phone Number"
          required
        />

        <label htmlFor="gender">Gender</label>
        <div className="gender-options">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleInputChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleInputChange}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="other"
            checked={formData.gender === "other"}
            onChange={handleInputChange}
          />
          Other
        </div>

        <label htmlFor="dob">Date of Birth</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="education">Education Details</label>
        <select
          name="education"
          id="education"
          value={formData.education}
          onChange={handleInputChange}
        >
          <option value="">Select Education</option>
          <option value="high_school">High School</option>
          <option value="university">University</option>
          <option value="graduate">Graduate</option>
        </select>

        <label htmlFor="resume">Resume</label>
        <input
          type="file"
          id="resume"
          name="resume"
          onChange={handleInputChange}
          required
        />

        <label htmlFor="experience">Experience</label>
        <input
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleInputChange}
          placeholder="Enter Experience"
          required
        />

        <label htmlFor="about">About</label>
        <textarea
          id="about"
          name="about"
          value={formData.about}
          onChange={handleInputChange}
          cols="30"
          rows="10"
          placeholder="Enter Description"
          required
        ></textarea>

        <button type="button" onClick={handleReset} className="reset-button">
          Reset
        </button>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
