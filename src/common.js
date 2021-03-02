export const isNumber = subject => typeof subject === 'number'
  // is not NaN: `NaN === NaN` => `false`
  && subject === subject

export const isArray = Array.isArray
