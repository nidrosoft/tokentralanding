# TokenTra Footer Pages - Complete Content

This document contains all the content for TokenTra's footer pages, ready to be implemented in Next.js.

---

# Page 1: Changelog (/changelog)

## Page Meta
```
title: "Changelog | TokenTra"
description: "See what's new in TokenTra. Product updates, new features, and improvements to the AI cost intelligence platform."
```

## Page Content

```markdown
# Changelog

Stay up to date with the latest improvements to TokenTra.

---

## January 2025

### January 15, 2025 — Smart Model Routing (Beta)

We're excited to announce the beta release of Smart Model Routing, our intelligent system that automatically routes AI requests to the most cost-effective model based on query complexity.

**New Features:**
- Automatic complexity detection for incoming requests
- Configurable routing rules based on cost/quality tradeoffs
- A/B testing framework to validate quality isn't degraded
- Fallback routing when primary providers are down
- Real-time routing analytics dashboard

**How it works:** Simple queries like "What's the weather?" get routed to cost-efficient models (GPT-4o-mini, Claude Haiku), while complex reasoning tasks get the power they need (GPT-4, Claude Sonnet). Early adopters are seeing 30-50% savings on routine queries.

[Enable Smart Routing →](/settings/routing)

---

### January 8, 2025 — AWS Bedrock Integration

TokenTra now supports AWS Bedrock as a first-class provider.

**What's included:**
- Full cost and usage sync via AWS Cost Explorer API
- Support for all Bedrock models: Claude (via Bedrock), Titan, Llama 2, Mistral, Stable Diffusion
- IAM role-based authentication (cross-account)
- Unified dashboard view alongside other providers

[Connect AWS Bedrock →](/providers/aws-bedrock)

---

### January 3, 2025 — Semantic Caching

Stop paying for the same answer twice. Our new semantic caching feature recognizes when you've asked similar questions before.

**Features:**
- Semantic similarity matching (not just exact match)
- Configurable TTL per query type
- Cache hit rate analytics
- Zero latency for cached responses
- Automatic invalidation options

**Results:** Beta customers are seeing 15-25% cost reduction on FAQ-style and repetitive queries.

[Learn about Semantic Caching →](/docs/features/caching)

---

## December 2024

### December 20, 2024 — Python SDK v1.0

The TokenTra Python SDK is now generally available.

**Features:**
- Full feature parity with Node.js SDK
- Support for OpenAI, Anthropic, Google, and Azure clients
- Async/await support with asyncio
- Django and FastAPI middleware
- Type hints throughout

```python
from tokentra import TokenTra
from openai import OpenAI

tokentra = TokenTra(api_key="tt_live_xxx")
openai = tokentra.wrap(OpenAI())

response = openai.chat.completions.create(
    model="gpt-4",
    messages=[...],
    tokentra={"feature": "chat", "team": "product"}
)
```

[Python SDK Documentation →](/docs/sdk/python)

---

### December 12, 2024 — Budget Forecasting

Know when you'll exceed your budget before it happens.

**New capabilities:**
- Holt-Winters forecasting with seasonality awareness
- "You'll exceed budget by Tuesday" predictive alerts
- Confidence intervals on projections
- Weekly and monthly forecast reports

[Set up forecast alerts →](/alerts/new)

---

### December 5, 2024 — Anomaly Detection Engine

Our new ML-powered anomaly detection catches unusual spending patterns automatically.

**Detection types:**
- Spending spikes (Z-score > 3)
- Unusual model usage patterns
- Off-hours activity
- New cost centers appearing
- Rapid growth detection

**How it works:** We analyze your historical patterns and alert you when something looks unusual—before it becomes a $10K surprise.

[Configure anomaly alerts →](/alerts)

---

## November 2024

### November 25, 2024 — Google Vertex AI Integration

Full support for Google Cloud's Vertex AI platform.

**Supported models:**
- Gemini Pro & Gemini Flash
- PaLM 2
- Imagen
- Embeddings

**Authentication:** Service account with BigQuery billing export access.

[Connect Google Vertex →](/providers/google-vertex)

---

### November 15, 2024 — Team Workspaces

Organize your AI spending by team with dedicated workspaces.

**Features:**
- Separate dashboards per team
- Team-specific budgets and alerts
- Role-based access control
- Cross-team comparison views

[Set up team workspaces →](/settings/teams)

---

### November 8, 2024 — Slack Integration

Get alerts where your team already works.

**Capabilities:**
- Real-time alert notifications
- Weekly digest summaries
- Slash commands for quick lookups
- Interactive budget approvals

[Connect Slack →](/settings/integrations/slack)

---

### November 1, 2024 — Node.js SDK v1.0

The official TokenTra Node.js SDK is now generally available.

**Features:**
- Zero-latency wrapper for OpenAI, Anthropic, Google, Azure
- Automatic token counting and cost calculation
- Custom attribution tags
- TypeScript support
- Batch telemetry (non-blocking)

[Node.js SDK Documentation →](/docs/sdk/nodejs)

---

## October 2024

### October 20, 2024 — Azure OpenAI Integration

Connect your Azure OpenAI deployments to TokenTra.

**Features:**
- Service principal authentication
- Cost data via Azure Cost Management API
- Usage metrics via Azure Monitor
- Per-deployment breakdown

[Connect Azure OpenAI →](/providers/azure-openai)

---

### October 10, 2024 — Cost Attribution

Finally know who's spending what.

**Attribution dimensions:**
- Team
- Project
- Feature
- User
- Custom tags

**Reports:**
- Chargeback reports for finance
- Per-user unit economics
- Feature cost analysis

[Learn about attribution →](/docs/features/attribution)

---

### October 1, 2024 — TokenTra Launch 🚀

We're live! TokenTra launches with support for OpenAI and Anthropic.

**Launch features:**
- Unified cost dashboard
- Real-time sync (5-minute refresh)
- Historical trends and comparison
- Budget limits and alerts
- Email notifications
- CSV export

[Get started →](/signup)

---

## Subscribe to Updates

Get notified when we ship new features.

[Subscribe to changelog →]

*Follow us on [Twitter/X](https://twitter.com/tokentra) for the latest updates.*
```

