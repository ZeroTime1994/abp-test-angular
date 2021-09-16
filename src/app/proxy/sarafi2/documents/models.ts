import type { EntityDto } from '@abp/ng.core';
import type { IFormFile } from '../../microsoft/asp-net-core/http/models';
import type { DocumentTypeDto } from '../document-types/models';
import type { FileTypeDto } from '../file-types/models';

export interface ClientDocumentDto extends EntityDto<string> {
  name?: string;
  documents: DocumentDto[];
}

export interface CreateDocumentDto extends EntityDto {
  documentTypeId?: string;
  name?: string;
  description?: string;
  file: IFormFile;
}

export interface DocumentDto extends EntityDto<string> {
  name?: string;
  description?: string;
  fileName?: string;
  fileSize: number;
  dateValidTo?: string;
  insertedDate?: string;
  updatedDate?: string;
  insertedBy?: string;
  updatedBy?: string;
  documentType: DocumentTypeDto;
  fileType: FileTypeDto;
}

export interface GetSasLinkDto {
  url?: string;
}
