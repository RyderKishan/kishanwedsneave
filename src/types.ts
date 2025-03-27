export interface UserAgent {
  ua: string;
  isBot: boolean;
  browser: {
    name?: string;
    version?: string;
    major?: string;
  };
  device: {
    model?: string;
    type?: string;
    vendor?: string;
  };
  engine: {
    name?: string;
    version?: string;
  };
  os: {
    name?: string;
    version?: string;
  };
  cpu: {
    architecture?: string;
  };
}

export interface XCustomDataType {
  source: string;
  userAgent: UserAgent;
  ip: string;
  ipData: IpDataType;
}

export interface IpDataType {
  ip?: string | null;
  is_eu?: boolean | null;
  city?: string | null;
  region?: string | null;
  region_code?: string | null;
  region_type?: string | null;
  country_name?: string | null;
  country_code?: string | null;
  continent_name?: string | null;
  continent_code?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  postal?: string | null;
  calling_code?: string | null;
  flag?: string | null;
  emoji_flag?: string | null;
  emoji_unicode?: string | null;
  asn?: {
    asn?: string | null;
    name?: string | null;
    domain?: string | null;
    route?: string | null;
    type?: string | null;
  } | null;
  carrier?: {
    name?: string | null;
    mcc?: string | null;
    mnc?: string | null;
  } | null;
  languages?:
    | {
        name?: string | null;
        native?: string | null;
        code?: string | null;
      }[]
    | null;
  currency?: {
    name?: string | null;
    code?: string | null;
    symbol?: string | null;
    native?: string | null;
    plural?: string | null;
  } | null;
  time_zone?: {
    name?: string | null;
    abbr?: string | null;
    offset?: string | null;
    is_dst?: boolean | null;
    current_time?: string | null;
  } | null;
  threat?: {
    is_tor?: boolean | null;
    is_icloud_relay?: boolean | null;
    is_proxy?: boolean | null;
    is_datacenter?: boolean | null;
    is_anonymous?: boolean | null;
    is_known_attacker?: boolean | null;
    is_known_abuser?: boolean | null;
    is_threat?: boolean | null;
    is_bogon?: boolean | null;
    blocklists?:
      | {
          name: string;
          site: string;
          type: string;
        }[]
      | null;
  } | null;
  count: string;
}
