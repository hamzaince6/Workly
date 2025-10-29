export const deepClone = <T>(obj: T): T => {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime()) as any;
  if (obj instanceof Array) return obj.map((item) => deepClone(item)) as any;
  
  const clonedObj = {} as T;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  return clonedObj;
};

export const omit = <T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> => {
  const result = { ...obj };
  keys.forEach((key) => delete result[key]);
  return result;
};

export const pick = <T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> => {
  const result = {} as Pick<T, K>;
  keys.forEach((key) => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });
  return result;
};

export const isEmpty = (obj: object): boolean => {
  return Object.keys(obj).length === 0;
};

export const isEqual = (obj1: any, obj2: any): boolean => {
  if (obj1 === obj2) return true;
  
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
    return false;
  }
  
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) return false;
  
  return keys1.every((key) => isEqual(obj1[key], obj2[key]));
};

export const merge = <T extends object>(...objects: Partial<T>[]): T => {
  return Object.assign({}, ...objects) as T;
};

export const deepMerge = <T extends object>(...objects: Partial<T>[]): T => {
  const isObject = (obj: any): obj is object => {
    return obj && typeof obj === 'object' && !Array.isArray(obj);
  };

  return objects.reduce((result, obj) => {
    Object.keys(obj).forEach((key) => {
      const resultValue = (result as any)[key];
      const objValue = (obj as any)[key];

      if (isObject(resultValue) && isObject(objValue)) {
        (result as any)[key] = deepMerge(resultValue, objValue);
      } else {
        (result as any)[key] = objValue;
      }
    });
    return result;
  }, {} as T);
};

export const getNestedValue = (obj: any, path: string, defaultValue?: any): any => {
  const keys = path.split('.');
  let result = obj;

  for (const key of keys) {
    if (result === null || result === undefined) {
      return defaultValue;
    }
    result = result[key];
  }

  return result !== undefined ? result : defaultValue;
};

export const setNestedValue = (obj: any, path: string, value: any): void => {
  const keys = path.split('.');
  const lastKey = keys.pop()!;
  let current = obj;

  for (const key of keys) {
    if (!current[key] || typeof current[key] !== 'object') {
      current[key] = {};
    }
    current = current[key];
  }

  current[lastKey] = value;
};

export const flattenObject = (
  obj: object,
  prefix: string = '',
  separator: string = '.'
): Record<string, any> => {
  const result: Record<string, any> = {};

  Object.entries(obj).forEach(([key, value]) => {
    const newKey = prefix ? `${prefix}${separator}${key}` : key;
    
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      Object.assign(result, flattenObject(value, newKey, separator));
    } else {
      result[newKey] = value;
    }
  });

  return result;
};

export const unflattenObject = (
  obj: Record<string, any>,
  separator: string = '.'
): any => {
  const result: any = {};

  Object.entries(obj).forEach(([key, value]) => {
    setNestedValue(result, key.replace(new RegExp(separator, 'g'), '.'), value);
  });

  return result;
};

export const mapKeys = <T extends object>(
  obj: T,
  fn: (key: string, value: any) => string
): Record<string, any> => {
  const result: Record<string, any> = {};
  
  Object.entries(obj).forEach(([key, value]) => {
    const newKey = fn(key, value);
    result[newKey] = value;
  });
  
  return result;
};

export const mapValues = <T extends object, R>(
  obj: T,
  fn: (value: any, key: string) => R
): Record<string, R> => {
  const result: Record<string, R> = {};
  
  Object.entries(obj).forEach(([key, value]) => {
    result[key] = fn(value, key);
  });
  
  return result;
};

