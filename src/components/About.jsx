import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard =({ index, title, icon }) => {
  return(
    <Tilt
      className='xs:w-[250px] w-full'
    >
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt={title}
            className='w-16 h-16 object-contain'
          />
          <h3
          className='text-white text-[20px] font-bold text-center'
          >{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div
    variants={textVariant()}
    >
      <p className={styles.sectionSubText}>INTRODUCTION</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    <motion.p
    variants={fadeIn('', '', 0.1, 1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
    I am the accomplished founder of ADLM Studio and a seasoned Quantity Surveyor. 
    With a Bachelor's degree in Quantity Surveying from Obafemi Awolowo University, I am experienced in the use of
    BIM tools such as Autodesk Revit, AutoCAD, Autodesk Navisworks, Planswift, MyBuildCost, MsProject, amongst others,
    I embarked on a mission to bridge the knowledge gap in the construction industry. 
    My dedication led to the creation of ADLM Studio in 2020, an institution committed to empowering 
    professionals with digital skills in areas such as Building Information Modeling (BIM) and digital 
    construction. My vision and expertise have propelled ADLM Studio to the forefront of digital 
    education in the construction sector.
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((services, index) => (
        <ServiceCard 
          key={services.title}
          index={index}
          {...services}
        />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, 'about')