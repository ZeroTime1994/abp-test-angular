import type { ClientInternalNoteDto, CreateClientInternalNoteDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto, PagedResultRequestDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientInternalNoteService {
  apiName = 'Default';

  create = (clientId: string, input: CreateClientInternalNoteDto) =>
    this.restService.request<any, ClientInternalNoteDto>({
      method: 'POST',
      url: `/api/app/client/${clientId}/note`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (clientId: string, noteId: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/client/${clientId}/note/${noteId}`,
    },
    { apiName: this.apiName });

  list = (clientId: string, input: PagedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<ClientInternalNoteDto>>({
      method: 'GET',
      url: `/api/app/client/${clientId}/note`,
      params: { maxResultCount: input.maxResultCount, skipCount: input.skipCount },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
