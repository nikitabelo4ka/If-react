import React, { useState } from 'react';
import '../../assets/styles/SignIn/SignInForm.css';

function SignInForm() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const isSignIn = localStorage.getItem('isSignIn');

  if (isSignIn === 'true') {
    window.location.replace('/');
  }

  function checkData(event, email, password) {
    event.preventDefault();
    const defaultEmail = 'belko.nikita@yandex.ru';
    const defaultPassword = '1111';

    if (email === defaultEmail && password === defaultPassword) {
      localStorage.setItem('isSignIn', 'true');
      window.location.replace('/');
    } else {
      alert('Invalid email or password');
    }
  }

  return (
    <form
      className="sign-in-form"
      onSubmit={(event) => checkData(event, emailValue, passwordValue)}
    >
      <p className="sign-in-label">Sign in</p>
      <div className="sign-in-email-wrap">
        <label className="sign-in-email-label" htmlFor="sign-in-email">
          Email address
        </label>
        <input
          value={emailValue}
          onChange={(event) => setEmailValue(event.target.value)}
          className="sign-in-email-input"
          type="email"
          id="sign-in-email"
        />
      </div>
      <div className="sign-in-password-wrap">
        <label className="sign-in-password-label" htmlFor="sign-in-password">
          Password
        </label>
        <input
          value={passwordValue}
          onChange={(event) => setPasswordValue(event.target.value)}
          className="sign-in-password-input"
          type="password"
          id="sign-in-password"
        />
      </div>
      <button className="sign-in-button" type="submit">
        Sign in
      </button>
    </form>
  );
}

export default SignInForm;
