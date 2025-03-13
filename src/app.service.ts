import { Injectable } from '@nestjs/common';

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  category: string;
  features: string[];
  featured: boolean;
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getJobs(): Job[] {
    return [
      {
        id: 1,
        title: 'Casual Retail Assistant | Ponsonby Store',
        company: 'AS Colour',
        location: 'Ponsonby, Auckland',
        category: 'Retail Assistants',
        features: [
          'Quarterly staff kits + Generous staff discount',
          'Ethical and sustainable business practices',
          'Focused on Internal Development',
        ],
        featured: true,
      },
      {
        id: 2,
        title: 'Mobile Applicator',
        company: 'Diamond Fusion Glass Defender',
        location: 'Auckland',
        category: 'Trades & Services',
        features: [
          'Full training provided',
          'Company vehicle and phone',
          'Career growth opportunities',
        ],
        featured: true,
      },
      {
        id: 3,
        title: 'Cool Jobs',
        company: 'Cool company',
        location: 'Auckland',
        category: 'Food & Beverage',
        features: ['Full training provided', 'Career growth opportunities'],
        featured: true,
      },
      {
        id: 4,
        title: 'Not Cool Jobs',
        company: 'Not Cool company',
        location: 'Timaru',
        category: 'Infrastructure',
        features: ['Full training provided', 'Career growth opportunities'],
        featured: true,
      },
    ];
  }
}
