import {InformationTemplateInterface} from "@/app/ui/background/InformationTemplate";

const aarhusInfoText: string[] = [
    'Master\'s Specialisation in Artificial Intelligence',
    'Teaching assistant in Computer Architecture, Networking and Operation Systems',
];

const taltechInfoText: string[] = [
    'Member of the Student Parliament and the Academic Committee',
    'Member of TalTech Student Council of the School of IT',
    'Exchange year with Erasmus+ at University of Alcala, Spain',
    'Teaching assistant in Computer Programming and Software Development Project',
    'Thesis: Drawing Strategies Analysis for Embedded Figure Drawing Tests' +
    ', check under projects tab for more info '
];

const helmesInfoTextKN: string[] = [
    'Automated Regression Tests - E2E - with Playwright and Typescript',
    'Maintain and develop Python generator tool that processes and generates test data',
    'Migrating back-end from Spring Boot 2 to Spring Boot 3',
    'Maintain front-end code in Vue3',
    'Manual Testing',
];

const helmesInfoTextStat: string[] = [
    'Develop automated E2E tests with Playwright using Typescript',
    'Implement changes in application (Spring Boot) and Jenkins to support E2E tests',
    'Implement load testing system with Spring Boot and Gattling',
    'Manual Testing',
];

const lhvPankText: string[] = [
    'ELT and ETL pipelines with MSSQL, PostgreSQL, Powershell \n' +
    '  and Microsoft Server',
    'Data validations',
    'Clean data manually',
];

const twilioText: string[] = [
    'Migrate build pipelines from Jenkins to Buildkite using Docker and Bash',
    'Maintain codebase in Java and in Python ',
    'Test new builds in servers for performance',
];

const aarhusMap = new Map<string, string[]>([
    ['Master\'s Degree Programme - Computer Science', aarhusInfoText]
]);

const taltechMap = new Map<string, string[]>([
    ['Bachelor of Science in Engineering - Informatics', taltechInfoText]
]);

const helmesMapStat = new Map<string, string[]>([
    ['Statistics Estonia Project - Software Developer/QA', helmesInfoTextStat]
]);

const helmesMapKN = new Map<string, string[]>([
    ['Kuehne + Nagel Project - Software Developer/QA', helmesInfoTextKN]
]);

const lhvPankMap = new Map<string, string[]>([
    ['Data Warehouse Developer Intern', lhvPankText]
]);

const twilioMap = new Map<string, string[]>([
    ['Software Engineering Intern', twilioText]
]);

const aarhusInfo: InformationTemplateInterface = {
    title: 'Aarhus University, 2024 - Present',
    isLeft: true,
    text: [aarhusMap]
}

const taltechInfo: InformationTemplateInterface = {
    title: 'Tallinn University of Technology, 2020 - 2024',
    isLeft: false,
    text: [taltechMap]
}

const helmesInfo: InformationTemplateInterface = {
    title: 'Helmes AS, January 2024 - Present',
    isLeft: true,
    text: [helmesMapStat, helmesMapKN]
}

const lhvPankInfo: InformationTemplateInterface = {
    title: 'LHV PANK AS,  2023 - Summer internship',
    isLeft: false,
    text: [lhvPankMap]
}

const twilioInfo: InformationTemplateInterface = {
    title: 'Twilio AS,  2022 - Summer internship',
    isLeft: true,
    text: [twilioMap]
}



export {taltechInfo, helmesInfo, lhvPankInfo, twilioInfo, aarhusInfo}