import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

function LoginPage() {
  return (
    <div>
      <h1>Health Tracker</h1>

      <LoginForm />
      <RegisterForm />
    </div>
  );
}

export default LoginPage;