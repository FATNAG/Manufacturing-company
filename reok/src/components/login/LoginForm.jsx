import LoginImage from 'media/images/login-image-02.png';
import HeaderLoginForm from './HeaderLoginForm';
import LeftContainerLoginForm from './LeftContainerLoginForm';

const LoginForm = () => {
  return (
    <div className="form-container" id="login-container">
      <LeftContainerLoginForm image={LoginImage} />
      <HeaderLoginForm />
      <RightContainerLoginForm />
    </div>
  );
};

const RightContainerLoginForm = () => {
  return (
    <div className="row form-container__right">
      <form action="../index.html" className="d-grid gap-2">
        <h2 className="text-center">Login</h2>
        <p>
          If you already have an account enter your email and enjoy our app.
        </p>
        <div className="input-box">
          <div className="input-box__input">
            <i className="fas fa-user"></i>
            <label for="user">Username</label>
            <input type="text" className="user" name="user" required="true" />
          </div>
        </div>
        <div className="input-box">
          <div className="input-box__input">
            <i className="fas fa-lock"></i>
            <label for="email">Password</label>
            <input type="password" className="password" name="password" required="true" />
          </div>
        </div>
        <div className='otherLinksToLogin'>
          <div className='btn btn-primary fs-2'>
            <i className="fab fa-google-plus-g"></i>
          </div>
          <div className='btn btn-primary fs-2'>
            <i className="fab fa-facebook-f"></i>
          </div>
          <div className='btn btn-primary fs-2'>
            <i className="fab fa-apple"></i>
          </div>
        </div>
        <input
          type="submit"
          className="btn btn-primary btn-submit"
          value="Login"
          id="input-login"
        />
        <div className="backup-links">
          <div className="text-end">
            <button onclick="toggleLoginSignup()" type="button" className="btn">
              Signup
            </button>
          </div>
          <div className="text-end">
            <button onclick="toggleLoginForgot()" type="button" className="btn">
              Forgot password
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;