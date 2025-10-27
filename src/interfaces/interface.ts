// Contact interfaces
export interface ContactType {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string,
    message: string;
    reqType: 'Contact' | 'Prayer';
    createdAt: any
}

export interface ContactData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string,
    message: string;
    reqType: 'Contact' | 'Prayer';
}

export interface ContactResponsePayload {
    message?: string;
    data?: ContactType | ContactType[];
}

// Welfare interfaces
export interface WelfareType {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string,
    date: Date;
    pickUp: string;
    createdAt: any;
}

export interface WelfareData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string,
    date: Date;
    pickUp: string;
}

export interface WelfareResponsePayload {
    message?: string;
    data?: WelfareType | WelfareType[];
}

// Subscriber interfaces
export interface SubscriberType {
    _id: string;
    fullName: string;
    email: string;
    createdAt: any;
}

export interface SubscriberData {
    fullName: string;
    email: string;
}

export interface SubscriberResponsePayload {
    message?: string;
    data?: SubscriberType | SubscriberType[];
}