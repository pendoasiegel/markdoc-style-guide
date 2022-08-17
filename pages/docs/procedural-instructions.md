---
title: Pendo | ProdOps Style Guide
description: Pendo style guide
---

# Procedural Instructions

Step-by-step instructions for procedural tasks help avoid big blocks of text and provide a clear way to show a process. Separating out the steps in a process makes instructions easier to read, understand, and follow, for a better user experience and higher likelihood of success.

## Talk to the reader, not at the reader

Address the user directly and focus on what matters to the reader, in the moment.

Use the second person singular, with “you” as its implied subject rather than "the customer", the administrator", or "the user".

### Active Voice

Write in the active voice, where the subject of the sentence performs the action. For example, instead of “Custom table views can be created in the Browse page":

> "Create custom table views in the Browse page."

### Present tense

Avoid talking about what has happened or will happen. Present tense is easier to read, avoids ambiguity about what should versus will happen, and is more directly relevant to the user's immediate experience. For example, instead of: “After you save changes, a confirmation window will appear”:

> “After you save changes, a confirmation window appears."

### Verbs

Hone in on user actions and the impact of actions on the user, not the system's actions and state.

Try starting sentences with a verb. For example, instead of "We enable users to access emails through the browser":

> "Access your emails through the browser."

Use the imperative mood for instructions by writing sentences as a command: start with an action verb and  Imperative sentences are typically in the active voice. For example:

> “If you need help, ~~you can~~ contact the Support team”.

Use action verbs where possible. For example, instead of “If you don’t *have* the Browse page, check that you’re in the right subscription":

> “If you can’t *find* the Browse page, check that you’re in the right subscription."

## Use bold to emphasize UI elements

For visual clarity and scannability, reserve **bold** for emphasizing UI and navigational elements in instructional content. For example:

>Navigate to **Settings > Product Settings > Custom Responses**.

Don't use bold to emphasize words, phrases, or sentences. Use layout, callouts, headings, and short paragraphs to draw attention to important content or messages.

Both italics and quotation marks should be avoided in help documentation, especially instructions. Use italics sparingly for gentle emphasis. Only use quotation marks to quote blocks of text. Blocks of text aren't typically present in help documentation.

Following these rules helps readers hone in on important actions, maintains consistency, and minimizes visual noise.

## Use progressive disclosure

Use progressive disclosure to introduce concepts in the order in which the reader deals with them, revealing only essential information for each task. This avoids overwhelming the user and helps them manage complexity. Some guidelines include:

* Don’t bombard the user with a lot of information as soon as they’re introduced to the product.
* Allow the information to progress naturally, from simple to complex.
* Help the user move from completing tasks with essential information to completing more complex tasks with additional information.
* Provide only the necessary information for the user to take each action, one at a time.

## Follow a logical sequence

In step-by-step instructions, refer to a full sequence of UI steps, in order, rather than as part of convoluted sentences. For example, rather than:

> “Scroll all the way down to the bottom of the Integrations page. Here you will find the Pendo Feedback panel under the User Feedback section. Click on the Pendo Feedback panel. Now you've opened the Pendo Feedback panel, you need to set the Pendo Feedback Auth Token for your Staging and Production environments. To do this, paste your Pendo Feedback Auth Token into the "Auth Token" field. Add a title and description for the integration too.”

You could instead write:

> “At the bottom of the **Integrations** page, open **User Feedback** and select the Pendo Feedback panel. To set the token for your staging and production environments, paste your Pendo Feedback Auth Token into the **Auth Token** field and add a title and description for the integration.”

This structure removes unnecessary words, and presents each of the UI elements in bold and in the order in which the user will find and interact with them.

Another way to make the sequence clear, as well as removing more unnecessary words, is with clickthrough instructions. Use chevrons (**>**) with spaces around them to separate items in a clickthrough and bold the chevrons along with the UI elements in the clickthrough. So, instead of the above example, you could write:

> “To set the Auth Token, navigate to **Settings > Integrations > User Feedback > Pendo Feedback** and paste your Pendo Feedback Auth Token into the **Auth Token** field.”

