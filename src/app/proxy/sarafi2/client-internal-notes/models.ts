import type { EntityDto } from '@abp/ng.core';

export interface ClientInternalNoteDto extends EntityDto<string> {
  note?: string;
  insertedDate?: string;
  updatedDate?: string;
  insertedBy?: string;
  updatedBy?: string;
}

export interface CreateClientInternalNoteDto {
  note?: string;
}
