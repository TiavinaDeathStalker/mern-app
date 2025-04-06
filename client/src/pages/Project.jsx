import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Project() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6g88c8l', 'template_jd3ewjg', form.current, {
        publicKey: 'xeJJx9_6Cb4jkXNl6',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Ambatolahy%2C%20Madagascar&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contactez-nous pour votre visite virtuelle</h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Explorez le circuit d'Ambatolahy à travers notre visite virtuelle et découvrez la richesse de ce lieu unique.
              Si vous avez des questions ou souhaitez plus d'informations sur le circuit, n'hésitez pas à nous contacter.
            </p>
            <form ref={form} onSubmit={sendEmail}>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Votre Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Votre Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Envoyer
            </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              Pour toute question concernant le circuit d'Ambatolahy ou pour organiser votre visite virtuelle, contactez-nous !
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
