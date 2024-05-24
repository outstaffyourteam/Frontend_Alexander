const webzApiKey = process.env.NEXT_PUBLIC_WEBZ_KEY;

const API_ROOT_URL = "https://api.webz.io";
const API_URL = `${API_ROOT_URL}/newsApiLite?token=${webzApiKey}`;

export async function search(query: string): Promise<any> {
  const encodedQuery = encodeURIComponent(query);
  const res = await fetch(`${API_URL}&q=${encodedQuery}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
