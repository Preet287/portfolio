/**
 * PORTFOLIO CONTENT — edit this file to update your website.
 * Keep text inside quotation marks; separate list entries using commas.
 * Project links are intentionally omitted until you add verified URLs.
 */
window.PORTFOLIO = {
  metrics: [
    { value: '2', suffix: 'yrs', label: 'Professional experience (approx.)' },
    { value: '3', suffix: '', label: 'Featured personal projects' },
    { value: '3', suffix: '', label: 'Microsoft certifications' },
    { value: '50', suffix: '%', label: 'Query performance improvement*' }
  ],
  experiences: [
    { role: 'Data Analyst', company: 'Windowmaker Software Pvt Ltd', place: 'Vadodara, India', period: 'Aug 2024 — Jun 2026', type: 'Full-time', bullets: [
      'Led data validation, quality assurance, and root-cause analysis to improve data reliability for teams and clients.',
      'Explored generative AI and conversational analytics for natural-language exploration of enterprise data.',
      'Evaluated AI-assisted BI workflows for dashboards, SQL generation, and business-trend explanations.',
      'Worked with CrewAI and multi-agent concepts to automate research, analysis, and report-generation workflows.'
    ], tools: ['Power BI', 'SQL', 'Python', 'Generative AI', 'CrewAI'] },
    { role: 'Data Analyst Intern', company: 'Internkaksha IT Solutions', place: 'Delhi, India', period: 'Dec 2023 — Mar 2024', type: 'Internship', bullets: [
      'Created interactive Power BI dashboards using integrated data from multiple sources.',
      'Automated recurring data preparation and reporting work with Excel and Power BI.',
      'Used exploratory data analysis to uncover trends and support business decisions.'
    ], tools: ['Power BI', 'Excel', 'EDA', 'Reporting'] }
  ],
  projects: [
    { id: 'rag-chatbot', number: '01', category: 'ai', categoryLabel: 'GENERATIVE AI', date: 'JAN 2026', title: 'RAG-Based AI Chatbot', headline: 'Answers grounded in your own knowledge.', description: 'A document-aware assistant that retrieves relevant information before generating conversational answers.', stack: ['Python', 'LangChain', 'OpenAI', 'ChromaDB', 'RAG'], visual: 'rag', details: [
      'Built ingestion workflows for PDFs and text documents, generating embeddings stored in ChromaDB.',
      'Connected semantic retrieval and OpenAI-powered generation with LangChain to improve grounding.',
      'Added conversational context to support multi-turn interactions.',
      'Tuned document chunking and similarity search to improve retrieval relevance.'
    ] },
    { id: 'azure-pipeline', number: '02', category: 'data', categoryLabel: 'CLOUD / DATA', date: 'FEB 2025', title: 'Azure Data Engineering Pipeline', headline: 'From raw manufacturing data to analytics-ready insights.', description: 'An end-to-end Azure pipeline that processes manufacturing datasets for reliable reporting and analysis.', stack: ['Azure Data Factory', 'Databricks', 'PySpark', 'Synapse', 'SQL'], visual: 'azure', details: [
      'Designed ETL workflows across Azure Data Factory, Databricks, Data Lake, and Synapse Analytics.',
      'Integrated multiple data sources with monitoring, error handling and an uptime target reported as 99.9%.',
      'Optimized Synapse data models; the resume reports a 50% query performance improvement.',
      'Applied role-based access controls, Azure Key Vault, and privacy-conscious data-handling practices.'
    ] },
    { id: 'linkedin-automation', number: '03', category: 'automation', categoryLabel: 'AUTOMATION / API', date: 'DEC 2024', title: 'LinkedIn Analytics Automation', headline: 'Less manual tracking. More useful signals.', description: 'An API-driven workflow for tracking company-page follower activity and preparing clean analytics datasets.', stack: ['Python', 'NaaS', 'APIs', 'Pandas', 'CSV'], visual: 'automation', details: [
      'Built API-driven extraction workflows to track target-page follower changes.',
      'Processed and cleaned follower datasets for CSV-based analysis and reporting.',
      'Used Pandas to handle validation, deduplication, and trend analysis.',
      'Explored personalized connection-request automation as part of the workflow.'
    ] }
  ],
  skillGroups: [
    { icon: '⌘', title: 'Programming & Analytics', skills: ['Python', 'SQL', 'R', 'DAX', 'Power Query', 'Excel VBA'] },
    { icon: '◈', title: 'Data Visualization', skills: ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn'] },
    { icon: '☁', title: 'Cloud & Data Engineering', skills: ['Microsoft Azure', 'Azure Data Factory', 'Azure Databricks', 'Azure Synapse', 'Azure Data Lake', 'SQL Server'] },
    { icon: '✳', title: 'AI & Intelligent Systems', skills: ['Generative AI', 'LangChain', 'OpenAI APIs', 'RAG', 'ChromaDB', 'CrewAI'] }
  ],
  certifications: [
    { code: 'AI-900', name: 'Azure AI Fundamentals' },
    { code: 'AZ-900', name: 'Azure Fundamentals' },
    { code: 'PL-900', name: 'Power Platform Fundamentals' }
  ]
};
