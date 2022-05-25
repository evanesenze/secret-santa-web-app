interface IEvent {
  id?: string;
  description: string;
  endRegistration: string;
  endEvent: string;
  sumPrice?: number;
  sendFriends?: boolean;
  tracking?: boolean;
  reshuffle?: boolean;
  membersCount: number;
  memberView: any[];
}

type IExistEvent = Required<IEvent>;

interface IWishes {
  name: string;
  phoneNumber: string;
  zip: string;
  region: string;
  city: string;
  street: string;
  apartment: string;
  wish: string;
}
