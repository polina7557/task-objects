export function personUpdate(data) {
  const result = { ...data };
  if (result.gender === 'female') {
    delete result.age;
  } else if (result.gender === 'male') {
    if (!('income' in result)) {
      result.income = 100000;
    }
  }
  return result;
}

export function objectFieldsList(obj1, obj2, obj3) {
  const fields = new Set([
    ...Object.keys(obj1),
    ...Object.keys(obj2),
    ...Object.keys(obj3)
  ]);
  return [...fields].sort();
}

export function objectClone(obj, count) {
  const result = [];
  for (let i = 0; i < count; i++) {
    const clone = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          clone[key] = { ...obj[key] };
        } else {
          clone[key] = obj[key];
        }
      }
    }
    clone.id = i;
    result.push(clone);
  }
  return result;
}