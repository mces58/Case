/**
 * The BookFilter class is used to search for books based on a keyword query.
 * The search method is used to search for books based on a keyword query.
 * The search method returns a query object.
 */
class BookFilter {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  search() {
    const keyword = this.queryString.keyword;

    if (keyword) {
      const searchConditions = {
        $or: [
          { title: { $regex: keyword, $options: "i" } },
          { author: { $regex: keyword, $options: "i" } },
          { publisher: { $regex: keyword, $options: "i" } },
          { description: { $regex: keyword, $options: "i" } },
        ],
      };
      this.query = this.query.find(searchConditions);
    }
    return this;
  }
}

export default BookFilter;
