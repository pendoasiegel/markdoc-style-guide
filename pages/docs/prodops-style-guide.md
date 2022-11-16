---
title: Pendo | ProdOps Style Guide
description: Pendo style guide
---

# ProdOps Style Guide

Regardless of whether you’re creating help documentation or designing UI content, there are four high-level content guidelines for creating a good information experience.

* Create scannable content.
* Adopt lean writing principles.
* Choose your words carefully.
* Use clear and consistent writing conventions.

For specific guidance on writing step-by-step instructions, see [Procedural Instructions](...). For specific guidance on in-product content, see [UX Writing](https://main--cosmic-travesseiro-d1f80c.netlify.app/docs/style-ux)

## Create scannable content

Scannable content is more accessible, usable, and approachable, allowing readers to find the information they need without overwhelming them. Use format and organization to create scannable content. General guidelines include:

* Aim for short blocks of text (< 5 sentences).
* Place important content “above the fold”.
* Aim for a flat hierarchy with no more than three levels of heading.
* Use emphasis selectively. Avoid bolding or italicizing whole phrase or sentences to emphasize importance.

Nielsen’s first law of computer documentation is that people don’t read it. People spend more time understanding the page layout and navigation features than reading. On websites, users avoid reading anything they think is not essential to the task at hand and are instead prone to scanning the page in an F shape.

The effectiveness of documentation can be enhanced with good layout, focusing on the task at hand, and using user-oriented language. With this in mind, we suggest the following for breaking up content.

### Headings and titles

Guidelines for both headings and titles include the following.

Write headings and titles in sentence-case. Sentence-case is easier to read and is especially useful in heading and titles titles because it helps to disambiguate generic terms from proper nouns, such as the difference between “feedback” submitted by end-users and “Feedback” the product.

State the user’s goals and actions in headings and titles; don’t just name the feature or system. For example, "Manage requests in the Browse page", instead of "The Browse page".

Don’t use end-punctuation (. : ! ?) in headings and titles.

Avoid having two headings in a row without text in between. This also applies to having a heading immediately following the title. An introduction/overview is almost always at the beginning, and so there's no need for an introductory heading to help readers locate that information.

#### Guidance for titles

Make article titles high-level enough to scale with product changes, and cover all the content within the article, including multiple product lines, for example "Roadmaps with Pendo Feedback" covers both current and Beta versions of Roadmaps, and will cover any additional features of Roadmaps.

#### Guidance for headings

Treat headings like micro-content––phrases that can be scanned to give readers a clear idea of what they’ll get. You can do this by ensuring headings work out of context. For example, “Set up languages in Pendo Feedback” instead of “Languages setup”.

Describe the purpose or goal of a feature. Aim for specific headings that provide concrete information and a clear advantage for the user. For example, “Set expectations with a Product Feedback Policy” instead of “Product Feedback Policy”.

Use headings to break up content in a way that tells a logical story of user actions. For example:

> **Create the thing**
>
> **Save the thing**
>
> **Edit the thing**
>
> **Delete the thing**


For task-based headings, focus on what the reader does: use imperative sentences, action verbs, and the active voice whenever possible. For example, “Add customers to Feedback” instead of, “Adding customers to Feedback”.

For conceptual headings, use a noun phrase that doesn't start with an *-ing* verb. For example, “Get started with Feedback” instead of, “Getting started with Feedback”.

### Links

Links imbedded in the body, where select words in a normal sentence are hyperlinked to articles, requires the reader to digest the entire paragraph or sentence to infer what the link provides based on its context.

Write unique, descriptive link text that makes sense without the surrounding text. Avoid phrases such as “this article” or “click here”, and avoid wiki-style links.

Other guidelines for links include:

* Don’t use the same link text for different target pages in the same document.
* Don’t include punctuation inside the link, unless it’s part of the page title or heading.
* Don’t use a URL as link text, unless the user needs to know the URL rather than follow the link to complete a task.

#### Preferred link format

Make the link text match the exact text of the title or heading that you're referencing, including the original capitalization of the linked article or heading. For example:

> For more information about creating Product Areas, see [Product Areas in Feedback](https://support.pendo.io/hc/en-us/articles/360044907192-Product-Areas-in-Feedback).

#### Alternative link format

Write a description of the destination page to use as the link text, capitalized as if it's part of the sentence. If using this method, keep the link text as short as possible and place important words at the beginning of link text. For example:

> You can [create Product Areas to match areas in your app](https://support.pendo.io/hc/en-us/articles/360044907192-Product-Areas-in-Feedback).

### Lists

Use parallel phrasing in lists.

Use bullet points and numbered lists to break up content and to make it more digestible.

#### Bullet points

Use bullet points when the order doesn't matter, even if you specify that there are a number of items in a group. For example:

> There are two ways to use CSS for tagging:
> * Using the Chrome Inspector.
> * Using the Pendo Chrom extension.

#### Numbered Lists

Reserve numbered lists only for step-by-step, procedural  instructions.
For example:

> To use the Pendo Chrome extension:
> 1. Open the Pendo Tagging Aid.
> 2. Hover over an element and select it to highlight the area.
> 3. Choose some of the suggested rules to create a unique rule for your element.

This helps readers recognize step-by-step instructions and helps you maintain consistency across articles.

### Frequently Asked Questions (FAQs)

FAQs are poor customer service because they create more work for readers:
*  Questions are longer and harder to scan than headings.
*  We can’t “frontload” questions with terms that most people are looking for.
*  FAQs are provided out of context.
*  FAQs create duplication in search results.
*  Readers don’t always word questions in the same way we’ve presented them.
*  A list of questions is a friction-heavy experience, where the customer has to dig through many questions to find an answer to one question.

Information is more effective for the reader when it’s in context and pre-emptively answers questions that would otherwise cause people to search in FAQs.

FAQs also set the wrong tone because they’re typically sought when the documentation or customer journey has failed.

#### Restructure your content before adding FAQs

FAQs tend to become a “dumping ground” of information that fails to take into account the user experience.

Most FAQs aren’t really “frequently asked” but, rather, indicate that the company hasn’t put in the effort to make the documentation easy to follow or to optimize the customer journey (or both).

If a question really is frequently asked, you likely need to add or restructure the content. Often, the perceived need for FAQs actually indicates that readers can’t find what they need where they’d reasonably expect to find it in the help documentation.

#### Considerations for when you do use FAQs

*  Only include questions that are actually frequently asked. Don’t assume what customers might ask.
*  Don’t use an FAQ section to defend shortcomings or as a substitute for good documentation.
*  Don’t include vanity questions. These are for marketing, not help documentation or the UI.
*  Provide detailed, meaningful answers to specific questions based on what readers need to know.
*  Spell out “Frequently Asked Questions”, rather than relying of on initialism (FAQ).
*  Keep FAQs specific to your product or article.

## Adopt lean writing principles

Write content with lean writing principles in mind––removing unnecessary words and keeping sentences simple. This should make content easier to find, scan, read, and use. General guidelines include:

* Write in present tense.
* Use the second person, "you".
* Use common contractions, especially for the word "not".
* Use the imperative mood and the active voice where possible.

To modify a quote from Antoine de Saint-Exupery, good writing is achieved, not when there is nothing left to add, but when there is nothing left to remove.

### Write purposeful Content

Sentences tend to be shorter when you write purposeful content. Avoid redundancy and get straight to the point based on user needs to maintain the effectiveness of your content.

* Specify the value to the target audience early and clearly.
* Make important information easy to find.
* Focus on instructions for performing speicific tasks.
* Identify steps and create a logical flow.
* Describe only what's necessary to reach the end goal.
* Write to encourage a course of action.
* Don’t provide unnecessary information. For example, don’t give a detailed history of the product – focus on instructions for performing a specific task.
*  Remove unnecessary words and content, for example, ”You’ll be asked to enter your password, ~~which you created in the previous step~~.”


### Get to the point, quicker

You can also avoid redundancy and get straight to the point with your sentence structure. The following guidance also helps you to reduce wordiness.

|Guidance| Example|
|---|---|
|Use the active voice where possible.|“You can send emails from your phone”, rather than “Emails *can be sent from* your phone”.|
|Avoid grammatical expletives (words that add emphasis by delaying the subject), such as “it is” or “there are”.|“The list has six items”, rather than “There are six items in the list".|
|Use more verbs and fewer nouns.|“If you decide to...", rather than "If you make the decision to...".|
|Avoid buried verbs (nominalization): using a noun and a verb when a verb alone would portray the meaning. |“Follow the guidelines for testing your software”, rather than “Follow the guidelines for *performing a test* of your software”. Turning the word “test” into an action removed the need for the word “performing”.|
|Write imperative sentences. | “If you need further help, ~~you can~~ contact the Support Team”.|

### Reduce wordiness

Use as few words as possible to portray meaning. Aim for:

* Paragraphs that are ≤75 words and ≤4 sentences.
* Headings that are ≤12 words.
* A maximum of 28 words per sentence.
* Sentences that are ≤15 words on average.

As well as the guidance given above, you can reduce wordiness by removing unnecessary words and choosing shorter, less complicated words wherever possible.

|Guidance| Example|
|---|---|
|Replace wordy phrases with single words where possible.|“Because" rather than "due to the fact that" or "some" instead of "a number of".|
|Avoid prepositional phrases.|“Select the plus sign ~~in order~~ to add a new user” or “You need to ~~make sure you~~ initialize the agent.”|
|Remove empty or unnecessary determiners and modifiers.|“The set up is ~~basically~~ the same”; “The process is ~~actually quite~~ straightforward”; “Selecting this option is ~~really~~ only needed if you’re using a Windows machine.”|
|Prune every excess or redundant word.|“Repeat the steps ~~again~~“ or "Removed each ~~individual~~ titem from the list.”|
|Replace an intensifier or qualifier, along with the adjective it refers to, with a stronger word.|“Very important” could be replaced with “crucial”.|

## Choose your words carefully

Use clear, consistent, and human language, keeping the precise meaning of words in mind. Spend time researching what words the intended readers use rather than defaulting to corporate language.
Also, keep localization in mind. Translation can lengthen text by 20-30 percent. General guidelines for word choice include:

* Avoid marketing or sales langauge. Be specific and factual about the benefits.
* Commit to using plain (American) English. Use technical language only when it's needed, and try to also explain it generally.
* Use industry-standard terminology when it will improve user understanding.
* Use a simple word over a complex one.
* Use terms that are understood by global audeiences.
* Be sensitive to the human meaning of words and avoid terms that reflect bias.
* Address readers directly to establish a personal tone. Use the second person in sentences ("you” instead of “the administrator”, “the customer”, or “the user”.)

### Keep it precice, concise, and objective

Avoid ambiguity and confusion by using specific, accurate language that describes what the reader needs to know in as clear and simple terms as possible.

|Guidance| Example|
|---|---|
|Don’t use adjectives or adverbs to quantify. State a value, range, or an adjective with quantifiable meaning.|“The change takes effect *quickly*“, could instead be, “The change takes effect *within 5 minutes*“.|
|Choose short, simple, everyday words over long, formal, or complicated words.| “Help” instead of “assistance”, “let” instead of “enable”, “use” instead of “utilize”, “more” instead of “further”.|
|Clarify antecedents to avoid “this”, “that”, “these”, and “it”, which can be ambiguous. | “Walk users through each step with Pendo Guides.” instead of “You can walk users through each step. This is achieved with Pendo Guides”. |
|Avoid a subjective tone created by value judgements and stance adjuncts.   | Avoid words like “easily”, “amazing”, and “obviously”. |
|Avoid phrases that require special, local, or cultural knowledge, and colloquialisms or slang.   | Avoid phrases like "Ready to jump in?” and “At the end of the day”.|
|Avoid idioms, expressions, metaphors, clichés, irony, and humor.| Avoid phrases like “The process isn’t rocket science" or "think outside the box”. |
|Avoid words that are ambiguous in describing whether must or can be done.   | Use "must" instead of "should"; use "might" instead of "may" |
|Avoid the hypothetical future “would”.  |  “The request is then removed from the backlog" instead of "The request would then be removed from the backlog" .|
|Don’t use double-negatives. |"Like" instead of "unlike".   |
|Don’t omit relative pronouns such as “that” and “which”.   | "Pendo Roadmap offers a theme-based view of items *that* you’re planning and building."  |

### Be positive

Avoid negative wording. Focus on what the user *can* do rather than what they can't do.

|Guidance| Example|
|---|---|
|Look out for words like “can’t” and “don’t” to re-frame sentences more positively. |“Sign in again to reconnect” instead of “You can’t reconnect until you sign in again”.|
|Where negative phrasing must be used, use less negative alternative.   |   "Unable to" instead of "fail". |
|Don’t blame the user.   | "The password is incorrect" instead of "you entered the wrong password"  |
|Focus on what the user can do, rather than what they can’t.   | “The software is compatible with X, Y, and Z.” instead of “The software isn’t compatible with A, B, and C.” |

### Avoid offence and annoyance

You’re talking to humans, so be sensitive to the human meaning of words. Use inclusive and unbiased language.

|Guidance| Example|
|---|---|
|Avoid sensitive and violent terms. |“End your session” instead of "kill your session"; Avoid words like “hit”, “force”, “reject”, “kill”, “hang”, “abort”, and “terminate”.|
|Avoid terms that reflect historical racial bias, such as using color to communicate that something is "good" or "bad", and references that carry forward the master/slave paradigm  |   Avoid "whitelist" and "blacklist"; avoid phrases like "master table". |
|Use gender-neutral alternatives.| "They", "them", "their".  |
|Don’t be over-polite. Use “please” only when the action inconveniences the user.  |“~~Please~~ save your work before continuing.” |

### Use shortened forms with care

Use abbreviations, acronyms, and initialisms under specific circumstances.

* Use intended words instead of Latin abbreviations Use and so on" instead of "etc.", "specifically" instead of "i.e.", and "for example" instead of "e.g."
*   pell out acronyms and initialisms on first reference and include the acronym in brackets immediately following the expanded form, unless it’s a long-established acronym or initialisms, such as "URL" or "ID".
* Use abbreviations for unit of measurements, except  time, for example, “5 minutes" (unless space is limited).
* Insert a space between the number and the unit of measure, for example, “3 ft, 5in.”
* Spell out the names of days and months using the format: month dd, yyyy, for example, “June 10, 2022". Avoid using an all-number method, which differs depending on culture, for example, “10/06/22” (UK) or “06/10/22” (US).

### Use terminology consistently

Without consistency, documentation can come across as unreliable or lacking credibility.

*  Don’t switch between terms in the product documentation or in the product itself.
*  After introducing an acronym, don’t switch back and forth between full words and the acronym.
*  Don’t switch between language conventions, such as American and British spellings.
*  In instructions, refer to UI elements exactly as they appear in the product.

## Use clear and consistent writing conventions

Follow industry standards for grammar, punctuation, and capitalization. General guidelines include:

* If in doubt, use sentence case.
* Write in pressent tense.
* Use the serial (Oxford) comma.
* Use common contractions.
* Don't use symbols to substitute words.

### Capitalization

Use sentence-case for everything (buttons, headings, chart/table titles, list items, etc.) except top navigation, trademarks, product names, and titles of books or videos.

Sentence-case involves capitalizing only the first word and proper nouns in a heading. In general, use sentence-case for:

*  Headlines, headers, and subheads.
*  Secondary web navigation and menu items.
*  Buttons and calls to action (CTA).
*  Titles and input fields.
*  Titles of charts, tables, and diagrams.
*  List items.

Use title case only for:

*  Main or global navigation on web pages (top-level/primary navigation).
*  Distinguishing products from general technology with similar names.
*  Titles of books, podcasts, webinars, and videos.
*  Trademarked product names.

### Contractions

Using contractions has the following benefits:

* Common contractions like "that's" and "you're" shorten sentences and make sentences easier to read.
* Negation contractions (like "don't" and "isn't") helps prevent the reader from missing the word "not" in a sentence.
* Contractions are less formal, in line with the guidelines for the Pendo Voice and the ProdOps Tone of Voice.

The general guidance for using contractions is to use simple, present-tense contractions only. This means you should:

* Avoid using uncommon contractions that are grammatically correct but rarely used, such as "shan't".
* Avoid contractions formed from nouns and verbs, for example, "Pendo's effective, efficient, and secure." In this example, write "Pendo is".
* Don't use double contractions, for example, "Mightn't've". In this example, use "might not have".

It's also important not to confuse the possessive form (such as "its") with the noun + verb form ("it's").

### Numbers and symbols

Follow best practice for numbers and symbols.

#### Substitutions

Don’t use symbols or characters to substitute words, either in headings or body text.
* Use “or” instead of “/”
* Use “and” instead of “&” or “+”
* Use “more than” or “less than” instead of “>” and “<”.

#### Percent and percentage

Use “percent” with a number (unless the number is the first word in a sentence) and use a space between the number and “percent”. For example: " 5 percent".

Use “percentage” without a number. For example: "a high percentage".

#### Figures

* Spell out numbers from zero through to ten in the body of the text. For example, "We are a team of five people".
* Use figures for 11 and above. For example, "Pendo has over 900 employees".
* Use figures for specific dates, times, and measurements. For example, 5 minutes.
* Use a comma in large numbers. For example, "Cambridge has 118,403 residents".
* Use fogures before "million", "billion", and "trillion". Use a space after the number. For example, "1 million".

### Punctuation

Keep punctuation simple. Complex constructions, for example, by using semicolons or multiple dashes, can impair readability and can make translation difficult.

#### Commas

Use the serial (Oxford) comma to provide clarity and to maintain consistency across content. Use a comma for a series of three or more elements. For example:

> “Pendo allows you to track usage, collect feedback, and deliver guides.”

Don’t use a comma to combine independent clauses (comma splicing). For example. Instead, add a conjunction (like “and”) or create two sentences. For example:

> I sent 100 emails, I plan to send 100 more" could instead be either:
>
> * “I sent 100 emails. I plan to send 100 more.”
> *  “I sent 100 emails, and I plan to send 100 more.”

#### Colons and semicolons

Use a colon (:) to introduce something that follows, such as a list.

Avoid semicolons (;) because many people don’t know what they mean, and often confuse them with colons.

If you do use semicolons, make sure you use them for the right reasons:

* To join independent clauses that are closely linked, making them equal, for example: "Confirm that you want to delete your roadmap; a roadmap can’t be recovered after it’s been deleted.”
* To separate to main clauses that are otherwise separated by a conjunctive, for example: “We didn’t check the map; ~~and~~ now we’re lost.”
* As ‘super-commas’ when items in a list already include commas, for example: “Pendo has three offices in the USA, including: Raleigh, North Carolina; New York City, New York; and San Francisco, California.

In product documentation and guidance, it’s better to use a bulleted list than semicolons.

#### Dashes and hyphens

Use dashes and hyphens with care.

|Guidance| Example|
|---|---|
|Hyphenate compound modifiers that act as adjectives.  | “A high-definition user experience”|
|Don’t use use a hyphen with adverbs ending in -ly.|“A highly mobile worker”|
|Use a hyphen (-) or the en dash (–) to replace “to” in a range, but use them consistently. |“Keep paragraphs 2-5 sentences long", or “Keep paragraphs 2–5 sentences long”|
|Use the en dash (–) to replace “and” in relationships.|“The customer-user relationship is ...”|
|Use the en dash (–) as a minus sign.|10 – 6 = 4|
|Use em dashes (––) like parentheses, but don’t overuse them.|   “Pendo’s new Roadmap offering––released this year––helps you visualize and share your product vision.”|

#### Parentheses

Parentheses (typically brackets or em dashes) separate content that acts as an aside (such as this comment) or to add incidental information.

However, technical writing shouldn't include an aside or incidental information, and so we should avoid using them.

Avoid using brackets, unless you want to introduce an acronym or initialism, for example, "configure single sign-on (SSO)"

If you want to use brackets, do you need to include the information? Otherwise, be bold and remove the brackets. For example:

> Instead of "You can customize this page (see **Customize View** for an example)", write "You can customize this page. See **Customize View** for an example".

Em dashes play a similar role to brackets, but they can also be used singly instead of a comma or semicolon to avoid ambiguity, or for emphasis to the separated text. For example:

> Pendo offerings––analytics, in-app guidance, and user feedback––are designed to work together.

#### End punctuation

Don’t use end punctuation (. : ! ?) in section titles, subheadings, UI titles, and items in a list that are three or fewer words.

Don’t use exclamation marks (!).

Avoid question marks (?)

### Tense

Present tense is easier to read and and helps tp avoid ambiguity about what “will” versus “should” happen. Present tense also makes the content more directly relevant to the reader, who is reading the documentation to perform tasks or to gather information in their present. For example:

> Instead of, “After you save changes, a confirmation window will appear”, we should write, “After you save changes, a confirmation window appears”.

Only use the future tense when you need to emphasize that something will definitely occur later, from the users’ perspective.
