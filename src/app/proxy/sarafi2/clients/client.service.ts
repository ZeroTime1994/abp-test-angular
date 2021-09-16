import type { ClientDto, CreateClientDto, DetailedClientDto, GetClientListDto, UpdateClientDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  apiName = 'Default';

  create = (input: CreateClientDto) =>
    this.restService.request<any, ClientDto>({
      method: 'POST',
      url: '/api/app/client',
      body: input,
    },
    { apiName: this.apiName });

  delete = (clientId: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: '/api/app/client',
      params: { clientId },
    },
    { apiName: this.apiName });

  details = (clientId: string) =>
    this.restService.request<any, DetailedClientDto>({
      method: 'GET',
      url: `/api/app/client/details/${clientId}`,
    },
    { apiName: this.apiName });

  list = (input: GetClientListDto) =>
    this.restService.request<any, PagedResultDto<ClientDto>>({
      method: 'GET',
      url: '/api/app/client/list',
      params: { filter: input.filter, type: input.type, status: input.status, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (clientId: string, input: UpdateClientDto) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/client',
      params: { clientId },
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
