import { StaticImageData } from 'next/image';
import diving_bg from '@/../../public/assets/images/servicespage/services_bg2.webp';
import marine_bg from '@/../../public/assets/images/servicespage/marine_and_civils.jpg';
import rov_bg from '@/../../public/assets/images/servicespage/rov.webp';
import wet_bg from '@/../../public/assets/images/servicespage/welding_services.jpg';
import side_scan from '@/../../public/assets/images/servicespage/side_scan.jpg';

export interface ServiceItem {
  item: string;
}

export interface ServiceType {
  title: string;
  description: string;
  list: ServiceItem[];
}

export interface ServiceIncluding {
  listTitle: string;
  list: ServiceItem[];
  types: ServiceType[];
}

export interface Service {
  title: string;
  background: StaticImageData | string;
  link: string;
  description: string;
  description_2: string;
  description_3: string;
  including: ServiceIncluding;
}

const services: Service[] = [
  {
    title: 'Diving Services',
    background: diving_bg,
    link: '/services/diving-services',
    description: `Blu Subsea owns and operates a large range of diving systems. These in-house designed and built systems are in compliance with international standards, certifying authority standards and IMCA design and operating guidelines.`,
    description_2: ``,
    description_3: ``,
    including: {
      listTitle: 'Our system include',
      list: [
        {
          item: 'Inbuilt vessel diving systems.',
        },
        {
          item: 'Portable containerized Diving Systems with LARS.',
        },
        {
          item: 'Modular Saturation Diving System.',
        },
        {
          item: 'Daughtercraft Diving Systems.',
        },
        {
          item: 'SRP - Scuba Replacement Systems.',
        },
      ],
      types: [
        {
          title: 'Inspection',
          description: `Inspection of offshore/inshore structures and pipelines is one of the key services lines of our business. These operations can be undertaken by both divers and/or ROV's.`,
          list: [
            {
              item: 'Video Inspection',
            },
            {
              item: 'CP Readings',
            },
            {
              item: 'UT Readings',
            },
            {
              item: 'Weld Inspections',
            },
            {
              item: 'MPI Readings',
            },
            {
              item: 'Flooded Member Detection',
            },
            {
              item: 'Leak Detection',
            },
            {
              item: 'ACFM',
            },
          ],
        },
        {
          title: 'Repair & Maintenance',
          description: `Blu Subsea's repair and maintenance services fall directly in line with our inspections. Our experienced, multi-disciplined personnel are trained to conduct repair and maintenance works on-site allowing our clients to ensure their assets are fully operational, without the need to mobilise additional work teams.`,
          list: [],
        },
        {
          title: 'Construction & Decommissioning',
          description: `With over 30 years of experience in this field, Blu Subsea cover all service lines to make us the ideal partner for all construction, installation and decommissioning requirements.`,
          list: [],
        },
      ],
    },
  },
  {
    title: 'Marine & Civils',
    background: marine_bg,
    link: '/services/marine-and-civils',
    description: `Our Marine Construction division primarily serves customers in the civil construction and engineering markets, including government, military and private sector.
        In addition to underwater construction, we work on other highly technical projects and tasks
        requiring customized underwater solutions. Our marine construction experience, with our expertise in both inland and offshore diving operations, gives us capabilities that are unparalleled in the industry.
        `,
    description_2: `Installation, Repair & Maintenance of Quay Walls, Breakwaters and the related subsea infrastructures is one of the cornerstones of our business. We also undertake ongoing annual inspection/repair campaigns.
        These operations are performed by divers and/or ROVs depending on the working depth and/or on the type of
        subsea structures. `,
    description_3: ``,
    including: {
      listTitle: 'These services includes',
      list: [
        {
          item: 'Quay Wall installation / fabrication.',
        },
        {
          item: 'Repair / Maintenance.',
        },
        {
          item: 'Breakwaters.',
        },
        {
          item: 'Piers / Docks.',
        },
      ],
      types: [
        {
          title: '',
          description: '',
          list: [
            {
              item: '',
            },
          ],
        },
      ],
    },
  },
  {
    title: 'ROV Services',
    background: rov_bg,
    link: '/services/rov-services',
    description: `Blu Subsea has extensive management experience of ROV projects.
        We own and operate a fleet of ROV's from mini-inspection to large work-class vehicles to support a wide range of subsea operations.`,
    description_2: ``,
    description_3: ``,
    including: {
      listTitle: '',
      list: [],
      types: [
        {
          title: '',
          description: '',
          list: [
            {
              item: '',
            },
          ],
        },
      ],
    },
  },
  {
    title: 'Wet & Hyperbaric Welding Services',
    background: wet_bg,
    link: '/services/wet-and-hyperbaric-services',
    description:
      'Blu Subsea have conducted numerous successful welding projects throughout the Middle East, Caspian and Mediterranean.',
    description_2: ``,
    description_3: ``,
    including: {
      listTitle: 'Including',
      list: [
        {
          item: 'Habitat welding of damaged pipeline.',
        },
        {
          item: 'Wet welding of damaged pipeline.',
        },
        {
          item: 'Wet welding of damaged platform members.',
        },
        {
          item: 'Anode welding.',
        },
      ],
      types: [
        {
          title: '',
          description: '',
          list: [
            {
              item: '',
            },
          ],
        },
      ],
    },
  },
  {
    title: 'Survey',
    background: side_scan,
    link: '/services/survey',
    description: `Blu Subsea has an extensive range of survey equipment for your subsea survey requirements. Our experienced team of surveyors provide specialist project support and knowledge, using a range of survey tooling.`,
    description_2: ``,
    description_3: ``,
    including: {
      listTitle: 'Types of surveys Blu Subsea can undertake',
      list: [
        {
          item: 'Bathymetric Surveys',
        },
        {
          item: 'Pipeline Surveys',
        },
        {
          item: 'Diving Support- Positioning and Monitoring',
        },
        {
          item: 'Route Surveys',
        },
        {
          item: 'Positioning Services- Rig and Barges',
        },
        {
          item: 'Geophysical  Surveys',
        },
        {
          item: 'Port & Harbours  Surveys',
        },
        {
          item: 'Dredging Surveys',
        },
        {
          item: 'Shallow water Oceanography',
        },
        {
          item: 'Rivers & Lake /Reservoir surveys',
        },
      ],
      types: [
        {
          title: '',
          description: '',
          list: [
            {
              item: '',
            },
          ],
        },
      ],
    },
  },
];

export default services;
