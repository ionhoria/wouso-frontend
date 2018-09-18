export const idToFieldName = id => {
  return `field${id}`
}

export const fieldNameToId = fieldName => {
  return parseInt(fieldName.substring(5), 10)
}
