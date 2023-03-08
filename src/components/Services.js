import React from 'react';
//icon
import { BsArrowUpRight } from 'react-icons/bs';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

//services data
const services = [
  {
    name: 'UI/UX Design',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi at porro quos quis minima mollitia a aut quam doloribus inventore!',
    link: 'Learn more',
  },
  {
    name: 'Development',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi at porro quos quis minima mollitia a aut quam doloribus inventore!',
    link: 'Learn more',
  },
  {
    name: 'Digital Marketing',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi at porro quos quis minima mollitia a aut quam doloribus inventore!',
    link: 'Learn more',
  },
  {
    name: 'Product Branding',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi at porro quos quis minima mollitia a aut quam doloribus inventore!',
    link: 'Learn more',
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image*/}
          <div className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">I'm Freelance Front-end Developer with over 5 years of experience.</h3>
            <button>See my work</button>
          </div>
          {/* service */}
          <div className="flex-1">
            {/* service list */}
            <div>
              {services.map((service, index) => {
                //destruktur service
                const{name, description, link} = service;
                return (
                  <div key={index}>
                    <div className='max-w-[476px]'>
                      <h4>{name}</h4>
                      <p>description</p>
                    </div>
                    <div>links</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
