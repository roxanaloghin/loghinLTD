const images = require.context('./images', true, /\.jpg$/)

const timelineSiteData = {
  menuName: "Timeline",
  timelineItems: [{
      from: new Date(2019, 1),
      to: new Date(),
      title: 'Optiva Inc.',
      subtitle: 'Vice President of Support & Managed Services',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: images('./optiva.jpg')
    },
    {
      from: new Date(2014, 1),
      to: new Date(2018, 12),
      title: 'Amdocs',
      subtitle: 'Program Manager ',
      content: 'Accountability for the delivery of contracted services by Amdocs Operations for Vodafone Europe \
      Leadership of a pan-European team executing transition plans and building new business teams across Europe.\
      Driving quality standards, best practice and customer satisfaction through the SLA targets and by the implementation and monitoring of key business metrics. ',
      image: images('./amdocs.jpg')
    },
    {
      from: new Date(2011, 6),
      to: new Date(2013, 12),
      title: 'Amdocs',
      subtitle: 'Customer Operations Manager (COM)',
      content: 'Accountability for the delivery of outstanding Managed Services Operations at Vodafone UK. Identification and implementation of service improvements, driving efficiencies through year on year cost reductions and LEAN techniques, to ensure the successful delivery of the Managed Services SLA.\
      Continual focus on delivering a quality service and driving service improvement, tracked through key business metrics, to ensure customer satisfaction. ',
      image: images('./amdocs.jpg')
    },
    {
      from: new Date(2010, 10),
      to: new Date(2011, 5),
      title: 'Amdocs',
      subtitle: 'Program Director',
      content: 'Accountability for the successful delivery of the Billing Transformation project at Vodafone Romania, throughout the full project lifecycle. ',
      image: images('./amdocs.jpg')
    },
    {
      from: new Date(2007, 7),
      to: new Date(2010, 9),
      title: 'Amdocs',
      subtitle: 'Customer Implementation Manager',
      content: 'Accountability for the successful delivery of Managed Services Operations at Vodafone UK.\
      Continual focus on business improvement through robust planning and business process re-engineering to enable the successful delivery of the Managed Services contract.',
      image: images('./amdocs.jpg')
    },
    {
      from: new Date(2005, 1),
      to: new Date(2007, 6),
      title: 'Amdocs',
      subtitle: 'Customer Implementation Manager',
      content: 'Accountability for the successful delivery of Maintenance Services at Vodafone Hungary and for the stabilisation of the new billing system implementation.\
      Formation and leadership of a team of circa 25, driving standards and consistency ensuring a quality service to the customer, measured through the SLA.\
      Planning and organising the team’s processes and procedures, enabling the successful delivery of the contract.',
      image: images('./amdocs.jpg')
    },
    {
      from: new Date(1998, 6),
      to: new Date(2004, 12),
      title: 'Vodafone',
      subtitle: 'Manager Applications Support',
      location: 'Bucharest,Romania',
      content: 'Accountability for the successful delivery of application support services at Vodafone Romania.',
      image: images('./vodafone.jpg')
    }
  ]
}

export default timelineSiteData;
