export async function isLazyImport(fn: any): Promise<boolean> {
  if (typeof fn === 'function') {
      try {
          const result = await fn()
          return result && typeof result === 'object' && 'default' in result
      } catch {
          return false
      }
  }
  return false
}

export function isAsyncIterableIterator(obj: any): obj is AsyncIterableIterator<any> {
  return obj && typeof obj[Symbol.asyncIterator] === 'function' && typeof obj.next === 'function'
}