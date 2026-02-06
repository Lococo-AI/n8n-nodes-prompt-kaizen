# n8n-nodes-prompt-kaizen

This is an n8n community node. It lets you use Prompt Kaizen in your n8n workflows.

Prompt Kaizen is a continuous improvement platform for AI agent prompts with version control, feedback collection, and AI-powered optimization.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Usage](#usage)  
[Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

**Prompt**

- **Get Prompt**: Retrieve and render a prompt with version control support
  - Fetch latest version, specific version, or version by tag
  - Render templates with context variables
  - Supports both static and template-based prompts
- **Submit Feedback**: Submit feedback for a prompt version
  - Rate prompts (1-5 scale)
  - Add comments and test scenarios
  - Track actual vs expected outputs

## Credentials

To use this node, you need a Prompt Kaizen account with API access.

1. Sign up at [prompt-kaizen.lococo.ai](https://prompt-kaizen.lococo.ai)
2. Generate an API key from your account settings
3. In n8n, create new Prompt Kaizen API credentials:
   - **API Key**: Your Prompt Kaizen API key
   - **Base URL**: `https://prompt-kaizen.lococo.ai/api` (default)

## Compatibility

Minimum n8n version: 1.0.0

Tested against n8n version: 1.0.0+

## Usage

### Get Prompt Example

1. Select **Get Prompt** operation
2. Choose a prompt from your workspace
3. Select version strategy:
   - **Latest Version**: Always use the most recent version
   - **Specific Version**: Pin to a specific version number
   - **By Tag**: Use tagged versions (e.g., "production", "staging")
4. For template prompts, provide **Context Variables** as JSON to render dynamic content

### Submit Feedback Example

1. Select **Submit Feedback** operation
2. Choose the prompt and version
3. Provide a rating (1-5)
4. Optionally add comments and test scenarios to help improve the prompt

This enables continuous improvement loops where AI agent outputs can be automatically evaluated and feedback collected to optimize prompts over time.

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [Prompt Kaizen Documentation](https://prompt-kaizen.lococo.ai)
