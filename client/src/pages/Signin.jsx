import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function Signin() {
  const [formData, setFormData] = useState({});
  const {loading, error: errorMessage} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) =>{
    setFormData({...formData, [e.target.id] : e.target.value.trim()});
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure('Veuillez remplir tous les champs'));
    }
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin',{
        method : 'POST',
        headers : {'Content-Type': 'application/json'}, 
        body : JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  }
  
  return <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>

        {/* Left Side */}
        <div className='flex-1'>
        <img src="https://varuna-biodiversite.org/wp-content/themes/varuna_theme/img/logo.svg" className="mr-20 h-40 sm:h-40" alt="Varuna Logo" />
        <p className='text-sm mt-5'>Vous pouvez vous connecter avec votre mail et mot de passe ou avec Google</p>
        </div>

        {/* Right Side */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value="Votre email" />
              <TextInput type='email' placeholder="name@company.com" id='email' onChange={handleChange}/>
            </div>
            <div>
              <Label value="Votre mot de passe" />
              <TextInput type='password' placeholder="*********" id='password' onChange={handleChange}/>
            </div>
            <Button gradientDuoTone='tealToLime' type='submit' disabled={loading}>
              {
                loading ? (
                  <>
                  <Spinner size='sm'/>
                  <span className='pl-3'>Chargement...</span>
                  </>
                ) : 'Se connecter'
              }
            </Button>
            <OAuth/>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Pas de compte?</span>
            <Link to='/sign-up' className='text-blue-500'>
              S'inscrire
            </Link>
          </div>
          {
            errorMessage && (
              <Alert className='mt-5' color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  
}

