import type { IExecuteFunctions, IHookFunctions, ILoadOptionsFunctions, GenericValue, IDataObject, IHttpRequestMethods } from 'n8n-workflow';
export declare function apiRequest(this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions, method: IHttpRequestMethods, endpoint: string, body?: IDataObject | GenericValue | GenericValue[], query?: IDataObject): Promise<any>;
