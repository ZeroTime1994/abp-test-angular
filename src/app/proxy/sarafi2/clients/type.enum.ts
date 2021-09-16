import { mapEnumToOptions } from '@abp/ng.core';

export enum Type {
  Personal = 0,
  Businness = 1,
}

export const typeOptions = mapEnumToOptions(Type);
