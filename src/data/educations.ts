// Types
import { Education } from '@interfaces/data';

export const educations: Record<string, Education> = {
  'suss-bsc-finance': {
    title: 'Bachelor of Science, Major in Finance, Minor in Math @ SUSS',
    subtitle: 'First-Class Honours — CGPA: 4.65 / 5.00',
    description: `
      📚 <strong>Academic Achievements</strong> <br>
      &bull;&nbsp; Dean's Academic Achievers List for Academic Excellence AY2018/2019 <br>
      &bull;&nbsp; Valedictorian Recipient of Chettiar's Temple Society Scholarship Awards 2020 <br>
      &bull;&nbsp; SUSS Full Time Scholarship 2020<br>
      <br>
      🔑 <strong>Key Appointments</strong> <br>
      &bull;&nbsp; Investment Interest Group Executive Committee <br>
      &bull;&nbsp; Ambassador for Marketing Campaigns <br>
      <br>
      ⭐️⭐️⭐️ <strong>Highest Distinctions (A+)</strong>: <br>
      &bull;&nbsp; ACC201 &mdash; Financial Accounting <br>
      &bull;&nbsp; ANL251 &mdash; Python Programming <br>
      &bull;&nbsp; BUS105 &mdash; Statistics <br>
      &bull;&nbsp; ENG335 &mdash; Machine Learning <br>
      &bull;&nbsp; FIN205 &mdash; Data Technologies in Financial Modeling <br>
      &bull;&nbsp; FIN303 &mdash; Financial Management <br>
      &bull;&nbsp; FIN311 &mdash; Mathematics and Programming for Finance <br>
      &bull;&nbsp; FIN353 &mdash; Portfolio Management <br>
      &bull;&nbsp; FIN379 &mdash; Financial Cryptography <br>
      &bull;&nbsp; MTH107 &mdash; Calculus I <br>
      &bull;&nbsp; MTH108 &mdash; Calculus II <br>
      &bull;&nbsp; MTH207 &mdash; Linear Algebra <br>
      &bull;&nbsp; MTH208 &mdash; Advanced Linear Algebra <br>
      &bull;&nbsp; MTH305 &mdash; Principles of Applied Probability <br>
      &bull;&nbsp; MTH306 &mdash; Further Applied Probability <br>
      <br>
      ⭐️⭐️ <strong>High Distinctions (A)</strong>: <br>
      &bull;&nbsp; BUS100 &mdash; Business Skills and Management <br>
      &bull;&nbsp; ECO201 &mdash; Managerial Economics <br>
      &bull;&nbsp; FIN301 &mdash; Financial Instruments, Institutions and Markets <br>
      &bull;&nbsp; FIN383 &mdash; Financial Technologies and Innovations <br>
      &bull;&nbsp; FIN359 &mdash; Derivative Securities <br>
      &bull;&nbsp; FIN498 &mdash; Financial Manager in the Digital Economy <br>
      <br>
      ⭐️ <strong>Distinctions (A-)</strong>: <br>
      &bull;&nbsp; HRM203 &mdash; Human Behaviour in Organisations <br>
      &bull;&nbsp; LOG202 &mdash; Managing Operations <br>
      &bull;&nbsp; MKT202 &mdash; Marketing Managment <br>
      &bull;&nbsp; MTH355 &mdash; Mathematical Optimization <br>
      &bull;&nbsp; SCO101 &mdash; Why Do Good? <br>
      &bull;&nbsp; SCO399 &mdash; Design-X <br>
    `,
    image: '/images/suss_logo.jpg',
    darkModeImage: '/images/suss_logo_dark.jpg',
    startDate: 'Jul 2018',
    endDate: 'May 2022',
    url: '',
    files: [
      {
        title: 'SUSS Scholarship',
        url: '/images/suss_scholarship.jpg',
        thumbnail: '/images/suss_scholarship.jpg',
      },
      {
        title: 'Dean\'s List AY18/19',
        url: '/images/suss_deans_list_1819.jpg',
        thumbnail: '/images/suss_deans_list_1819.jpg',
      },
    ],
  },
  'columbia-university-financial-engineering-risk-management-course': {
    title: 'Financial Engineering & Risk Management Part 1 on Coursera',
    subtitle: 'Columbia University',
    description: `
      Interest Rates and Fixed Income Instruments <br>
      Floating Rate Bonds and Term Structure of Interest Rates <br>
      Forwards, Swaps, Futures, Options <br>
      Binomial Model for Options Pricing <br>
      Term Structure Lattice Models & Calibration &mdash; Black-Derman-Toy Model <br>
      Defaultable Bonds <br>
      Mortgage-Backed Securities <br>
    `,
    image: '/images/coursera_logo.jpg',
    startDate: 'Jun 2020',
    endDate: 'Jun 2020',
    url: 'https://www.coursera.org/account/accomplishments/verify/5Q4Q5YYBKGF7',
    files: [
      {
        title: 'Course Certificate',
        url: '/files/Coursera_Financial_Engineering_&_Risk_Management_Certificate.pdf',
        thumbnail: '/images/coursera_financial_engineering_&_risk_management_certificate.png',
      },
    ],
  },
  'fudan-university-international-summer-programme': {
    title: 'International Summer Programme @ Fudan University',
    subtitle: 'GPA: 3.58 / 4.00',
    description: `
      GPA: 3.58 / 4.00 <br>
      International Trade - A <br>
      International Finance - B+ <br>
      Chinese Kungfu - B+ <br>
    `,
    image: '/images/fudan_university_logo.png',
    startDate: 'Jul 2019',
    endDate: 'Aug 2019',
    url: 'https://www.coursera.org/account/accomplishments/verify/5Q4Q5YYBKGF7',
    files: [],
  },
  'imperial-college-london-math-for-machine-learning-specialisation': {
    title: 'Mathematics for Machine Learning Specialisation on Coursera',
    subtitle: 'Imperial College London',
    description: `
      Linear Algebra <br>
      Multivariate Calculus <br>
      Principal Component Analysis <br>
    `,
    image: '/images/coursera_logo.jpg',
    startDate: 'Jul 2019',
    endDate: 'Jul 2019',
    url: 'https://www.coursera.org/account/accomplishments/specialization/VTF2GM2C3YCV',
    files: [
      {
        title: 'Specialisation',
        url: '/files/Coursera_Math_for_Machine_Learning_Specialisation_Certificate.pdf',
        thumbnail: '/images/coursera_math_for_machine_learning_specialisation_certificate.png',
      },
      {
        title: 'Linear Algebra',
        url: '/files/Coursera_Math_for_Machine_Learning_Specialisation_Certificate.pdf',
        thumbnail: '/images/coursera_math_for_machine_learning_linear_algebra_certificate.png',
      },
      {
        title: 'Multivariable Calculus',
        url: '/files/Coursera_Math_for_Machine_Learning_Multivariable_Calculus_Certificate.pdf',
        thumbnail: '/images/coursera_math_for_machine_learning_multivariable_calculus_certificate.png',
      },
      {
        title: 'Principal Component Analysis',
        url: '/files/Coursera_Math_for_Machine_Learning_PCA_Certificate.pdf',
        thumbnail: '/images/coursera_math_for_machine_learning_pca_certificate.png',
      },
    ],
  },
  'deep-learning-ai-deep-learning-specialisation': {
    title: 'Deep Learning Specialisation on Coursera',
    subtitle: 'deeplearning.ai',
    description: `
      Neural Networks and Deep Learning <br>
      Improving Deep Neural Networks <br>
      Structuring Machine Learning Projects <br>
      Convolutional Neural Networks <br>
      Sequence Models <br>
    `,
    image: '/images/coursera_logo.jpg',
    startDate: 'Jun 2019',
    endDate: 'Jun 2019',
    url: 'https://www.coursera.org/account/accomplishments/specialization/2GQ3ZSLT8RFU',
    files: [
      {
        title: 'Specialisation',
        url: '/files/Coursera_Deep_Learning_Specialisation_Certificate.pdf',
        thumbnail: '/images/coursera_deep_learning_specialisation_certificate.png',
      },
      {
        title: 'Neural Networks & Deep Learning',
        url: '/files/Coursera_Deep_Learning_Neural_Networks_&_Deep_Learning.pdf',
        thumbnail: '/images/coursera_deep_learning_neural_networks_&_deep_learning.png',
      },
      {
        title: 'Improving Deep Neural Networks',
        url: '/files/Coursera_Deep_Learning_Improving_Deep_Neural_Networks.pdf',
        thumbnail: '/images/coursera_deep_learning_improving_deep_neural_networks_certificate.png',
      },
      {
        title: 'Structuring Machine Learning Projects',
        url: '/files/Coursera_Deep_Learning_Neural_Networks_&_Deep_Learning.pdf',
        thumbnail: '/images/coursera_deep_learning_structuring_machine_learning_projects_certificate.png',
      },
      {
        title: 'Convolutional Neural Networks',
        url: '/files/Coursera_Deep_Learning_Convolutional_Neural_Networks.pdf',
        thumbnail: '/images/coursersa_deep_learning_convolutional_neural_networks.png',
      },
      {
        title: 'Sequence Models',
        url: '/files/Coursera_Deep_Learning_Sequence_Models.pdf',
        thumbnail: '/images/coursera_deep_learning_sequence_models.png',
      },
    ],
  }
};
