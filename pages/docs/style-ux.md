---
title: Pendo | UX Writing
description: Pendo style guide UX writing style
---

# UX Writing

General guidance for UX writing includes:

-  Engage early with Design.
-  Take a user-centered approach.
-  Keep messages short.
-  Address the reader directly; avoid referring to "users" or "customers".
-  Avoid using the same word twice in the same screen.
-  Avoid negative phrasing.
-  Use sentence case for everything except global navigation and boolean values.
-  Avoid using abbreviations, initialisms, and acronyms in UI content unless space is severely limited or the shortened form is better known than the full term (for example, URL).

## What does a UX writer do?

A UX writer helps craft in-product content as part of the product design process. This includes in-product text, buttons, messages, labels, and other UI touchpoints that guide a user through a product or service.

A UX writer is responsible for creating in-product content that's in line with the company's [Voice and Tone](https://main--cosmic-travesseiro-d1f80c.netlify.app/docs/voice-and-tone) and that facilitates the user experience of the product. UX writers take insights from UI and UX design principles, usability research, and behavioral psychology to create and refine content that's designed for the end-user of a product, from large blocks of text to a product's UI elements and microcopy.

UX writers should be involved early in the design process, alongside UX and UI designers, UX researchers, and information architects.

Before writing or reviewing UI content, the UX writer needs to know:

-  Who they're writing for.
-  What the user's goals and needs are.
-  What the product is and how the product is used.
-  What the use cases are.
-  What components of the product need written or reviewed (if not the end-to-end experience).

The aim is create a cohesive content experience. For this reason, it's sometimes described as a sub-discipline of content design.

## In-product content

UX writing involves reviewing and recommending in-product content. The main categories of in-product content are:

### Microcopy

Microcopy refers to the words or very short sentences that tell a user what to do, address user concerns, and provide context to a situation. Examples of microcopy include: title bars, buttons, menus, error messages, labels, supplementary explanations, checkbox options, dropdown lists, row/column headings and entries, and so on.

Microcopy should be written in second person and sentence case. For more guidelines on the individual elements for which microcopy is needed, see [UI elements and input controls](https://main--cosmic-travesseiro-d1f80c.netlify.app/docs/style-ux#ui-elements-and-input-controls).

### Contextual help

Contextual help is on-demand content based on the state that an application is in when a user seeks help, such as instructions, tooltips, guided workflows, and so on. Help that's offered in context is easier to identify and use (has high affordance) and is less disruptive; rather than interrupt the workflow by forcing the user to browse an online manual or help center, context-sensitive help delivers content relevant to the part of the program that the user is interacting with. It's thus better if the user can access this help without leaving the current workflow, which can be achieved with **instructional text**.

### Instructional (on-screen) text

Instructional text, also called in-product instructions or on-screen text, is contextual help presented inline with the interface content, which avoids making users switch between tools to get help. Instructional text helps the user understand what a feature does or how to populate a field. This allows the user to solve problems without waiting for assistance or referring to a user manual, reducing the number of incoming queries to Support.

Don't overuse instructional UI text; copy should enhance the experience, not clutter it. To this end:

-  Don't explain fundamental features; if a user needs instructions, consider ways of making the design more intuitive.

-  Don't explain obvious features and workflows; instructional text can get in the way of an already intuitive workflow.

-  Don't make users engage with instructional text; users should be free to ignore instructional text and still progress through the UI.

-  Don't repeat information; add a setting to display instructional text instead.

Instructional text is the least demanding way to offer support because it prevents the user from having to rely on working memory or having to take an extra step to find information. Instructional text is particularly useful for make the onboarding flow as smooth as possible.
To maximise the chances of a positive experience, in-product assistance should:

-  Cause minimal disruption to the user's workflow.

-  Result in quick issue or query resolution.

-  Foster ease-of-use.

-  Focus on the actions that the user needs to take.

-  Ensure warnings are relevant to the task.

-  Include tips that might help the user complete their task.

-  Be timely and well-placed, appearing the moment the user needs it and embedded directly in the UI.


-  Provide **progressive disclosure**.

## Progressive disclosure

Progressive disclosure is an interaction design pattern that involves sequencing information and actions across screens, and revealing only essential information. This avoids overwhelming the user and helps them manage complexity. It also makes products easier to learn and use, avoids frustration and confusion, and reduces the number of potential errors.

With the progressive disclosure philosophy in mind, you should consider when to use the following types of microcopy and contextual help to guide the user. You can decide on the type of copy you're providing based on the required level of detail.

### On-screen copy (inline instruction)

On-screen copy is brief text that appears on the page, alongside the UI element it references, and it's used when the information is essential to performing the task and directly actionable.

If there's enough space, you might also decide to include important but not directly actionable information, or supplementary information that prevents the user from having to navigate elsewhere to find it.

Embedding information directly within a feature is often the best choice for providing contextual help. It can, however, make the interface look cluttered or might not provide enough information to be useful. If this is the case, consider using **tooltips** instead, which can be created using [Pendo Tooltips](https://www.pendo.io/glossary/tooltips/#:~:text=Tooltips%20are%20in%2Dapp%20messages,pre%2Ddetermined%20%E2%80%9Chotspot.%E2%80%9D).

### Tooltips

Tooltips are user-triggered, brief informative messages that appear when the user interacts with a UI element by selecting or hovering over it. Tooltips used in touchscreen devices are called popup tips, and serve the same purpose as tooltips, but require a specific initiation and termination method.

Tooltips are offered when additional content might help the user make more informed decisions based on specific, contextual information. They typically provide a short description of the element or functionality that users might want or need to know more about.

Tooltips disappear, and so they shouldn't be used for directly-actionable or essential information required to perform a task. Rather, tooltips are used:

- For preventing drop-off at friction points by reassuring users and alleviating doubt.

- For additional context or necessary information that's too long to put on the screen.

- To walk users through a process that has multiple steps.

Tooltips are useful with:

-  Unlabelled controls and command buttons with graphic labels.

-  Labelled controls and UI elements that benefit from supplemental information that doesn't fit as on-screen text.

-  As a form of progressive disclosure with help (?) and info (i) icons, eliminating the need for descriptive on-screen text if not essential to the primary task.

The text in a tooltip must be informative. You should aim to provide additional, helpful content, such as why a field is required or how the value entered into a field will be used.

- Avoid redundant information; don't repeat on-screen copy.

- Provide relevant information that isn't otherwise obvious.

- Focus on the control's action, for example, by beginning the tooltip with a verb.

- Don't use tooltips if there's space in the inline copy.

Use as few words as possible to portay meaning.

- For labelled controls, limit tooltips to 15 words. If more text is needed, this suggests that the design is too complicated.

- For tooltips triggered by selecting help icons, limit the text to no more than 40 words.

- If more content is required, consider adding a `Learn more` link to the exact documentation; use such links sparingly, which you might achieve by including one link at the page level.

Other guidelines for writing tooltips include:

-  Use short, complete sentences that address concerns and tell users what to do.

-  Use a title, in sentence case, phrased as a question in first person, for example, "Why can't I update my address?"

-  Include a `Close` label next to an `X` in the upper right corner.

-  Use links in tooltips only if necessary.

-  Use bullets for lists of items; use paragraphs for explanations.

### Walkthroughs (guided help)

A walkthrough (such as in-app guidance delivered by [Pendo Guides](https://www.pendo.io/product/features/in-app-messaging-guides/#:~:text=Pendo%20in%2Dapp%20Guides%20allow,usability%20of%20a%20product%20experience.)) provides step-by-step guidance and instructions: a series of messages or tooltips appearing one at a time to provide step-by-step instructions that guide users through a product or feature.

### Page-level help

Context-sensitive topics triggered when the user selects a link provided at page level are used when the user might need conceptual or bigger-picture information (such as UI use cases) to help them understand the page they're on. This provides users with a way of getting detailed information without having to navigate to or search different sites.

## UI messages

Messages are information in the UI that address an immediate need and appear while the user interacts with the product. Use messages sparingly since they disrupt the user's workflow.

How a message is written depends on its purpose. In general, messages should:

- Be written in a consistent style.

- Be friendly.

- Suggest next steps.

- Provide sufficient and not excessive information.

- Convey technical information in simple terms.

- Use clear and simple language.

- Be dissmissable where possible.

A message should avoid jargon and technical detail. If technical detail is wanted or needed, use progressive disclosure.

Be kind to users who encounter situations in the product UI that could be frustrating for them, such as 404 pages.

### Message elements

General recommendations for each element of a message, whichever type it is, are:

-  For titles, use sentence case capitalzsation and no ending punctuation, unless the statement is a question.

-  For the message body, use complete sentences, sentence case capitalisation, and ending punctuation.

-  For the buttons, use sentence case with no end punctuation, and use short, action verbs unless the buttons require a simple **Yes | No**.

### Notifications (informational messages)

Notifications alert the user to additional information or a change that's relevant to their current activities, such as a change in system state or an event of interest. For example:

> Some settings are managed by your system administrator.

Guidelines for notifications include:

- Structure the notification as a statement or a fact.

- Describe the condition.

- Use sentence case.

- Optionally, use a command button.

- Don't use more than one alert per page unles necessary.

- Don't use a notification to communuicate general promotional information.

- Don't use notifications as a feedback mechanism triggered by a user action. Use toast messages instead.

- Don't cover other UI elements with a notification.

### Warnings

Warnings alert the user to a condition that may cause a potential issue. Warnings are used to inform a user of something that needs their attention and may require action, for example:

> Our website will be undergoing maintenance on [date]. Some services might not be available during this time.

Guidlines for warnings include:

- Describe the the potential issue and why it's important.

- Use sentence case.

- Include guidance on how the user can proceed, along with command buttons, if appropriate.

A warning might not need the user to take an immediate action.

### Confirmation messages

Confirmation messages appear when the user is performing a task to explain the consequences of an action before determining if they want to proceed with it. For example:

> You're about to permanantly delete this Roadmap. Do you want to proceed? **Yes, delete | No, go back**

Guidelines for confirmation messages include:

- Frame the confirmation message as an action and as a question to determine if the user wants to proceed.

- Explain the outcome or why the user might not want to proceed.

- Use sentence case.

- Use a command button that restates the action, such as `Yes, delete`.

### Success and feedback messages

Success messages provide positive feedback on a completed action. For example:

> We've updated your details.

Guidelines for success messages include:

- Use sentence case.

- Where possible, use toast dialog box for success messages.

- Use a a command button, such as `Close`, `OK`, or `Continue`.

### Error messages

Error messages appear when a problem occurs that prevents the user from being able to access something or to continue with their workflow. For example:

> Your browser isn't supported. Please download the most recent version of Chrome, [link to browser download].

The best error messages explicitly describe what's wrong and how to fix it, resulting in the user resolving the issue by themselves. An error message can provide more than one action for the user.

A good error message has three parts:

1. Problem identification: describe the exact issue, clearly and unambiguously, so that the user knows the reason for the message.

1. Details of the cause (if helpful or necessary); don't over-explain the problem.

1. A solution (if possible); if not, specify an action the user can take, like where to go to find support or investigate the problem.

Be explicit (1), specific (2), and helpful (3). Ensure the content and action match the message. Use missteps as an opportunity to encourage users to keep navigating through the product.

Other guidelines for error messages include:

**Language.**

- Use a language that encourages the user to come back or try again.

- Use plain language; avoid referring to implementation details.

- Avoid negative words. For example, instead of "The form contains *errors*", try "Please enter a valid postcode".

**Tone.**

-  Don't blame the user.

-  Avoid a negative tone; be neutral.

-  Be courteous, respectful, kind, and useful.

-  Talk to the user like a person, in a conversational style.

-  Turn error messages into positive reinforcement by guiding the user along until they complete their task.

**Content.**

-  Focus on the solution, not the error or mistake.

-  Be concise; include only necessary and meaningful information.

-  Point out the exact location of a problem.

-  Point out where the user needs to go or what steps they need to follow to rectify the problem.

- Use progressive disclosure for detailed information related to a message that might be useful :

	- Allow the user to select `Learn more` to find more details.

	- For more advanced users who might want to know the technical details, place these details under an expandable and collapsable section.

	- Where technical or complex details are needed, direct the user to a troubleshooting section to resolve the issue.

## UI elements and input controls

Every UI element has a specific purpose and guidelines you should follow. These guidelines streamline the content and promote consistency.

### Alt text

Alt text is a label that screen readers can use to describe an image or an icon. Alt text appears when images don't render. Guidelines for alt text include:

- Describe the image in brief.

- Use sentence case.

- Describe the information, not the picture.

- Don't describe decorative images.


### Boolean values and toggles

Boolean values are a visual representation of an on/off state, such as a switch. If "off" and "on" are inappropriate for the context, different words that fit the context are used instead. Guidelines for boolean values include:

- Write words to fit the context. For example, `On|Off`, `True|False`, `Yes|No`.

- Don't use all caps; use title case.

- If a label for an option runs long, don't truncate the label. Wrap the label to multiple lines, if necessary.

- Align the UI element with the fist line of the label.

A toggle provides users with a choice between the two mutually exclusive states of a boolean value. A user should be able to make selections with only a screen reader and keyboard. To this end, they should be able to:

- Understand the current state of the selection.

- Tab through the options and between them using the arrow keys.

- Use the spacebar to select and deselect an option.

### Buttons

Buttons are interactive labels that, when selected, initiate an action. Guidelines for buttons include:

- Avoid introductory labels for buttons; the button label should be enough.

- Be consistent with button placement across different UI elements. For example, don't reverse the placement of `OK` and `Cancel` in different parts of the UI.

- Don't use buttons for a list of choices.

- Separate destructive buttons from non-destructive buttons so that the user must make an intentional effort to select the button.

- Use trailing ellipsis when the button opens another window, dialogue box, or app.

- Use sentence case.

Guidelines for the language used in button include:

- Use clear, precise, predictable language.

- Lead with a verb that encourages an action, like `Cancel` and `Delete`.

- Use one word for call-to-action (CTA) and text buttons unless there is a verb involved.

- If not a common action (like `Done` or `Close`) use the {verb}+{noun} formula. For example: `Test connection` or `Add selected items`.

- Don't include descriptors like "now"; the resulting action from selecting a button should be instantaneous.

- Clarify the meaning of words that can function as both a verb and a noun. For example, `Send email` rather than `Email`.

- Be specific about the action. For example, `Choose picture` rather than `Import`.

- If not using a specific action (as recommended), use the word `OK` rather than Ok, ok, or Okay.

### Checkboxes

A checkbox is a control with two opposite states. A checkbox is "on" when it contains a checkmark (indicating that it's selected) and off when it's empty. Checkboxes are used to allow the user to select more than one item in a group. Guidelines for checkboxes include:

- Place an action at the beginning of the title.

- Keep the text for a checkbox on a single line.

- Use positive phrasing. Selecting a checkbox shouldn't mean *not* performing an action, unless it's a "Don't show this again" checkbox.

- Make it clear what happens when the box is selected versus not selected.

- Always follow a checkbox with a title or label. Provide a title that implies two opposite states.

- Don't use ending punctuation, unless it's a colon at the end of a label for a group of checkboxes.

- Add "Recommended" to the label for a checkbox that is strongly recommended.

- Use sentence case.

Guidelines for grouping and ordering checkboxes include:

- For each checkbox in a group, use parallel phrasing.

- For large sets, use subheadings to group choices.

- Label a group of checkboxes to make the purpose of the checkboxes evident, ending with a colon.

- Present checkboxes in a logical order.

### Dropdown menus and buttons

A Dropdown menu is graphical control element, similar to a list box, except that it only allows the user to choose one value from a list. Dropdown *buttons*, when selected, display a dropdown list, similar to a dropdown menu, of mutually exclusive items.

Guidelines for dropdown menus and dropdown buttons include:

- Consider adding watermark (hint) text to the field, such as "Select one".

- Use sentence case for both menu names and items.

- Gray out unavailable options rather than removing them to maintain spatial consistency.

- Keep the number of items in a dropdown menu to a minimum to avoid scrolling.

- Support keyboard input where possible


### Input fields and forms

Input fields allow data to be entered into a form. Forms can collect various types of data, including text. A text field can allow either a single line or multiple lines of text.

Guidelines for input fields in forms include:

- Clearly explain the purpose of the input field in the title.

- Change the input type according to the data you're collecting, for example, separate long references numbers with a gap and limit the input to the exact length expected.

- Use sentence case for both titles and fields.

- Make the length of the input field proportional to the expected user input.

- Don't write instructions in a basic text area other than help text.

The general guidelines for forms are:

- Keep forms as short as possible.

- Always include a label for the input field.

- Avoid asking for private and personal information.

- Label fields as optional if the majority of fields are required.

- Label fields as required if the majority of fields are optional.

- If the field label is long, wrap it to multiple lines.

- Use clear and specific language for labels, placeholder, and helper text.

The guidelines for help text and errors in forms include:

- Provide concise, relevant help text.

- Write help text in sentence case and in as few words as possible.

- Don't use help text to explain the field in detail.

- Provide a character count when a field is restricted to a minimum or maximum amount.

- Show an error state when the user enters an incorrect character type.

- If a required field is left blank, display a default error message, such as "This field is required".

### Labels

A label is static text that describes a UI element or group of elements, or that delivers a short message. Every control or element, such as a text field, button, or dropdown menu, needs a label. Guidelines for labels include:

- Use plain language; avoid technical jargon.

- Ensure the label accurately identifies the element it introduces.

- Group related elements and introduce them using a label.

- Follow a logical order.

- Use parallel construction.

- Use sentence case.

### Lists and list boxes

A list is a collection of items that presents groups, steps, or sets of information. Guidelines for lists include:

- Give context for the list with a brief introduction.

- Only number lists when there is an order. for example: steps in a process.

- Use sentence case.

List boxes look like dropdown menus but, like checkboxes, allow users to select multiple items. Guidelines for list boxes include:

- Consider adding watermark (hint) text to the field, such as "Select all that apply".

- Use sentence case for both menu names and items.

- Keep the number of items in a dropdown menu to a minimum to avoid scrolling.

### Navigation

Navigation refers to the on-screen elements that help users find their way through a product, such as a table of contents, breadcrumbs, tags, a search field, icons, links, and menus. Guidelines for navigation include:

- Use title case for main or global navigation.

- Use sentence case for sub-navigation.

- Keep navigation links clear and concise.

- Name navigation elements with use goals.

### Radio buttons

Radio buttons are selectable circles placed next to each item in a set of related, mutually exclusive choices from which the user can select only one. A radio button is "on" when the circle is filled and "off" when it's empty. Guidelines for radio buttons include:

- Write labels as a phrase, not a sentence.

- Add "Recommended" to the label for an option that is strongly recommended.

- Add "Advanced" to the label for an option intended for advanced users.

- Don't use ending punctuation unless it labels subordinate controls that follow it, requiring a colon.

- Give radio buttons meaningful titles; describe the effect of choosing each radio button.

- Keep labels brief; if the option requires more information, provide the explanation in a static text control or tooltip (using complete sentences an end punctuation).

- Use positive phrasing. Selecting a radio button shouldn't mean *not* performing an action.

- Use sentence case.

Guidelines for grouping and ordering checkboxes include:

- For each radio button in a group, use parallel phrasing.

- For large sets, use subheadings to group choices.

- Label a group of radio buttons with text that describes the nature of the options, ending with a colon.

- Describe the difference between options; if all options have the same introductory text, move that text to the group label.

- Present radio boxes in a logical order.

### Text links

Text links are labels that fall outside of a block of text and may start a task on a new page. Guidelines for text links include:

- Start with words that are related to the user action, such as "Download" or "View".

- Differentiate from unlinked text using colour.

- Use text links as part of a sentence or phrase.

- Don't use text links in place of buttons.

- If fewer than 3 words, consider using a button, especially if it starts a new task or a secondary action.

- Use text links to increase SEO on the page.

- If part of a sentence, use second person language.

- Avoid text links that don't convey a function or meaning, such as "click here".

For accessibility:

- Text links should standalone and communicate meaning without added words.

- Users should be able to tell what the text link is about without reading the surrounding words.

- Text links should be written in direct, specific language.

### Watermark (hint) text

Watermark text, also known as hint, prompt, or placeholder text, is text included in text fields and boxes to help the user understand what to enter by way of example. Not all empty fields require watermark text. Watermark text is useful for communicating:

- Examples.

- Syntax, such as for an email address.

- Brief instructions, for example, "Choose a device".

- Validation rules, such as password requirements.

Consider alternatives to watermark text, like placing hint text outside the empty field or as hover text so that it persists when the user starts typing.

Watermark text should be written in sentence case.
