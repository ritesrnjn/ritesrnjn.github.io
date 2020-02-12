export default [
  {
    duration: '2018 – Now',
    designation: 'Consultant',
    company: 'Deloitte Digital',
    helpText:
      'Client name is not mentioned in projects due to confidentiality clause.',
    projects: [
      {
        title: 'Quoting tool',
        techStack: ['Hybris', 'React', 'SASS'],
        description:
          'This is quick quoting tool for consumption-based IT solutions‎. Backend services have been created using SAP Hybris while react has been used in client side.'
      },
      {
        title: 'Production Lines Tracker',
        techStack: ['Thingworx', 'React', 'JSS'],
        description:
          'This is a complete IoT solution for end to end monitoring of production lines in manufacturing unit. It uses Thingworx IoT platform for receiving data from on-site sensors, processing & storing the collected data and show the required information.'
      },
      {
        title: 'Dynamic Vehicle Router',
        techStack: ['Python', 'React', 'Redux', 'NodeJS'],
        description:
          'It provides solution for finding optimal path for vehicle visiting multiple locations. The application provided features like authentication, customization of various constraints & display the list of generated solutions.'
      }
    ]
  },
  {
    duration: '2016 – 2018',
    designation: 'Business Technology Analyst',
    company: 'Deloitte Digital',
    helpText:
      'Client name is not mentioned in projects due to confidentiality clause.',
    projects: [
      {
        title: "Citizen's Services Portal",
        techStack: ['React', 'Redux', 'NodeJS', 'JSS'],
        description:
          'The Project provides a digital medium to citizens in need to access government services. ' +
          'The front-end application consists of hundreds of forms which were generated dynamically using json files. ' +
          'A react component library contains all the unique components and assembled them to create different views and pages.'
      },
      {
        title: 'Virtual Health Assistant',
        techStack: ['Angular', 'Node', 'Pug', 'SASS', 'Socket.io'],
        description:
          'App has 3 layers – Client using angular, ' +
          'Socket Service to listen to any incoming request (Socket Layer) and Node Layer at the back which intercepts any requests ' +
          'coming in from the socket and send them to the model which makes actual service call or process data' +
          'which is then returned to the client for injection.' +
          'The entire app was configurable using a config file (without rebuilding the app). All data were' +
          'hosted on a CMS. We targeted 3 languages with 3 different requirements using the same code base.'
      }
    ]
  },
  {
    duration: '2014 – 2016',
    designation: 'Software Developer',
    company: 'cretechs',
    projects: [
      {
        title: 'iRelief Medical Services',
        description:
          'iRelief Services Private Limited is an Aggregator for Healthcare Services. ' +
          'iRelief provides innovative technology solution based services in the domain of healthcare ranging from ambulance, blood bank, homecare and pharmacy services.',
        techStack: ['Python3', 'Django', 'Celery', 'Angular5', 'NodeJS', 'GCM']
      },
      {
        title: 'Mojojo',
        techStack: ['PHP', 'Laravel', 'AngularJS', 'MySQL', 'Redis'],
        description:
          'MOJOJO is a marketplace which connects people with Salons, Spas, Tattoo Studios & Stylists. ' +
          'It has a REST based architecture.'
      },
      {
        title: 'Khwand',
        techStack: ['Angular', 'NodeJS', 'Pug', 'SASS'],
        description:
          'Khwand is a food ordering & delivery app available for android and iOS. ' +
          'It has multilingual dashboard for order management.'
      },
      {
        title: 'Others',
        techStack: ['JavaScript', 'Wordpress', 'PHP'],
        description: 'Created following websites:',
        list: [
          'malvern.co.za',
          'iprimitus.com',
          'gandhiabhinav.com',
          'cleoconsult.com',
          'aryavarthadc.co.in',
          'shumar-engineering.com',
          'ipwagon.com',
          'swencomagnetics.com'
        ]
      }
    ]
  }
];
