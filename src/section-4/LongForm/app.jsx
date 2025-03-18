import { useState } from "react";
import "./style.css"
  function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    checked: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (

  <div className="LongForm-container">
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
        Fill in your details to join the party!
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
      </div>

      <div className="mb-3">
        
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
 </div>  
  );
}

export default LoginForm;