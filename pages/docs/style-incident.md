---
title: Pendo | Incident Communication
description: Pendo style guide incident communications
---

# Incident Comms Playbook

Pendo has a deliberate response to incidents that’s proportional to the severity.

The most severe incidents have an incident commander and senior leadership managing the fix and the best course of action for the response.

Tecnical writing is pulled in to document internal and external incident communications if needed. All other aspects of incident response are handled by teams other than ProdOps. Tech writing isn't responsible for identifying the issue, resolving the issue, determining customer impact, sending out customer comms, or managing responses. Technical writing only captures what happened for internal situational awareness and to inform customers without exacerbating the situation.

## When incident comms are needed

Not all incidents require comms. Some technical issues, while significant, are resolved by engineering without customer impact and don't require incident comms. Engineering has their own internal processes for conducting root cause analysis and retros that memorialize the details of an event.

When an incident requires customer communications, there is a structured approach to gathering information, determining the appropriate messaging, and creating internal and external documentation.

Approval for comms is dependent on the severity. High servity comms are approved by senior leadership, the incident commander, and legal, who will all be actively involved. For lower severity issues, tech writing are primarily be responsible for drafting and finalizing internal and external comms. Partners in engineering and CS should review messaging for accuracy and clarity.

## Voice and Tone

Be empathic but not overly apologetic.

The most important thing is to not damage our customer’s trust in us. We are custodians of their user data. We are providing behavior analytics and metadata that are treated as the source of truth across a customer’s tech stack and used to make critical business decisions.

We need to be confident in our assessment of the issue, deliberate and thoughtful in our response, and equipped with as much data as possible so that our customers can trust that we have handled the incident as well as anyone could have. While it’s unfortunate that an incident happened, customers shouldn't be left with unanswered questions or vague half-truths that might make them uneasy in the aftermath.

### Product changes

When addressing product changes with customer impact, highlight that we’re a growing, innovative, technology company. We’re going to make product changes to improve the customer experience and product performance that may require customers to adapt. Our customers understand this and appreciate transparency and attention to detail when we help them navigate change.

### Security vulnerabilities

Our product is large and complex. It's being continuously tested for security vulnerabilities. When a security vulnerability is discovered through penetration testing, it’s resolved quickly. We might need customers to take action or we might need customers to understand the issue and how they were or were not affected.

### Bugs

When a bug has impacted customer data, the bottomline is whether or not raw event data was compromised. Raw event data is the only thing that can’t be reloaded or recalculated. If raw event data is lost, a customer’s product usage data and associated visitor and account activity are also lost forever. They will always have an empty hole in their analyses. But if raw event data is fine and the issue only impacted data visualization or processing, it’s temporary. Clearly explain what happened and what to expect going forward. Don’t be afraid of technical details. Be transparent with timelines.

## Documentation Steps

Below are the steps we take for incident comms.

### 1. Brain dump with engineering

* Identify the SME in engineering who understands the issue.
* Collect any relevant Jira tickets or docs.
* Polish these resources into an internal version of deep dive and a customer-facing technical explanation.

### 2. Create internal incident communication

This is a living document that is expected to change in real time until the incident is resolved.  As new people are pulled into the issue, this document is the starting point for anyone trying to understand what happened and what we have done so far. It must always be as complete as possible and well organized.

Follow the format in the [Incident Communication (All - Internal)](https://docs.google.com/document/d/1-iBpBo7KU1fU4_FOe_l8LHFOEp-9Q2Qe3Mdz5rlrZMg/edit?usp=sharing). Update this document continuously as the situation develops.

### 3. Create a customer incident response
Use the [Incident Response - Customer Communication Template (non-PII)](https://docs.google.com/document/d/1iWc-gXEm95ByUVpVR32GVqZHGp9lHk8FaUdJMjZatIA/edit?usp=sharing) to craft a customer incident response.

The email needs to be short enough that the customer will read it without omitting critical details or raising additional questions. Provide enough information in the first email to close that loop without starting a conversation.

Assume that the recipient is non-technical. If there are technical details that must be provided to address the issue completely, consider creating a technical explanation that can be attached to the email as a PDF that the recipient can forward to their engineering partner.

Assume that the recipient is going to want to verify they understand the incident clearly and that our response was appropriate. We may withhold the technical explanation unless customers request it depending on the nature of the incident

### 4. Use an incident FAQ

An FAQ must be fleshed out before we receive responses from customers. Use the [Incident FAQ Template](https://docs.google.com/document/d/1QCAaF7kyPu4fIZrTmrgCrsUIDAZFqIKfjxcZ0HvBNNI/edit?usp=sharing) for pre-approved messaging in response to expected questions that CSMs can use to respond to customer follow-up questions.

It may have pertinent negatives that shouldn’t be included in the email, such as clarifying that data wasn't impacted when a bug impacted a specific feature that may seem related.

This is a living document and should be updated as CSMs talk to customers and raise new questions. You can skip the FAQ if it’s a small issue or isn’t complex

### 5. Review documentation with stakeholders

Sev0 incidents will likely have a private comms channel where comms can be revised and finalized before releasing to the larger audience. As well as this:

* Have an engineering partner review for technical accuracy.
* Have CS or senior leadership review for clarity and tone.
* Have legal review for liability and risk, if needed.

### 6. Share documentation

An internal comms document is generally available except for severe incidents where details are carefully controlled to prevent the spread of misinformation.

External comms are shared with CS Ops and CS leadership to initiate the customer comms plan. This is a priority. Customer comms are on a timer and must go out within a certain time period to meet our contractual obligations to our customers.

Provide CSMs with FAQ responses they can copy and paste directly, responses should clear the same doc review process as other content. Update as new questions come up.
