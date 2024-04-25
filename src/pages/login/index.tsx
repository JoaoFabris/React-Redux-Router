import LoginForm from '../../components/login-form';
import './index.css'

function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <img className='img-pok' src="/src/assets/396-1.webp" alt="pok logo" />
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
