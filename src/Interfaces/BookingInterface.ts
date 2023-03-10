export interface Booking {
    id: number;
    guest: string;
    orderDate: string;
    checkin: string;
    checkout: string;
    roomId?: number;
    price: number;
    specialRequest: string;
    amenities?: string[];
    typeRoom: string;
    description: string;
    photo: {};
    state: string

}