It’s also good practice to use a numbered list for step-by-step procedural tasks. This helps avoid big blocks of text whilst also providing a clear way to show a process. Using the same example, you could instead choose to write:

> 1. Navigate to **Settings > Integrations**.
>
> 2. Scroll down to the bottom of the **Integrations** page.
>
> 3. Open the **User Feedback** section.
>
> 4. Select the **Pendo Feedback** panel.
>
> 5. Paste your Pendo Feedback Auth Token into the **Auth Token** field.
>
> 6. Add a meaningful title and description in the appropriate fields.

Reserve numbered lists only for step-by-step, procedural instructions. Use bullet points when the order doesn’t matter, even in you specify that there are a number of items in a group.

Not all steps require an image. You could introduce the task and an image (both before and after the list), thereby maintaining the visual integrity of the sequence for the reader, as well as the context needed for the images.

If not already clear, introduce what a set of instructions will achieve before describing them so that readers can skip over irrelevant information. For example, “To create a shareable link, navigate to the top menu and select **File > Share > Copy Link**”.

## Provide context

Help readers find and read only the content that's relevant to the task at hand by providing the necessary context upfront. Readers shouldn't have to read a whole article, section, or event a whole sentence to determine if the information they're about to read is what they need.

### Tell readers what the outcome will be

Allow readers to skip over instructions that aren’t relevant to them by stating what the outcome is before the instructions. For example, instead of “See the disclosure document for more information", put what the user will get out of the action at the beginning of the sentence.

> ""*For more information*, see the disclosure document."

Similarly, put conditional clauses before instructions. For example, instead of “Select **Download** in the top-right of the page if you want a PDF of this article":

> "*If you want a PDF of this article*, select **Download** in the top-right of the page"

### Tell readers where to go

Before giving instructions, tell readers how to get where they need to be. Don;t assume they've read the rest of the article and therefore know where they should be. For example, instead of "Find the role you want to edit", which assumes the reader knows where team user roles are located in the UI, preface the instruction with a clickthrough:

> "Navigate to **Product Settings > Manage Team > Manage roles** and select the role you want to edit"

When writing a series of steps, mention the location first, followed by the action. For example, instead of "1. Select the type of alert you want to send from the dropdown menu", tell the user what element they'll be interacting with first:

>  "1. From the dropdown menu, select the type of alert you want to send."

## Refer to user actions

It’s good practice to avoid talking about mouse and keyboard actions. Instead, refer to user actions with words like “hover over”, “choose”, “select”, and “enter”.

In general, use “select”, to instruct the reader to select an item, like text, objects, or cells, and use “enter” to instruct the reader to type something into a text field.

Only use the word “click” to refer to specific mouse actions.

## Use callouts sparingly

Use callouts to give readers important or useful information that isn't part of the flow of the text.

Callouts can be a distraction, break up the flow of instructions, and can lose their visual distinctiveness when you use them too often. In aid of this:

* Before creating a callout, consider whether it’s needed.
* Rather than creating a callout, consider reorganizing the content to emphasize a point
* Avoid adding callouts as a solution for including text that doesn’t fit the flow of the instructions.
* Try conveying the information in a different way as part of the main body of content.
* Avoid grouping more than one callout together.

## Use images intentionally

Too many images, and images that are too large, make content harder to read, while white space makes content more legible. Additionally, images can lead to frustration if the user can’t find the element or functions you’re trying to depict in the image. To avoid frustration and increase usability:

* Balance the number and size of images against the amount of text that surrounds it.
* Make visual content complementary to written text, not a substitute for it.
* Introduce an image before presenting it.
* Use context-relevant and functional visual content. Don't zoom too far in to the element.
* Create a 1pt border around images to prevent images from merging into the background.
* Blur sensitive information.
* Create annotations using Pendo pink.

For accessibility, avoid annotations, and include captions and alt-text for screen-readers. Don't annotate images when they don’t need to be, for example, if the correct item in the screenshot is selected, and therefore already highlighted.
