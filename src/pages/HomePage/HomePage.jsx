import React from 'react'
import './HomePage.scss'
import { servicesData } from '../../data/services'
import ServiceGrid from '../../components/ServiceGrid/ServiceGrid.jsx'
import Hero from '../../components/Hero/Hero.jsx'
import ContactForm from '../../components/ContactForm/ContactForm.jsx'
import SectionIntro from '../../components/SectionIntro/SectionIntro.jsx'
export default function HomePage () {
  return (
    <div className='homepage'>
      <Hero backgroundUrl='https://www.sternfenster.com/app/uploads/2025/03/Before-and-after.jpg' />
      <SectionIntro
        title="Welcome to Camarun: Your Trusted Partner in Home Renovation"
        // subtitle="Transforming Spaces, Enhancing Lives"
        text="At Camarun, we specialize in turning your renovation dreams into reality. With a team of experienced professionals, we offer comprehensive services that cover every aspect of home improvement. From concept to completion, we are dedicated to delivering exceptional craftsmanship and unparalleled customer service. Explore our wide range of services designed to enhance the beauty, functionality, and value of your home."
      />
      <ServiceGrid services={servicesData} />

      <ContactForm />
    </div>
  )
}
