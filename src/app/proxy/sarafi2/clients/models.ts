import type { EntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';
import type { Status } from './status.enum';
import type { Type } from './type.enum';
import type { ClientInternalNoteDto } from '../client-internal-notes/models';

export interface ClientDto extends EntityDto<string> {
  tradingName?: string;
  legalName?: string;
  creditLimit: number;
  status?: string;
  type?: string;
}

export interface CreateClientDto {
  tradingName?: string;
  legalName?: string;
  creditLimit: number;
  status: Status;
  type: Type;
}

export interface DetailedClientDto extends EntityDto<string> {
  tradingName?: string;
  legalName?: string;
  status?: string;
  type?: string;
  creditLimit: number;
  insertedDate?: string;
  updatedDate?: string;
  insertedBy?: string;
  updatedBy?: string;
  notes: ClientInternalNoteDto[];
}

export interface GetClientListDto extends PagedAndSortedResultRequestDto {
  filter?: string;
  type: Type;
  status: Status;
}

export interface UpdateClientDto {
  tradingName?: string;
  legalName?: string;
  creditLimit: number;
  status: Status;
  type: Type;
}
