# 🌐 Challenge 2: Network Isolation and Private Access to AI Endpoints

**Welcome to Challenge 2.**
**Your mission:** lock down network access to AI services and prevent unintended data exposure.
A security review has identified that AI endpoints are publicly accessible and workloads can send traffic anywhere on the internet. That’s a problem — especially when sensitive data is involved.

⏱ Duration: ~45 minutes
🎯 Goal: Enforce private, controlled network access for AI workloads

## 🧠 Scenario

AI services are currently reachable over public endpoints, and outbound traffic from workloads is unrestricted.
Security and compliance teams are concerned about:

- Data exfiltration
- Accidental exposure
- Inability to validate traffic paths

Your job is to ensure AI traffic only flows where it’s explicitly allowed.

## 🚀 The Challenge

By the end of this challenge, you will have:

- Restricted AI services to private network access
- Ensured workloads access AI endpoints through approved paths
- Validated network behavior under both success and failure conditions
- Eliminated unintended outbound access

## ✅ Success Criteria

You know you’re done when:

- AI services are no longer publicly reachable
- Traffic flows are predictable and documented
- Blocking network access results in expected failures
- Security teams can clearly explain how data is protected

## 🧭 Think Like an Operator

Ask yourself:

- What happens if someone scans this environment?
- Can data leave the network without us knowing?
- Would this pass a security audit?

## 📚 Resources

- [Azure Private Link and Endpoints](https://learn.microsoft.com/azure/private-link/private-endpoint-overview)
- [Network Security for Azure AI Services](https://learn.microsoft.com/azure/architecture/solution-ideas/articles/securing-ai-workloads#network-security)

## 🛠️ Hints and Tips

- Our developers have set up the application so it logs detailed error messages when it can’t reach AI services. Use these logs to validate your network controls.

> **Next:** Challenge 03: [Monitoring, Logging, and Troubleshooting AI Workloads](/challenges/challenge-3.md)
