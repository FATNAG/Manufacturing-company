import ForgotImage from "media/images/forgot-01.png";
import HeaderLoginForm from "./HeaderLoginForm";
import LeftContainerLoginForm from "./LeftContainerLoginForm";

const ForgotForm = () => {
  return (
    <div class="form-container" id="forgot-container">
      <LeftContainerLoginForm image={ForgotImage} />
      <HeaderLoginForm />
      <RightContainerSignupForm />
    </div>
  );
};

const RightContainerSignupForm = () => {

  const changeFromForgotToLogin = () => {
    document.getElementById("forgot-container").classList.toggle("active");
    document.getElementById("login-container").classList.toggle("active");
  };

  const changeFromForgotToSignup = () => {
    document.getElementById("forgot-container").classList.toggle("active");
    document.getElementById("signup-container").classList.toggle("active");
  };

  return (
    <div class="row form-container__right">
      <form class="d-grid gap-2">
        <h3>Did you forget your password?</h3>
        <p>
          There's no problem write your email and we will send instructions to
          reset your password
        </p>
        <div class="input-box">
          <div class="input-box__input">
            <i class="fas fa-envelope"></i>
            <label for="email">Email</label>
            <input type="email" class="email" name="email" required="true" />
          </div>
        </div>
        <input
          type="submit"
          class="btn btn-primary btn-submit"
          value="Submit"
        />
      </form>
      <div class="backup-links">
        <div class="text-end">
          <button onClick={changeFromForgotToLogin} type="button" class="btn">
            Login
          </button>
        </div>
        <div class="text-end">
          <button onClick={changeFromForgotToSignup} type="button" class="btn">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotForm;
