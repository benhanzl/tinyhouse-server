import { Collection, ObjectId } from "mongodb";

export interface Booking {
  _id: ObjectId;
  listing: ObjectId;
  tenant: string;
  checkIn: string;
  checkOut: string;
}

export interface BookingsIndex {
  [key: string]: BookingsIndexYear;
}

export interface BookingsIndexYear {
  [key: string]: BookingsIndexMonth;
}

export interface BookingsIndexMonth {
  [key: string]: boolean;
}

export interface Listing {
  _id: ObjectId;
  address: string;
  admin: string;
  bookings: ObjectId[];
  bookingsIndex: BookingsIndex;
  city: string;
  country: string;
  description: string;
  host: string;
  image: string;
  numOfGuests: number;
  price: number;
  title: string;
  type: ListingType;
}

export enum ListingType {
  Apartment = "APARTMENT",
  House = "HOUSE"
}

export interface User {
  _id: string;
  authorized?: boolean;
  avatar: string;
  bookings: ObjectId[];
  contact: string;
  income: number;
  listings: ObjectId[];
  name: string;
  token: string;
  walletId?: string;
}

export interface Viewer {
  _id?: string;
  token?: string;
  avatar?: string;
  walletId?: string;
  didRequest: boolean;
}

export interface Database {
  bookings: Collection<Booking>;
  listings: Collection<Listing>;
  users: Collection<User>;
}
