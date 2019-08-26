export default [
  {
    duration: '2018 – Now',
    designation: 'Consultant',
    company: 'Deloitte Digital',
    projects: [
      {
        title: 'Complete IoT solution using Thingworx',
        techStack: ['Thingworx', 'React'],
        description: 'Client name is not mentioned due to confidentiality. This project is a complete IoT solution for end to end monitoring of production lines in manufacturing unit. It uses Thingworx IoT platform for receiving data from on-site sensors, processing & storing the collected data and show the required information.'
      },
      {
        title: 'Dynamic routing of vehicles',
        techStack: ['Python', 'React', 'Redux', 'NodeJS'],
        description: 'This project is a solution for finding optimal path for vehicle visiting multiple locations. The application provided features like authentication, customization of various constraints & display the list of generated solutions.'
      }
    ]
  },
  {
    duration: '2016 – 2018',
    designation: 'Business Technology Analyst',
    company: 'Deloitte Digital',
    projects: [
      {
        title: 'Webapp using React and Redux',
        techStack: ['React', 'Redux', 'Node', 'JSS'],
        description: 'Project provides a digital medium to citizens in need to access government services. ' +
         'The front-end application consists of hundreds of forms which were generated dynamically using json files. '+ 
         'We created a component library with all the unique components and assembled them to create different views and pages.'
      },
      {
        title: 'Single Page Web App using Angular, Node, Pug, SASS',
        techStack: ['Angular', 'Node', 'Pug', 'SASS'],
        description:
          'App has 3 layers – Client using angular, ' +
          'Socket Service to listen to any incoming request (Socket Layer) and Node Layer at the back which intercepts any requests ' +
          'coming in from the socket and send them to the model which makes actual service call or process data' +
          'which is then returned to the client for injection.' +
          'The entire app was configurable using a config file (without touching the app). All data were' +
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
        title: 'Mojojo',
        techStack: ['Angular', 'Node', 'Pug', 'SASS'],
        description:
          'MOJOJO is a marketplace which connects people with Salons, Spas, Tattoo Studios & Stylists. ' +
          'It has a REST based architecture.'
      },
      {
        title: 'Khwand',
        techStack: ['Angular', 'Node', 'Pug', 'SASS'],
        description:
          'Khwand is a food ordering & delivery app available for android and iOS. ' +
          'It has multilingual dashboard for order management.'
      },
      {
        title: 'Others',
        techStack: ['JavaScript', 'Wordpress', 'PHP'],
        description:
          'created following websites using JavaScript, Wordpress, PHP etc.',
        list: [
          'www.malvern.co.za',
          'www.iprimitus.com',
          'www.gandhiabhinav.com',
          'www.cleoconsult.com',
          'www.aryavarthadc.co.in',
          'www.shumar-engineering.com',
          'www.ipwagon.com',
          'www.swencomagnetics.com'
        ]
      }
    ]
  }
];
