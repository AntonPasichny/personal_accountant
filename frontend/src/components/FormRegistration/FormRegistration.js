import { useState, useEffect } from 'react';
import c from './FormRegistration.module.css';

const FormRegistration = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [password, setPasword] = useState('');

  const handleInput = (e) => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);

        break;
      case 'password':
        setPasword(e.target.value);
        break;

      default:
        break;
    }
  };

  useEffect(() => {}, [name]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ name, password });

    reset();
  };

  const reset = () => {
    setName('');
    setPasword('');
  };

  return (
    <form className={c.form}>
      <label className={c.label}>
        Имя пользователя
        <input
          type='text'
          name='name'
          value={name}
          onChange={handleInput}
          className={c.input}
          required
        />
      </label>
      <label className={c.label}>
        Пароль
        <input
          type='text'
          name='password'
          value={password}
          onChange={handleInput}
          className={c.input}
          required
        />
      </label>
      <button type='submit' className={c.button}>
        Зарегестрироваться
      </button>
    </form>
  );
};

export default FormRegistration;
