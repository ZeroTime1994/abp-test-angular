import type { ClientDto } from '../clients/models';

export interface BeneficiaryDto {
  id?: string;
  relationship?: string;
  beneficiary: ClientDto;
  insertedDate?: string;
  updatedDate?: string;
  insertedBy?: string;
  updatedBy?: string;
}

export interface CreateBeneficiaryDto {
  beneficiaryClientId?: string;
  relationship?: string;
}
