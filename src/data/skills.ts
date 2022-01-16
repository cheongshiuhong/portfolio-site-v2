// Types
import { Skill } from '@interfaces/data';

export const skillCategories: Record<string, Skill['category']> = {
  'tech': { value: 'tech', label: 'Tech', color: 'green' },
  'mathstats': { value: 'mathstats', label: 'Math & Stats', color: 'red' },
  'finance': { value: 'finance', label: 'Finance', color: 'purple' },
};

export const skills: Record<string, Skill> = {
  'python': { title: 'Python', category: skillCategories.tech },
  'cython': { title: 'Cython', category: skillCategories.tech },
  'c++': { title: 'C++', category: skillCategories.tech },
  'rust': { title: 'Rust', category: skillCategories.tech },
  'numpy': { title: 'NumPy', category: skillCategories.tech },
  'pandas': { title: 'Pandas', category: skillCategories.tech },
  'matplotlib': { title: 'Matplotlib', category: skillCategories.tech },  
  'scipy': { title: 'SciPy', category: skillCategories.tech },
  'modern-portfolio-theory': { title: 'Modern Portfolio Theory', category: skillCategories.finance },
  'equity-valuation': { title: 'Equity Valuation', category: skillCategories.finance },
  'javascript': { title: 'JavaScript', category: skillCategories.tech },
  'typescript': { title: 'TypeScript', category: skillCategories.tech },
  'html': { title: 'HTML', category: skillCategories.tech },
  'css': { title: 'CSS', category: skillCategories.tech },
  'eel': { title: 'Eel', category: skillCategories.tech },
  'machine-learning': { title: 'Machine Learning', category: skillCategories.mathstats },
  'pytorch': { title: 'PyTorch', category: skillCategories.tech },
  'keras': { title: 'Keras', category: skillCategories.tech },
  'docker': { title: 'Docker', category: skillCategories.tech },
  'django': { title: 'Django', category: skillCategories.tech },
  'celery': { title: 'Celery', category: skillCategories.tech },
  'react-js': { title: 'React.js', category: skillCategories.tech },
  'next-js': { title: 'Next.js', category: skillCategories.tech },
  'material-ui': { title: 'Material-UI', category: skillCategories.tech },
  'google-api': { title: 'Google APIs', category: skillCategories.tech },
  'graphql': { title: 'GraphQL', category: skillCategories.tech },
  'spss': { title: 'SPSS', category: skillCategories.tech },
  'vba': { title: 'VBA', category: skillCategories.tech },
  'serverless': { title: 'Serverless', category: skillCategories.tech },
  'aws': { title: 'AWS', category: skillCategories.tech },
  'aws-appsync': { title: 'AWS AppSync', category: skillCategories.tech },
  'jest': { title: 'Jest', category: skillCategories.tech },
  'sql': { title: 'SQL', category: skillCategories.tech },
  'dynamodb': { title: 'DynamoDB', category: skillCategories.tech },
  'elasticsearch': { title: 'Elasticsearch', category: skillCategories.tech },
  'influxdb': { title: 'InfluxDB', category: skillCategories.tech },
  'moralis': { title: 'Moralis', category: skillCategories.tech }
};
