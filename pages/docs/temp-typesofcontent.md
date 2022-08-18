---
title: Pendo | Content Types
description: Pendo style guide types of content section
---

The structure of individual articles depends on the content type and category. Is it an overview? Is the information more practical, such as how-to guidance or troubleshooting?

## Types of content ##

Help docs include different types of content, which can differ depending on the audience and the purpose of an article:

- **Procedural**: for completing a task from start to finish. For more guidance on writing procedural instructions, see [Procedural Instructions](https://main--cosmic-travesseiro-d1f80c.netlify.app/docs/procedural-instructions).

- **Informational**: to help people understand something.

    - **Conceptual**: a high-level overview, explanation of how something helps the user, and context.

    - **Referential**: detailed information, typically in a list or a table.

Instructional (how-to), quick-start, and troubleshooting articles and sections will almost always include procedural content. Instructional content will also almost always include conceptual and referential content.

## Types of articles

The following documentation types don’t have to be mutually exclusive or exist in separate locations, but the purpose behind each article should remain at the forefront in our design decisions.

### Informational (what)

Informational articles review a specific system, function, or feature within your product. They're not designed to describe problem-solving steps or to get into technical information. They educate the user on something they aren't familiar with and provide an overview of features or options available within it. Informational articles should include:

- A title: [Feature Name]
- A description (brief overview of the product or feature the informational article is about)
- Anchor links to individual topics mentioned in the article
- Feature lists and descriptions
- Further reading: links to related articles or content

### Instructional (how-to)

How-to articles describe how to use a specific feature without additional troubleshooting steps. The main content is typically structured as a list, limited to a single feature or task. How-to articles should include:

- A title: [Task]
- A description of the task your readers are looking to accomplish
- Prerequisites
- Table of contents with anchor links
- Instructions: step 1, step 2, and so on.
- An outcome: what users can expect to happen after completing the steps
- Further reading: links to related KB articles and how-to articles.

### Troubleshooting

Troubleshooting articles address a specific problem that a customer is having and offers steps to resolve it. A troubleshooting article should include:

- A title: Troubleshoot [specific issue]
- A brief description of the problem to be solved
- Reasons why someone might run into the issue
- Anchor links to specific solutions if there are more than one
- Solutions and outcomes
- Further reading: Links to related articles

Often, informational and how-to content will come together to form a complete article with the context needed to understand features and tasks within a wider workflow. In the Pendo Help Center, this is typically an instructional (how-to) article.

Use broad, outcome-agnostic titles that encapsulate the range of information and tasks contained within the article. Doing this helps reduce duplication and sets us up for scalability––being able to add more content as Pendo grows without renaming or replacing articles.

### Order ###

For longer articles that combine different types, follow the guidance for [instructional content](https://main--cosmic-travesseiro-d1f80c.netlify.app/docs/temp-instructional), and aim to order content types in the following way:

1. Conceptual content (a type of [informational content](https://main--cosmic-travesseiro-d1f80c.netlify.app/docs/temp-informational))

2. Referential content (another type of [informational content](https://main--cosmic-https://main--cosmic-travesseiro-d1f80c.netlify.app/docs/prodops-style-guidetravesseiro-d1f80c.netlify.app/docs/temp-informational))

3. Instructional (how-to) content (typically including [procedural instructions](https://main--cosmic-travesseiro-d1f80c.netlify.app/docs/procedural-instructions))

4. [Troubleshooting content](https://main--cosmic-travesseiro-d1f80c.netlify.app/docs/temp-troubleshooting)

5. Next steps and related resources.

Articles typically include 1, 2, and 3 of the above. Follow the guidance on titles and headings for each content type. For linking purposes, try not to duplicate header names within the same article. Be specific.

For more information on headings, see [Headings and titles](https://main--cosmic-travesseiro-d1f80c.netlify.app/docs/prodops-style-guide#headings-and-titles) in the [ProdOps Style Guide](https://main--cosmic-travesseiro-d1f80c.netlify.app/docs/prodops-style-guide).

### Elements ###

The above is the standard order of content. An article includes required, conditional, and optional content. For an instructional article:

|Element|Description|Example|
|---|---|---|
|Title [required]	|	|**Pendo Roadmap [H1]**|
|Introductory paragraph [required]	|Provides context and set expectations, allowing readers to decide if the page is relevant to them.|Pendo Roadmap is a communication tool that helps you visualize and share your product vision with internal teams. You can show how customer requests align with themes of work, and demonstrate how you're using data and insights collected in Pendo Feedback to inform your roadmap.|
|Product callout [optional]	|Highlight important information about the product or feature (such as when it’s available) that isn’t directly related to how the product works.	|**Important:** We’re fully transitioning our customers to the newest version of our roadmapping tool in July, 2022. Due to high demand, Roadmaps Beta will be available for some customers on May 10th, 2022, which will include most of the new functionality of our roadmapping tool.|
|Overview [required]|Summarize functionality of the product or feature.| The newest version of Roadmap (Beta) extends the capabilities of our original roadmapping tool. We’ve been working hard to offer you a better user experience of Roadmaps, with drag-and-drop functionality, UI interactions that allow you to quickly reference details without leaving the page, a backlog where you can add and remove requests, features, and initiatives with flexibility, and customer value and votes data for the items you place on your roadmap.|
|Conceptual content heading||**Roadmap functionality [H2]**|
|Conceptual content, such as functionality or helpful, high-level info about how the product or feature works [optional]|Additional information that will help the user understand what to expect from a product or feature.|Pendo Roadmap is a flexible tool that can be used in different ways. You can show broad themes of work you plan on delivering in coming quarters to leadership, communicate what’s coming with sales who can then get prospects excited about where you’re heading, and close the loop with customers who are interested in what you’re building next.
|Conceptual content heading	|   |**Timeframe [H3]**|
|Conceptual content   |   |[Informational content](https://main--cosmic-travesseiro-d1f80c.netlify.app/docs/temp-informational)|
|Conceptual content heading	|   |**Grouping and hierarchies [H3]**|
|Conceptual content   |   |[Informational content](https://main--cosmic-travesseiro-d1f80c.netlify.app/docs/temp-informational)|
|Conceptual content heading	|   |**Backlog [H3]**|
|Conceptual content   |   |[Informational content](https://main--cosmic-travesseiro-d1f80c.netlify.app/docs/temp-informational)|
|Conceptual content heading	|   |**Roadmap visibility [H3]**|
|Conceptual content   |   |[Informational content](https://main--cosmic-travesseiro-d1f80c.netlify.app/docs/temp-informational)|
| Referential content heading  |   |**Prerequisites [H2]**|
|Pre-requisites and permissions [conditional]|Information the reader should know before getting started.| You must have a Pendo Feedback subscription to access our roadmapping tool. To enable Pendo Feedback, you must first install the Pendo snippet. The snippet is the code that enables Pendo products to launch in your application. For more information about the Pendo snippet, see [link name].
|Procedural content Heading| | **Create a roadmap [H2]**|
|Procedural content|   |[Walkthrough of the individual steps a user must take to complete a task or set of tasks. If there are several tasks, order them logically (find > create > edit > manage > delete)].|
|Procedural content Heading| | **Populate your roadmap [H2]**|
|Procedural content|   |[Procedural instructions](https://main--cosmic-travesseiro-d1f80c.netlify.app/docs/procedural-instructions).|
|Procedural content Heading| | **Edit an existing roadmap [H2]**|
|Procedural content|   |[Procedural instructions](https://main--cosmic-travesseiro-d1f80c.netlify.app/docs/procedural-instructions).|
|Procedural content Heading| | **Delete an initiative or feature from the backlog [H2]**|
|Procedural content|   |[Procedural instructions](https://main--cosmic-travesseiro-d1f80c.netlify.app/docs/procedural-instructions).|
|Troubleshooting content [conditional]|Issue diagnosis and/or troubleshooting steps|NA|
|Further reading or next steps [conditional]|   |NA|

## General writing guidelines

Below are some very basic style considerations for technical documentation. Please work with a technical writer towards creating content so that it’s in line with best practices and the company’s Brand Voice. For more detailed guidance, see the [ProdOps Style Guide](https://main--cosmic-travesseiro-d1f80c.netlify.app/docs/prodops-style-guide).

### Introductions and overviews ###

Provide context and set expectations at the top of an article with an introductory paragraph.

- Avoid repeating words from the title; let the reader know what to expect by presenting the information differently.
- For searchability, include keywords early on.
- Article introductions (e.g., “This article describes…” or “Pendo is …”) are typically one to two sentences long.
- Article introductions should be evergreen and high-level so that they scale with changes to the product and the page.
- Article overviews are high-level summaries of the page’s content.
- Define the feature so that a user knows whether the feature meets their needs without reading the entire article.

### Prerequisites and permissions ###

Most instructional articles include prerequisites and permissions.

- Prerequisites and limitations let readers know what they need to have or do before getting started so that they have everything they need in advance.
- You can use a list, a sentence, or a paragraph to explain prerequisites.
- A permissions statement explains the role required to take the action described in the procedure, which helps people understand whether they'll be able to complete the task.
- Don't include prerequisites or permissions in an article's introduction or overview.
- Write prerequisites and role permissions immediately before a procedure's numbered steps.
- When an article contains multiple procedures and different permissions apply, include a separate prerequisites or permissions statement under each relevant header, before each procedure.
- You can also use a separate prerequisites or permissions section when:
    - The information is very important and shouldn’t be missed.
    - There's more than one prerequisite or permission.
- Refer only to the roles or prerequisites that are required for the action.

### Procedural instructions ###

Most instructional articles include procedural instructions.

- Reserve numbered lists for communicating the order in which steps are carried out.
- Use bullet points for all other lists.
- Use the imperative mood: start with an action verb and second person singular, with “you” as the implied subject”. Imperative sentences are typically in the active voice.
- Use emphasis selectively. Use bolding to call out UI and navigational elements, such as Delete and Save.

For more detailed guidance, see [Procedural Instructions](https://main--cosmic-travesseiro-d1f80c.netlify.app/docs/procedural-instructions).

### Language ###

- The standard language for Pendo documentation is **US English.**
- Aim to write in active voice, which is more direct and easier to understand.
- Keep it simple:
    - Use everyday words.
    - Keep sentences short; aim for ≤28 words per sentence.
    - Break up sentences into separate thoughts.
    - Consider using an introductory condition.
- Adopt a personal tone:
    - Write to the user directly by using the second person “you”.
    - Adopt a conversational style.
    - Avoid jargon, clichés, buzzwords, and insider terms.

### Linking to other content ###

Use further reading links and sections sparingly––only when they provide high value. When you do link to other content:

- Don’t include phrases like “Click here” as the link; link the full name of the article.
- Don’t link preceding articles (a, an, the).
- Don’t link punctuation.
- Ensure the link looks different from regular text.
- Include a hover state that communicates the link’s interactivity.

### Writing conventions ###

- **Oxford commas.** Use them.
- **Symbols.** Don’t use symbols to substitute words.
- **Headings.** Don’t use empty headings, where this is no body text between two headings or between the title and a heading.
- **Capitalization.** Use sentence case.
    - Only capitalize the first word and proper nouns, which include brands and products.
    - Be conservative in capitalizing new features, which often user industry-standard terminology.
    - In general, don’t brand features by capitalizing them.
- **Dashes and hyphens.** Don’t confuse them.
    - Hyphenate compound modifiers that act as adjectives, for example, “a high-definition user experience”.
    - Don’t use a hyphen with adverbs ending in -ly, for example, “a highly mobile worker”.
    - Use em dashes (––) like parentheses, but don’t overuse them.
    - Use an en dash (–) to indicate a minus sign, a negative number, or a range of numbers, for example, pages 95–110.
- **Acronyms, initialisms, and abbreviations.** Reserve shortned forms for when space is limited or for when users are more familiar with the acronym or initialism than the phrase it’s based on (for example, URL). When you do use shortened forms:
    - Don’t capitalize the words on which an acronym or initialism is based unless referring to a proper noun.
    - Avoid using the possessive form with shortened forms.
    - Use the proper article with an acronym or initialism in the sentence.
    - Don’t use an apostrophe for the plural of an acronym or initialism.
    - Spell out acronyms and initialisms on first reference and include the acronym or initialism in parentheses immediately following the expanded form unless it’s a long-established acronym or initialism (for example, HTML).
    - Use abbreviations for a unit of measurement. Insert a space between the number and the unit of measure.
