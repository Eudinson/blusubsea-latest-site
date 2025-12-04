export interface ProjectImage {
  image: string;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  location?: string;
  depth?: string;
  vessel?: string;
  duration?: string;
  description: string;
  background: string;
  images: ProjectImage[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Platform Member Wet Welding',
    slug: 'platform-member-wet-welding',
    location: 'Caspian Sea',
    depth: '10msw',
    vessel: 'Caspian 1',
    duration: '3 months',
    description: `Underwater Wet welding of K-Nodes on an offshore platform in the Caspian Sea. Blu Subsea provided Divers and a full IMCA Compliant spread to conduct operations over a 3-month period.`,
    background: '/assets/images/projects/background/platform_member_bg.jpg',
    images: [
      { image: '/assets/images/projects/platform-member/img1.png' },
      { image: '/assets/images/projects/platform-member/img2.png' }
    ]
  },
  {
    id: 2,
    title: 'ROV Pipeline Inspection',
    slug: 'rov-pipeline-inspection',
    location: 'UAE',
    depth: '15msw',
    vessel: 'Seaforce 1',
    duration: '2 weeks',
    description: `Underwater ROV inspections of a partially buried pipelines. The inspection was to verify the current condition of the lines, the manholes and find which ones could be open.`,
    background: '/assets/images/projects/background/rov_pipeline_bg.jpg',
    images: [
      { image: '/assets/images/projects/rov-pipeline/img1.jpg' },
      { image: '/assets/images/projects/rov-pipeline/img2.jpg' },
      { image: '/assets/images/projects/rov-pipeline/img3.jpg' },
      { image: '/assets/images/projects/rov-pipeline/img4.jpg' }
    ]
  },
  {
    id: 3,
    title: 'Power Plant – Travelling Band Screen Repairs',
    slug: 'power-plant-travelling-band-screen-repairs',
    location: 'UAE',
    depth: '6msw',
    vessel: 'N/A',
    duration: 'LTA',
    description: `Removal and replacement of the baskets/Screen at the pump house travelling band screens. Blu Subsea's LTA with the client meant conducting routine maintenance throughout 2022 and into 2023`,
    background: '/assets/images/projects/background/power_plant_bg.jpg',
    images: [
      { image: '/assets/images/projects/power-plant/img1.jpg' },
      { image: '/assets/images/projects/power-plant/img2.jpg' },
      { image: '/assets/images/projects/power-plant/img3.jpg' },
      { image: '/assets/images/projects/power-plant/img4.jpg' },
      { image: '/assets/images/projects/power-plant/img5.jpg' }
    ]
  },
  {
    id: 4,
    title: 'Hyperbaric Pipeline Repair',
    slug: 'hyperbaric-pipeline-repair',
    location: 'Eastern Med',
    depth: '27msw',
    vessel: 'EDT Eas',
    duration: '6 months',
    description: `Blu Subsea mobilized a large team of welder divers for a hyperbaric welding scope in the Eastern Med. The Scope consisted of airlifting, Installation of two PLIDCO Clamps, Habitat setup and full hyperbaric welding of the PLIDCO clamps.`,
    background: '/assets/images/projects/background/hyperbaric_bg.jpg',
    images: [
      { image: '/assets/images/projects/hyperbaric-repair/img1.jpg' },
      { image: '/assets/images/projects/hyperbaric-repair/img2.jpg' },
      { image: '/assets/images/projects/hyperbaric-repair/img3.jpg' }
    ]
  },
  {
    id: 5,
    title: 'FPSO Karish – Umbilical disconnection and reconnection',
    slug: 'fpso-karish-umbilical-disconnection-and-reconnection',
    location: 'Eastern Med',
    depth: '10msw',
    vessel: 'EDT Eas',
    duration: '2 weeks',
    description: `FPSO Karish was newly installed on location in the Eastern Med. During Installation the Port and Starboard fibre optic umbilical's had become stuck and the (Diverless) locking mechanisms jammed, requiring Diver intervention. Within 3 Days Blu Subsea had mobilized a full team and IMCA compliant system to Cyprus to conduct the operations.`,
    background: '/assets/images/projects/background/fpso_karish_bg.jpg',
    images: [
      { image: '/assets/images/projects/fpso-karish/img1.jpg' },
      { image: '/assets/images/projects/fpso-karish/img2.jpg' },
      { image: '/assets/images/projects/fpso-karish/img3.jpg' },
      { image: '/assets/images/projects/fpso-karish/img4.jpg' }
    ]
  },
  {
    id: 6,
    title: 'Outfall Blanking – Hatta Dam',
    slug: 'outfall-blanking-hatta-dam',
    location: 'Hatta, UAE',
    depth: '30msw',
    vessel: 'Barge',
    duration: '1 week',
    description: `Due to ongoing construction works at the Dam, Blu Subsea were requested to blank an outfall line at the lake bottom. Blu Subsea installed an onsite chamber and full IMCA compliant dive system onsite to conduct operations.`,
    background: '/assets/images/projects/background/outfall_blanking_bg.jpg',
    images: [
      { image: '/assets/images/projects/outfall-blanking/img1.jpg' },
      { image: '/assets/images/projects/outfall-blanking/img2.jpg' },
      { image: '/assets/images/projects/outfall-blanking/img3.jpg' }
    ]
  },
  {
    id: 7,
    title: 'Seawater Intake line rectifications',
    slug: 'seawater-intake-line-rectifications',
    location: 'UAE',
    depth: '10msw',
    vessel: 'Turbot Ann Barge & Blu Subsea 1',
    duration: '3 months',
    description: `After initial inspections, Blu Subsea conducted Dredging, Bolt Changing, Sealing, HP Cleaning, dosing line and riser repairs.`,
    background: '/assets/images/projects/background/seawater_intake_bg.jpg',
    images: [
      { image: '/assets/images/projects/seawater-intake/img1.jpg' },
      { image: '/assets/images/projects/seawater-intake/img2.jpg' },
      { image: '/assets/images/projects/seawater-intake/img3.jpg' },
      { image: '/assets/images/projects/seawater-intake/img4.jpg' },
      { image: '/assets/images/projects/seawater-intake/img5.jpg' },
      { image: '/assets/images/projects/seawater-intake/img6.jpg' },
      { image: '/assets/images/projects/seawater-intake/img7.jpg' },
      { image: '/assets/images/projects/seawater-intake/img8.jpg' },
      { image: '/assets/images/projects/seawater-intake/img9.jpg' }
    ]
  },
  {
    id: 8,
    title: 'Dubai Canal – Bridge Inspections and maintenance',
    slug: 'dubai-canal-bridge-inspections-and-maintenance',
    location: 'UAE',
    depth: '',
    vessel: 'Modular Pontoon & Blu Subsea 2',
    duration: '2 weeks',
    description: `Annual Bridge inspection and maintenance on the Dubai Canal business bay viaduct. Blu Subsea arranged marine access and project management for a client's annual inspection and maintenance of the bridge structure. This included assistance with inspection of the Bearings, Paint repairs, Cleaning, and inspection of the waterfall.`,
    background: '/assets/images/projects/background/dubai_canal_bg.jpg',
    images: [
      { image: '/assets/images/projects/dubai-canal/img1.jpg' },
      { image: '/assets/images/projects/dubai-canal/img2.jpg' },
      { image: '/assets/images/projects/dubai-canal/img3.jpg' }
    ]
  },
  {
    id: 9,
    title: 'Abu Dhabi Port Inspections',
    slug: 'abu-dhabi-port-inspections',
    location: 'Abu Dhabi, UAE',
    depth: '',
    vessel: 'Standby Vessel only (Quayside Diving)',
    duration: '2 months',
    description: `Over a 2-month period we conducted above and below water inspections at 14 different berths throughout the port. The berths consisted of concrete Quay wall, Sheet Pile, Suspended Deck and Steel cylindrical piles. Over 3000 cylindrical piles were inspected, and UT/ CP readings taken throughout. As well as underwater NDT, numerous topside concrete tests were conducted; Core Samples, HCP, Rebound Hammer Tests, UPV, Carbon testing, cover meter and a topographic Survey.`,
    background: '/assets/images/projects/background/abu_dhabi_port_bg.jpg',
    images: [
      { image: '/assets/images/projects/abu-dhabi-port/img1.jpg' },
      { image: '/assets/images/projects/abu-dhabi-port/img2.jpg' },
      { image: '/assets/images/projects/abu-dhabi-port/img3.jpg' },
      { image: '/assets/images/projects/abu-dhabi-port/img4.jpg' }
    ]
  },
  {
    id: 10,
    title: 'Al Jazeera Quay Wall Inspections',
    slug: 'al-jazeera-quay-wall-inspections',
    location: 'Ras al Khaimah, UAE',
    depth: '',
    vessel: 'Standby Vessel (Quayside Diving)',
    duration: '1 week',
    description: `Inspection of all quay walls across the 9 berths at Jazeera port, including UT thickness readings of the sheet pile and listing all anomalies and debris found throughout.`,
    background: '/assets/images/projects/background/al_jazeera_bg.png',
    images: [
      { image: '/assets/images/projects/al-jazeera/img1.png' },
      { image: '/assets/images/projects/al-jazeera/img2.png' },
      { image: '/assets/images/projects/al-jazeera/img3.png' },
      { image: '/assets/images/projects/al-jazeera/img4.png' }
    ]
  },
  {
    id: 11,
    title: 'Sidescan Sonar - Pipeline Freespan',
    slug: 'sidescan-sonar-pipeline-freespan',
    location: 'Ras al Khaimah, UAE',
    depth: '90msw',
    vessel: 'Lanpan 22',
    duration: '4 weeks',
    description: `Side Scan Sonar survey of 3 offshore pipelines in Ras Al Khaimah. The survey was conducted to document the quantity, length, height of any free spans and locate debris close to the lines.`,
    background: '/assets/images/projects/background/sonar_scan.jpg',
    images: [
      { image: '/assets/images/projects/sidescan-sonar/img1.jpg' },
      { image: '/assets/images/projects/sidescan-sonar/img2.jpg' },
      { image: '/assets/images/projects/sidescan-sonar/img3.jpg' },
      { image: '/assets/images/projects/sidescan-sonar/img4.png' },
      { image: '/assets/images/projects/sidescan-sonar/img5.png' },
      { image: '/assets/images/projects/sidescan-sonar/img6.jpg' },
      { image: '/assets/images/projects/sidescan-sonar/img7.jpg' },
      { image: '/assets/images/projects/sidescan-sonar/img8.jpg' }
    ]
  },
  {
    id: 12,
    title: 'Salvage Operations',
    slug: 'salvage-operations',
    location: 'Eastern Med',
    depth: '20msw',
    vessel: '',
    duration: '2 months',
    description: `Salvage operations to lift and recover a Gantry crane that had toppled into the sea during bad weather. When the crane toppled over it caused considerable damage to the jetty span and piles, which also had to be cut away and recovered.`,
    background: '/assets/images/projects/eastern-med/em1.jpg',
    images: [
      { image: '/assets/images/projects/eastern-med/em1.jpg' },
      { image: '/assets/images/projects/eastern-med/em2.jpg' },
      { image: '/assets/images/projects/eastern-med/em3.jpg' }
    ]
  },
  {
    id: 13,
    title: 'Buoy Cleaning And Inspection',
    slug: 'buoy-cleaning-and-inspection',
    location: 'Offshore Dubai',
    depth: '20msw',
    vessel: '',
    duration: '3 Days',
    description: `Buoy cleaning and inspection.`,
    background: '/assets/images/projects/offshore-dubai/offshore_dubai_img1.png',
    images: [
      { image: '/assets/images/projects/offshore-dubai/offshore_dubai_img1.png' },
      { image: '/assets/images/projects/offshore-dubai/offshore_dubai_img2.jpg' },
      { image: '/assets/images/projects/offshore-dubai/offshore_dubai_img3.jpg' }
    ]
  },
  {
    id: 14,
    title: 'Decommissioning of an Offshore Platform',
    slug: 'decommissioning-of-a-platform-offshore',
    location: 'Atlantis Field',
    depth: '30msw',
    vessel: '',
    duration: '21 Days',
    description: `Blu Subsea were contracted to assist in the decommissioning of a platform offshore Sharjah. The work scope included cutting and removal of conductor guides at varying depths and final removal of the conductor itself.`,
    background: '/assets/images/projects/atlantis-field/atlantis_img_3.jpg',
    images: [
      { image: '/assets/images/projects/atlantis-field/atlantis_img_1.jpg' },
      { image: '/assets/images/projects/atlantis-field/atlantis_img_2.jpg' },
      { image: '/assets/images/projects/atlantis-field/atlantis_img_3.jpg' },
      { image: '/assets/images/projects/atlantis-field/atlantis_img_4.jpg' }
    ]
  },
  {
    id: 15,
    title: 'Spudcan Repairs',
    slug: 'spudcan-repairs',
    location: 'Lamprell Yard, Hamriyah Port',
    depth: '10msw',
    vessel: '',
    duration: '21 Days',
    description: `Blu Subsea were contracted by Lamprell to conduct Spudcan repairs on ADM336 Jack up Rig. Initial inspection found 3 circumferential weld cracks; one on each spud can. Blu Subsea then came up with a method to install a cofferdam on each of the spud cans to conduct the welds in the 'dry'. After measuring of the top of the spudcan and the rig leg well, three cofferdams were fabricated. Upon sealing of the cofferdam on the spud can, the cofferdam was pumped dry ready for internal welding. Welding was conducted to complete the spud can repairs, and the cofferdams were subsequently removed.`,
    background: '/assets/images/projects/spudcan-repairs/spudcan_repairs_img1.jpg',
    images: [
      { image: '/assets/images/projects/spudcan-repairs/spudcan_repairs_img1.jpg' },
      { image: '/assets/images/projects/spudcan-repairs/spudcan_repairs_img2.jpg' },
      { image: '/assets/images/projects/spudcan-repairs/spudcan_repairs_img3.jpg' },
      { image: '/assets/images/projects/spudcan-repairs/spudcan_repairs_img4.jpg' },
      { image: '/assets/images/projects/spudcan-repairs/spudcan_repairs_img5.jpg' },
      { image: '/assets/images/projects/spudcan-repairs/spudcan_repairs_img6.jpg' }
    ]
  },
  {
    id: 16,
    title: 'Underwater Welding of Padeyes',
    slug: 'underwater-weld-padeyes',
    location: '',
    depth: '',
    vessel: '',
    duration: '',
    description: `Blu Subsea were contracted by Lamprell to conduct underwater welding of 8 padeyes to the side of a barge.`,
    background: '/assets/images/projects/underwater-weld-padeyes/underwater_weld_padeyes_img1.jpg',
    images: [
      { image: '/assets/images/projects/underwater-weld-padeyes/underwater_weld_padeyes_img1.jpg' },
      { image: '/assets/images/projects/underwater-weld-padeyes/underwater_weld_padeyes_img2.jpg' },
      { image: '/assets/images/projects/underwater-weld-padeyes/underwater_weld_padeyes_img3.jpg' }
    ]
  },
  {
    id: 17,
    title: 'Daughtercraft Diving',
    slug: 'daughtcraft-diving',
    location: 'Fateh Field, DPE',
    depth: '20msw',
    vessel: '',
    duration: 'Ongoing',
    description: `Daughtcraft diving in connection with IRM scope.`,
    background: '/assets/images/projects/daughtcraft-diving/daughtcraft_diving_img1.jpg',
    images: [
      { image: '/assets/images/projects/daughtcraft-diving/daughtcraft_diving_img1.jpg' },
      { image: '/assets/images/projects/daughtcraft-diving/daughtcraft_diving_img2.jpg' }
    ]
  },
  {
    id: 18,
    title: 'Surf Abu Dhabi',
    slug: 'surf-abu-dhabi',
    location: 'Surf Abu Dhabi',
    depth: '2msw',
    vessel: '',
    duration: '8 Days',
    description: `Blu Subsea was contracted to conduct burning and welding activities as part of a large inland project known as Surf Abu Dhabi.`,
    background: '/assets/images/projects/surf_abu_dhabi/surf_abu_dhabi_img3.jpg',
    images: [
      { image: '/assets/images/projects/surf_abu_dhabi/surf_abu_dhabi_img1.jpg' },
      { image: '/assets/images/projects/surf_abu_dhabi/surf_abu_dhabi_img2.jpg' },
      { image: '/assets/images/projects/surf_abu_dhabi/surf_abu_dhabi_img3.jpg' }
    ]
  }
];

export default projects;
