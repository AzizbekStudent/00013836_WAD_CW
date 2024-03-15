import { Vendor } from "./Vendor";

// Student ID: 00013836
export interface Apartment {
    location_: any;
    vendor_: any;
    id: number;
    houseTitle: string;
    description: string;
    area: number;
    price: number;
    completionDate: Date;
    isForRent: boolean;
    isAvailable: boolean;
    locationId?: number;
    location?: Location;
    vendorId?: number;
    vendor?: Vendor;
  }