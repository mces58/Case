export const getBooksApi = async (search: string) => {
  try {
    let url = `http://192.168.111.76:3000/api/v1/books${
      search ? `?keyword=${search}` : ""
    }`;

    const response = await fetch(url);

    if (!response.ok) {
      console.error("Fetch error:", response.statusText);
      return [];
    }

    const books = await response.json();
    return books;
  } catch (error) {
    console.error("Fetch error:", error.message);
    return [];
  }
};
