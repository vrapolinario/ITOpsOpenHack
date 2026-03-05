# Welcome to the AI for ITOps Open Hack 👋

**Welcome! Today is all about rolling up your sleeves, building something real, and having fun while doing it. 🎯**

Open Hack is a **challenge-driven, hands-on experience** where you’ll collaborate with other professionals to learn how to properly manage an AI-powered solution running on **Microsoft Azure**. This is not a lecture or a step-by-step lab—you’ll learn by using real tools and solving real problems.

## Purpose of the Day

The goal is:

- **Learn by doing**: solve operational challenges using native Azure tools.
- **Collaborate openly**: ask questions early, help each other, and keep momentum.

By the end of the day, you’ll walk away with practical AI operations experience and a clearer idea of how to apply these patterns in your own projects.

## What to Expect

- Hands-on from the start
- Progressively more advanced challenges
- Support from Microsoft engineers, AI experts, and on-site coaches
- A relaxed, collaborative environment with good food and great conversations

## The Challenge

Today we will operationalize an AI-enabled application through a series of escalating challenges.Each challenge introduces realistic failure conditions, misconfigurations, or governance gaps that IT/Ops teams must identify and resolve.

The scenario for this Open Hack is a **Web commerce**:

- Our company's website is composed by a Store front and an Admin site.
- Customers can order products through the Store front
- The Admin site is used by employees to manage orders, inventory, and other operational tasks.

The challenge is broken into **small, incremental levels**, each building on the previous one—so progress is steady and achievable, but independent enough to allow for exploration and creativity.

### 🕹 The Levels

Each level builds on the previous one, but can also be completed independently. Follow them in order to complete the full challenge.

#### 1️⃣ Secure Identity and Access for AI Services and Agents

AI services are running with overly permissive access and shared credentials, creating unacceptable security risk.

**Challenges focus on:**

- Implementing managed identity for AI services
- Enforcing least privilege access using Azure RBAC
- Separating human, workload, and agent identities
- Auditing and validating access paths

#### 2️⃣ Network Isolation and Private Access to AI Endpoints  

Security review flags public exposure of AI endpoints and unrestricted outbound access.

**Challenges focus on:**

- Enforcing private endpoint access to Azure AI services
- Restricting network access from AKS and OpenAI workloads
- Validating traffic flows and failure scenarios
- Preventing unintended data exfiltration

#### 3️⃣ Monitoring, Logging, and Troubleshooting AI Workloads  

The business reports intermittent failures and degraded AI performance, but IT/Ops lacks visibility.

**Challenges focus on:**

- Enabling diagnostics and logs for AI services
- Integrating AI workloads into Azure Monitor and Log Analytics
- Detecting authentication, networking, and throttling failures
- Troubleshooting real world AI service errors

#### 4️⃣ Policy, Compliance, and Data Loss Prevention

Compliance teams identify gaps in governance and policy enforcement across AI services.

**Challenges focus on:**

- Applying Azure Policy to AI services
- Enforcing network, identity, and configuration standards
- Implementing data loss prevention controls
- Identifying and remediating non compliant resources

## Coaches & Collaboration

You’re not on your own:

- **Coaches are in the room** - grab one anytime
- **Talk to your neighbours**: quick peer discussions solve most issues fast
- If you’re stuck, **raise your hand**

We’re all here to learn together.

## Ready to Start?

Everything is set-let’s move on to the challenge. 🚀  

👉 **[Jump into the challenge](/challenges/challenge-1.md)**
