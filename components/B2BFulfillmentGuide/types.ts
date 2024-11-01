import { LucideIcon } from 'lucide-react';

export interface CapabilityProps {
  title: string;
  icon: LucideIcon;
  content: string;
  features: string[];
  isVisible: boolean;
}

export interface Comparison {
  b2b: string[];
  dtc: string[];
}

export interface Capability {
  title: string;
  icon: LucideIcon;
  content: string;
  features: string[];
}