---

# Page 2: Integrations (/integrations)

## Page Meta
```
title: "Integrations | TokenTra"
description: "Connect TokenTra to all your AI providers and notification channels. Support for OpenAI, Anthropic, Google, Azure, AWS, Slack, PagerDuty, and more."
```

## Page Content

```markdown
# Integrations

Connect all your AI providers and tools in one place. TokenTra integrates with the platforms you already use.

---

## AI Providers

### OpenAI

**Status:** ✅ Generally Available

Connect your OpenAI organization to track costs across all models including GPT-4, GPT-4o, GPT-3.5 Turbo, DALL-E, Whisper, and Embeddings.

**Supported models:**
- GPT-4, GPT-4 Turbo, GPT-4o, GPT-4o-mini
- GPT-3.5 Turbo
- o1, o1-mini (reasoning models)
- DALL-E 3
- Whisper (speech-to-text)
- TTS (text-to-speech)
- text-embedding-3-small, text-embedding-3-large

**Authentication:** Admin API Key (read-only access to usage data)

**Data available:**
- Token usage by model and date
- Cost in USD
- Request counts
- 1-minute granularity

**Setup time:** ~1 minute

[Connect OpenAI →](/providers/openai)
[View setup guide →](/docs/providers/openai)

---

### Anthropic

**Status:** ✅ Generally Available

Track your Claude usage and costs across all model variants.

**Supported models:**
- Claude 3.5 Sonnet
- Claude 3.5 Haiku
- Claude 3 Opus
- Claude 3 Sonnet
- Claude 3 Haiku

**Authentication:** Admin API Key (sk-ant-admin-...)

**Data available:**
- Input/output tokens
- Cached tokens and cache creation tokens
- Cost breakdown by model and workspace
- 1-minute, 1-hour, or 1-day granularity

**Setup time:** ~1 minute

[Connect Anthropic →](/providers/anthropic)
[View setup guide →](/docs/providers/anthropic)

---

### Google Vertex AI

**Status:** ✅ Generally Available

Connect your Google Cloud Vertex AI usage for Gemini and other models.

**Supported models:**
- Gemini Pro, Gemini Flash
- Gemini Pro Vision
- PaLM 2
- Imagen (image generation)
- Embeddings

**Authentication:** Service Account with BigQuery access

**Data available:**
- Prediction requests and tokens
- Cost via BigQuery billing export
- Breakdown by model and project

**Setup time:** ~5 minutes (requires BigQuery export setup)

[Connect Google Vertex →](/providers/google-vertex)
[View setup guide →](/docs/providers/google-vertex)

---

### Azure OpenAI

**Status:** ✅ Generally Available

Track costs for OpenAI models deployed on Azure.

**Supported models:**
- All OpenAI models deployed via Azure (GPT-4, GPT-3.5, embeddings, DALL-E)

**Authentication:** Service Principal (OAuth)

**Data available:**
- Token usage via Azure Monitor
- Cost via Azure Cost Management Export
- Breakdown by resource and deployment

**Setup time:** ~5 minutes

[Connect Azure OpenAI →](/providers/azure-openai)
[View setup guide →](/docs/providers/azure-openai)

---

### AWS Bedrock

**Status:** ✅ Generally Available

Connect AWS Bedrock to track costs across all available foundation models.

**Supported models:**
- Anthropic Claude (via Bedrock)
- Amazon Titan
- Meta Llama 2
- Mistral
- Stable Diffusion

**Authentication:** IAM Role (cross-account)

**Data available:**
- Invocation count and tokens
- Cost via AWS Cost Explorer
- Breakdown by model ID

**Setup time:** ~5 minutes (requires IAM role setup)

[Connect AWS Bedrock →](/providers/aws-bedrock)
[View setup guide →](/docs/providers/aws-bedrock)

---

### Coming Soon

**Cohere** — Enterprise NLP models
*Expected: Q1 2025*

**Mistral AI** — European AI provider
*Expected: Q1 2025*

**Replicate** — Open-source model hosting
*Expected: Q2 2025*

**Hugging Face Inference** — Model hub endpoints
*Expected: Q2 2025*

[Request an integration →](/contact)

---

## Notification Channels

### Slack

**Status:** ✅ Generally Available

Get alerts and reports delivered to your Slack workspace.

**Features:**
- Real-time alert notifications
- Budget warning messages
- Anomaly detection alerts
- Weekly digest summaries
- Slash commands: `/tokentra spend`, `/tokentra budget`
- Interactive actions (acknowledge, snooze)

**Setup:** OAuth installation (one click)

[Connect Slack →](/settings/integrations/slack)

---

### Email

**Status:** ✅ Generally Available

Receive alerts and reports via email.

**Features:**
- Instant alert notifications
- Daily/weekly digest options
- Customizable recipients per alert
- Beautiful HTML emails with charts
- One-click unsubscribe

**Setup:** Enabled by default for account owner

[Configure email alerts →](/settings/notifications)

---

### PagerDuty

**Status:** ✅ Generally Available

Route critical alerts to your on-call team.

**Features:**
- Severity-based routing
- Incident creation for budget exceeded
- Auto-resolve when issues clear
- Custom escalation policies

**Setup:** API key integration

[Connect PagerDuty →](/settings/integrations/pagerduty)

---

### Webhooks

**Status:** ✅ Generally Available

Send alert data to any HTTP endpoint.

**Features:**
- JSON payload with full alert context
- Customizable headers
- Retry logic with exponential backoff
- Signature verification (HMAC)
- Event filtering

**Use cases:**
- Custom dashboards
- Internal alerting systems
- Zapier/Make automations
- Data warehouses

[Configure webhooks →](/settings/integrations/webhooks)
[View webhook payload reference →](/docs/api/webhooks)

---

### Microsoft Teams

**Status:** 🔜 Coming Soon

Get alerts in Microsoft Teams channels.
*Expected: Q1 2025*

---

## Developer Tools

### REST API

**Status:** ✅ Generally Available

Programmatic access to all TokenTra data.

**Capabilities:**
- Query cost and usage data
- Manage budgets and alerts
- List recommendations
- Generate reports
- Manage team members

[API Reference →](/docs/api)

---

### Node.js SDK

**Status:** ✅ Generally Available

Official SDK for JavaScript and TypeScript applications.

```bash
npm install @tokentra/sdk
```

[Node.js SDK Guide →](/docs/sdk/nodejs)

---

### Python SDK

**Status:** ✅ Generally Available

Official SDK for Python applications.

```bash
pip install tokentra
```

[Python SDK Guide →](/docs/sdk/python)

---

## Need a Different Integration?

Don't see what you need? We're always adding new integrations based on customer feedback.

[Request an integration →](/contact)
```

