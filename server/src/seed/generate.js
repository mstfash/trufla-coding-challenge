import faker from 'faker';

function buildDepartments(overrides) {
  const department = faker.commerce.department();
  return {
    name: department,
    ...overrides,
  };
}

function buildPromotions(overrides) {
  const code = faker.random.alphaNumeric(7);
  const active = faker.random.boolean();
  const discount = faker.random.number({ min: 5, max: 20 });
  return {
    code,
    active,
    discount,
    ...overrides,
  };
}

function buildProducts(overrides) {
  const productName = faker.commerce.productName();
  const price = faker.commerce.price();
  return {
    name: productName,
    price,
    ...overrides,
  };
}

export { buildDepartments, buildPromotions, buildProducts };
