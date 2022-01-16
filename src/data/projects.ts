// Types
import { Project } from '@interfaces/data';

export const projectTypes: Record<string, Project['type']> = {
  'academic': { value: 'academic', label: 'Academic Projects', display: '📚' },
  'work': { value: 'work', label: 'Work Projects', display: '💼' },
  'competition': { value: 'competition', label: 'Competitions', display: '🏆' },
  'fun': { value: 'fun', label: 'For fun', display: '😄' }
}

export const projects: Record<string, Project> = {
  'crypto-connect': {
    title: 'CryptoConnect',
    subtitle: 'Connectors to crypto exchanges with a common event-driven interface',
    description: `
      Event-driven interface for implementation of trading strategies,
      offering the streaming of <em>Bar</em>, <em>Tick</em>, <em>Trade</em>,
      user's <em>OrderStatus</em>, and user's <em>Transaction</em> events,
      placing and managing <em>Market</em> and <em>Limit</em> orders, as well as,
      fetching historical data from REST and WebSocket endpoints,
      authenticated by Hash-based Message Authentication Code (HMAC).
    `,
    image: '/images/crypto-connect-screenshot.jpg',
    startDate: 'Jan 2022',
    endDate: 'Jan 2022',
    codeUrl: 'https://github.com/cheongshiuhong/crypto-connect',
    skills: [
      'c++',
    ],
    skillsToShow: 3,
    type: projectTypes.fun,
    teammates: [],
    files: []
  },
  'full-stack-web-application-for-shopee': {
    title: 'Full Stack Web Application',
    subtitle: 'Built for Shopee\'s Regional Finance Team - Image Intentionally Blurred',
    description: `
      Developed from scratch with <strong>docker-compose</strong> to containerize the backend, celery workers, scheduler, redis broker, frontend and nginx. 
      Backend built with <strong>Django</strong>, featuring a management system for the team's use and <strong>REST API</strong> for the frontend. 
      Automations performed by <strong>Celery</strong> workers for asynchronous execution, including tasks like emailing, scraping and processing data from multiple sources. 
      Frontend built with <strong>Next.js</strong> (<strong>React.js</strong>), styled with <strong>Material-UI</strong>. (Image intentionally blurred)
    `,
    image: '/images/fswa_blurred_light.png',
    darkModeImage: '/images/fswa_blurred_dark.png',
    startDate: 'Dec 2020',
    endDate: 'Jan 2021',
    codeUrl: '',
    projectUrl: '',
    experience: 'shopee-automation-internship',
    skills: [
      'docker',      
      'python',
      'typescript',
      'sql',
      'django',
      'celery',
      'react-js',
      'next-js',
      'material-ui',
    ],
    skillsToShow: 4,
    type: projectTypes.work,
    teammates: [],
    files: []
  },
  'ubs-international-quant-hackathon-2020': {
    title: 'UBS International Quant Hackathon 2020',
    subtitle: 'Top 7% (Ranked 23/371)',
    description: `
      Applied machine learning techniques to Complex Derivatives Pricing with dataset of >16 million rows on a 4GB RAM VM.
      Key steps include dimensionality reduction with Principal Component Analysis, clustering, storing data with SQLite and fitting each cluster with a decision tree regressor.
    `,
    image: '/images/ubs_logo.png',
    startDate: 'Sep 2020',
    endDate: 'Oct 2020',
    skills: [
      'python',
      'machine-learning',
      'sql',
    ],
    skillsToShow: 2,
    type: projectTypes.competition,
    teammates: [
      'darren-mok',
    ],
    files: []
  },
  'gsheets-api-gui': {
    title: 'Google Sheets API Graphical User Interface',
    subtitle: 'Built for Shopee\'s Regional Finance Team - Image Intentionally Blurred',
    description: `
      Built as a Windows executable file for non-technical users to manipulate and move data across hundreds of Google Sheets by utilizing <strong>Google APIs</strong>, 
      with manipulation done in <strong>Python</strong>/<strong>Pandas</strong> triggered by a Graphical User Interface built with 
      <strong>HTML</strong>/<strong>CSS</strong>/<strong>JavaScript</strong>, communicating via <strong>Eel</strong>.        
    `,
    image: '/images/gsheet_ui_blurred.png',
    startDate: 'Sep 2020',
    endDate: 'Sep 2020',
    codeUrl: '',
    projectUrl: '',
    experience: 'shopee-automation-internship',
    skills: [
      'python',
      'pandas',
      'javascript',
      'html',
      'css',
      'eel',
    ],
    skillsToShow: 3,
    type: projectTypes.work,
    teammates: [],
    files: []
  },
  'modern-portfolio-theory-sig': {
    title: 'Modern Portfolio Theory Demonstration',
    subtitle: 'Prepared for SUSS Investment Interest Group',
    description: `
      Prepared as educational material for group members to demonstrate modern portfolio theory and the notion of diversification with historical data.
    `,
    image: '/images/mpt_sig.png',
    startDate : 'Mar 2020',
    endDate: 'Mar 2020',
    type: projectTypes.academic,
    codeUrl: 'https://github.com/cheongshiuhong/mpt-demo-sig',
    projectUrl: 'https://cheongshiuhong.github.io/mpt-demo-sig/',
    skillsToShow: 2,
    skills: [
      'modern-portfolio-theory',
      'python',
      'numpy',
      'pandas',
      'scipy',
    ],
    teammates: [],
    files: []
  },
  'cfa-research-challenge-2020': {
    title: 'CFA National Research Challenge 2020',
    subtitle: 'National Finalist',
    description: `
      Valuation and stock pitch of subject company SGX (Ticker S68).
      Key analyses include DuPont, Porter 5, SWOT and PESTLE. 
      Valuation done with a blended approach comprising DCF & Relative methodologies with Football Field & Sensitivity analysis and Monte Carlo simulation.
      WACC estimated with bottom-up Beta through Hamada's unlevering of comparables.
    `,
    image: '/images/cfa_presenting.jpg',
    startDate: 'Dec 2019',
    endDate: 'Feb 2020',
    codeUrl: '',
    projectUrl: '',
    skills: [
      'equity-valuation',
      'vba',
    ],
    skillsToShow: 3,
    type: projectTypes.competition,
    teammates: [
      'charlton-koh',
      'daniel-nyau',
      'joven-chiam',
      'rick-chua',
    ],
    files: [
      {
        title: 'Report',
        url: '/files/CFA_Research_Challenge_2020_report.pdf',
        thumbnail: '/images/cfa_report_thumbnail.png',
      },
      {
        title: 'Slide Deck',
        url: '/files/CFA_Research_Challenge_2020_ppt.pdf',
        thumbnail: '/images/cfa_ppt_thumbnail.png',
      },
    ]
  },
  'mcgill-international-portfolio-challenge-2019' : {
    title: 'McGill International Portfolio Challenge 2019',
    subtitle: 'International Finalist',
    description: `
      Took part in the McGill International Portfolio Competition, 
      being one of the teams invited to Montreal, Canada 
      among 87 teams worldwide from renowned universities like Yale and Sydney.
    `,
    image: '/images/mcgill_team.jpg',
    startDate: 'Sep 2019',
    endDate: 'Nov 2019',
    codeUrl: '',
    projectUrl: '',
    skillsToShow: 3,
    skills: [
      'modern-portfolio-theory',
      'python',
    ],
    type: projectTypes.competition,
    teammates: [
      'chia-rui-yang',
      'prerit-keertikar',
      'sean-ong',
    ],
    files: [
      {
        title: 'Report',
        url: '/files/McGill_International_Portfolio_Challenge_2020_report.pdf',
        thumbnail: '/images/mcgill_report_thumbnail.png',
      },
      {
        title: 'Slide Deck',
        url: '/files/McGill_International_Portfolio_Challenge_2020_ppt.pdf',
        thumbnail: '/images/mcgill_ppt_thumbnail.png',
      }
    ]
  },
  'gerontechnology-research': {
    title: 'Gerontechnology Research',
    subtitle: 'Gerontechnology Research in Social Ageing',
    description: `
      Singapore launched the Smart Nation initiative in 2014 as a national effort to create a state where
      lives are enhanced by technology. 
      By surveying 30 elderly users, this study draws on the
      Almere model to examine the elderlies’ perceptions and usages of mobile phone applications to
      discuss the extent to which social psychological and socio-demographic factors influence
      their usage behaviour. 
      Through Ordinary Least Square (OLS) regressions and mediation
      analyses, it shows that usage is associated with perceived usefulness and anxiety. It also finds
      significant group differences between different age groups of elderly users and the number of
      generations living in household.
    `,
    image: '/images/suss_logo.jpg',
    darkModeImage: '/images/suss_logo_dark.jpg',
    startDate: 'Aug 2019',
    endDate: 'Oct 2019',
    codeUrl: '',
    projectUrl: '',
    education: 'suss-bsc-finance',
    skills: [
      'spss',
    ],
    skillsToShow: 1,
    type: projectTypes.academic,
    teammates: [
      'chia-rui-yang',
      'glennis-lee',
      'leroy-lim',
    ],
    files: [
      {
        title: 'Report',
        url: '/files/Design_X_report.pdf',
        thumbnail: '/images/design_x_report_thumbnail.png',
      },
      {
        title: 'Poster',
        url: '/files/Design_X_poster.pdf',
        thumbnail: '/images/design_x_poster_thumbnail.png',
      },
    ]
  },
  'machine-learning-workshop': {
    title: 'Machine Learning Workshop Materials',
    subtitle: 'Prepared for the Singapore University of Social Sciences',
    description: `
      Prepared for the Singapore University of Social Sciences as a Teaching Assistant. 
      Utilized Jupyter Notebook's interactive widgets to demonstrate gradient descent in regression models.
      Content covers entry level technical details on the basic requirements in math, gradient descent, linear and logistic regressions, and neural networks.
    `,
    image: '/images/ml_workshop.png',
    startDate: 'Jun 2020',
    endDate: 'Jul 2020',
    codeUrl: 'https://github.com/cheongshiuhong/machinelearningworkshop',
    projectUrl: 'https://cheongshiuhong.github.io/machinelearningworkshop/',
    experience: 'suss-teaching-assistant',
    education: 'suss-bsc-finance',
    skills: [
      'python',
      'machine-learning',
      'numpy',
      'keras',
      'pandas',
    ],
    skillsToShow: 3,
    type: projectTypes.academic,
    teammates: [],
    files: [],
  },
  'shopee-national-data-science-challenge-2019' : {
    title: 'Shopee National Data Science Challenge 2019 (Advanced)',
    subtitle: 'Top 14% (Ranked 15/111)',
    description: `
      Implemented a neural network solution for product category extraction from product titles, with zero/few-shot learning in consideration, translating to a model that scales well for adding new label categories in the future.
      Utilized and experimented with Word2Vec and GloVe embedding to vectorize natural language, which is then passed into GRU-based neural networks, measuring the context of the product title text against its label text, to ultimately categorize each title based on its cosine similarity.
    `,
    image: '/images/ndsc.png',
    startDate: 'Feb 2019',
    endDate: 'Mar 2019',
    codeUrl: 'https://github.com/cheongshiuhong/shopee-ndsc-advanced-2019',
    projectUrl: 'https://cheongshiuhong.github.io/shopee-ndsc-advanced-2019/',
    skills: [
      'pytorch',
      'machine-learning', 
      'python', 
    ],
    skillsToShow: 2,
    type: projectTypes.competition,
    teammates: [],
    files: [],
  },
};
