const images = require.context('./images', true, /\.jpg$/)

const infoSiteData = {
  companyInfo: {
    name: 'LOGHIN CONSULTANCY LTD',
    description: 'Every business has good ideas; but even the best ideas have no value if they can’t be brought to life. Since 1988, IPM has helped more than 500 companies in multiple industries identify, plan, and execute their good ideas—more than 5,000 projects and counting.\
    More than 30 years ago, we helped shape the professional project management field. Today, we use those established processes to plan and execute initiatives, with the aim of helping your business achieve its strategic goals and positioning you for future success.'
  },
  menu: [{
      id: 1,
      name: 'Services',
    },
    {
      id: 2,
      name: 'Projects',
    },
    {
      id: 3,
      name: 'About us',
    }
  ],
  carouselItems: [{
      id: 15,
      image: "https://picsum.photos/1024/480/?image=983",
      category: "architecture",
      description: "building",
      comment: "chosen",
      theme: "black&white"
    },
    {
      id: 15,
      image: "https://picsum.photos/1024/480/?image=952",
      category: "architecture",
      description: "coupola",
      comment: "chosen",
      theme: "black&white"
    },
    {
      id: 13,
      image: "https://picsum.photos/1024/480/?image=663",
      category: "arhitecture",
      description: "bridge",
      comment: "chosen",
      theme: "black&white"
    },
    {
      id: 15,
      image: "https://picsum.photos/1024/480/?image=742",
      category: "architecture",
      description: "statue",
      theme: "black&white"
    },
    {
      id: 16,
      image: "https://picsum.photos/1024/480/?image=43",
      category: "arhitecture",
      description: "city of new york",
      theme: "black&white"
    },
    {
      id: 1,
      image: "https://picsum.photos/1024/480/?image=1031",
      category: "arhitecture",
      description: "skyscraper",
      theme: "blue"
    },
    {
      id: 3,
      image: "https://picsum.photos/1024/480/?image=1033",
      category: "arhitecture",
      description: "underground electric stairs",
      theme: "modern"
    },
    {
      id: 4,
      image: "https://picsum.photos/1024/480/?image=192",
      category: "people",
      description: "dining room",
      theme: "black&white"
    },
    {
      id: 5,
      image: "https://picsum.photos/1024/480/?image=281",
      category: "sport",
      description: "skating park",
      theme: "modern"
    },
    {
      id: 5,
      image: "https://picsum.photos/1024/480/?image=122",
      category: "architecture",
      description: "city at night",
      theme: "modern"
    },
    {
      id: 8,
      image: "https://picsum.photos/1024/480/?image=357",
      category: "time",
      description: "clock",
      theme: "blue"
    },
    {
      id: 9,
      image: "https://picsum.photos/1024/480/?image=378",
      category: "people",
      description: "observatory",
      theme: "black&white"
    },
  
    {
      id: 10,
      image: "https://picsum.photos/1024/480/?image=744",
      category: "arhitecture",
      description: "bridge",
      theme: "blue"
    },
    {
      id: 11,
      image: "https://picsum.photos/1024/480/?image=473",
      category: "people",
      description: "man standing",
      theme: "blue"
    },
    {
      id: 12,
      image: "https://picsum.photos/1024/480/?image=60",
      category: "office",
      description: "iphone,monitor and keyboard",
      theme: "modern"
    },
   
    {
      id: 14,
      image: "https://picsum.photos/1024/480/?image=677",
      category: "arhitecture",
      description: "skyscrapper blue",
      theme: "blue"
    },
    {
      id: 15,
      image: "https://picsum.photos/1024/480/?image=682",
      category: "arhitecture",
      description: "tower",
      theme: "blue"
    },
    {
      id: 15,
      image: "https://picsum.photos/1024/480/?image=1081",
      category: "arhitecture",
      description: "building",
      theme: "blue"
    },
    {
      id: 15,
      image: "https://picsum.photos/1024/480/?image=130",
      category: "nature",
      description: "bird",
      theme: "black&white"
    },
    {
      id: 15,
      image: "https://picsum.photos/1024/480/?image=149",
      category: "nature",
      description: "lighting",
      theme: "modern"
    },
    {
      id: 15,
      image: "https://picsum.photos/1024/480/?image=16",
      category: "nature",
      description: "sea",
      theme: "blue"
    },
    {
      id: 15,
      image: "https://picsum.photos/1024/480/?image=175",
      category: "clock",
      description: "clock",
      theme: "black&white"
    },
    {
      id: 15,
      image: "https://picsum.photos/1024/480/?image=209",
      category: "people",
      description: "people tunner",
      comment: "chosen",
      theme: "black&white"
    },
    
    {
      id: 15,
      image: "https://picsum.photos/1024/480/?image=250",
      category: "object",
      description: "camera",
      theme: "modern"
    },
    {
      id: 15,
      image: "https://picsum.photos/1024/480/?image=238",
      category: "architecture",
      description: "city",
      theme: "black&white"
    },
    {
      id: 15,
      image: "https://picsum.photos/1024/480/?image=258",
      category: "nature",
      description: "birds",
      theme: "minimalist"
    },
    {
      id: 9,
      image: "https://picsum.photos/1024/480/?image=172",
      category: "nature",
      description: "sea",
      theme: "minimalist"
    },
    {
      id: 9,
      image: "https://picsum.photos/1024/480/?image=222",
      category: "nature",
      description: "sun",
      theme: "minimalist"
    },
    {
      id: 15,
      image: "https://picsum.photos/1024/480/?image=26",
      category: "objects",
      description: "personal objects aligned",
      theme: "modern"
    },
    {
      id: 15,
      image: "https://picsum.photos/1024/480/?image=302",
      category: "nature",
      description: "sea",
      theme: "black&white"
    },
    {
      id: 15,
      image: "https://picsum.photos/1024/480/?image=339",
      category: "architecture",
      description: "road",
      comment: "chosen",
      theme: "black&white"
    },
    
    {
      id: 15,
      image: "https://picsum.photos/1024/480/?image=349",
      category: "architecture",
      description: "man sea looking",
      theme: "minimalist"
    },
    {
      id: 15,
      image: "https://picsum.photos/1024/480/?image=366",
      category: "office",
      description: "amn working",
      comment: "chosen",
      theme: "black&white"
    },
    {
      id: 15,
      image: "https://picsum.photos/1024/480/?image=38",
      category: "nature",
      description: "clouds",
      theme: "minimalist"
    },
    {
      id: 15,
      image: "https://picsum.photos/1024/480/?image=383",
      category: "technical",
      description: "airplanes",
      theme: "minimalist"
    },
    {
      id: 15,
      image: "https://picsum.photos/1024/480/?image=439",
      category: "architecture",
      description: "city",
      theme: "minimalist"
    },
    {
      id: 15,
      image: "https://picsum.photos/1024/480/?image=538",
      category: "nature",
      description: "eagle",
      theme: "black&white"
    },
    {
      id: 15,
      image: "https://picsum.photos/1024/480/?image=541",
      category: "nature",
      description: "diving",
      comment: "chosen",

      theme: "black&white"
    },
    {
      id: 2,
      image: "https://picsum.photos/1024/480/?image=1077",
      category: "sport",
      description: "bycicles competition",
      theme: "black&white"
    },
    {
      id: 15,
      image: "https://picsum.photos/1024/480/?image=552",
      category: "nature",
      description: "sea",
      theme: "black&white"
    },
   

    {
      id: 15,
      image: "https://picsum.photos/1024/480/?image=99",
      category: "technical",
      description: "wheel",
      theme: "black&white"
    },
    {
      id: 15,
      image: "https://picsum.photos/1024/480/?image=196",
      category: "nature",
      description: "desert",
      theme: "minimalist"
    },
  ]
}
export default infoSiteData;
