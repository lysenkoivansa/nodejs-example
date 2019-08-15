export class BaseApi {
  fetch<Request>(url: string, body: Request): Promise<Response> {
    return fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(body)
    });
  }
}
