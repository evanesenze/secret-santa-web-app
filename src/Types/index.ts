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

interface IUser {
  email: string;
  exp: number;
  role: UserRole;
  token: string;
  UserID: string;
  name?: string;
  surname?: string;
  patronymic?: string;
}

type UserRole = 'admin' | 'user';

interface IServerController {
  getEvent(eventId: string): Promise<any>;
  setUserParams(user: IUser): void;
  saveEvent(event: IEvent): Promise<any>;
  deleteEvent(eventId: string): Promise<any>;
  editEvent(newEvent: IExistEvent): Promise<any>;
  getEvents(memberId?: string): Promise<any>;
  login(userName: string, password: string): Promise<any>;
  getMemberWishes(memberId: string, eventId: string): Promise<any>;
  saveMemberWishes(memberId: string, eventId: string, wishes: IWishes): Promise<any>;
  editMemberWishes(memberId: string, eventId: string, wishes: IWishes): Promise<any>;
  exitEvent(): any;
  getUserInfo(userId: string): Promise<any>;
  getUserEvent(eventId: string): Promise<any>;
  getUserPreferences(eventId: string): Promise<any>;
}

interface IDefaultProps {
  serverController: IServerController;
  user: IUser;
}

interface IDefaultAdminProps extends IDefaultProps {}
