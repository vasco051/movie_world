export const getTotalPages = (countItems: number, limit: number = 5) => Math.ceil(countItems / limit)

export const getPagesArray = (totalPages: number) => {
  const result = []
  for (let i = 0; i < totalPages; i++){
    result.push(i + 1)
  }
  return result
}

export function getLimitedItems<T>(items: readonly T[], page: number, limit: number = 5): T[]{
  return [...items].splice(page * limit - limit, limit)
}