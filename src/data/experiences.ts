// Types
import { Experience } from '@interfaces/data';

export const experiences: Record<string, Experience> = {
  'plutus-mazu-quantitative-developer': {
    title: 'Quantitative Developer @ Plutus Mazu',
    subtitle: 'TBD',
    description: 'TBD',
    image: '/images/plutus_mazu_logo.jpg',
    startDate: 'Aug 2021',
    endDate: 'Dec 2021',
    projects: [],
    skills: [
      'cython',
      'python',
      'c++',
      'influxdb',
      'sql',
    ],
    skillsToShow: 5,
    files: [],
  },
  'solar-ai-software-engineering-internship': {
    title: 'Software Engineer Intern @ Solar AI Technologies',
    subtitle: 'Full-stack software development',
    description : `
      <li>
      Designed and implemented modern cloud
      architectural solutions with Serverless IaC.
      </li>
      <li>
      Improved data access and integration through
      denormalization of read-heavy data from PostgreSQL to Elasticsearch.
      </li>
      <li>
      Set up data ingestion workflows on AWS from S3
      into Elasticsearch with SQS, State Machines, and Lambda.
      </li>
      <li>
      Designed GraphQL schemas with AppSync, Lambda, and Velocity
      to resolve queries and mutations on DynamoDB and Elasticsearch.
      </li>
      <li>
      Key contributor across frontend React/Next.js platforms involving Redux,
      journey-based UIs, and geo-filtering/pagination with Google Maps API.
      </li>
    `,
    image: '/images/solar_ai_logo.jpg',
    startDate: 'Feb 2021',
    endDate: 'Aug 2021',
    projects: [],
    skills: [
      'serverless',
      'aws',
      'react-js',
      'next-js',
      'graphql',
      'aws-appsync',
      'dynamodb',
      'elasticsearch',
      'jest',
    ],
    skillsToShow: 5,
    files: [],
  },
  'shopee-automation-internship': {
    title: 'Regional Finance Automation Intern @ Shopee',
    subtitle: 'Automation scripts & application development',
    description : `
      <li>
      Acted as the consultant and developer of automation solutions in the department, 
      from conceptualisation and planning to implementation.
      </li>
      <li>
      Sole owner and maintainer of all existing automation scripts, 
      completing <strong>4</strong> additional automation projects 
      with <strong>Google APIs</strong> and <strong>Pandas</strong>, 
      deployed on Shopee's in-house server and scheduled with </strong>Apache Airflow</strong>, 
      improving efficiency by <strong>over 40%</strong>.
      </li>
      <li>
      Developed a desktop application for non-technical users 
      to manipulate data across hundreds of Google Sheets, 
      saving <strong>>3 man-hours</strong> per campaign.
      </li>
      <li>
      Conceptualised and developed a full-stack web application 
      from scratch to overhaul processes for greater scalability.
      </li>
    `,
    image: '/images/shopee_logo.jpg',
    startDate: 'Jul 2020',
    endDate: 'Feb 2021',
    projects: [],
    skills: [
      'python',
      'javascript',
      'docker',
      'django',
      'react-js',
      'google-api',
    ],
    skillsToShow: 5,
    files: [
      {
        title: 'Testimonial',
        url: '/files/Shopee_Automation_Internship_Testimonial.pdf',
        thumbnail: '/images/shopee_automation_intern_testimonial_thumbnail.png',
      },
    ],
  },
  'suss-teaching-assistant': {
    title: 'Machine Learning Teaching Assistant @ SUSS',
    subtitle: 'Prepared materials and conducted workshops',
    description : `
      <li>
      Developed materials for building the intuition behind machine learning 
      by understanding gradient descent in linear and logistic regressions and neural networks.      
      </li>
      <li>
      At the end of each workshop, students are able to utilize sci-kit learn and keras 
      to implement machine learning solutions to simple problems 
      including image classification, sentiment analysis, and entity extraction.
      </li>
    `,
    image: '/images/suss_logo.jpg',
    darkModeImage: '/images/suss_logo_dark.jpg',
    startDate: 'Jul 2020',
    endDate: 'Present',
    projects: [],
    skills: [
      'python',
      'machine-learning',
      'numpy',
      'keras',
      'pandas',
    ],
    skillsToShow: 3,
    files: [],
  },
};
