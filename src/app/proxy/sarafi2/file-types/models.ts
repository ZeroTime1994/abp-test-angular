import type { EntityDto } from '@abp/ng.core';

export interface FileTypeDto extends EntityDto {
  ext?: string;
  filTypeDescription?: string;
  mime?: string;
}
