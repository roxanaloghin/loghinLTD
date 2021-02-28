const images = require.context('./images', true, /\.jpg$/)

const projectsSiteData = {
  projects: {
    path:"/projectSummary",
    routerSubMenu:"ProjectInfo",
    menuName: "Projects",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    projects: [{
        id: 1,
        src: images('./amdocs.jpg'),
        description: 'data migration from legacy to system',
        title: 'data migration from legacy to system',
        tasks: [{
            id: 1,
            src: images('./amdocs.jpg'),
            title: 'Program Manager ',
            company: 'Amdocs',
            date: 'Jan 2014 – Dec 2018 ( 5 yrs )',
            description: 'Accountability for the delivery of contracted services by Amdocs Operations for Vodafone Europe\
            Leadership of a pan-European team executing transition plans and building new business teams across Europe.\
            Driving quality standards, best practice and customer satisfaction through the SLA targets and by the implementation and monitoring of key business metrics.',
          },
          {
            id: 2,
            src: images('./amdocs.jpg'),
            title: 'Customer Operations Manager (COM)',
            company: 'Amdocs',
            date: 'Jun 2011 – Dec 2013 ( 2 yrs 7 mos )',
            description: 'Accountability for the delivery of outstanding Managed Services Operations at Vodafone UK. Identification and implementation of service improvements, driving efficiencies through year on year cost reductions and LEAN techniques, to ensure the successful delivery of the Managed Services SLA.\
            Continual focus on delivering a quality service and driving service improvement, tracked through key business metrics, to ensure customer satisfaction.',
          }
        ],
      },
      {
        id: 2,
        src: images('./amdocs.jpg'),
        description: 'billing transformation',
        title: 'billing transformation',
        tasks: [{
            id: 1,
            src: images('./amdocs.jpg'),
            title: 'Program Director ',
            company: 'Amdocs',
            date: 'Oct 2010 – May 2011 ( 8 mos )',
            description: ' Accountability for the successful delivery of the Billing Transformation project at Vodafone Romania, throughout the full project lifecycle. ',

          },
          {
            id: 2,
            src: images('./amdocs.jpg'),
            title: 'Customer Implementation Manager ',
            company: 'Amdocs',
            date: 'Jul 2007 – Sep 2010 ( 3 yrs 3 mos )',
            description: 'Accountability for the successful delivery of Managed Services Operations at Vodafone UK.\
            Continual focus on business improvement through robust planning and business process re-engineering to enable the successful delivery of the Managed Services contract.',
          }
        ],
      },
      {
        id: 3,
        src: images('./amdocs.jpg'),
        description: 'company setup',
        title: 'company setup',
        tasks: [{
            id: 1,
            src: images('./amdocs.jpg'),
            title: 'Customer Implementation Manager ',
            company: 'Amdocs',
            date: 'Jan 2005 – Jun 2007 ( 2 yrs 6 mos )',
            description: 'Accountability for the successful delivery of Maintenance Services at Vodafone Hungary and for the stabilisation of the new billing system implementation.\
            Formation and leadership of a team of circa 25, driving standards and consistency ensuring a quality service to the customer, measured through the SLA.\
            Planning and organising the team’s processes and procedures, enabling the successful delivery of the contract.',
          }
        ],
      },
      {
        id: 4,
        src: images('./vodafone.jpg'),
        description: 'manage services and support',
        title: 'manage services and support ',
        tasks: [{
            id: 1,
            src: images('./vodafone.jpg'),
            title: 'Manager Applications Support',
            company: 'Vodafone Romania',
            date: 'Jun 1998 – Oct 2004 ( 6 yrs 5 mos )',
            description: ' Accountability for the successful delivery of application support services at Vodafone Romania. ',
          }
        ],
      },
      {
        id: 5,
        src: images('./optiva.jpg'),
        description: 'setup operation',
        title: 'setup operation',
        tasks: [{
            id: 1,
            src: images('./optiva.jpg'),
            title: 'Vice President of Support & Managed Services',
            company: 'Optiva Inc.',
            date: 'Jan 2019 – Present',
            description: 'data migration from legacy to system',
          },
        ],
      },
    ]
  },
}
export default projectsSiteData;
