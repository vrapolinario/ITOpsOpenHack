# 🔐 Challenge 1: Secure Identity and Access for AI Services and Agents

Welcome to your first IT/Ops OpenHack Challenge.
**Your mission:** take control of identity and access for AI services running in production on Azure. Right now, the organization’s AI workloads work — but they work by relying on shared secrets, overly permissive roles, and unclear ownership. A recent internal security review flagged this as a critical risk. As the IT/Ops team, it’s your responsibility to fix it.

⏱ Duration: ~45 minutes
🎯 Goal: Establish secure, least‑privilege identity patterns for AI services on Azure

## 🧠 Scenario

AI applications and agents are accessing Azure AI services using:

Shared keys
Broad contributor permissions
Human identities where workload identities should be used

Security teams have made it clear:

**This cannot go to production.**

Your task is to redesign access so that:

Humans, workloads, and agents are clearly separated
Access is granted intentionally and minimally
All access paths can be audited and explained

## 🚀 The Challenge

By the end of this challenge, you will have:

Replaced shared credentials with managed identities
Applied least‑privilege Azure RBAC to AI services
Clearly separated:

- Human access
- Application/workload access
- AI agent access

This is about operational security, not application logic.

## ✅ Success Criteria

You know you’re done when:

- No AI service depends on stored secrets
- Every identity has a clear purpose and scope
- Access can be audited and justified
- Security teams would approve this design for production

## 🧭 Think Like an Operator

Ask yourself:

Who should have access vs. who currently has access?
What happens if a credential is leaked?
Can this access model scale safely?

## 📚 Resources

- [Azure Managed Identities](https://learn.microsoft.com/azure/active-directory/managed-identities-azure-resources/overview)
- [Azure RBAC for AI services](https://learn.microsoft.com/azure/role-based-access-control/overview)
- [Best Practices for Securing AI Workloads on Azure](https://learn.microsoft.com/azure/architecture/solution-ideas/articles/securing-ai-workloads)
- [Azure Key Vault for Secrets Management](https://learn.microsoft.com/azure/key-vault/general/overview)