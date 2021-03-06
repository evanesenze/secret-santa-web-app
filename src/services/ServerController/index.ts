class ServerController implements IServerController {
  private serverUrl = 'https://localhost:5001/';
  private token?: string;
  private role?: UserRole;
  private userId?: string;

  public setUserParams(user: IUser) {
    const { token, role, UserID } = user;
    this.token = token;
    this.role = role;
    this.userId = UserID;
  }

  private async execute(uri: string, config: RequestInit) {
    config.headers = { ...config.headers, Authorization: `Bearer ${this.token}` };
    const res = await fetch(this.serverUrl + uri, config).catch(console.error);
    if (!res) return { ok: false };
    const obj = await res
      .json()
      .then((response) => ({ ok: res.ok, response }))
      .catch((error) => ({ ok: res.ok, error }));
    return obj;
  }

  public getUserInfo(userId: string) {
    const config: RequestInit = {
      method: 'GET',
    };
    return this.execute(`user/${userId}/`, config);
  }

  public getUserEvent(eventId: string) {
    if (!this.userId) throw new Error('No user id');
    const config: RequestInit = {
      method: 'GET',
    };
    return this.execute(`user/${this.userId}/event/${eventId}`, config);
  }

  public exitGame(eventId: string) {
    if (!this.userId) throw new Error('No user id');
    const config: RequestInit = {
      method: 'PUT',
    };
    return this.execute(`user/${this.userId}/exit/${eventId}`, config);
  }

  public getRecipientInfo(eventId: string) {
    if (!this.userId) throw new Error('No user id');
    const config: RequestInit = {
      method: 'GET',
    };
    return this.execute(`user/${this.userId}/event/${eventId}/recipientInfo`, config);
  }

  public getUserPreferences(eventId: string) {
    if (!this.userId) throw new Error('No user id');
    const config: RequestInit = {
      method: 'GET',
    };
    return this.execute(`user/${this.userId}/preferences/${eventId}`, config);
  }

  public updateUserPreferences(eventId: string, preferences: IExistPreferences) {
    if (!this.userId) throw new Error('No user id');
    const config: RequestInit = {
      method: 'PUT',
      body: JSON.stringify(preferences),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return this.execute(`user/${this.userId}/preferences/${eventId}`, config);
  }

  public saveUserPreferences(eventId: string, preferences: IExistPreferences) {
    if (!this.userId) throw new Error('No user id');
    const config: RequestInit = {
      method: 'POST',
      body: JSON.stringify(preferences),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return this.execute(`user/${this.userId}/preferences/${eventId}`, config);
  }

  public getEvent(eventId: string) {
    const config: RequestInit = {
      method: 'GET',
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
}

export { ServerController };
