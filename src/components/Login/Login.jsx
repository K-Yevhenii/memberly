import "./Login.scss";
import Button from "../Button/Button";

function Login() {
  return (
    <div className="auth-buttons text--sm">
      <Button variant="secondary" size="sm" className="auth-buttons__btn">
        Login
      </Button>
      <Button variant="primary" size="sm" className="auth-buttons__btn">
        Sing up
      </Button>
    </div>
  );
}

export default Login;
