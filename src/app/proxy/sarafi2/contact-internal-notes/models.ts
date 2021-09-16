import type { EntityDto } from '@abp/ng.core';

export interface ContactInternalNoteDto extends EntityDto<string> {
  note?: string;
  insertedDate?: string;
  updatedDate?: string;
  insertedBy?: string;
  updatedBy?: string;
}

export interface CreateContactInternalNoteDto extends EntityDto {
  note?: string;
}
