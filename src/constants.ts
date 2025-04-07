import { IpDataType } from './types';

export const DELAY = 0.2;
export const DURATION = 0.15;

export const IpDataMock: IpDataType = {
  ip: '14.98.113.242',
  is_eu: false,
  city: null,
  region: null,
  region_code: null,
  region_type: null,
  country_name: 'India',
  country_code: 'IN',
  continent_name: 'Asia',
  continent_code: 'AS',
  latitude: 21.997400283813477,
  longitude: 79.0010986328125,
  postal: null,
  calling_code: '91',
  flag: 'https://ipdata.co/flags/in.png',
  emoji_flag: '🇮🇳',
  emoji_unicode: 'U+1F1EE U+1F1F3',
  asn: {
    asn: 'AS45820',
    name: 'TTSL Isp Division',
    domain: null,
    route: '14.98.113.0/24',
    type: 'business',
  },
  languages: [
    {
      name: 'Hindi',
      native: 'हिन्दी',
      code: 'hi',
    },
    {
      name: 'English',
      native: 'English',
      code: 'en',
    },
  ],
  currency: {
    name: 'Indian Rupee',
    code: 'INR',
    symbol: 'Rs',
    native: '₹',
    plural: 'Indian rupees',
  },
  time_zone: {
    name: 'Asia/Kolkata',
    abbr: 'IST',
    offset: '+0530',
    is_dst: false,
    current_time: '2025-03-27T08:53:05+05:30',
  },
  threat: {
    is_tor: false,
    is_icloud_relay: false,
    is_proxy: false,
    is_datacenter: false,
    is_anonymous: false,
    is_known_attacker: false,
    is_known_abuser: false,
    is_threat: false,
    is_bogon: false,
    blocklists: [],
  },
  count: '24',
};
