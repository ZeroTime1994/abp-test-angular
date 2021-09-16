import type { ContactInternalNoteDto, CreateContactInternalNoteDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactInternalNoteService {
  apiName = 'Default';

  create = (contactId: string, input: CreateContactInternalNoteDto) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/contact/${contactId}/note`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (contactId: string, noteId: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/contact/${contactId}/note/${noteId}`,
    },
    { apiName: this.apiName });

  getList = (contactId: string, maxResultCount: number = 10, skipCount?: number) =>
    this.restService.request<any, PagedResultDto<ContactInternalNoteDto>>({
      method: 'GET',
      url: `/api/app/contact/${contactId}/note`,
      params: { maxResultCount, skipCount },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
