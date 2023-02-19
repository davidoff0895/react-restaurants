const apiUrl = 'http://localhost:3001/api/';

export const httpClient = {
  get: async (url: string, params?: any) => {
    const response = await fetch(`${apiUrl}${url}`);
    return await response.json();
  },
  post: async (url: string, data?: any) => {
    const response = await fetch(`${apiUrl}${url}`, {
      method: 'POST',
      body: JSON.stringify(data)
    });
    return await response.json();
  }
};
