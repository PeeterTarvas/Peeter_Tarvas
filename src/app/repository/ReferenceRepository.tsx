import {ReferenceInterface} from "@/app/ui/titles/Refernece";
import EmailIcon from "@/app/resources/svg/email-icon.svg";
import GithubIcon from "@/app/resources/svg/github-icon.svg";
import LinkedInIcon from "@/app/resources/svg/linkedin-icon.svg";
import CvIcon from "@/app/resources/svg/cv-icon.svg";

const email: ReferenceInterface = {
    name: 'email',
    link: 'mailto:peetertarvas@gmail.com',
    icon: EmailIcon
}

const github: ReferenceInterface = {
    name: 'github',
    link: 'https://github.com/PeeterTarvas',
    icon: GithubIcon
}

const linkedin: ReferenceInterface = {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/peeter-tarvas-690a58171/',
    icon: LinkedInIcon
}

const cv: ReferenceInterface = {
    name: 'cv',
    link: '/cv.pdf',
    icon: CvIcon
}

export {email, github, linkedin, cv}