import { MapIcon, ClockIcon, FuelIcon, ChartBarIcon, GlobeAltIcon, UserGroupIcon } from '../assets/icons';

export const features = [
  {
    key: 'liveMap',
    icon: <MapIcon className="w-10 h-10 text-sky-500 bg-sky-100 rounded-full p-2 shadow-lg" />,
    title: 'Live Map View',
    description: 'Real-time parking spot availability'
  },
  {
    key: 'instantReservations',
    icon: <ClockIcon className="w-10 h-10 text-purple-500 bg-purple-100 rounded-full p-2 shadow-lg" />,
    title: 'Instant Reservations',
    description: 'Book your spot in seconds'
  },
  {
    key: 'shareEarn',
    icon: <FuelIcon className="w-10 h-10 text-orange-500 bg-orange-100 rounded-full p-2 shadow-lg" />,
    title: 'Share & Earn',
    description: 'Earn points by sharing your spot'
  },
  {
    key: 'pointsSystem',
    icon: <ChartBarIcon className="w-10 h-10 text-green-500 bg-green-100 rounded-full p-2 shadow-lg" />,
    title: 'Points System',
    description: 'Earn rewards for your contributions'
  },
  {
    key: 'realTimeUpdates',
    icon: <GlobeAltIcon className="w-10 h-10 text-pink-500 bg-pink-100 rounded-full p-2 shadow-lg" />,
    title: 'Real-time Updates',
    description: 'Stay informed with live notifications'
  },
  {
    key: 'communityDriven',
    icon: <UserGroupIcon className="w-10 h-10 text-yellow-500 bg-yellow-100 rounded-full p-2 shadow-lg" />,
    title: 'Community Driven',
    description: 'Join a growing community of users'
  }
];

export const steps = [
  {
    number: '1',
    key: 'openApp',
    icon: <MapIcon className="w-12 h-12 text-pink-500 bg-pink-100 rounded-full p-2 shadow-lg" />,
  },
  {
    number: '2',
    key: 'findSpot',
    icon: <ClockIcon className="w-12 h-12 text-emerald-500 bg-emerald-100 rounded-full p-2 shadow-lg" />,
  },
  {
    number: '3',
    key: 'reserveOrShare',
    icon: <FuelIcon className="w-12 h-12 text-yellow-500 bg-yellow-100 rounded-full p-2 shadow-lg" />,
  },
];

export const plans = [
  {
    name: 'Free',
    price: '0€',
    features: [
      'Basic map access',
      'Limited reservations',
      'Community support'
    ]
  },
  {
    name: 'Premium',
    price: '4.99€',
    features: [
      'Priority reservations',
      'Advanced notifications',
      'Premium support',
      'Ad-free experience'
    ]
  },
  {
    name: 'Platinum',
    price: '9.99€',
    features: [
      'All Premium features',
      'Exclusive spots',
      '24/7 support',
      'Custom themes',
      'Family sharing'
    ]
  }
]; 