import { useState } from 'react'
import { Alert, Button, FileInput, Select, TextInput } from 'flowbite-react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CreatePost() {
  const navigate = useNavigate();
  const [publishError, setPublishError] = useState(null);
  const [formData, setFormData] = useState({});
  const [file, setFile] = useState('');

  const handleUpload = (e) => {
    const formdata = new FormData()
    formdata.append('file', file)
    axios.post('http://localhost:3000/upload', formdata)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch('/api/post/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }
      if (res.ok) {
        setPublishError(null);
        navigate(`/post/${data.slug}`);
      }
    } catch (error) {
      setPublishError('Something went wrong');
    }
  };

  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-7 font-semibold'>Créer une ressource</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-4 sm:flex-row justify-between'>
          <TextInput
            type='text'
            placeholder='Titre'
            required
            id='title'
            className='flex-1'
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <Select
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option value='uncategorized'>Choisir une categorie</option>
            <option value='javascript'>JavaScript</option>
            <option value='reactjs'>React.js</option>
            <option value='nextjs'>Next.js</option>
          </Select>
        </div>
        <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
          <FileInput
            type='file'
            accept='image/*'
            onChange={e => setFile(e.target.files[0])}
          />
          <Button
            type='button'
            gradientDuoTone='tealToLime'
            size='sm'
            outline
            onClick={handleUpload}
          >
            Ajouter image
          </Button>
        </div>
        <ReactQuill
          theme='snow'
          placeholder='Ecrivez quelque chose...'
          className='h-72 mb-12'
          required
          onChange={(value) => {
            setFormData({ ...formData, content: value });
          }}
        />
        <Button type='submit' gradientDuoTone='tealToLime'>
          Ajouter
        </Button>
        {publishError && (
          <Alert className='mt-5' color='failure'>
            {publishError}
          </Alert>
        )}
      </form>
    </div>
  );
}