import "./App.css";
function App() {

  return (
    <div className="container">
      <h1>Intern Form</h1>
      <form>
        <label htmlFor="fname">First Name</label>
        <input type="text"      id="fname" name="fname" placeholder="Enter  First Name" required />

        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" name="lname" placeholder="Enter  Last Name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter Email" required />

        <label htmlFor="phone">Phone Number</label>
        <input type="text" id="phone" name="phone" placeholder="Enter Phone Number" required />

        <label htmlFor="gender">Gender</label>
        <input type="radio"  name="gender" />Male
        <input type="radio" name="gender" />Female
        <input type="radio" name="gender" />Other

        <label htmlFor="dob">Date of Birth</label>
        <input type="date" id="dob" name="dob" required />

        <label htmlFor="education">Education Details</label>
        <select name="education" id="education details">
          <option value="">Select Education</option>
          <option value="high_school">High School</option>
          <option value="university">University</option>
          <option value="graduate">Graduate</option>
        </select>

        <label htmlFor="resume">Resume</label>
        <input type="file" id="resume" name="resume" required />

        <label htmlFor="experience">Experience</label>
        <input id="experience" name="experience" placeholder="Enter Experience" required></input>

        <label htmlFor="about">About</label>
        <textarea id="about" name="about" cols="30" rows="10" placeholder="Enter Description" required></textarea>

        <button type="button">Reset</button>
        <button type="submit">Submit</button>
      </form>
    </div>
    );
}
export default App;