import type { ContactDetailsDto, ContactDto, CreateContactDto, GetContactListDto, UpdateContactDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  apiName = 'Default';

  create = (input: CreateContactDto) =>
    this.restService.request<any, ContactDto>({
      method: 'POST',
      url: '/api/app/contact',
      body: input,
    },
    { apiName: this.apiName });

  delete = (contactId: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/contact/${contactId}`,
    },
    { apiName: this.apiName });

  getDetails = (contactId: string) =>
    this.restService.request<any, ContactDetailsDto>({
      method: 'GET',
      url: `/api/app/contact/${contactId}`,
    },
    { apiName: this.apiName });

  getList = (input: GetContactListDto) =>
    this.restService.request<any, PagedResultDto<ContactDto>>({
      method: 'GET',
      url: '/api/app/contact',
      params: { filter: input.filter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (contactId: string, input: UpdateContactDto) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/contact/${contactId}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
