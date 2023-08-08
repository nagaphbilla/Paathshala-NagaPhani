import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerApplications = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Applications, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly phone_number: string;
  readonly job_title: string;
  readonly job_type: string;
  readonly comment?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyApplications = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Applications, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly phone_number: string;
  readonly job_title: string;
  readonly job_type: string;
  readonly comment?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Applications = LazyLoading extends LazyLoadingDisabled ? EagerApplications : LazyApplications

export declare const Applications: (new (init: ModelInit<Applications>) => Applications) & {
  copyOf(source: Applications, mutator: (draft: MutableModel<Applications>) => MutableModel<Applications> | void): Applications;
}