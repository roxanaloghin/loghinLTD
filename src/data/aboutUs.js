const images = require.context('./images', true, /\.jpg$/)

const aboutUsSiteData = {
  aboutUs: {
    path:"/aboutSummary",
    routerSubMenu:"AboutInfo",
    menuName: "About Us",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    aboutUs: [{
        id: 1,
        src: images('./elena.jpg'),
        description: 'A true leader has the confidence to stand alone, the courage to make tough decisions,<br>\
         and the compassion to listen to the needs of others.<br>— General Douglas MacArthur',
        title: 'who we are',
        tasks: [{
          id: 1,
          src: images('./elena.jpg'),
          title: 'Elena Loghin <br>CEO',
          description: 'I am a manager who readily embraces and embeds business change.<br>\
            Manager with hands-on expertise in sales, digital transformation, and project management within challenging environments.<br>\
            I am  the proficiency in telecoms, IoT, cloud transformation, and network infrastructure upgradation with an aim to attain best output. <br>\
            I have the ability to complete multiple projects from scratch to completion within budgetary and time constraints. <br>\
            I have the ability to devise and implement innovative strategies for robust growth.<br>\
            I am a skilled communicator with demonstrated skills in engaging team members <br>\
            and establishing strong relationships at all level of organisation.<br>\
            I am an analytical individual who adapts to the ever-changing demands of telecommunication. <br>\
            I have a track record of working in multi-cultural setups. <br>\
            I am acknowledged for prioritising tasks and completing them in a timely fashion.',
        }],
      },
      {
        id: 2,
        src: images('./pic01.jpg'),
        description: 'Education is the most powerful weapon which you can use to change the world<br>– Nelson Mandela',
        title: 'course',
        tasks: [{
            id: 1,
            src: images('./pic01.jpg'),
            title: 'Business Process Framework (eTOM) Foundation level',
            issuedBy: 'TM Forum',
            description: 'Service Providers:<br> \
            <br>\
            Equip you to use the Framework to improve business efficiency<br>\
            Enable you to collect and re-use the knowledge that exists in your business<br>\
            Provide a solid foundation for scoping projects, planning the future and assessing the impact of change<br>\
            Create a common understanding of the tasks involved in running your business and a common language to describe them<br>\
            Allow you to interact with your suppliers and partners using standard terminology<br>\
            <br>\
        Suppliers: <br>\
        <br>\
            Give you an understanding of how your product can better fit your customers’ business process requirements.<br>\
            Show how change projects can be better planned and executed through a deeper understanding of service provider processes<br>\
            Allow you to interact with your customers and partners using standard terminology',
          },
          {
            id: 2,
            src: images('./pic01.jpg'),
            title: 'Frameworx Foundation Level',
            issuedBy: 'TM Forum',
            description: 'To explain why you should be using the suite of standards already adopted by 90% of the world’s largest service providers<br>\
            To provide you with an understanding of how Frameworx can enable your business to operate more efficiently and be more agile',
          },
          {
            id: 3,
            src: images('./pic01.jpg'),
            title: 'Site Reliability Engineering: Measuring and Managing Reliability',
            issuedBy: 'Coursera',
            description: 'This course teaches the theory of Service Level Objectives (SLOs), a principled way of describing and measuring the desired reliability of a service. Upon completion, learners should be able to apply these principles to develop the first SLOs for services they are familiar with in their own organizations.<br>\
            Learners will also learn how to use Service Level Indicators (SLIs) to quantify reliability and Error Budgets to drive business decisions around engineering for greater reliability.  The learner will  understand the components of a meaningful SLI and walk through the process of developing SLIs and SLOs for an example service.',
          }
        ]
      },
      {
        id: 3,
        src: images('./feedback1.jpg'),
        description: 'We all need people who will give us feedback. That’s how we improve.<br>– Bill Gates',
        title: 'feedback',
        tasks: [{
          id: 1,
          src: images('./feedback1.jpg'),
          title: 'Emanuele De Giorgi<br>Senior Project Management Consultant<br>Optiva',
          description: 'Elena came on board from one of my service providers and she quickly proved herself with facts and commitment. <br>\
            It has been a pleasure working together because she has an uncommon sense of accountability and is very delivery focused.',
        }]
      }
    ]
  }
}
export default aboutUsSiteData;
