import type {
	IExecuteFunctions,
	IHookFunctions,
	ILoadOptionsFunctions,
	GenericValue,
	IDataObject,
	IHttpRequestMethods,
	IHttpRequestOptions,
} from 'n8n-workflow';

/**
 * Make an API request to Prompt Kaizen
 */
export async function apiRequest(
	this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject | GenericValue | GenericValue[] = {},
	query: IDataObject = {},
) {
	const credentials = await this.getCredentials('promptKaizenApi');
	const baseUrl = (credentials.baseUrl as string).replace(/\/$/, '');
	const apiKey = credentials.apiKey as string;

	const options: IHttpRequestOptions = {
		method,
		body,
		qs: query,
		url: `${baseUrl}/${endpoint}`,
		headers: {
			'x-api-key': apiKey,
			'content-type': 'application/json; charset=utf-8',
		},
		json: true,
	};

	return await this.helpers.httpRequest(options);
}
