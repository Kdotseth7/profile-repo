import tscImage from "./tsc.jpg";
import tsdImage from "./tsd.png";
import frbImage from "./frb.png";
import rpImage from "./rp.jpg";

const projects = [
    {
        image: tscImage,
        title: 'Tweet Stance Classification',
        technology: 'Deep Learning Networks',
        summary: 'Implementation of Principal Component Analysis (PCA) technique to improve the accuracy of the model.' +
            'Word Embedding models used – 300-dimension pre-trained GloVe, 100-dimension pre-trained Word2Vec.' +
            'Deep Learning Network with the best results - CNN-LSTM',
        githubLink: '',
        isResearchPaper: true,
        researchPaper: 'http://www.jetir.org/papers/JETIR1905A04.pdf?fbclid=IwAR3eVyduX1NUJUag8c_kmbtDf-KGNR6U4Iol6zuleoipzs747InBKYzlUa8',
        isWebsite: false,
        website: ''
    },
    {
        image: tsdImage,
        title: 'Tweet Stance Analyzer',
        technology: 'Machine Learning Classification Algorithms',
        summary: 'Data cleaning and Normalization techniques were used.' +
            'Feature Extraction models used – Bag-Of-Words (BoW) Model and Term Frequency – Inverse Document Frequency (TF-IDF) Model.' +
            'Support Vector Machine (SVM) showed the best results among various other machine learning algorithms',
        githubLink: '',
        isResearchPaper: false,
        researchPaper: '',
        isWebsite: false,
        website: ''
    },
    {
        image: frbImage,
        title: 'Face Recognition Brain',
        technology: 'React + NodeJS',
        summary: 'App developed using React and Clarifai API, that detects faces in an image.' +
            'It also keeps entry count of a user',
        githubLink: 'https://github.com/Kdotseth7/face-recognition-brain',
        isResearchPaper: false,
        researchPaper: '',
        isWebsite: true,
        website: 'https://smart-face-recognition-brain.herokuapp.com/'
    },
    {
        image: rpImage,
        title: 'Robots Party',
        technology: 'React',
        summary: 'Fully Responsive Web Application developed using React and RoboHash API',
        githubLink: 'https://github.com/Kdotseth7/robots-party',
        isResearchPaper: false,
        researchPaper: '',
        isWebsite: true,
        website: 'https://kdotseth7.github.io/robots-party/'
    }
];

export {projects};