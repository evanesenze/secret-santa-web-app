const serverUrl = 'https://localhost:5001/';

const execute = async (uri: string, config: RequestInit) => {
  return fetch(serverUrl + uri, config)
    .then(async (res) => {
      console.log(res);
      if (res.status === 200) return { ok: true, response: await res.json() };
      return { ok: false, ...(await res.json()) };
    })
    .catch((error) => ({ ok: false, error: error.response?.data ?? error.message }));
};

const getEvent = (eventId: string) => {
  const config: RequestInit = {
    method: 'GET',
  };
  return execute(`event/${eventId}/`, config);
};

const saveEvent = (event: IEvent) => {
  const config: RequestInit = {
    method: 'POST',
    body: JSON.stringify(event),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return execute(`event/`, config);
};

const deleteEvent = (eventId: string) => {
  const config: RequestInit = {
    method: 'DELETE',
  };
  return execute(`event/${eventId}/`, config);
};

const editEvent = (newEvent: IExistEvent) => {
  const config: RequestInit = {
    method: 'PUT',
    body: JSON.stringify(newEvent),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return execute(`event/`, config);
};

const getEvents = (memberId?: string) => (memberId ? getEvent(`events/${memberId}`) : getEvent(`events`));

const login = (email: string, password: string) => {};

const getMemberWishes = (memberId: string, eventId: string) => {
  const config: RequestInit = {
    method: 'GET',
  };
  return execute(`member/${memberId}/wishes/${eventId}`, config);
};

const saveMemberWishes = (memberId: string, eventId: string, wishes: IWishes) => {
  const config: RequestInit = {
    method: 'POST',
    body: JSON.stringify(wishes),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return execute(`member/${memberId}/wishes/${eventId}`, config);
};

const editMemberWishes = (memberId: string, eventId: string, wishes: IWishes) => {
  const config: RequestInit = {
    method: 'PUT',
    body: JSON.stringify(wishes),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return execute(`member/${memberId}/wishes/${eventId}`, config);
};

const exitEvent = (memberId: string, eventId: string) => {
  // const config: RequestInit = {
  //   method: 'PUT',
  //   body: JSON.stringify(wishes),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // };
  // return execute(`member/${memberId}/exit/${eventId}`, config);
};

export { getEvents, saveEvent, getEvent, deleteEvent, editEvent };
