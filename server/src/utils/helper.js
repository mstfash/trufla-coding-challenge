async function paginate(config) {
  let { limit, page, data, type } = config;
  let items = [...data];
  items = items.slice(limit * page, limit * page + limit);
  return {
    [type]: items,
    page,
    limit,
    pages: Math.ceil(data.length / limit),
    total: data.length,
  };
}

export { paginate };
