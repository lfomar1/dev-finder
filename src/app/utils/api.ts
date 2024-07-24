export const fetchGithubData = async (userName: string) => {
  const TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  const config = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  try {
    const response = await fetch(
      `https://api.github.com/users/${userName}`,
      config
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}, ${response.statusText}`);
    }

    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
};