---

# Page 3: Documentation Hub (/docs)

## Page Meta
```
title: "Documentation | TokenTra"
description: "Learn how to use TokenTra to monitor, analyze, and optimize your AI costs. Guides, API reference, and SDK documentation."
```

## Page Content

```markdown
# Documentation

Everything you need to get started with TokenTra and master AI cost intelligence.

---

## Getting Started

### Quick Start Guide
Get up and running with TokenTra in under 5 minutes.
[Read guide →](/docs/quickstart)

### Connect Your First Provider
Step-by-step instructions for connecting OpenAI, Anthropic, or any supported provider.
[View provider guides →](/docs/providers)

### Understanding Your Dashboard
Learn how to read and interpret your AI cost dashboard.
[Dashboard guide →](/docs/dashboard)

---

## Core Concepts

### Cost Attribution
Learn how to track costs by team, project, feature, and user.
[Attribution guide →](/docs/concepts/attribution)

### Budgets & Alerts
Set up spending limits and get notified before you exceed them.
[Budgets guide →](/docs/concepts/budgets)

### Optimization Recommendations
Understand how TokenTra identifies cost-saving opportunities.
[Optimization guide →](/docs/concepts/optimization)

---

## Provider Setup Guides

### OpenAI
Connect your OpenAI organization with an Admin API key.
[OpenAI setup →](/docs/providers/openai)

### Anthropic
Connect Anthropic using your Admin API key.
[Anthropic setup →](/docs/providers/anthropic)

### Google Vertex AI
Set up BigQuery billing export and service account.
[Google Vertex setup →](/docs/providers/google-vertex)

### Azure OpenAI
Configure service principal and Cost Management export.
[Azure OpenAI setup →](/docs/providers/azure-openai)

### AWS Bedrock
Set up IAM cross-account role for Bedrock access.
[AWS Bedrock setup →](/docs/providers/aws-bedrock)

---

## SDK Documentation

### Node.js SDK
Install, configure, and use the TokenTra SDK in JavaScript/TypeScript applications.
[Node.js SDK →](/docs/sdk/nodejs)

### Python SDK
Install, configure, and use the TokenTra SDK in Python applications.
[Python SDK →](/docs/sdk/python)

### Attribution Tags
Learn how to tag requests with team, project, and feature metadata.
[Attribution tags →](/docs/sdk/attribution)

### Smart Routing
Configure automatic model routing based on query complexity.
[Smart routing →](/docs/sdk/routing)

### Semantic Caching
Set up intelligent caching to reduce redundant API calls.
[Semantic caching →](/docs/sdk/caching)

---

## API Reference

### Authentication
How to authenticate with the TokenTra API.
[Authentication →](/docs/api/authentication)

### Endpoints
Complete reference for all API endpoints.
[API endpoints →](/docs/api/endpoints)

### Webhooks
Receive real-time notifications for alerts and events.
[Webhooks →](/docs/api/webhooks)

### Rate Limits
Understand API rate limits and best practices.
[Rate limits →](/docs/api/rate-limits)

---

## Features

### Unified Dashboard
See all your AI spending in one place.
[Dashboard →](/docs/features/dashboard)

### Cost Analytics
Deep dive into cost breakdowns and trends.
[Analytics →](/docs/features/analytics)

### Budget Controls
Set and manage spending limits.
[Budgets →](/docs/features/budgets)

### Alert System
Configure alerts for thresholds, anomalies, and forecasts.
[Alerts →](/docs/features/alerts)

### Reports
Generate and schedule cost reports.
[Reports →](/docs/features/reports)

### Team Management
Manage users, roles, and permissions.
[Teams →](/docs/features/teams)

---

## Troubleshooting

### Common Issues
Solutions to frequently encountered problems.
[Common issues →](/docs/troubleshooting/common)

### Provider Connection Issues
Troubleshoot provider authentication and sync problems.
[Provider issues →](/docs/troubleshooting/providers)

### SDK Issues
Debug SDK integration problems.
[SDK issues →](/docs/troubleshooting/sdk)

---

## Resources

### FAQ
Answers to frequently asked questions.
[FAQ →](/docs/faq)

### System Status
Check TokenTra service status and uptime.
[Status page →](https://status.tokentra.com)

### Contact Support
Get help from our team.
[Contact support →](/contact)

---

## Stay Updated

Subscribe to our changelog for product updates.
[View changelog →](/changelog)
```

