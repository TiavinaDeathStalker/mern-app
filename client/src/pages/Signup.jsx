import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OAuth from '../components/OAuth';

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) =>{
    setFormData({...formData, [e.target.id] : e.target.value.trim()});
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Veuillez remplir tous les champs');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup',{
        method : 'POST',
        headers : {'Content-Type': 'application/json'}, 
        body : JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate('/sign-in');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  }
  
  return <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>

        {/* Left Side */}
        <div className='flex-1'>
        <img src="https://varuna-biodiversite.org/wp-content/themes/varuna_theme/img/logo.svg" className="mr-20 h-40 sm:h-40" alt="Varuna Logo" />
        <p className='text-sm mt-5'>Vous pouvez vous inscrire avec votre mail et mot de passe ou avec Google</p>
        </div>

        {/* Right Side */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value="Votre nom d'utilisateur" />
              <TextInput type='text' placeholder="Nom d'utilisateur" id='username' onChange={handleChange}/>
            </div>
            <div>
              <Label value="Votre email" />
              <TextInput type='email' placeholder="Email" id='email' onChange={handleChange}/>
            </div>
            <div>
              <Label value="Votre mot de passe" />
              <TextInput type='password' placeholder="Mot de passe" id='password' onChange={handleChange}/>
            </div>
            <Button gradientDuoTone='tealToLime' type='submit' disabled={loading}>
              {
                loading ? (
                  <>
                  <Spinner size='sm'/>
                  <span className='pl-3'>Chargement...</span>
                  </>
                ) : "S'inscrire"
              }
            </Button>
            <OAuth />
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Vous avez déja un compte?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Se connecter
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
