import InformationTempale, {InformationTemplateInterface} from "@/app/ui/background/InformationTemplate";
import SubsectionTitle from "@/app/ui/titles/SubsectionTitle";

const taltechInfoText: string[] = [
    'Member of the Student Parliament and the Academic Committee',
    'Member of TalTech Student Council of the School of IT',
    'Exchange year with Erasmus+ at University of Alcala, Spain'
];

const helmesInfoText: string[] = [
    'Automated Regression Tests - E2E - with Playwright and Typescript',
    'Maintain and develop Python generator tool that processes and generates test data',
    'Migrating back-end from Spring Boot 2 to Spring Boot 3',
    'Maintain front-end code in Vue3',
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

const taltechMap = new Map<string, string[]>([
    ['Bachelor of Science in Engineering - Informatics', taltechInfoText]
]);

const helmesMap = new Map<string, string[]>([
    ['Kuehne + Nagel Project - Software Developer/QA', helmesInfoText]
]);

const lhvPankMap = new Map<string, string[]>([
    ['Data Warehouse Developer Intern', lhvPankText]
]);

const twilioMap = new Map<string, string[]>([
    ['Software Engineering Intern', twilioText]
]);

const taltechInfo: InformationTemplateInterface = {
    title: 'Tallinn University of Technology',
    isLeft: false,
    text: taltechMap
}

const helmesInfo: InformationTemplateInterface = {
    title: 'Helmes AS, January 2024 - Present',
    isLeft: true,
    text: helmesMap
}

const lhvPankInfo: InformationTemplateInterface = {
    title: 'LHV PANK AS,  2023 - Summer internship',
    isLeft: false,
    text: lhvPankMap
}

const twilioInfo: InformationTemplateInterface = {
    title: 'Twilio AS,  2023 - Summer internship',
    isLeft: true,
    text: twilioMap
}



export {taltechInfo, helmesInfo, lhvPankInfo, twilioInfo}