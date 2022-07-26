The structure of individual articles depends on the content type and category. Is it an overview? Is the information more practical, such as how-to guidance or troubleshooting?

## Types of content ##

Help docs include different types of content, which can differ depending on the audience and the purpose of an article:

- Procedural – for completing a task from start to finish. For more guidance on writing procedural instructions, see Procedural instructions, below, and slides 47-57 of the ProdOps Style Guide.

- Informational – to help people understand something.

    - Conceptual – a high-level overview, explanation of how something helps the user, and context.

    - Referential – detailed information, typically in a list or a table.

Instructional (how-to), quick-start, and troubleshooting articles and sections will almost always include procedural content. Instructional content will also almost always include conceptual and referential content.

## Types of articles ##

The following documentation types don’t have to be mutually exclusive or exist in separate locations, but the purpose behind each article should remain at the forefront in our design decisions.

### Informational (what) ###

Informational articles review a specific system, function, or feature within your product. They're not designed to describe problem solving steps or to get into technical information. They educate the user on something they aren't familiar with and provide an overview of features or options available within it. Informational articles should include:

- A title: <Feature Name>
- A description (brief overview of the product or feature the informational article is about)
- Anchor links to individual topics mentioned in the article
- Feature lists and descriptions
- Further reading: links to related articles or content

### Instructional (how-to) ###

How-to articles describe how to use a specific feature without additional troubleshooting steps. The main content is typically structured as a list, limited to a single feature or task. How-to articles should include:

- A title: Task
- A description of the task your readers are looking to accomplish
- Prerequisites
- Table of contents with anchor links
- Instructions: step 1, step 2, and so on.
- An outcome: what users can expect to happen after completing the steps
- Further reading: links to related KB articles and how-to articles.

### Troubleshooting ###

Troubleshooting articles address a specific problem that a customer is having and offers steps to resolve it. A troubleshooting article should include:

- A title: Troubleshoot <specific issue>
- A brief description of the problem to be solved
- Reasons why someone might run into the issue
- Anchor links to specific solutions if there are more than one
- Solutions and outcomes (how the user will now that the issue is resolved or still occurring)
- Further reading: Links to related articles

##
Often, informational and how-to content will come together to form a complete article with the context needed to understand features and tasks within a wider workflow. In the Pendo Help Center, this is typically an instructional (how-to) article.

Use broad, outcome-agnostic titles that encapsulate the range of information and tasks contained within the article. Doing this helps reduce duplication and sets us up for scalability – being able to add more content as Pendo grows without renaming or replacing articles.

### Order ###

For longer articles that combine different types, follow the guidance in Instructional content, and aim to order content types in the following way:

Conceptual content (a type of Informational content)

Referential content (another type of Informational content)

Instructional (how-to) content (typically including procedural instructions)

Troubleshooting content

Next steps and related resources.

Articles typically include 1, 2, and 3 of the above. Follow the guidance on titles and headings for each content type. For linking purposes, try not to duplicate header names within the same article. Be specific.

For more information on headings, see Headings.

### Elements ###

The above is the standard order of content. An article includes required, conditional, and optional content. For an instructional article:

|                                                               Element                                                               |                                                                                     Description                                                                                     |                                                                                                                                                                                                                                                                               Example                                                                                                                                                                                                                                                                               |
|:-----------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Title  [required]                                                                                                                   |                                                                                                                                                                                     | Pendo Roadmap [H1]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Introductory paragraph [required]                                                                                                   | Provides context and set expectations, allowing readers to decide if the page is relevant to them.                                                                                  | Pendo Roadmap is a communication tool that helps you visualize and share your product vision with internal teams. You can show how customer requests align with themes of work, and demonstrate how you're using data and insights collected in Pendo Feedback to inform your roadmap.                                                                                                                                                                                                                                                                              |
| Product callout  [optional]                                                                                                         | Highlight important information about the product or feature (such as when it’s available) that isn’t directly related to how the product works.                                    | Important: We’re fully transitioning our customers to the newest version of our roadmapping tool in July, 2022. Due to high demand, Roadmaps Beta will be available for some customers on May 10th, 2022, which will include most of the new functionality of our roadmapping tool.                                                                                                                                                                                                                                                                                 |
| Overview  [required]                                                                                                                | Summarize functionality of the product or feature.                                                                                                                                  | The newest version of Roadmap (Beta) extends the capabilities of our original roadmapping tool. We’ve been working hard to offer you a better user experience of Roadmaps, with: Drag-and-drop functionality. UI interactions that allow you to quickly reference details without leaving the page. A backlog where you can add and remove requests, features, and initiatives with flexibility. Customer value and votes data for the items you place on your roadmap.                                                                                             |
| Conceptual content, such as functionality or relevant (helpful), high-level info about how the product or feature works  [optional] | Additional information that will help the user understand what to expect from a product or feature.                                                                                 | Roadmap functionality [H2] Pendo Roadmap is a flexible tool that can be used in different ways. You can show broad themes of work you plan on delivering in coming quarters to leadership, communicate what’s coming with sales who can then get prospects excited about where you’re heading, and close the loop with customers who are interested in what you’re building next. Timeframe [H3] <Informational content> Grouping and hierarchies [H3] <Informational content> Backlog [H3] <Informational content> Roadmap visibility [H3] <Informational content> |
| Referential content, such as Prerequisites and permissions  [conditional]                                                           | Information the reader should know before getting started.                                                                                                                          | Prerequisites [H2] You must have a Pendo Feedback subscription to access our roadmapping tool.  To enable Pendo Feedback, you must first install the Pendo snippet. The snippet is the code that enables Pendo products to launch in your application. For more information about the Pendo snippet, see the Developer's Guide to Installing the Pendo Snippet.                                                                                                                                                                                                     |
| Procedural content  [required for instructional content and typical for troubleshooting content]                                    | Walkthrough of the individual steps a user must take to complete a task or set of tasks. If there are several tasks, order them logically (find > create > edit > manage > delete). | Create a roadmap [H2] <Procedural content> Add swimlanes to your roadmap [H2] <Procedural content> Populate your roadmap [H2] <Procedural content> Edit an existing roadmap [H2] <Procedural content> Edit or remove items  [H2] <Procedural content> Delete an initiative or feature from the backlog [H2] <Procedural content> Delete an existing roadmap [H2] <Procedural content>                                                                                                                                                                               |
| Troubleshooting content  [optional]                                                                                                 | Issue diagnosis and/or troubleshooting steps                                                                                                                                        | NA                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Further reading or next steps [conditional]                                                                                         |                                                                                                                                                                                     | NA                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

