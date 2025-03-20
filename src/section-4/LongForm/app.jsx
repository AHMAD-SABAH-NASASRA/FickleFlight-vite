
import "./style.css"
  function LoginForm() {
 

  return (

  <div className="LongForm-container">
    <form  className="p-4">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
        Fill in your details to join the party!
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="enter your email"

        />
        
      </div>

      <div className="mb-3">
        
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="enter your password"
        />
      </div>
      <button type="submit" className="btn btn-primary btn-lg ">
        Submit
      </button>
    </form>
 </div>  
  );
}

export default LoginForm;