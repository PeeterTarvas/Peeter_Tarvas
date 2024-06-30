const taltechInfoText: string[] = [
    'Member of the Student Parliament and the Academic Committee',
    'Member of TalTech Student Council of the School of IT',
    'Exchange year with Erasmus+ at University of Alcala, Spain'
];

const helmesInfoText: string[] = [
    'Kuehne + Nagel Project - Software Developer/QA',
    'Automated Regression Tests - E2E - with Playwright and Typescript',
    'Maintain and develop Python generator tool that processes and generates test data',
    'Migrating back-end from Spring Boot 2 to Spring Boot 3',
    'Maintain front-end code in Vue3',
    'Manual Testing',
];

const lhvPankText: string[] = [
    'Data Warehouse Developer Intern',
    'ELT and ETL pipelines with MSSQL, PostgreSQL, Powershell \n' +
    '  and Microsoft Server',
    'Data validations',
    'Clean data manually',
];

const twilioText: string[] = [
    'Software Engineering Intern',
    'Migrate build pipelines from Jenkins to Buildkite using Docker and Bash',
    'Maintain codebase in Java and in Python ',
    'Test new builds in servers for performance',
];

const taltechInfo = new Map<string, string[]>([
    ['Tallinn University of Technology - Bachelor of Science in Engineering - Informatics', taltechInfoText]
]);

const helmesInfo = new Map<string, string[]>([
    ['Helmes AS, January 2024 - Present', helmesInfoText]
]);

const lhvPankInfo = new Map<string, string[]>([
    ['LHV PANK AS,  2023 - Summer internship', lhvPankText]
]);

const twilioInfo = new Map<string, string[]>([
    ['Twilio AS,  2023 - Summer internship', twilioText]
]);




export {taltechInfo, helmesInfo, lhvPankInfo, twilioInfo}