import type { EntityDto } from '@abp/ng.core';

export interface DocumentTypeDto extends EntityDto<string> {
  name?: string;
}

export interface GetDocumentTypesDto extends EntityDto<string> {
  name?: string;
  validDays: number;
}