## General writing guidelines ##

Below are some very basic style considerations for technical documentation. Please work with a technical writer towards creating content so that it’s in line with best practices and the company’s Brand Voice. For more detailed guidance, see the ProdOps Style Guide and this Information Development Guide.

### Introductions and overviews ###

Provide context and set expectations at the top of an article with an introductory paragraph.

- Avoid repeating words from the title; let the reader know what to expect by presenting the information differently.
- For searchability, include keywords early on.
- Article introductions (e.g., “This article describes…” or “Pendo is …”) are typically:
    - Evergreen and high-level so that they scale with changes to the product and the page.
    - One to two sentences long.
- Article overviews are high-level summaries of the page’s content.
- Define the feature so that a user knows whether the feature meets their needs without reading the entire article.

### Prerequisites and permissions ###

Most instructional articles include prerequisites and permissions.

- Prerequisites and limitations let readers know what they need to have or do before getting started so that they have everything they need in advance.
- You can use a list, a sentence, or a paragraph to explain prerequisites.
- A permissions statement explains the role required to take the action described in the procedure, which helps people understand whether they'll be able to complete the task.
- Don't include prerequisites or permissions in an article’s introduction or overview.
- Write prerequisites and role permissions immediately before a procedure's numbered steps.
- When an article contains multiple procedures and different permissions apply, include a separate prerequisites or permissions statement under each relevant header, before each procedure.
- You can also use a separate prerequisites or permissions section when:
    - The information is very important and shouldn’t be missed.
    - There's more than one prerequisite or permission.
- Refer only to the roles or prerequisites that are required for the action.

### Procedural instructions ###

Most instructional articles include procedural instructions.

- Reserve numbered lists for communicating the order in which steps are carried out. Use bullet points for everything else.
- Use the imperative mood: start with an action verb and second person singular, with “you” as the implied subject”. Imperative sentences are typically in the active voice.
- Use emphasis selectively. Use bolding to call out UI and navigational elements, such as Delete and Save.

### Language ###

- The standard language for Pendo documentation is **US English.**
- Aim to write in active voice, which is more direct and easier to understand.
- Keep it simple:
    - Use everyday words.
    - Keep sentences short; aim for ≤28 words per sentence.
    - Break up sentences into separate thoughts
    - Consider using an introductory condition.
- Adopt a personal tone:
    - Write to the user directly by using the second person “you”.
    - Adopt a conversational style.
    - Avoid jargon, clichés, buzzwords, and insider terms.

### Linking to other content ###

Use further reading links and sections sparingly – only when they provide high value. When you do link to other content:

- Don’t include things like “Click here” on a link; link the full name of the article you’re linking to.
- Don’t link preceding articles (a, an, the).
- Don’t link punctuation.
- Ensure the link looks different from regular text.
- Include a hover state that communicates the link’s interactivity.

### Writing conventions ###

- Oxford commas. Use them.
- Symbols. Don’t use symbols to substitute words.
- Headings. Don’t use empty headings, where this is no body text between two headings or between the title and a heading.
- Capitalization. Use sentence case.
    - Only capitalize the first word and proper nouns, which include brands and products.
    - Be conservative in capitalizing new features, which often user industry-standard terminology.
    - In general, don’t brand features by capitalizing them.
- Dashes and hyphens. Don’t confuse them.
    - Hyphenate compound modifiers that act as adjectives, for example, “a high-definition user experience”.
    - Don’t use a hyphen with adverbs ending in -ly, for example, “a highly mobile worker”.
    - Use em dashes (––) like parentheses, but don’t overuse them.
    - Use an en dash (–) to indicate a minus sign, a negative number, or a range of numbers (for example, pages 95–110).
- Acronyms and abbreviations. Reserve acronyms and abbreviations for when space is limited or for when users are more familiar with the acronym or abbreviation than the phrase it’s based on (for example, URL). When you do use acronyms and abbreviations:
    - Don’t capitalize the words on which the acronym is based unless referring to a proper noun.
    - Avoid using the possessive form with abbreviations and acronyms.
    - Use the proper article with an acronym in the sentence.
    - Don’t use an apostrophe for the plural of an acronym.
    - Spell out acronyms on first reference and include the acronym in parentheses immediately following the expanded form unless it’s a long-established acronym (for example, HTML).
    - Use abbreviations for a unit of measurement.
        - If an abbreviation matches a preposition, include a period after. For example, “3 ft, 5 in.”
        - Insert a space between the number and the unit of measure.
