import LoginForm from '../../components/login-form';
import './index.css'

function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <img src="/src/assets/396-1.webp" alt="pok logo" width={150} />
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
