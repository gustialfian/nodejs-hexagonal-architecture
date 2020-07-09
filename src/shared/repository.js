function pagination(query, perPage, start) {
  if (!Number.isInteger(perPage) || !Number.isInteger(start)) {
      throw Error("perPage and page are not an integer")
  }

  return `${query} limit ${perPage} offset ${start}`
}

function materialPagination(query, page, limit) {
  if (!Number.isInteger(page) || !Number.isInteger(limit)) {
      throw Error("page and size are not an integer")
  }
  
  const start = (page - 1) * limit

  return `${query} limit ${limit} offset ${start}`
}

module.exports = {
  pagination,
  materialPagination,
}