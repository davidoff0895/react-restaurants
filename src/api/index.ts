const apiUrl = 'http://localhost:3001/api/';

export const httpClient = {
  get: async (url: string, params?: any) => {
    const response = await fetch(`${apiUrl}${url}`);
    return await response.json();
  }
};
