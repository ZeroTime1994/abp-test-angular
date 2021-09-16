import type { BeneficiaryDto, CreateBeneficiaryDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BeneficiaryService {
  apiName = 'Default';

  create = (clientId: string, input: CreateBeneficiaryDto[]) =>
    this.restService.request<any, PagedResultDto<BeneficiaryDto>>({
      method: 'POST',
      url: `/api/app/client/${clientId}/Beneficiary`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (clientId: string, beneficiaryId: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/client/${clientId}/Beneficiary/${beneficiaryId}`,
    },
    { apiName: this.apiName });

  list = (clientId: string, input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<BeneficiaryDto>>({
      method: 'GET',
      url: `/api/app/client/${clientId}/Beneficiary`,
      params: { skipCount: input.skipCount, maxResultCount: input.maxResultCount, sorting: input.sorting },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
