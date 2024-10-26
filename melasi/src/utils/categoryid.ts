export function generateCategoryId(): string {
    const timestamp = Date.now().toString(36);
    const randomSuffix = Math.random().toString(36).substring(2, 8);
    return `cat-${timestamp}-${randomSuffix}`;
  }