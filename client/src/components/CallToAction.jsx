import { Button } from 'flowbite-react';
export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Une question ? Une demande ? Nous sommes à un clic de vous !
            </h2>
            <p className='text-gray-500 my-2'>
                Nous aimons recevoir vos messages. Contactez-nous et découvrez à quel point il est facile de trouver une réponse adaptée à vos attentes.
            </p>
            <Button gradientDuoTone='tealToLime' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.100jsprojects.com" target='_blank' rel='noopener noreferrer'>
                    Contacter nous
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://media.istockphoto.com/id/1271752802/photo/phone-and-e-mail-icons-on-wooden-cubes-with-contact-us-text-on-blue-background-web-page.jpg?s=612x612&w=0&k=20&c=dk9oPaDy_L9mv_icOMgsFGzEDrX0NUI3I8xBQ-DAxQM=" />
        </div>
    </div>
  )
}
