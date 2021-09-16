import type { EntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';
import type { ContactInternalNoteDto } from '../contact-internal-notes/models';

export interface AddressDto {
  addressText?: string;
  postTown?: string;
  postCode?: string;
  country?: string;
}

export interface ContactDetailsDto extends EntityDto<string> {
  reference?: string;
  title?: string;
  firstName?: string;
  lastName?: string;
  displayName?: string;
  companyName?: string;
  businessNumber?: string;
  email?: string;
  landLine?: string;
  mobile?: string;
  address1: AddressDto;
  address2: AddressDto;
  address3: AddressDto;
  webSite?: string;
  insertedDate?: string;
  updatedDate?: string;
  insertedBy?: string;
  updatedBy?: string;
  notes: ContactInternalNoteDto[];
}

export interface ContactDto extends EntityDto<string> {
  reference?: string;
  title?: string;
  firstName?: string;
  lastName?: string;
  displayName?: string;
  companyName?: string;
  mobile?: string;
}

export interface CreateContactDto extends EntityDto {
  reference?: string;
  title?: string;
  firstName?: string;
  lastName?: string;
  displayName?: string;
  companyName?: string;
  businessNumber?: string;
  email?: string;
  landLine?: string;
  securityPhrase?: string;
  mobile?: string;
  address1AddressText?: string;
  address1PostTown?: string;
  address1PostCode?: string;
  address1Country?: string;
  address2AddressText?: string;
  address2PostTown?: string;
  address2PostCode?: string;
  address2Country?: string;
  address3AddressText?: string;
  address3PostTown?: string;
  address3PostCode?: string;
  address3Country?: string;
  webSite?: string;
  clientId?: string;
}

export interface GetContactListDto extends PagedAndSortedResultRequestDto {
  filter?: string;
}

export interface UpdateContactDto {
  reference?: string;
  title?: string;
  firstName?: string;
  lastName?: string;
  displayName?: string;
  companyName?: string;
  businessNumber?: string;
  email?: string;
  landLine?: string;
  securityPhrase?: string;
  mobile?: string;
  address1AddressText?: string;
  address1PostTown?: string;
  address1PostCode?: string;
  address1Country?: string;
  address2AddressText?: string;
  address2PostTown?: string;
  address2PostCode?: string;
  address2Country?: string;
  address3AddressText?: string;
  address3PostTown?: string;
  address3PostCode?: string;
  address3Country?: string;
  webSite?: string;
  clientId?: string;
}
