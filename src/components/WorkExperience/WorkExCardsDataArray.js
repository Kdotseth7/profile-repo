import cvent from './cvent.jpg';
import teamComputers from './teamComputers.png';
import threeSC from './3sc.png';

const cardsDataArray = [
    {
        cardImage: cvent,
        imgLink: 'https://www.cvent.com/',
        cardText: 'Currently Working on CVENT Conference Product.' +
            'UI Automation using Selenium and JAVA.' +
            'API Automation using ReadyAPI, Postman and Karate.' +
            'Creating Jenkins Jobs.' +
            'Databases: SQL, CouchBase, PostgreSQL.' +
            'Worked with RabbitMQ',
        tenure: 'July 2019 - Present',
        position: 'Software Development Engineer in Test(SDET)'
    },
    {
        cardImage: threeSC,
        imgLink: 'http://www.3scsolution.com/',
        cardText: 'Created an online web application using ASPdotNet, ADOdotNet & Microsoft SQL Server.' +
            'Developed the application for verification and auditing of freight bills for Vendor and Retailers.' +
            'Created front-end dashboard to show due payments within the current month.' +
            'Created Master tabs and Report tabs for easy maneuverability within the transport management dashboard',
        tenure: 'June 2018 - July 2018',
        position: 'Full Stack Developer Intern'
    },
    {
        cardImage: teamComputers,
        imgLink: 'https://www.teamcomputers.com/',
        cardText: 'Designed the data model using ALTERYX Designer.' +
            'Cleaned, filtered and merged the sample dataset for the past one year.' +
            'Calculated the Turn Around Time (TAT) for each contracted inquiry from the dataset of past one year.' +
            'Calculated the Total Predicted Inquiries.' +
            'Generated a cumulative dataset for predicting the number of vehicles a Honda dealer will sell based on outstanding inquiries',
        tenure: 'June 2017 - July 2017',
        position: 'Data Analyst Intern'
    }
];

export {cardsDataArray};