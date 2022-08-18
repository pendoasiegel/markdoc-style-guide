---
title: Pendo | Informational Articles
description: Pendo style guide informational articles section
---

# Informational Content

Informational content educates the user on a specific system, function, or feature they aren't familiar with, and provides an overview of features or options available within it. Informational articles don't describe problem-solving steps or get into technical information.

Often, informational content will be included within an instructional article to provide the information needed, in context, to help users complete a task or to illustrate a workflow. This also helps eliminate duplication and prepares content to scale as the product evolves.

For guidance on style, see [**General writing guidelines**](https://main--cosmic-travesseiro-d1f80c.netlify.app/docs/temp-typesofcontent#general-writing-guidelines) in the [**Content Types**](https://main--cosmic-travesseiro-d1f80c.netlify.app/docs/temp-typesofcontent) page.

## Conceptual content

Conceptual articles, or sections in [**instructional articles**](https://main--cosmic-travesseiro-d1f80c.netlify.app/docs/temp-instructional), consist of information needed for understanding a feature.

### Content

Conceptual content typically includes the following information:

-   **Overview.** A high-level introduction for every major category and at the beginning of every article. In a conceptual article, place this directly under the title; don't include a heading called "Overview" or "Introduction". For more information, see [**Headings and titles**](https://main--cosmic-travesseiro-d1f80c.netlify.app/docs/prodops-style-guide#headings-and-titles).

-   **Description and value.** Information describing the feature or component, or the benefits of an activity.

-   **Outcome.** Descriptions of the end-user experience, ideally with a dedicated section for the end-user view.

-   **Examples and use cases.** Descriptions of specific usage scenarios, user journeys, or tasks.

-   **Next steps and further reading.** End in content that guides the reader to where they would typically go next in their workflow

### Article structure

-   **Title:** Use nouns describing the product, feature, or subject, e.g., "Multi-app subscriptions". The title should work if you were to place the word "About" in front of it, e.g., "About multi-app subscriptions".

-   **Initial paragraph:** Article purpose and why it's useful to the reader. Include context with use cases and examples if appropriate.

-   **Feature list, technical architecture, or other relevant details:** Describe what the feature includes or how it works on a high-level. Be mindful of the audience and reserve deep dives into technical details for other resources. Include context with use cases and examples if appropriate.

-   **Prerequisites:** Highlight any details the readers needs to know before they can use the feature.

-   **Body:** A brief overview of the product or feature that the informational article is about and information on how the feature or topic can help the reader in their journey.

-   **Next steps and further reading:** Introduction to next steps and links to related articles or content, including how-to content, since this is typically the next step. Zendesk automatically generates a list of related content. You can also add links to further reading in line with the content.

## Referential content

Conceptual articles often provide detailed referential information that people might need while actively using a feature or documentation, such as:

-   Requirements and prerequisites (typically near the beginning of an article)

-   Feature lists

-   Supported languages

-   Requirements

-   Syntax

-   Glossaries

-   Further reading

-   Frequently Asked Questions––common questions with answers around a specific area of your product

### General guidelines

-   For subjects with a single element to explain, use a bulleted list.

-   For subjects with multiple elements to explain, use a table.

-   For longer referential content, use H2 headers for distinct sections and H3 headers for subsections.

-   Avoid stacked nouns in your titles and headings. Use prepositions to break up long strings of nouns.

-   Present content clearly and consistently.

-   Use parallel phrasing.

### Article structure

-   **Title:** Use nouns describing your subject, with enough information to be accessible to novice users.

-   **First paragraph:** A brief overview of the product or feature that the informational article is about and information on how the feature or topic can help the reader in their journey.

-   **Feature list** and descriptions.

-   **Further reading:** Links to related articles or content, including how-to content, since this is typically the next step. You can also add links to further reading in line with the content.

## Article content example

> **Note:** The table format for this example doen't allow for paragraphing or bullet points within cells and so this example can't follow all ProdOps Style Guide guidelines. The following example is to help you understand content and ordering for an informational article.

|Element|Description|Example|
|---|---|---|
|Title [H1] |	|**Multi-app subscriptions**|
|Overview|High-level introduction|This article describes the basic architecture of Pendo multi-app subscriptions. |
|Description|Information about the feature or component.	|A Pendo subscription can contain one or more applications. An application refers to any web or mobile application on a single platform (Web, iOS, Android, and so on). Every subscription has a default web application.|
|Detail|Further, relevant information about the feature or component that helps the reader understand.| A single-app subscription uses one API key. A multi-app subscription involves having an API for each application. This is how we separate analytics, guides, and feedback across different products whilst relying on a single source of data, security settings, user permissions, and other settings. A multi-app subscription gives you a holistic view of usage across applications, as well as an application-level view and more control over your guides, analytics, and feedback. You can also provision user roles by application when you have a multi-app subscription.|
|Further reading|Link to relevant content.|For information on changing to multi-subscription, see [link name].|
|Header [H2]||**What happens at the subscription level**|
|Technical architecture|Backend functionality.|Visitors, Accounts, Product Areas, Segments, Reports, internal users, and integrations are processed and stored at the subscription level. Each subscription houses all underlying guidance, analytics, and feedback, and doesn’t communicate with other, separate subscriptions. This means that: all settings, content, and services are managed separately for each subscription; users aren’t shared between subscriptions; users in one subscription can only access data in another subscription if they have access to both. A subscription is located in a specific region – US, US1, or EU. Each region has its own data center to support different compliance requirements. |
|Examples|Usage scenarios for context. |You might have more than one subscription if you want to keep the data separate so that you can manage different products separately (for example, by different departments or with unique user access, security, and compliance requirements) or because you have separate user bases for your products.  |
|Header [H2]|   |**What happens at the application level**|
|Technical architecture|Backend functionality.|Events, Pages, Features, Tags, and Guides are collected, processed, and stored at the application level. Each app in your subscription also has its own Resource Center. You can customize the Resource Center for each app in the same way, or individually. |
|Further reading|Link to relevant content.|For information on the Resource Center, see [link name].|
|Technical architecture, continued|Backend functionality, continued.|	Each application within a subscription is identified by its own API key in the Pendo snippet. If you have more than one subscription, check that you’re in the right subscription before launching the designer to create a Guide, Page, or Feature in an application. The application name is displayed in the top-right of the designer.|
|Header [H2]|   |**Prerequisites**|
|Prerequisites |List of important information the reader should know before getting started.|For multi-app subscriptions to work, Visitor IDs must identify the same end-users across your apps. For example, an ID of “1234” must represent the same Visitor in App1 as in App2. If two Visitors are both identified with “1234” in different apps, you need a separate subscription for your apps. If you have apps that pass different IDs across applications because they can’t identify the same Visitor across applications, the format mustn’t overlap. If there is an overlap, the metadata from one app can overwrite the metadata from another app.|
|Header [H2]|   |**Functionality**|
|body|Overview of the product or feature and information on how the feature or topic can help the reader in their journey.|Although Visitor IDs can persist across applications, Pendo functionality is app-specific. You can see user behavior in one, some, or all of the apps in a subscription. This means that you can run a Pendo subscription across multiple applications and still filter your analytics, guides, and feedback to specific applications if you want to. This is useful when: ...|
|Header [H2]   |   |**Setup**   |
|Next Steps   |	The logical next step presuming the reader has understood what they’ve read so far.|Each application has its own API key. We use the API key to differentiate between the events for each application in your Pendo subscription. Your development team must use the corresponding API key for each app in your Pendo subscription, along with any app-specific metadata. To find an app’s API Key: ...|
