const baseUrl = "https://cwd-backend.herokuapp.com";

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = `${baseUrl}/${path}`;
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}
