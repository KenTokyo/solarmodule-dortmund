import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl?: string;
  size: 'small' | 'medium' | 'large' | 'tall' | 'wide';
}

export interface StatProps {
  label: string;
  value: string;
  suffix?: string;
  trend?: string;
}

export interface NavLink {
  label: string;
  href: string;
}