---

# Page 4: API Reference (/docs/api)

## Page Meta
```
title: "API Reference | TokenTra Documentation"
description: "Complete API reference for the TokenTra REST API. Authentication, endpoints, webhooks, and rate limits."
```

## Page Content

```markdown
# API Reference

The TokenTra API provides programmatic access to all cost intelligence data. Use it to build custom dashboards, integrations, and automations.

**Base URL:** `https://api.tokentra.com/v1`

---

## Authentication

All API requests require authentication using an API key.

### Getting Your API Key

1. Go to [Settings → API Keys](/settings/api-keys)
2. Click "Create API Key"
3. Give it a descriptive name
4. Copy the key (you won't see it again)

### Using Your API Key

Include your API key in the `Authorization` header:

```bash
curl https://api.tokentra.com/v1/usage \
  -H "Authorization: Bearer tt_live_xxxxxxxxxxxx"
```

### API Key Types

| Type | Prefix | Permissions |
|------|--------|-------------|
| Live | `tt_live_` | Full read/write access |
| Read-only | `tt_read_` | Read-only access |
| SDK | `tt_sdk_` | SDK telemetry only |

---

## Rate Limits

| Plan | Requests/minute | Requests/day |
|------|-----------------|--------------|
| Free | 60 | 1,000 |
| Starter | 120 | 10,000 |
| Pro | 300 | 50,000 |
| Business | 600 | 100,000 |
| Enterprise | Custom | Custom |

Rate limit headers are included in all responses:

```
X-RateLimit-Limit: 300
X-RateLimit-Remaining: 299
X-RateLimit-Reset: 1704067200
```

---

## Endpoints

### Usage Data

#### Get Usage Summary

```
GET /v1/usage
```

Returns aggregated usage data for the specified time period.

**Query Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| start_date | string | Yes | Start date (ISO 8601) |
| end_date | string | Yes | End date (ISO 8601) |
| granularity | string | No | `hour`, `day`, `week`, `month` (default: `day`) |
| provider | string | No | Filter by provider |
| model | string | No | Filter by model |
| team_id | string | No | Filter by team |
| project_id | string | No | Filter by project |

**Response:**

```json
{
  "data": {
    "total_cost": 4832.50,
    "total_tokens": 12500000,
    "total_requests": 45231,
    "breakdown": [
      {
        "date": "2025-01-15",
        "cost": 156.32,
        "tokens": 405000,
        "requests": 1523
      }
    ]
  },
  "meta": {
    "start_date": "2025-01-01T00:00:00Z",
    "end_date": "2025-01-15T23:59:59Z",
    "granularity": "day"
  }
}
```

---

#### Get Usage by Model

```
GET /v1/usage/models
```

Returns usage breakdown by model.

**Response:**

```json
{
  "data": [
    {
      "model": "gpt-4",
      "provider": "openai",
      "cost": 3200.00,
      "tokens": 8000000,
      "requests": 25000,
      "percentage": 66.2
    },
    {
      "model": "claude-3-5-sonnet",
      "provider": "anthropic",
      "cost": 980.00,
      "tokens": 3500000,
      "requests": 12000,
      "percentage": 20.3
    }
  ]
}
```

---

#### Get Usage by Team

```
GET /v1/usage/teams
```

Returns usage breakdown by team (requires SDK attribution).

**Response:**

```json
{
  "data": [
    {
      "team_id": "team_engineering",
      "team_name": "Engineering",
      "cost": 2500.00,
      "tokens": 6500000,
      "requests": 20000
    }
  ]
}
```

---

### Budgets

#### List Budgets

```
GET /v1/budgets
```

Returns all budgets for the organization.

**Response:**

```json
{
  "data": [
    {
      "id": "budget_abc123",
      "name": "Monthly AI Spend",
      "amount": 10000.00,
      "period": "monthly",
      "current_spend": 4832.50,
      "percentage_used": 48.3,
      "status": "active",
      "alert_thresholds": [50, 80, 100],
      "created_at": "2025-01-01T00:00:00Z"
    }
  ]
}
```

---

#### Create Budget

```
POST /v1/budgets
```

**Request Body:**

```json
{
  "name": "Engineering Team Budget",
  "amount": 5000.00,
  "period": "monthly",
  "team_id": "team_engineering",
  "alert_thresholds": [50, 80, 100],
  "hard_limit": false
}
```

---

#### Update Budget

```
PATCH /v1/budgets/{budget_id}
```

---

#### Delete Budget

```
DELETE /v1/budgets/{budget_id}
```

---

### Alerts

#### List Alerts

```
GET /v1/alerts
```

Returns all configured alerts.

---

#### Create Alert

```
POST /v1/alerts
```

**Request Body:**

```json
{
  "name": "Daily Spend Alert",
  "type": "spend_threshold",
  "threshold": 500.00,
  "period": "daily",
  "channels": ["email", "slack"],
  "enabled": true
}
```

**Alert Types:**

| Type | Description |
|------|-------------|
| `spend_threshold` | Triggers when spend exceeds threshold |
| `budget_warning` | Triggers at budget percentage thresholds |
| `anomaly` | Triggers on unusual spending patterns |
| `forecast` | Triggers when forecast predicts budget overrun |
| `rate_spike` | Triggers on sudden spending rate increase |
| `provider_error` | Triggers when provider sync fails |

---

#### Get Alert History

```
GET /v1/alerts/{alert_id}/history
```

Returns triggered alert instances.

---

### Recommendations

#### List Recommendations

```
GET /v1/recommendations
```

Returns AI-generated optimization recommendations.

**Response:**

```json
{
  "data": [
    {
      "id": "rec_abc123",
      "type": "model_downgrade",
      "title": "Switch to GPT-4o-mini for simple queries",
      "description": "40% of your GPT-4 requests are simple queries that could use GPT-4o-mini",
      "potential_savings": 1200.00,
      "confidence": 0.85,
      "status": "pending",
      "created_at": "2025-01-15T10:00:00Z"
    }
  ]
}
```

---

#### Apply Recommendation

```
POST /v1/recommendations/{recommendation_id}/apply
```

---

### Providers

#### List Connected Providers

```
GET /v1/providers
```

---

#### Get Provider Status

```
GET /v1/providers/{provider_id}
```

Returns connection status and last sync time.

---

#### Trigger Provider Sync

```
POST /v1/providers/{provider_id}/sync
```

Manually trigger a data sync.

---

### Reports

#### Generate Report

```
POST /v1/reports
```

**Request Body:**

```json
{
  "type": "cost_summary",
  "start_date": "2025-01-01",
  "end_date": "2025-01-31",
  "format": "pdf",
  "include_sections": ["overview", "breakdown", "trends", "recommendations"]
}
```

---

#### List Reports

```
GET /v1/reports
```

---

#### Download Report

```
GET /v1/reports/{report_id}/download
```

---

## Webhooks

TokenTra can send webhook notifications for various events.

### Webhook Events

| Event | Description |
|-------|-------------|
| `alert.triggered` | An alert condition was met |
| `alert.resolved` | An alert condition cleared |
| `budget.warning` | Budget threshold reached |
| `budget.exceeded` | Budget limit exceeded |
| `sync.completed` | Provider sync completed |
| `sync.failed` | Provider sync failed |
| `recommendation.new` | New optimization recommendation |

### Webhook Payload

```json
{
  "id": "evt_abc123",
  "type": "alert.triggered",
  "created_at": "2025-01-15T10:30:00Z",
  "data": {
    "alert_id": "alert_xyz",
    "alert_name": "Daily Spend Alert",
    "current_value": 523.50,
    "threshold": 500.00,
    "message": "Daily spend exceeded $500 threshold"
  }
}
```

### Verifying Webhooks

All webhooks include a signature header for verification:

```
X-TokenTra-Signature: sha256=xxxxx
```

Verify using HMAC-SHA256 with your webhook secret.

### Configuring Webhooks

1. Go to [Settings → Webhooks](/settings/webhooks)
2. Click "Add Webhook"
3. Enter your endpoint URL
4. Select events to subscribe to
5. Copy the signing secret

---

## SDKs

Official SDKs are available for popular languages:

- [Node.js SDK](/docs/sdk/nodejs)
- [Python SDK](/docs/sdk/python)

---

## Errors

The API uses standard HTTP status codes:

| Code | Description |
|------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 429 | Rate Limited |
| 500 | Server Error |

Error responses include details:

```json
{
  "error": {
    "code": "invalid_parameter",
    "message": "start_date is required",
    "param": "start_date"
  }
}
```

---

## Support

Need help with the API?

- [API Troubleshooting](/docs/troubleshooting/api)
- [Contact Support](/contact)
```

---

# Page 5: SDK Guide (/docs/sdk)

## Page Meta
```
title: "SDK Guide | TokenTra Documentation"
description: "Complete guide to the TokenTra SDK. Installation, configuration, attribution tags, smart routing, and semantic caching."
```

## Page Content

```markdown
# SDK Guide

The TokenTra SDK is the most powerful way to track AI costs. It wraps your existing AI client libraries, capturing usage metrics without impacting performance.

---

## Overview

### Why Use the SDK?

Without the SDK, TokenTra tracks costs at the provider level—you see total spend by model. With the SDK, you get:

- **Cost Attribution**: Track costs by team, project, feature, and user
- **Smart Routing**: Automatically route requests to cost-efficient models
- **Semantic Caching**: Cache similar queries to avoid redundant API calls
- **Real-time Tracking**: See costs as they happen, not hours later

### How It Works

The SDK wraps your AI client (OpenAI, Anthropic, etc.) and intercepts requests/responses:

```
Your Code → TokenTra SDK → AI Provider
                ↓
         Async telemetry
                ↓
         TokenTra Backend
```

**Key principle:** Zero latency impact. Telemetry is sent asynchronously after responses return.

---

## Installation

### Node.js

```bash
npm install @tokentra/sdk
# or
yarn add @tokentra/sdk
# or
pnpm add @tokentra/sdk
```

### Python

```bash
pip install tokentra
```

---

## Quick Start

### Node.js

```typescript
import { TokenTra } from '@tokentra/sdk';
import OpenAI from 'openai';

// Initialize TokenTra
const tokentra = new TokenTra({
  apiKey: process.env.TOKENTRA_API_KEY, // tt_live_xxx or tt_sdk_xxx
});

// Wrap your OpenAI client
const openai = tokentra.wrap(new OpenAI());

// Use as normal - tracking happens automatically
const response = await openai.chat.completions.create({
  model: 'gpt-4',
  messages: [{ role: 'user', content: 'Hello!' }],
});
```

### Python

```python
import os
from tokentra import TokenTra
from openai import OpenAI

# Initialize TokenTra
tokentra = TokenTra(api_key=os.environ['TOKENTRA_API_KEY'])

# Wrap your OpenAI client
openai = tokentra.wrap(OpenAI())

# Use as normal - tracking happens automatically
response = openai.chat.completions.create(
    model='gpt-4',
    messages=[{'role': 'user', 'content': 'Hello!'}]
)
```

---

## Attribution Tags

Attribution tags let you track costs by team, project, feature, and user.

### Adding Tags

#### Node.js

```typescript
const response = await openai.chat.completions.create(
  {
    model: 'gpt-4',
    messages: [...],
  },
  {
    tokentra: {
      team: 'engineering',
      project: 'chatbot',
      feature: 'customer-support',
      userId: 'user_123',
      environment: 'production',
      // Add any custom tags
      customerId: 'cust_456',
      conversationId: 'conv_789',
    },
  }
);
```

#### Python

```python
response = openai.chat.completions.create(
    model='gpt-4',
    messages=[...],
    tokentra={
        'team': 'engineering',
        'project': 'chatbot',
        'feature': 'customer-support',
        'user_id': 'user_123',
    }
)
```

### Default Tags

Set default tags for all requests:

```typescript
const tokentra = new TokenTra({
  apiKey: process.env.TOKENTRA_API_KEY,
  defaultTags: {
    team: 'engineering',
    environment: process.env.NODE_ENV,
    service: 'api-server',
  },
});
```

### Reserved Tags

These tags have special meaning in TokenTra:

| Tag | Description |
|-----|-------------|
| `team` | Maps to Team in dashboard |
| `project` | Maps to Project in dashboard |
| `feature` | Maps to Feature breakdown |
| `userId` | Maps to User analytics |
| `environment` | Filters by env (prod/staging/dev) |
| `requestId` | Links to your internal request ID |

---

## Supported Providers

### OpenAI

```typescript
import OpenAI from 'openai';

const openai = tokentra.wrap(new OpenAI());

// Chat completions
await openai.chat.completions.create({...});

// Embeddings
await openai.embeddings.create({...});

// Images
await openai.images.generate({...});

// Audio
await openai.audio.transcriptions.create({...});
```

### Anthropic

```typescript
import Anthropic from '@anthropic-ai/sdk';

const anthropic = tokentra.wrap(new Anthropic());

await anthropic.messages.create({
  model: 'claude-3-5-sonnet-20241022',
  messages: [...],
});
```

### Google Vertex AI

```typescript
import { VertexAI } from '@google-cloud/vertexai';

const vertexai = tokentra.wrap(new VertexAI({
  project: 'your-project',
  location: 'us-central1',
}));

const model = vertexai.getGenerativeModel({ model: 'gemini-pro' });
await model.generateContent('Hello!');
```

### Azure OpenAI

```typescript
import { AzureOpenAI } from 'openai';

const azure = tokentra.wrap(new AzureOpenAI({
  endpoint: process.env.AZURE_ENDPOINT,
  apiKey: process.env.AZURE_API_KEY,
  apiVersion: '2024-02-15-preview',
}));
```

---

## Smart Routing

Automatically route requests to cost-efficient models based on query complexity.

### Enabling Smart Routing

```typescript
const tokentra = new TokenTra({
  apiKey: process.env.TOKENTRA_API_KEY,
  routing: {
    enabled: true,
    strategy: 'cost_optimized', // or 'quality_first', 'balanced'
  },
});
```

### How It Works

1. SDK analyzes request complexity (message length, context, task type)
2. Simple queries route to cheaper models (GPT-4o-mini, Claude Haiku)
3. Complex queries route to powerful models (GPT-4, Claude Sonnet)
4. Quality is validated via A/B testing

### Custom Routing Rules

```typescript
const tokentra = new TokenTra({
  apiKey: process.env.TOKENTRA_API_KEY,
  routing: {
    enabled: true,
    rules: [
      {
        // Short, simple queries → cheap model
        condition: { maxTokens: 100, complexity: 'low' },
        route: { model: 'gpt-4o-mini' },
      },
      {
        // Code generation → powerful model
        condition: { feature: 'code-gen' },
        route: { model: 'gpt-4' },
      },
    ],
  },
});
```

### Disabling for Specific Requests

```typescript
await openai.chat.completions.create(
  { model: 'gpt-4', messages: [...] },
  {
    tokentra: {
      routing: false, // Disable routing for this request
    },
  }
);
```

---

## Semantic Caching

Cache similar queries to avoid redundant API calls.

### Enabling Caching

```typescript
const tokentra = new TokenTra({
  apiKey: process.env.TOKENTRA_API_KEY,
  caching: {
    enabled: true,
    ttl: 3600, // 1 hour default TTL
    similarityThreshold: 0.95, // Semantic similarity threshold
  },
});
```

### How It Works

1. SDK computes semantic embedding of the query
2. Checks cache for similar queries (cosine similarity > threshold)
3. On hit: returns cached response instantly (zero API call)
4. On miss: calls API, caches response

### Cache Control

```typescript
// Force fresh response (bypass cache)
await openai.chat.completions.create(
  { model: 'gpt-4', messages: [...] },
  {
    tokentra: {
      cache: 'no-cache', // or 'force-cache', 'default'
    },
  }
);
```

### Cache Analytics

View cache hit rates in your dashboard:
- Overall hit rate
- Hit rate by feature
- Estimated savings from caching

---

## Error Handling

The SDK is designed to be resilient. If TokenTra is unavailable, your AI calls still work.

### Failsafe Mode

```typescript
const tokentra = new TokenTra({
  apiKey: process.env.TOKENTRA_API_KEY,
  failsafe: true, // Default: true
});

// If TokenTra is down, this still works - AI call succeeds
// Telemetry is queued and sent when connection recovers
await openai.chat.completions.create({...});
```

### Error Callbacks

```typescript
const tokentra = new TokenTra({
  apiKey: process.env.TOKENTRA_API_KEY,
  onError: (error) => {
    console.error('TokenTra error:', error);
    // Your error handling logic
  },
});
```

---

## Configuration Reference

### Full Configuration (Node.js)

```typescript
const tokentra = new TokenTra({
  // Required
  apiKey: 'tt_live_xxx',

  // Attribution defaults
  defaultTags: {
    team: 'engineering',
    environment: 'production',
  },

  // Smart routing
  routing: {
    enabled: false,
    strategy: 'balanced',
    rules: [],
  },

  // Semantic caching
  caching: {
    enabled: false,
    ttl: 3600,
    similarityThreshold: 0.95,
  },

  // Resilience
  failsafe: true,
  timeout: 5000,
  retries: 3,

  // Batching
  batchSize: 100,
  flushInterval: 1000,

  // Callbacks
  onError: (error) => {},
  onTelemetry: (telemetry) => {},

  // Debug
  debug: false,
});
```

---

## Framework Integrations

### Express.js Middleware

```typescript
import express from 'express';
import { tokentraMiddleware } from '@tokentra/sdk/express';

const app = express();

app.use(tokentraMiddleware({
  apiKey: process.env.TOKENTRA_API_KEY,
  // Automatically extract user ID from request
  getUserId: (req) => req.user?.id,
}));
```

### Next.js

```typescript
// lib/tokentra.ts
import { TokenTra } from '@tokentra/sdk';

export const tokentra = new TokenTra({
  apiKey: process.env.TOKENTRA_API_KEY,
});

// In your API route
import { tokentra } from '@/lib/tokentra';
import OpenAI from 'openai';

const openai = tokentra.wrap(new OpenAI());
```

### Django Middleware

```python
# settings.py
MIDDLEWARE = [
    ...
    'tokentra.django.TokenTraMiddleware',
]

TOKENTRA_API_KEY = os.environ['TOKENTRA_API_KEY']
```

### FastAPI

```python
from fastapi import FastAPI
from tokentra.fastapi import TokenTraMiddleware

app = FastAPI()
app.add_middleware(TokenTraMiddleware, api_key=os.environ['TOKENTRA_API_KEY'])
```

---

## Troubleshooting

### Telemetry Not Appearing

1. **Check API key**: Ensure `TOKENTRA_API_KEY` is set correctly
2. **Check network**: Verify outbound connections to `api.tokentra.com`
3. **Enable debug mode**: Set `debug: true` in config
4. **Check flush**: Telemetry batches every 1 second by default

### High Memory Usage

If processing many requests, adjust batch settings:

```typescript
const tokentra = new TokenTra({
  batchSize: 50, // Reduce batch size
  flushInterval: 500, // Flush more frequently
});
```

### SDK Not Wrapping Correctly

Ensure you wrap the client before using it:

```typescript
// ❌ Wrong
const openai = new OpenAI();
tokentra.wrap(openai); // This doesn't modify the original

// ✅ Correct
const openai = tokentra.wrap(new OpenAI());
```

---

## Next Steps

- [View example projects](/docs/sdk/examples)
- [API Reference](/docs/api)
- [Dashboard guide](/docs/dashboard)
```

---

*Continued in Part 2...*
