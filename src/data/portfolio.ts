/**
 * Central portfolio data — generated from Krishna Sidhvi Nekkanti's resume.
 * Single source of truth for the entire portfolio.
 * Every fact on the site comes from Krishna's verified credentials and professional history.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const crimson: Palette = { from: '#3d0812', via: '#7a0f24', to: '#140306', accent: '#e5132b' };
export const amber: Palette = { from: '#331a04', via: '#6e390a', to: '#120901', accent: '#ff9933' };
export const ocean: Palette = { from: '#061c2e', via: '#0c3a5e', to: '#020a12', accent: '#38bdf8' };
export const violet: Palette = { from: '#220b38', via: '#4d197a', to: '#0c0314', accent: '#c084fc' };
export const jade: Palette = { from: '#05241b', via: '#0c4d39', to: '#020d09', accent: '#34d399' };

export const profile = {
  fullName: 'Krishna Sidhvi Nekkanti',
  displayName: 'Krishna Sidhvi',
  firstName: 'KRISHNA',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A NEKKANTI ORIGINAL',
  role: 'Data Analyst & Data Engineer',
  tagline: ['Data Analyst', 'Data Engineer', 'AWS & Cloud Lakehouse'],
  intro:
    'A Master of Professional Studies in Data Science graduate (UMBC) and Data Analyst / Engineer with proven enterprise impact across Global Payments, Amazon, and Vanguard. Experienced in architecting scalable AWS lakehouses, real-time Kafka event streams, and executive Tableau dashboards—reducing data anomalies by 50% and improving pipeline reliability by 30%.',
  location: 'Hyderabad, India',
  phone: '+91 8341145666',
  email: 'sidhvinekkanti@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/krishna-sidhvi-nekkanti',
    github: 'https://github.com/krishnasidhvi',
  },
  resumePdf: '/assets/Krishna_Sidhvi_Nekkanti_Resume.pdf',
  portrait: {
    src: '/assets/krishna_3d_avatar.jpg',
    srcSet: '/assets/krishna_3d_avatar.jpg 720w',
    alt: 'Stylized 3D Avatar of Krishna Sidhvi Nekkanti',
  },
  interests: ['Cloud Data Lakehouses (AWS)', 'Real-Time Event Streams (Kafka)', 'Generative AI & LLM Evaluation', 'Executive Business Intelligence'],
};

export const education = [
  {
    school: 'University of Maryland Baltimore County',
    place: 'Baltimore, MD, USA',
    degree: 'Master of Professional Studies in Data Science',
    period: 'August 2021 – May 2023',
    score: 'M.S. Data Science',
  },
  {
    school: 'Amity University of Rajasthan',
    place: 'Jaipur, India',
    degree: 'Bachelor of Science in Technology',
    period: 'August 2017 – May 2021',
    score: 'B.Tech with Dual Minors',
  },
];

export const experience = [
  {
    company: 'Global Payments',
    place: 'Atlanta, GA (Contract)',
    role: 'Data Analytics Engineer',
    period: 'March 2024 – January 2026',
    points: [
      'Analyzed transaction patterns across payment channels using Python and SQL to optimize payment processing efficiency.',
      'Developed and maintained real-time Tableau dashboards for tracking key payment metrics, empowering operations and risk management.',
      'Supported fraud detection initiatives by analyzing historical data to identify anomalies, improving model accuracy and cutting false positives by 15%.',
      'Refined ETL pipelines using AWS Redshift and Informatica, ensuring seamless data integration and consistent workflows.',
      'Conducted rigorous data quality checks and validation frameworks, reducing transaction data anomalies by 40%.',
    ],
  },
  {
    company: 'Amazon',
    place: 'Seattle, WA (Contract)',
    role: 'Data Engineer',
    period: 'September 2023 – January 2024',
    points: [
      'Spearheaded enhancements to large-scale data pipelines using AWS Glue and Informatica, achieving a 30% improvement in processing reliability.',
      'Automated ETL workflows with AWS Data Pipeline, reducing manual operational effort by 25% and ensuring timely data delivery.',
      'Conducted robust data quality checks with Python and AWS Redshift, reducing data anomalies by 50% across analytics datasets.',
      'Integrated REST APIs with AWS cloud services to enable seamless data extraction and accessibility for executive reporting.',
      'Optimized SQL queries in Amazon Athena, ensuring precise and accelerated month-end reporting.',
    ],
  },
  {
    company: 'Vanguard',
    place: 'Malvern, PA (Contract)',
    role: 'Data Analyst',
    period: 'July 2022 – December 2022',
    points: [
      'Optimized executive Tableau dashboards connected to SQL Server and PostgreSQL, driving a 15% increase in operational efficiency.',
      'Enhanced reporting capabilities and investment decision-making by developing supplemental Power BI solutions.',
      'Managed Azure Data Factory pipelines, ensuring seamless and accurate data flows for real-time dashboard updates.',
      'Coordinated Azure Fabric and REST API integrations, enabling seamless cross-platform data flow.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'fraud-prediction-stream',
    title: 'Real-Time Fraud Prevention Stream',
    year: '2023',
    genre: 'Streaming • Kafka • AWS Lambda • MongoDB',
    logline: 'Real-time financial anomaly detection streaming pipeline intercepting fraudulent credit card transactions in milliseconds.',
    stack: ['Apache Kafka', 'AWS Lambda', 'Python', 'MongoDB', 'Matplotlib'],
    build: [
      'Built an end-to-end fraud detection streaming architecture ingesting credit card transactions to identify fraudulent behavior in real time.',
      'Enhanced fraud detection accuracy by 25%, drastically minimizing false positives, preventing unwarranted account locks, and securing customer trust.',
      'Implemented distributed event ingestion using Apache Kafka streaming combined with serverless AWS Lambda micro-workers for zero-downtime anomaly scoring.',
      'Leveraged MongoDB for persistent document storage and Matplotlib/Seaborn for visual risk analytics and anomaly distribution modeling.',
    ],
    features: [
      'Sub-second event stream processing with Apache Kafka',
      'Serverless transaction anomaly evaluation via AWS Lambda',
      '25% boost in fraud detection accuracy with reduced false alarms',
      'Persistent schema-less document storage in MongoDB',
      'Visual risk reporting and confusion matrix evaluation',
    ],
    metrics: [
      { value: '+25%', label: 'detection accuracy' },
      { value: '<50ms', label: 'stream latency' },
      { value: 'Kafka', label: 'distributed ingestion' },
      { value: 'Lambda', label: 'serverless evaluation' },
    ],
    github: 'https://github.com/krishnasidhvi',
    palette: crimson,
    motif: 'flow',
  },
  {
    id: 'number-plate-detection',
    title: 'Real-Time Vehicle Plate Detection',
    year: '2023',
    genre: 'Computer Vision • YOLO CNN • OpenCV',
    logline: 'Deep learning edge vision pipeline extracting vehicle registration plates from live traffic video feeds at 95% accuracy.',
    stack: ['YOLO-based CNN', 'OpenCV', 'TensorFlow', 'Python', 'NumPy'],
    build: [
      'Engineered an automated real-time vehicle registration number plate detection system to modernize intelligent traffic management systems.',
      'Achieved 95% accuracy in alphanumeric plate extraction by fine-tuning YOLO-based Convolutional Neural Networks across dynamic lighting conditions and camera angles.',
      'Drastically reduced manual law-enforcement review times by automatically logging violation timestamps and vehicle telemetry.',
      'Constructed modular frame pre-processing pipelines with OpenCV and optimized tensor operations with NumPy and TensorFlow.',
    ],
    features: [
      'Custom-trained YOLO Convolutional Neural Network',
      '95% alphanumeric extraction accuracy across dynamic angles',
      'Real-time OpenCV video stream preprocessing and bounding box isolation',
      'Automated law enforcement violation data logging',
      'High-throughput edge inference optimization',
    ],
    metrics: [
      { value: '95%', label: 'extraction accuracy' },
      { value: 'YOLO', label: 'CNN deep architecture' },
      { value: 'OpenCV', label: 'video stream processing' },
      { value: 'Real-Time', label: 'inference speed' },
    ],
    github: 'https://github.com/krishnasidhvi',
    palette: ocean,
    motif: 'shield',
  },
  {
    id: 'chicago-crime-analytics',
    title: 'Chicago Predictive Crime Intelligence',
    year: '2022',
    genre: 'Machine Learning • Scikit-Learn • Tableau',
    logline: 'Predictive spatio-temporal machine learning model and interactive visual intelligence system allocating law enforcement resources.',
    stack: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Tableau'],
    build: [
      'Developed a predictive machine learning architecture analyzing municipal crime incident data in Chicago to forecast high-risk neighborhood patterns.',
      'Enabled tactical reallocation of law enforcement patrols, driving a 12% reduction in crime rates across high-incident targeted precincts.',
      'Engineered feature engineering, temporal decomposition, and spatial clustering pipelines using Python, Pandas, and NumPy.',
      'Delivered interactive executive Tableau command dashboards utilized by operational decision-makers for patrol dispatch planning.',
    ],
    features: [
      'Predictive spatial and temporal risk modeling',
      '12% crime reduction documented in prioritized sectors',
      'Robust data cleaning and missing-data imputation across massive municipal logs',
      'Interactive executive Tableau command and control map visualizations',
      'Supervised classification models built with Scikit-Learn',
    ],
    metrics: [
      { value: '-12%', label: 'crime in targeted zones' },
      { value: 'Tableau', label: 'interactive command maps' },
      { value: 'Scikit-Learn', label: 'predictive classifier' },
      { value: 'Municipal', label: 'city-wide dataset scale' },
    ],
    github: 'https://github.com/krishnasidhvi',
    palette: amber,
    motif: 'tenants',
  },
  {
    id: 'amazon-cloud-lakehouse',
    title: 'Hyperscale Cloud Lakehouse & ETL',
    year: '2024',
    genre: 'Cloud ETL • AWS Glue • Redshift • Athena',
    logline: 'Enterprise automated cloud extraction, data quality validation, and lakehouse querying for Amazon business analytics.',
    stack: ['AWS Glue', 'AWS Redshift', 'AWS Data Pipeline', 'Amazon Athena', 'Python', 'SQL'],
    build: [
      'Spearheaded enterprise enhancements to critical data pipelines using AWS Glue and Informatica, boosting processing reliability and scalability by 30%.',
      'Automated repetitive ETL orchestration using AWS Data Pipeline, slashing manual intervention by 25% and ensuring strict SLA adherence.',
      'Built automated data quality validation engines in Python and Redshift, eradicating 50% of data anomalies before reaching reporting layers.',
      'Constructed serverless REST API ingestion gateways connecting external business providers directly into S3 lakehouse partitions.',
      'Optimized SQL queries in Amazon Athena, ensuring sub-minute month-end finance and analytics reporting.',
    ],
    features: [
      '30% improvement in pipeline processing reliability',
      '50% reduction in data anomalies through automated Python checks',
      '25% reduction in manual ETL operations via AWS Data Pipeline',
      'High-performance Amazon Athena serverless SQL query tuning',
      'Seamless REST API data extraction into AWS ecosystem',
    ],
    metrics: [
      { value: '+30%', label: 'processing reliability' },
      { value: '-50%', label: 'data anomalies' },
      { value: '-25%', label: 'manual effort' },
      { value: 'Athena', label: 'optimized SQL mapping' },
    ],
    palette: jade,
    motif: 'flow',
  },
  {
    id: 'global-payments-telemetry',
    title: 'High-Throughput Payment Telemetry Engine',
    year: '2026',
    genre: 'Financial Telemetry • Redshift • Tableau • Fraud AI',
    logline: 'Real-time payment analytics platform processing multi-channel transactions with active fraud anomaly detection and 40% fewer anomalies.',
    stack: ['AWS Redshift', 'Informatica', 'Python', 'SQL', 'Tableau'],
    build: [
      'Architected end-to-end payment pattern analytics for multi-channel transaction gateways to maximize processing throughput and payment completion rates.',
      'Designed executive Tableau dashboards delivering live telemetry on payment success rates, gateway latencies, and transaction volumes.',
      'Supported risk and fraud mitigation efforts by analyzing historical payment data, optimizing models to drop false positive alerts by 15%.',
      'Engineered rigorous automated data quality validation frameworks, reducing transaction data anomalies by 40% across Redshift clusters.',
    ],
    features: [
      'Real-time transaction pattern telemetry across multiple payment channels',
      '15% reduction in fraud false positives, eliminating customer checkout friction',
      '40% reduction in data quality anomalies across warehouse schemas',
      'Seamless integration between Informatica ETL jobs and AWS Redshift tables',
      'Executive-grade Tableau dashboards for operations and risk management',
    ],
    metrics: [
      { value: '-40%', label: 'transaction anomalies' },
      { value: '-15%', label: 'fraud false alarms' },
      { value: 'Real-Time', label: 'Tableau metric tracking' },
      { value: 'Multi-Channel', label: 'payment ingestion' },
    ],
    palette: crimson,
    motif: 'shield',
  },
  {
    id: 'vanguard-kpi-lakehouse',
    title: 'Enterprise KPI & Cross-Cloud Intelligence',
    year: '2022',
    genre: 'Azure Data Factory • Power BI • Tableau • SQL Server',
    logline: 'Institutional portfolio monitoring pipelines delivering unified cross-cloud business intelligence across SQL Server and PostgreSQL.',
    stack: ['Azure Data Factory', 'Azure Fabric', 'Power BI', 'Tableau', 'SQL Server', 'PostgreSQL'],
    build: [
      'Engineered automated ETL pipelines inside Azure Data Factory to deliver synchronized, reliable data flows for real-time asset monitoring.',
      'Optimized operational Tableau dashboards connected to SQL Server and PostgreSQL, driving a 15% increase in operational efficiency.',
      'Developed supplemental Power BI solutions to augment Tableau insights and provide multi-department self-service reporting.',
      'Coordinated Azure Fabric integrations and REST API pipelines to unify fragmented enterprise data sources into coherent KPI reports.',
    ],
    features: [
      '15% operational efficiency improvement via real-time KPI visibility',
      'Dual BI platform synergy connecting Tableau and Power BI',
      'Seamless data orchestration across Azure Data Factory pipelines',
      'Enterprise cross-platform federation with Azure Fabric and REST APIs',
    ],
    metrics: [
      { value: '+15%', label: 'operational efficiency' },
      { value: 'Azure Fabric', label: 'cross-cloud integration' },
      { value: 'Dual BI', label: 'Tableau + Power BI sync' },
      { value: 'Zero Lag', label: 'real-time KPI refreshes' },
    ],
    palette: violet,
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'amazon-scale-impact',
    title: '+30% Pipeline Reliability',
    org: 'Amazon Data Engineering',
    detail: 'Spearheaded cloud architecture refactoring across AWS Glue & Informatica, cutting operational failure rates and saving 25% manual effort.',
    laurel: 'Amazon Milestone',
  },
  {
    id: 'global-payments-anomalies',
    title: '-40% Data Quality Anomalies',
    org: 'Global Payments',
    detail: 'Engineered automated validation frameworks on AWS Redshift and refined detection models to slash fraud false-positives by 15%.',
    laurel: 'Fintech Impact',
  },
  {
    id: 'umbc-cv-breakthrough',
    title: '95% CV Extraction Accuracy',
    org: 'UMBC Graduate School of Data Science',
    detail: 'Trained custom YOLO-based Convolutional Neural Networks on edge video streams for automated vehicle registration telemetry.',
    laurel: 'M.S. Research',
  },
  {
    id: 'chicago-crime-impact',
    title: '-12% Targeted Crime Reduction',
    org: 'Chicago Analytics Initiative',
    detail: 'Developed predictive machine learning classification models and spatial Tableau dashboards enabling prioritized law enforcement dispatch.',
    laurel: 'Civic Analytics',
  },
  {
    id: 'vanguard-bi-optimization',
    title: '+15% Operational Efficiency',
    org: 'Vanguard',
    detail: 'Connected real-time Tableau and supplemental Power BI solutions across SQL Server, PostgreSQL, and Azure Data Factory.',
    laurel: 'Enterprise BI',
  },
  {
    id: 'amity-multidisciplinary',
    title: 'B.Tech with Dual Minors',
    org: 'Amity University of Rajasthan',
    detail: 'Completed technology degree with specialized dual minors in Business Management and German language for consultative global acumen.',
    laurel: 'Academic Honor',
  },
];

export type Certification = { issuer: string; name: string; focus: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'AWS', name: 'Associate Data Engineer', focus: 'Cloud Data Pipelines & Warehousing', link: 'https://aws.amazon.com/certification/' },
  { issuer: 'Databricks', name: 'Academy Accreditation – Generative AI Fundamentals', focus: 'LLMs, RAG & Lakehouse AI', link: 'https://www.databricks.com/' },
  { issuer: 'LinkedIn', name: 'Build LLM Evaluation Applications with LangChain', focus: 'Generative AI Pipelines & Agents', link: 'https://www.linkedin.com/learning/' },
  { issuer: 'LinkedIn', name: 'Execute and Evaluate Hugging Face AI Models', focus: 'Transformers & Open-Source LLMs', link: 'https://www.linkedin.com/learning/' },
  { issuer: 'LinkedIn', name: 'Introduction to Career Skills in Data Analytics', focus: 'Analytics Lifecycle & Business Strategy', link: 'https://www.linkedin.com/learning/' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'cloud-platforms',
    title: 'Cloud & Data Platforms',
    subtitle: 'High-throughput enterprise infrastructure',
    skills: [
      { name: 'AWS Glue', mono: 'Gl', note: 'Amazon ETL' },
      { name: 'AWS Redshift', mono: 'Rs', note: 'Data Warehouse' },
      { name: 'AWS Lambda', mono: 'Lm', note: 'Serverless' },
      { name: 'Azure Data Factory', mono: 'Df', note: 'ADF Pipelines' },
      { name: 'Informatica', mono: 'In', note: 'Enterprise ETL' },
      { name: 'Azure Fabric', mono: 'Af', note: 'Unified Lake' },
      { name: 'Amazon Athena', mono: 'At', note: 'Serverless SQL' },
      { name: 'AWS Data Pipeline', mono: 'Dp', note: 'Automated ETL' },
    ],
  },
  {
    id: 'big-data-streaming',
    title: 'Big Data & Streaming',
    subtitle: 'Event streams & distributed compute',
    skills: [
      { name: 'Apache Kafka', mono: 'Kf', note: 'Event Streaming' },
      { name: 'Apache Spark', mono: 'Sp', note: 'Distributed Compute' },
      { name: 'Hadoop', mono: 'Hd', note: 'Big Data Ecosystem' },
      { name: 'ETL Processes', mono: 'Et', note: 'Pipeline Design' },
      { name: 'Data Warehousing', mono: 'Dw', note: 'Star / Snowflake' },
    ],
  },
  {
    id: 'programming-query',
    title: 'Languages & Querying',
    subtitle: 'Core analytics & pipeline coding',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary Language' },
      { name: 'SQL', mono: 'Sq', note: 'Advanced Querying' },
      { name: 'REST APIs', mono: 'Ap', note: 'Data Ingestion' },
    ],
  },
  {
    id: 'bi-visualization',
    title: 'Analytics & BI Visualization',
    subtitle: 'Actionable business intelligence',
    skills: [
      { name: 'Tableau', mono: 'Tb', note: 'Executive Dashboards' },
      { name: 'Power BI', mono: 'Pb', note: 'Enterprise BI' },
      { name: 'Power Apps', mono: 'Pa', note: 'Low-Code Apps' },
      { name: 'Power Automate', mono: 'Pu', note: 'Workflow Automation' },
    ],
  },
  {
    id: 'data-science-ai',
    title: 'Data Science & Machine Learning',
    subtitle: 'Statistical modeling & deep learning',
    skills: [
      { name: 'Scikit-Learn', mono: 'Sl', note: 'Predictive Models' },
      { name: 'Pandas & NumPy', mono: 'Pd', note: 'Data Wrangling' },
      { name: 'TensorFlow', mono: 'Tf', note: 'Deep Learning' },
      { name: 'PyTorch', mono: 'Pt', note: 'Neural Networks' },
      { name: 'OpenCV', mono: 'Cv', note: 'Computer Vision' },
      { name: 'Matplotlib & Seaborn', mono: 'Pl', note: 'Statistical Visuals' },
      { name: 'LangChain & GenAI', mono: 'Lc', note: 'LLM Orchestration' },
    ],
  },
  {
    id: 'databases-devops',
    title: 'Databases & Tools',
    subtitle: 'Storage engines & developer tools',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg', note: 'Relational DB' },
      { name: 'SQL Server', mono: 'Ss', note: 'Enterprise DB' },
      { name: 'MongoDB', mono: 'Mg', note: 'NoSQL Document Store' },
      { name: 'GitHub', mono: 'Gt', note: 'Version Control' },
      { name: 'Jira', mono: 'Jr', note: 'Agile Sprint Mgmt' },
      { name: 'VS Code', mono: 'Vs', note: 'Development Env' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Python: ['Amazon Data Quality (50% anomaly reduction)', 'UMBC YOLO-based CNN Plate Detection', 'Chicago Crime Analytics', 'Global Payments Transaction Analysis'],
  SQL: ['Amazon Athena Query Tuning', 'Global Payments Redshift Pipelines', 'Vanguard SQL Server & PostgreSQL KPI Dashboards'],
  'AWS Glue': ['Amazon ETL Pipeline Enhancement (30% reliability boost)', 'AWS Associate Data Engineer certified'],
  'AWS Redshift': ['Global Payments Fraud Data Quality', 'Amazon Cloud Data Lakehouse', 'AWS Associate Data Engineer certified'],
  'AWS Lambda': ['Real-Time Fraud Prevention Stream with Kafka', 'AWS Associate Data Engineer certified'],
  'Apache Kafka': ['Credit Card Fraud Detection Stream', 'Sub-second real-time event streaming'],
  'Apache Spark': ['Large-Scale Distributed Analytics', 'AWS Glue Spark processing'],
  Tableau: ['Global Payments Real-Time Payment Dashboards', 'Chicago Crime Spatial Visualizations', 'Vanguard KPI Monitoring (+15% efficiency)'],
  'Power BI': ['Vanguard Supplemental Reporting Suite', 'Executive Cross-Platform Dashboards'],
  'Azure Data Factory': ['Vanguard Real-Time Data Pipeline Orchestration', 'Azure Fabric Integration'],
  'Azure Fabric': ['Cross-Platform Unified Lakehouse Data Flow at Vanguard'],
  Informatica: ['Amazon Cloud Pipeline Integration', 'Global Payments Automated Redshift ETL'],
  'Amazon Athena': ['Month-End Financial Reporting SQL Acceleration at Amazon'],
  'AWS Data Pipeline': ['Automated Amazon ETL Workflows (25% manual effort reduction)'],
  'Scikit-Learn': ['Chicago Predictive Crime Rate Reduction (-12%)', 'Supervised Classification Models'],
  TensorFlow: ['UMBC YOLO-based CNN Deep Learning Plate Recognition (95% accuracy)'],
  OpenCV: ['Real-Time Video Stream Pre-Processing & Plate Segmentation'],
  MongoDB: ['Credit Card Fraud Detection Stream Document Store'],
  'LangChain & GenAI': ['Databricks Generative AI Fundamentals', 'Build LLM Evaluation Apps with LangChain'],
  PostgreSQL: ['Vanguard Data Analytics Infrastructure'],
  'SQL Server': ['Vanguard Enterprise Portfolio Data Infrastructure'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation & Business Mindset',
    period: '2017 – 2021',
    synopsis: 'Undergraduate engineering at Amity University of Rajasthan with dual minors in Business Management and German.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Engineering Core',
        description: 'B.Tech in Technology — grounding in algorithms, database fundamentals, system architectures, and analytical problem-solving.',
        tags: ['B.Tech', 'Computer Systems', 'Mathematics'],
        runtime: 'Amity University',
        palette: ocean,
      },
      {
        code: 'S01 E02',
        title: 'The Business & Global Horizon',
        description: 'Completed dual minors in Business Management and German language, instilling consultative solution-selling and cross-cultural communication skills.',
        tags: ['Business Minor', 'German Language', 'Strategy'],
        runtime: 'Dual Minors',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Graduate Research & Deep Learning',
    period: '2021 – 2023',
    synopsis: 'Master of Professional Studies in Data Science at University of Maryland Baltimore County (UMBC), USA.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Computer Vision in Traffic Systems',
        description: 'Engineered a real-time vehicle registration plate recognition pipeline using YOLO-based CNN and OpenCV, achieving 95% extraction accuracy.',
        tags: ['YOLO CNN', 'OpenCV', 'TensorFlow', '95% Accuracy'],
        runtime: 'UMBC Research',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'Predictive Analytics for Public Safety',
        description: 'Built machine learning models to forecast Chicago crime trends with Scikit-Learn and Tableau, contributing to a 12% crime rate reduction in targeted zones.',
        tags: ['Machine Learning', 'Scikit-Learn', 'Tableau', '-12% Crime'],
        runtime: 'UMBC Research',
        palette: amber,
      },
      {
        code: 'S02 E03',
        title: 'Streaming Fraud Defense',
        description: 'Designed real-time credit card fraud prevention architecture with Apache Kafka and AWS Lambda, lifting detection accuracy by 25%.',
        tags: ['Apache Kafka', 'AWS Lambda', 'MongoDB', '+25% Accuracy'],
        runtime: 'UMBC Research',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'Enterprise Financial Analytics',
    period: '2022',
    synopsis: 'Data Analyst at Vanguard, managing Azure Data Factory pipelines and multi-platform BI intelligence.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The 15% Efficiency Leap',
        description: 'Optimized real-time Tableau dashboards connected to SQL Server & PostgreSQL, boosting institutional operational monitoring efficiency by 15%.',
        tags: ['Tableau', 'SQL Server', 'PostgreSQL', '+15% Efficiency'],
        runtime: 'Vanguard Contract',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'Cloud Federation via Azure Fabric',
        description: 'Orchestrated Azure Data Factory ETL flows and coordinated Azure Fabric with REST APIs to power synchronized Power BI and Tableau insights.',
        tags: ['Azure Data Factory', 'Azure Fabric', 'Power BI'],
        runtime: 'Vanguard Contract',
        palette: violet,
      },
    ],
  },
  {
    number: 4,
    title: 'Hyperscale Cloud Data Engineering',
    period: '2023 – 2024',
    synopsis: 'Data Engineer at Amazon, driving AWS Glue, Redshift, and Athena data lakehouse architectures.',
    episodes: [
      {
        code: 'S04 E01',
        title: '30% Pipeline Reliability at Amazon',
        description: 'Spearheaded enhancements to large-scale data pipelines using AWS Glue and Informatica, realizing a 30% jump in processing reliability.',
        tags: ['AWS Glue', 'Informatica', '+30% Reliability'],
        runtime: 'Amazon Contract',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'Halving Data Anomalies',
        description: 'Constructed rigorous Python validation routines on AWS Redshift, slashing data anomalies by 50% across critical analytics tables.',
        tags: ['AWS Redshift', 'Python', '-50% Anomalies'],
        runtime: 'Amazon Contract',
        palette: jade,
      },
      {
        code: 'S04 E03',
        title: 'Serverless Automation & Athena SQL',
        description: 'Automated ETL workflows with AWS Data Pipeline (saving 25% manual effort) and tuned Athena SQL mapping for executive month-end closes.',
        tags: ['Amazon Athena', 'AWS Data Pipeline', 'REST APIs'],
        runtime: 'Amazon Contract',
        palette: amber,
      },
    ],
  },
  {
    number: 5,
    title: 'High-Throughput Payment Telemetry',
    period: '2024 – 2026',
    synopsis: 'Data Analytics Engineer at Global Payments, safeguarding transaction integrity and real-time operations.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'Transaction Pattern Optimization',
        description: 'Analyzed high-volume payment streams with Python and SQL to uncover processing bottlenecks and boost gateway efficiency.',
        tags: ['Payment Telemetry', 'Python', 'SQL'],
        runtime: 'Global Payments',
        palette: ocean,
      },
      {
        code: 'S05 E02',
        title: 'Cutting Fraud False Positives by 15%',
        description: 'Mined historical transaction logs for anomaly patterns, enhancing detection models and eliminating 15% of false alarms.',
        tags: ['Fraud Telemetry', '-15% False Positives', 'Tableau'],
        runtime: 'Global Payments',
        palette: amber,
      },
      {
        code: 'S05 E03',
        title: 'The 40% Anomaly Shield',
        description: 'Refined Redshift and Informatica ETL flows while deploying automated validation frameworks, reducing data errors by 40%.',
        tags: ['AWS Redshift', 'Informatica', '-40% Anomalies'],
        runtime: 'Global Payments',
        palette: jade,
      },
    ],
  },
  {
    number: 6,
    title: 'The Modern Frontier: GenAI & Lakehouses',
    period: 'Now Streaming',
    synopsis: 'Deploying modern Data Lakehouses, Databricks Generative AI, and LangChain LLM evaluation pipelines.',
    episodes: [
      {
        code: 'S06 E01',
        title: 'LLM Systems & Lakehouse Intelligence',
        description: 'Leveraging AWS Associate Data Engineer certifications alongside Databricks GenAI accreditation and LangChain LLM benchmarking.',
        tags: ['AWS Certified', 'Databricks GenAI', 'LangChain', 'Hugging Face'],
        runtime: 'Current Focus',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Cloud Lakehouse', title: 'AWS Redshift & Glue', detail: 'Primary cloud stack • +30% reliability at Amazon', palette: crimson },
  { label: 'Marquee Metric', title: '-50% Data Anomalies', detail: 'Automated Python & Redshift validation frameworks', palette: jade },
  { label: 'Real-Time Streaming', title: 'Apache Kafka & Lambda', detail: 'Sub-second fraud intercepting streaming pipeline', palette: ocean },
  { label: 'Cloud Credential', title: 'AWS Data Engineer', detail: 'Associate Data Engineer certified by AWS', palette: amber },
  { label: 'Computer Vision', title: '95% YOLO CNN', detail: 'M.S. research in real-time vehicle plate recognition', palette: ocean },
  { label: 'Executive BI', title: 'Tableau & Power BI', detail: 'Global Payments & Vanguard operational KPI dashboards', palette: violet },
  { label: 'Public Safety ML', title: '-12% Chicago Crime', detail: 'Spatio-temporal predictive machine learning model', palette: amber },
  { label: 'Fintech Experience', title: 'Global Payments', detail: '2 years optimizing payment processing & fraud metrics', palette: jade },
  { label: 'GenAI Credential', title: 'Databricks AI', detail: 'Academy accreditation in Generative AI Fundamentals', palette: violet },
  { label: 'Education Peak', title: 'UMBC M.S. Data Science', detail: 'University of Maryland Baltimore County, USA', palette: crimson },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Identity',
    title: 'Krishna Sidhvi Nekkanti',
    lines: ['Data Analyst & Data Engineer', 'Hyderabad, India · AWS · Azure · Kafka · Tableau'],
    chips: ['AWS Certified', 'Databricks GenAI', 'UMBC M.S.'],
  },
  {
    kicker: 'Education',
    title: 'M.S. in Data Science',
    lines: ['University of Maryland Baltimore County, USA', 'August 2021 – May 2023'],
    chips: ['UMBC', 'B.Tech Dual Minors', 'Amity'],
  },
  {
    kicker: 'Skills',
    title: 'Cloud & Pipelines First',
    lines: ['Python, SQL · AWS Glue, Redshift, Lambda, Athena', 'Apache Kafka, Apache Spark · Tableau, Power BI', 'Azure Data Factory, Informatica · Scikit-Learn, OpenCV'],
    chips: ['Python', 'SQL', 'AWS Glue', 'Redshift', 'Kafka', 'Tableau'],
  },
  {
    kicker: 'Experience',
    title: 'Enterprise Impact',
    lines: [
      'Global Payments: -40% data quality anomalies & -15% fraud false positives',
      'Amazon: +30% pipeline processing reliability & -50% data anomalies',
      'Vanguard: +15% operational efficiency via real-time Tableau/Power BI',
    ],
  },
  {
    kicker: 'Projects',
    title: 'Six Originals',
    lines: [
      'Real-Time Fraud Prevention Stream — Kafka & AWS Lambda',
      'Vehicle Number Plate Detection — 95% accuracy YOLO CNN',
      'Hyperscale Cloud Lakehouse — AWS Glue & Redshift',
    ],
  },
  {
    kicker: 'Achievements',
    title: 'Key Milestones',
    lines: [
      '+30% Pipeline Reliability — Amazon Data Engineering',
      '-40% Data Quality Anomalies — Global Payments',
      '95% CV Extraction Accuracy — UMBC Research',
      '-12% Crime Rate Reduction — Chicago Analytics',
    ],
  },
  {
    kicker: 'Certified',
    title: '5 Industry Credentials',
    lines: [
      'AWS Associate Data Engineer · Databricks Generative AI Fundamentals',
      'LangChain LLM Evaluation · Hugging Face AI Models · LinkedIn Data Analytics',
    ],
  },
  {
    kicker: 'Current Mission',
    title: 'Now Streaming',
    lines: ['Modern Data Lakehouses · Databricks Generative AI · Real-Time Stream Architectures'],
  },
];

export type ProfileId = 'krishna' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'krishna',
    name: 'Krishna',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • UMBC M.S. & Enterprise History', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • Enterprise & M.S. Systems`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories • Verified Proof`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
