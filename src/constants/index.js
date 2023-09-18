import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'BIM Manager',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  // {
  //   name: 'revit',
  //   icon: revit,
  // },
  // {
  //   name: 'navisworks',
  //   icon: Navisworks,
  // },
  // {
  //   name: 'planswift',
  //   icon: planswift,
  // },
  // {
  //   name: 'Excel',
  //   icon: Excel,
  // },
];

const experiences = [
  {
    title: 'Student Intern',
    company_name: 'Richard Brainsworth Resource Lid',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'September 2019 - February 2020',
    points: [
      'Preparation of Detailed Bill of Quantites.',
      'Preparation of Detailed Material and Labour Schedule for Works.',
      'Construction Site Monitoring.',
      'Participation in Tendering Exercise.',
    ],
  },
  {
    title: 'Junior Quantity Surveyor',
    company_name: 'ENL Consortium',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'March 2022 - September 2022',
    points: [
      'Preparation of Detailed Bill of Quantites.',
      'Preparation of Detailed Material and Labour Schedule for Works.',
      'Construction Site Monitoring.',
      'Participation in Tendering Exercise.',
      'Preparation of CashFlow Forecast',
      'Preparation of Budget Monitoring System',
      'Digitization of Quantity Surveying Department',
    ],
  },
  {
    title: 'Quantity Surveyor',
    company_name: 'Energobuildings Construction Limited',
    icon: shopify,
    iconBg: '#383E56',
    date: 'January 2022 - September 2022',
    points: [
      'Preparation of Detailed Bill of Quantites.',
      'Preparation of Detailed Material and Labour Schedule for Works.',
      'Construction Site Monitoring.',
      'Participation in Tendering Exercise.',
      'Preparation of CashFlow Forecast',
    ],
  },
  {
    title: 'Founder',
    company_name: 'ADLM Studio',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'September 2020 - Present',
    points: [
      'Training on the use of Building Information Modelling (BIM) Tools',
      'Development of BIM tools Plugin',
      'Preparation of Detailed Bill of Quantities',
      'Preparation of Detailed Material Schedule',
      'Preparation of Construction Contract Documents',
      'YouTube Training Sessions',
      'Team Activities Coordination',
    ],
  },
];

const testimonials = [
  {
    testimonial: "Quasim Adedolapo guidance in our BIM course was exceptional. His deep knowledge and personalized support made the learning experience truly enriching",
    name: 'Sunday',
    designation: 'Lead QS',
    company: 'Brainsworth Resources',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial: "Quasim Adedolapo's passion for digital construction is contagious. His dedication to student success is evident in his engaging teaching style and commitment to excellence.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial: "Quasim Adedolapo's leadership at ADLM Studio is remarkable. His vision and expertise have created a platform for industry professionals to thrive in the digital age.",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Planswift Plugin',
    description: "With the ADLM Planswift Plugin, users can generate precise quantity takeoffs directly from digital blueprints, reducing manual calculations and minimizing errors. The plugin's intuitive features and automation capabilities enable construction professionals to work more efficiently, saving valuable time and resources.",
    tags: [
      {
        name: 'Planswift',
        color: 'blue-text-gradient',
      },
      {
        name: 'Quantity Takeoff',
        color: 'green-text-gradient',
      },
      {
        name: 'Estimation',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://www.youtube.com/watch?v=Z4yLgIezZjA&list=PLk1KkUNE9ZrMSApHFe3-YpiV7b-NbwhYM',
  },
  {
    name: 'BIM Course',
    description: 'The ADLM BIM Course on MEP (Mechanical, Electrical, and Plumbing) is a comprehensive program designed to equip professionals with the knowledge and skills needed to excel in the field of MEP engineering within the context of Building Information Modeling (BIM). This specialized course covers topics such as 3D modeling of MEP systems, coordination with architectural and structural elements, energy analysis, and sustainability considerations.',
    tags: [
      {
        name: 'BIM',
        color: 'blue-text-gradient',
      },
      {
        name: 'MEP',
        color: 'green-text-gradient',
      },
      {
        name: 'Revit',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://youtu.be/A7AwQX_3Lxs?si=IGrawK1d2hd-TuMs',
  },
  {
    name: 'Trip Guide',
    description: 'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
];

export {services, technologies, experiences, testimonials, projects};
