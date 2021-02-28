const images = require.context('./images', true, /\.jpg$/)

const servicesSiteData = {
  services: {
    path:"/serviceSummary",
    routerSubMenu:"ServiceInfo",
    menuName: "Services",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    services: [{
        id: 1,
        description: 'Give yourself a head start by setting up your business operations now. <br>\
        Having all this out of the way will also give you more time to focus on running your business.',
        title: 'Setup operation',
        src: images('./pic01.jpg'),
        tasks: [{
            id: 1,
            src: images('./pic01.jpg'),
            title: 'Hiring employees',
            description: 'You can’t always run a business on your own. <br>\
             If you’re planning on hiring, make sure you know the steps you need to take and your legal responsibilities.',
          },
          {
            id: 2,
            src: images('./pic01.jpg'),
            title: 'Market your business',
            description: 'Marketing can help you reach your target audience, boost your customer base and increase your bottom line.  <br>\
            Start planning and preparing your marketing now, so when the time comes you’re ready to go.',
          },
          {
            id: 3,
            src: images('./pic01.jpg'),
            title: 'Manage your suppliers',
            description: 'Are you selling products and need a supplier?  <br>\
            See what you should consider when looking for a quality supplier and where you can search for them.',
          },
          {
            id: 4,
            src: images('./pic01.jpg'),
            title: 'Communicate with customers',
            description: 'Providing good customer service is not just for when a customer buys from you. Find out what customer service skills you’ll need to create customer satisfaction and loyalty.',
          },
        ]
      },
      {
        id: 2,
        description: 'Plan and manage the change of state of a service in its lifecycle. <br>\
        Managing risk for new, changed and <br> retired services protects the product environment. ',
        title: 'Service transition management',
        src: images('./pic01.jpg'),
        tasks: [{
            id: 1,
            src: images('./pic01.jpg'),
            title: 'Transition Planning and Support',
            description: 'Plan and coordinate the resources to establish <br> \
          successfully a new or changed service into production<br> \
          within the predicted cost, quality and time estimates',
          },
          {
            id: 2,
            src: images('./pic01.jpg'),
            title: 'Change Management',
            description: 'Respond to the customer’s changing business<br> \
            requirements while maximizing value and reducing<br>\
            incidents, disruption and re-work',
          },
          {
            id: 3,
            src: images('./pic01.jpg'),
            title: 'Service Asset and Configuration Management',
            description: 'Optimizing the performance of service assets and <br> \
            configurations improves the overall service performance <br> \
            and optimizes the costs and risks caused by poorly <br> \
            managed assets, e.g. service outages, fines, correct licence <br> \
            fees and failed audits.',
          },
          {
            id: 4,
            src: images('./pic01.jpg'),
            title: 'Service Validation and Testing',
            description: 'Well-planned and implemented release and deployment  <br> \
            will make a significant difference to an organization’s  <br> \
            service costs. A poorly designed release or deployment  <br> \
            will, at best, force IT personnel to spend significant  <br> \
            amounts of time troubleshooting problems and managing  <br> \
            complexity. At worst, it can cripple the environment and  <br> \
            degrade the live services.',
          },
          {
            id: 5,
            src: images('./pic01.jpg'),
            title: 'Evaluation',
            description: 'Evaluation is, by its very nature, concerned with value. <br> \
            Specifically effective evaluation will establish the use <br> \
            made of resources in terms of delivered benefit and this <br> \
            information will allow a more accurate focus on value in <br> \
            future service development and Change Management. <br> \
            There is a great deal of intelligence that Continual Service <br> \
            Improvement can take from evaluation to analyse future <br> \
            improvements to the process of change and the <br> \
            predictions and measurement of service change <br> \
            performance.',
          },
          {
            id: 6,
            src: images('./pic01.jpg'),
            title: 'Knowledge Management',
            description: 'Effective Knowledge Management is a powerful asset for <br> \
            people in all roles across all stages of the service lifecycle. <br> \
            It is an excellent method for individuals and teams to <br> \
            share data, information and knowledge about all facets of <br> \
            an IT service. The creation of a single system for <br> \
            Knowledge Management is recommended',
          },
        ]
      },
      {
        id: 3,
        description: 'The pre-sales process <br> is important to finding, winning, <br> and keeping customers.',
        title: 'Presale  and sale assistant',
        src: images('./pic01.jpg'),
        tasks: [{
            id: 1,
            src: images('./pic01.jpg'),
            title: 'Analyze Potential Markets Before Product Launch',
            description: 'Pre Sales Consultants are responsible for analyzing market data to determine the ideal customer for a given product. This is one of their most important duties, as the success of their sales pitch depends largely on the accuracy of their analysis.',
          },
          {
            id: 2,
            src: images('./pic01.jpg'),
            title: 'Craft Sales Pitches for Sales Team',
            description: 'Pre Sales Consultants use the data mentioned above, coupled with their sales expertise, to craft sales pitches for their sales team. This duty also involves presenting sales pitches to the decision makers of a given campaign.',
          },
          {
            id: 3,
            src: images('./pic01.jpg'),
            title: 'Assist Sales Team in Qualifying Prospects',
            description: 'Pre Sales Consultants help their sales team qualify leads by using their deep understanding of the product’s ideal customer pain points. They may even have the initial phone or digital contact with leads.',
          },
          {
            id: 4,
            src: images('./pic01.jpg'),
            title: 'Provide Product Knowledge Support to Sales Team',
            description: 'Pre Sales Consultants know the given product better than anyone on the sales and marketing teams. This deep product knowledge is required to write a sales pitch that highlights the product’s features and benefits.            ',
          },
          {
            id: 5,
            src: images('./pic01.jpg'),
            title: 'Participate In Strategy Meetings With Marketing Team',
            description: 'Pre Sales Consultants don’t just work with the sales team. They are also responsible for attending and contributing to strategy meetings held by the marketing team. Their goal is to make sure their pitch is aligned with the marketing campaign.',
          },
        ]
      },
    ]
  },
}
export default servicesSiteData;
