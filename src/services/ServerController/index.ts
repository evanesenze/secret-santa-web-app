class ServerController implements IServerController {
  private serverUrl = 'https://localhost:5001/';
  private userSignIn = false;
  private token?: string;
  private role?: UserRole;
  constructor() {}

  public setUserParams(user: IUser) {
    const { token, role } = user;
    this.token = token;
    this.role = role;
    this.userSignIn = true;
  }

  // Authorization: `Bearer ${this.token}`

  private async execute(uri: string, config: RequestInit) {
    config.headers = { ...config.headers, Authorization: `Bearer ${this.token}` };
    return fetch(this.serverUrl + uri, config)
      .then(async (res) => {
        // res.text().then(console.log);
        if (res.status === 200) return { ok: true, response: await res.json() };
        return { ok: false, ...(await res.json()) };
      })
      .catch((error) => ({ ok: false, error: error.response?.data ?? error.message }));
  }

  public getEvent(eventId: string) {
    const config: RequestInit = {
      method: 'GET',
      // headers: { Authorization: `Bearer ${this.token}` },
    };
    return this.execute(`event/${eventId}/`, config);
  }

  public saveEvent(event: IEvent) {
    if (this.role !== 'admin') throw new Error('No rights');
    const config: RequestInit = {
      method: 'POST',
      body: JSON.stringify(event),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return this.execute(`event/`, config);
  }

  public deleteEvent(eventId: string) {
    if (this.role !== 'admin') throw new Error('No rights');
    const config: RequestInit = {
      method: 'DELETE',
    };
    return this.execute(`event/${eventId}/`, config);
  }

  public editEvent(newEvent: IExistEvent) {
    if (this.role !== 'admin') throw new Error('No rights');
    const config: RequestInit = {
      method: 'PUT',
      body: JSON.stringify(newEvent),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return this.execute(`event/${newEvent.id}`, config);
  }

  public getEvents(memberId?: string) {
    return memberId ? this.getEvent(`events/${memberId}`) : this.getEvent(`events`);
  }

  public login(userName: string, password: string) {
    const config: RequestInit = {
      method: 'POST',
      body: JSON.stringify({ userName, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return this.execute('login/', config);
  }

  public getMemberWishes(memberId: string, eventId: string) {
    const config: RequestInit = {
      method: 'GET',
    };
    return this.execute(`member/${memberId}/wishes/${eventId}`, config);
  }

  public saveMemberWishes(memberId: string, eventId: string, wishes: IWishes) {
    const config: RequestInit = {
      method: 'POST',
      body: JSON.stringify(wishes),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return this.execute(`member/${memberId}/wishes/${eventId}`, config);
  }

  public editMemberWishes(memberId: string, eventId: string, wishes: IWishes) {
    const config: RequestInit = {
      method: 'PUT',
      body: JSON.stringify(wishes),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return this.execute(`member/${memberId}/wishes/${eventId}`, config);
  }

  public exitEvent() {
    throw new Error();
  }
}

export { ServerController };
