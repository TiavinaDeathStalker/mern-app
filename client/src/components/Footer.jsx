import React from 'react'
import { Footer } from 'flowbite-react'
import {BsFacebook, BsInstagram, BsTwitterX, BsGithub} from 'react-icons/bs'

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                <div className='mt-5'>
                <img src="https://varuna-biodiversite.org/wp-content/themes/varuna_theme/img/logo.svg" className="mr-40 h-32 sm:h-32" alt="Varuna Logo" />
                </div>
                <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                    <div>
                    <Footer.Title title='A PROPOS'/>
                    <Footer.LinkGroup col>
                        <Footer.Link href='https://varuna-biodiversite.org/en/' target='_blank' rel='noopener noreferrer '>
                            Projet VARUNA
                        </Footer.Link>
                        <Footer.Link href='https://varuna-biodiversite.org/en/the-program/' target='_blank' rel='noopener noreferrer '>
                            Programmes VARUNA
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div> 
                    <div>
                    <Footer.Title title='SUIVEZ-NOUS'/>
                    <Footer.LinkGroup col>
                        <Footer.Link href='https://www.linkedin.com/company/varuna-biodiversit%C3%A9/?viewAsMember=true' target='_blank' rel='noopener noreferrer '>
                            Linkedin
                        </Footer.Link>
                        <Footer.Link href='https://web.facebook.com/people/Varuna-Biodiversit%C3%A9/100089967874690/?_rdc=2&_rdr' target='_blank' rel='noopener noreferrer '>
                            Facebook
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div> 
                    <div>
                    <Footer.Title title='INFORMATIONS LEGALES'/>
                    <Footer.LinkGroup col>
                        <Footer.Link href='#'>
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link href='#'>
                            Termes &amp; conditions
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div> 

                </div>

            </div>
            <Footer.Divider/>
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
                <Footer.Copyright href='#' by='Tiavina DeathStalker' year={new Date().getFullYear()}/>
                <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                    <Footer.Icon href='#' icon={BsFacebook}/>
                    <Footer.Icon href='#' icon={BsInstagram}/>
                    <Footer.Icon href='#' icon={BsTwitterX}/>
                    <Footer.Icon href='#' icon={BsGithub}/>
                </div>
            </div>
        </div>
    </Footer>
  )

 
}
