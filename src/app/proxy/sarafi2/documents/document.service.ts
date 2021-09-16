import type { ClientDocumentDto, CreateDocumentDto, GetSasLinkDto } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { GetDocumentTypesDto } from '../document-types/models';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  apiName = 'Default';

  create = (clientId: string, input: CreateDocumentDto) =>
    this.restService.request<any, object>({
      method: 'POST',
      url: `/api/app/client/${clientId}/document`,
    },
    { apiName: this.apiName });

  delete = (clientId: string, documentId: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/client/${clientId}/document/${documentId}`,
    },
    { apiName: this.apiName });

  get = (clientId: string, documentId: string) =>
    this.restService.request<any, GetSasLinkDto>({
      method: 'GET',
      url: `/api/app/client/${clientId}/document/${documentId}/sas-link`,
    },
    { apiName: this.apiName });

  getClientDocument = (clientId: string, getAll?: boolean) =>
    this.restService.request<any, ClientDocumentDto[]>({
      method: 'GET',
      url: `/api/app/client/${clientId}/document`,
      params: { getAll },
    },
    { apiName: this.apiName });

  getDocumentTypes = () =>
    this.restService.request<any, GetDocumentTypesDto[]>({
      method: 'GET',
      url: '/api/app/client/document',
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
