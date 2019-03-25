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
    return fetch(API_URL + "/lights", {
      method: "GET"
    })
      .then(handleResponseErrors)
      .then(response => response.json());
  }

  public static async getRooms(): Promise<any> {
    return fetch(API_URL + "/rooms", {
      method: "GET"
    })
      .then(handleResponseErrors)
      .then(response => response.json());
  }
}
