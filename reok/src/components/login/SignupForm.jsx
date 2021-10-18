import SignupImage from "media/images/signup-01.png";
import HeaderLoginForm from "./HeaderLoginForm";
import LeftContainerLoginForm from "./LeftContainerLoginForm";

const SignupForm = () => {
  return (
    <div className="form-container" id="signup-container">
      <LeftContainerLoginForm image={SignupImage} />
      <HeaderLoginForm />
      <RightContainerSignupForm />
    </div>
  );
};

const RightContainerSignupForm = () => {
  const changeFromSignupToLogin = () => {
    document.getElementById("signup-container").classList.toggle("active");
    document.getElementById("login-container").classList.toggle("active");
  };

  const changeFromSignupToForgot = () => {
    document.getElementById("signup-container").classList.toggle("active");
    document.getElementById("forgot-container").classList.toggle("active");
  };

  return (
    <div className="row form-container__right">
      <form className="d-grid gap-2">
        <h2 className="text-center">Signup</h2>
        <div className="input-box">
          <div className="input-box__input">
            <i className="fas fa-signature"></i>
            <label for="firstname">First name</label>
            <input
              type="text"
              className="firstname"
              name="First name"
              required="true"
            />
          </div>
        </div>
        <div className="input-box">
          <div>
            <i className="fas fa-file-signature"></i>
            <label for="lastname">Last name</label>
            <input
              type="text"
              className="lastname"
              name="Lastname"
              required="true"
            />
          </div>
        </div>
        <div className="input-box">
          <div className="input-box__input">
            <i className="fas fa-user"></i>
            <label for="username">Username</label>
            <input
              type="text"
              className="username"
              name="username"
              required="true"
              minlength="5"
            />
          </div>
        </div>
        <div className="input-box">
          <div className="input-box__input">
            <i className="fas fa-envelope"></i>
            <label for="mail">Email</label>
            <input type="email" className="email" name="email" required="true" />
          </div>
        </div>
        <div className="input-box">
          <div className="input-box__input">
            <i className="fas fa-lock"></i>
            <label for="password">Password</label>
            <input
              type="password"
              className="password"
              name="password"
              required="true"
              minlength="7"
            />
          </div>
        </div>
        <div className="input-box">
          <div className="input-box__input">
            <i className="fas fa-scroll"></i>
            <label for="rol">Rol</label>
            <input type="text" className="rol" name="rol" required="true" />
          </div>
        </div>
        <input
          type="submit"
          className="btn btn-primary btn-submit"
          value="Sign up"
        />
        <div className="backup-links">
          <div className="text-end">
            <button onClick={changeFromSignupToLogin} type="button" className="btn">
              Login
            </button>
          </div>
          <div className="text-end">
            <button
              onClick={changeFromSignupToForgot}
              type="button"
              className="btn"
            >
              Forgot password
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;