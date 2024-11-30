import { Button, FileInput, Select, TextInput } from 'flowbite-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
export default function CreatePost() {
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-7 font-semibold'>Creer une poste</h1>
      <form className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4 sm:flex-row justify-between'>
          <TextInput
            type='text'
            placeholder='Titre'
            required
            id='title'
            className='flex-1'
          />
          <Select>
            <option value='uncategorized'>Choisir une categorie</option>
            <option value='javascript'>JavaScript</option>
            <option value='reactjs'>React.js</option>
            <option value='nextjs'>Next.js</option>
          </Select>
        </div>
        <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
          <FileInput type='file' accept='image/*' />
          <Button
            type='button'
            gradientDuoTone='tealToLime'
            size='sm'
            outline
          >
            Ajouter image
          </Button>
        </div>
        <ReactQuill
          theme='snow'
          placeholder='Ecrivez quelque chose...'
          className='h-72 mb-12'
          required
        />
        <Button type='submit' gradientDuoTone='tealToLime'>
          Ajouter
        </Button>
      </form>
    </div>
  );
}