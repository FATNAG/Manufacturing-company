import SignupImage from "media/images/signup-01.png";
import HeaderLoginForm from "./HeaderLoginForm";
import LeftContainerLoginForm from "./LeftContainerLoginForm";

const SignupForm = () => {
  return (
    <div class="form-container" id="signup-container">
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
    <div class="row form-container__right">
      <form class="d-grid gap-2">
        <h2 class="text-center">Signup</h2>
        <div class="input-box">
          <div class="input-box__input">
            <i class="fas fa-signature"></i>
            <label for="firstname">First name</label>
            <input
              type="text"
              class="firstname"
              name="First name"
              required="true"
            />
          </div>
        </div>
        <div class="input-box">
          <div>
            <i class="fas fa-file-signature"></i>
            <label for="lastname">Last name</label>
            <input
              type="text"
              class="lastname"
              name="Lastname"
              required="true"
            />
          </div>
        </div>
        <div class="input-box">
          <div class="input-box__input">
            <i class="fas fa-user"></i>
            <label for="username">Username</label>
            <input
              type="text"
              class="username"
              name="username"
              required="true"
              minlength="5"
            />
          </div>
        </div>
        <div class="input-box">
          <div class="input-box__input">
            <i class="fas fa-envelope"></i>
            <label for="mail">Email</label>
            <input type="email" class="email" name="email" required="true" />
          </div>
        </div>
        <div class="input-box">
          <div class="input-box__input">
            <i class="fas fa-lock"></i>
            <label for="password">Password</label>
            <input
              type="password"
              class="password"
              name="password"
              required="true"
              minlength="7"
            />
          </div>
        </div>
        <div class="input-box">
          <div class="input-box__input">
            <i class="fas fa-scroll"></i>
            <label for="rol">Rol</label>
            <input type="text" class="rol" name="rol" required="true" />
          </div>
        </div>
        <input
          type="submit"
          class="btn btn-primary btn-submit"
          value="Sign up"
        />
        <div class="backup-links">
          <div class="text-end">
            <button onClick={changeFromSignupToLogin} type="button" class="btn">
              Login
            </button>
          </div>
          <div class="text-end">
            <button
              onClick={changeFromSignupToForgot}
              type="button"
              class="btn"
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