import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
}

export interface ProductItem {
  name: string;
  description: string;
  specs: string[];
  image: string;
}

export interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface IoTFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}