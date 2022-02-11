import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useContext, useEffect, useState } from 'react';
import { RecipesContext } from '../context/Context';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';

export default function Login() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [btnDisabled, setBtnDisabled] = useState(true);
  const { state, setState } = useContext(RecipesContext);
  const router = useRouter();

  interface MinhaInterface {
    target: {
      name: string;
      value: string;
    };
  }
  const { email, password } = loginData;

  const handleChange = ({ target: { name, value } }: MinhaInterface) => {
    if (name === 'email') {
      setLoginData({
        ...loginData,
        email: value
      });
    } else if (name === 'password') {
      setLoginData({
        ...loginData,
        password: value
      });
    }
  };

  const LoginButtonAble = () => {
    const MIN_LENGTH_PASSWORD = 6;
    const re = /\S+@\S+\.\S+/;
    if (re.test(email) && password.length >= MIN_LENGTH_PASSWORD) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  };

  const onClickBtnLogin = () => {
    setState({
      ...state,
      email
    });
    router.push('/foods');
  };

  useEffect(() => {
    LoginButtonAble();
  }, [loginData]);

  return (
    <main>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          m: 1,
          width: '97wh',
          height: '97vh'
        }}
      >
        <img
          src="/_next/static/media/logo.59354b94.png"
          alt="Logo composto por uma taça, um garfo e uma colher"
          width="200px"
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '18px'
          }}
        >
          <TextField
            required
            id="outlined-required"
            helperText="Please enter your email"
            label="E-mail"
            value={email}
            name="email"
            onChange={handleChange}
          />
          <TextField
            id="demo-helper-text-misaligned"
            helperText="Please enter your password"
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
            margin="normal"
            value={password}
            onChange={handleChange}
          />
        </Box>
        <Button
          disabled={btnDisabled}
          variant="outlined"
          color="primary"
          size="medium"
          onClick={onClickBtnLogin}
        >
          Login
        </Button>
      </Box>
    </main>
  );
}
