import { 
  Activity, 
  Cpu, 
  Settings, 
  Factory, 
  Wind, 
  Gauge, 
  Zap, 
  Wifi,
  Database,
  MonitorCheck,
  Globe,
  Clock,
  Wrench,
  Box,
  Scale
} from 'lucide-react';
import { ServiceItem, ProductItem, StatItem, IoTFeature } from './types';
import VfdImage from './assets/products/vfd.png';
import HmiImage from './assets/products/hmi.png';
import SensorImage from './assets/products/sensor.png';
import ServoImage from './assets/products/servo.png';
import SmpsImage from './assets/products/smps.png';
import FlowMeterImage from './assets/projects/thermalmeter.png';
import WaterAnalyserImage from './assets/projects/wateranalyzer.png';
import WeighingScaleImage from './assets/projects/waight.png';
import FlpEnclosureImage from './assets/projects/flp.png';

export const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services'},
  { label: 'Products', href: '#products' },
  { label: 'Projects', href: '#projects' },
  { label: 'IoT', href: '#iot' },
  { label: 'Contact', href: '#contact' },
];

export const STATS: StatItem[] = [
  { label: 'Panel Capacity', value: '50+', icon: Factory }, 
  { label: 'Engineering Team', value: 'Dynamic', icon: Settings }, 
  { label: 'Support', value: '24/7', icon: Clock }, 
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Panel / Control Cabinet Assembly',
    description: 'Manufacturing unit with capacity of 50+ panels at a time. Built to IEC, ANSI/IEEE and EN Standards.',
    icon: Factory,
    tags: ['MCC', 'PCC', 'Control Desk']
  },
  {
    title: 'Hardware Engineering',
    description: 'Complete Engineering/Manufacturing drawings (AutoCAD) for Electrical & Automation Panels and Field Layouts.',
    icon: Wrench,
    tags: ['AutoCAD', 'FDS', 'IDS']
  },
  {
    title: 'Automation Solutions',
    description: 'Turnkey solutions in Control & Automation (PLC & DCS) using Siemens, Schneider, GE Fanuc, Rockwell, ABB.',
    icon: Cpu,
    tags: ['PLC', 'SCADA', 'DCS']
  },
  {
    title: 'Installation & Commissioning',
    description: 'Field Wiring, Terminations, Loop Checking, Testing, and Site Commissioning by in-house engineers.',
    icon: Settings,
    tags: ['Field Wiring', 'Testing', 'Handover']
  }
];

export const AUTOMATION_PRODUCTS: ProductItem[] = [
  {
    name: 'Variable Frequency Drives (VFD)',
    description: 'Precise motor control, energy efficiency, and process optimization for industrial applications.',
    specs: ['0.4kW - 500kW', 'Vector Control', 'Energy Saving'],
    image: VfdImage
  },
  {
    name: 'Human Machine Interface (HMI)',
    description: 'Advanced touch panels for real-time monitoring, data logging, and system control.',
    specs: ['4.3" to 15"', 'High Resolution', 'Data Logging'],
    image: HmiImage
  },
  {
    name: 'Industrial Sensors',
    description: 'High-precision inductive, capacitive, and photoelectric sensors for reliable detection.',
    specs: ['IP67 Rated', 'High Frequency', 'Long Sensing'],
    image: SensorImage
  },
  {
    name: 'Servo Systems',
    description: 'High-dynamic servo motors and drives for precise motion control and positioning.',
    specs: ['High Torque', 'Closed Loop', 'Fast Response'],
    image: ServoImage
  },
  {
    name: 'SMPS Power Supplies',
    description: 'Reliable DC power supplies designed specifically for automation control panels.',
    specs: ['24V DC', 'DIN Rail', 'Overload Protection'],
    image: SmpsImage
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    name: 'Thermal Mass Flow Meter',
    description: 'Measurement of mass/volume flow of gas/air. No temperature/pressure compensation needed.',
    specs: ['Range: 0.5Nm/s ~ 100 Nm/s', 'No moving parts', 'Modular PCB'],
    image: FlowMeterImage
  },
  {
    name: 'Water Quality Analysers',
    description: 'PH/ORP, DO, Turbidity, Chlorine, and EC/TDS Analysers with RS485 and 4-20mA output.',
    specs: ['RS485 Output', 'Thread Connection', 'Real-time Monitoring'],
    image: WaterAnalyserImage
  },
  {
    name: 'Tank Weighing & Platform Balance',
    description: 'Tank weighing systems and platform balance solutions for process industries.',
    specs: ['High Accuracy', 'Robust Load Cells', 'Process Integration'],
    image: WeighingScaleImage
  },
  {
    name: 'FLP Enclosures & Level Switches',
    description: 'All types of Flame Proof (FLP) enclosures and RF Admittance/Tuning Fork/Rotary Paddle switches.',
    specs: ['Hazardous Areas', 'Liquid/Powder', 'Thread/Flange Mount'],
    image: FlpEnclosureImage
  }
];

export const IOT_FEATURES: IoTFeature[] = [
  {
    title: 'M2M Communication',
    description: 'Machine-to-Machine interaction for transparency, lesser inefficiencies, and greater quality.',
    icon: Wifi
  },
  {
    title: 'Save Money',
    description: 'Optimum utilization of energy and resources. Alerts for bottlenecks and breakdowns.',
    icon: Database
  },
  {
    title: 'Save Time',
    description: 'Automation of daily tasks avoids human intervention and leads to uniformity.',
    icon: Clock
  },
  {
    title: 'Monitor & Control',
    description: 'Track water, gas, air, and electricity usage. Digital control with wireless infrastructure.',
    icon: MonitorCheck
  }
];

export const PARTNERS = [
  'Siemens',
  'Schneider Electric',
  'GE Fanuc',
  'Rockwell Automation',
  'ABB'
];