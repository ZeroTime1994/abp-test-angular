import { mapEnumToOptions } from '@abp/ng.core';

export enum Status {
  Active = 0,
  Blocked = 1,
  Close = 2,
}

export const statusOptions = mapEnumToOptions(Status);
