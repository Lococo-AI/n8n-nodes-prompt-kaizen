import type { AllEntities, Entity, PropertiesOf } from 'n8n-workflow';

type PromptKaizenMap = {
	prompt: 'getPrompt' | 'submitFeedback';
};

export type PromptKaizen = AllEntities<PromptKaizenMap>;

export type PromptKaizenPrompt = Entity<PromptKaizenMap, 'prompt'>;

export type PromptProperties = PropertiesOf<PromptKaizenPrompt>;

export interface ITestScenarioResponse {
	input: string;
	actual_output: string;
	expected_output?: string;
}

export interface IFeedbackResponse {
	id: string;
	rating: number;
	comment?: string;
	test_scenario?: ITestScenarioResponse;
	created_at: string;
}

export interface IImprovementSuggestionResponse {
	id: string;
	suggested_content: string;
	ai_rationale: string;
	status: 'pending' | 'accepted' | 'declined';
	decline_reason?: string;
	created_at: string;
	resolved_at?: string;
	resulting_version_id?: string;
}

export interface IVersionResponse {
	id: string;
	version: string;
	digest: string;
	content: string;
	content_type: 'static' | 'template';
	variables?: string[];
	changelog?: string;
	created_at: string;
	average_rating?: number;
	feedback_count: number;
	feedback: IFeedbackResponse[];
	improvement_suggestions: IImprovementSuggestionResponse[];
}

export interface ITagResponse {
	id: string;
	name: string;
	version_id: string;
	updated_at: string;
}

export interface IPromptResponse {
	id: string;
	user_id: string;
	name: string;
	description?: string;
	prompt_type: 'system' | 'user';
	created_at: string;
	updated_at: string;
	versions: IVersionResponse[];
	tags: ITagResponse[];
}

export interface IRenderVersionResponse {
	rendered_content: string;
}

export interface ISubmitFeedbackRequest {
	version_id: string;
	rating: number;
	comment?: string;
	test_input?: string;
	test_actual_output?: string;
	test_expected_output?: string;
}

export interface ISubmitFeedbackResponse {
	feedback_id: string;
}
