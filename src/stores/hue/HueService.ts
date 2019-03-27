const API_URL: string = "http://127.0.0.1:5000/hue";

function handleResponseErrors(response: Response) {
  if (!response.ok) {
    throw Error(
      `${response.status} (${response.statusText}), request to ${response.url}`
    );
  }
  return response;
}

export default class HueService {
  public static async getLights(): Promise<any> {
    return HueService.get("/lights");
  }

  public static async getRooms(): Promise<any> {
    return HueService.get("/rooms");
  }

  public static async switchRoom(id: number, action: any): Promise<any> {
    const switchAction = {
      on: !action.on
    };
    const endpoint = `/rooms/${id}`;
    return HueService.put(endpoint, switchAction);
  }

  public static async put(endpoint: string, action: any): Promise<any> {
    return fetch(API_URL + endpoint, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(action)
    })
      .then(handleResponseErrors)
      .then(response => response.json());
  }

  public static async get(endpoint: string): Promise<any> {
    return fetch(API_URL + endpoint, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then(handleResponseErrors)
      .then(response => response.json());
  }
}
