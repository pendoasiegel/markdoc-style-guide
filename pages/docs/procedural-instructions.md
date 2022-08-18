---
title: Pendo | ProdOps Style Guide
description: Pendo style guide
---

# Procedural Instructions

Procedural instructions should ddress the reader directly and focus on what matters to the reader, in the moment. Hone in on the user's actions and impact of these actions on the user rather than on the system's state.

## Second person

Use the second person singular, with “you” as its implied subject rather than "the customer", "the administrator", or "the user". For example:

> "This article describes how ~~the user~~ *you* can...""

## Present tense

Avoid talking about what has happened or will happen. Present tense is easier to read, avoids ambiguity about what should versus will happen, and is more directly relevant to the user's immediate experience. For example:

> “After you save changes, a confirmation window ~~will appear~~ appears."

## Imperative mood and active voice

Sentences that use the active voice and imperative mood are the most efficient way to give instruction.

Use the imperative mood for instructions by writing these sentences as commands, starting with an action verb. For example:

> “~~You can~~ Manually set your ARR by...”.

Sentences written in the imperative moode tend to also be active, where the implied subject of the sentence performs the action. For example:

> ~~“Custom table views can be created in the Browse page."~~
>
> "Create custom table views in the Browse page."

## User actions

It’s good practice to avoid talking about mouse and keyboard actions. Instead, refer to user actions with words like “hover over”, “choose”, “select”, and “enter”. Only use the word “click” if you need to refer to specific mouse actions, like right-click.

In general, use “select”, to instruct the reader to click on an item, like text, objects, or cells, and use “enter” to instruct the reader to type something into a text field.  For example:

> " ~~Click~~ Select the relevant status and ~~type in~~ enter the response.

To further hone in on user actions, try starting sentences with a verb. For example, instead of "We enable users to access emails through the browser":

> "Access your emails through the browser."

Use action verbs where possible. For example:

> “If you ~~don't have~~ can’t *find* the Browse page, check that you’re in the right subscription."

## Emphasis

For visual clarity and scannability, reserve **bold** for emphasizing UI and navigational elements in instructional content. For example:

> 1. Navigate to **Settings > Product Settings > Custom Responses**.
>
> 2. Select **Create custom response** from the left-side menu.
>
> 3. Select the relevant status and enter the response.

In a clickthrough, such as in Step 1 of the example above, ensure that the chevrons (**>**) are also in bold.

Don't use bold to emphasize words, phrases, or sentences. Instead, use layout, callouts, headings, and short paragraphs to draw attention to important content or messages.

Both italics and quotation marks should be avoided in help documentation, especially instructions. Following these rules helps readers hone in on important actions, maintains consistency, and minimizes visual noise. In short:

* Use **bold** for UI and navigational elements.

* Use *italics* sparingly for gentle emphasis.

* Only use quotation marks ("") to quote blocks of text. Blocks of text aren't typically present in help documentation.

## Progressive disclosure

Use progressive disclosure to introduce concepts in the order in which the reader deals with them, revealing only essential information for each task. This avoids overwhelming the user and helps them manage complexity. For example:

> Create X > Save X > Edit X > Integrate X with Y

Some guidelines include:

* Don’t bombard the user with a lot of information as soon as they’re introduced to the product.

* Allow the information to progress naturally, from simple to complex, and necessary to optional.

* Provide only the necessary information for the user to take each action, one at a time.

## Sequence

In step-by-step instructions, refer to a full sequence of UI steps, in order, rather than as part of convoluted sentences. For example, rather than:

> “Scroll all the way down to the bottom of the Integrations page. Here you will find the Pendo Feedback panel under the User Feedback section. Click on the Pendo Feedback panel. Now you've opened the Pendo Feedback panel, you need to set the Pendo Feedback Auth Token for your Staging and Production environments. To do this, paste your Pendo Feedback Auth Token into the "Auth Token" field. Add a title and description for the integration too.”

You could instead write:

> “At the bottom of the **Integrations** page, open **User Feedback** and select the Pendo Feedback panel. To set the token for your staging and production environments, paste your Pendo Feedback Auth Token into the **Auth Token** field and add a title and description for the integration.”

This structure removes unnecessary words, and presents each of the UI elements in bold and in the order in which the user finds and interacts with them.

Another way to make the sequence clear, as well as removing more unnecessary words, is with clickthrough instructions. Use chevrons (**>**) with spaces around them to separate items in a clickthrough and bold the chevrons along with the UI elements in the clickthrough. So, instead of the above example, you could write:

> “To set the Auth Token, navigate to **Settings > Integrations > User Feedback > Pendo Feedback** and paste your Pendo Feedback Auth Token into the **Auth Token** field.”

It’s also good practice to use a numbered list for step-by-step procedural tasks. This helps avoid big blocks of text whilst also providing a clear way to show a process. Separating out the steps in a process makes instructions easier to read, understand, and follow, for a better user experience and higher likelihood of success.

Using the same example, you could instead choose to write:

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

## Context

Help readers find and read only the content that's relevant to the task at hand by providing the necessary context upfront. Readers shouldn't need to consume a whole article, section, or even a whole sentence to determine if the information they're about to read is what they need or where they need to be in the UI to complete an action.

Allow readers to skip over instructions that aren’t relevant to them by stating what the outcome is before the instructions. For example, instead of “See the disclosure document for more information", move what the user will get out of the action to the beginning of the sentence.

> "*For more information*, see the disclosure document."

Similarly, put conditional clauses before instructions. For example, instead of “Select **Download** in the top-right of the page if you want a PDF of this article":

> "*If you want a PDF of this article*, select **Download** in the top-right of the page"

Help users orient themselves before giving instructions. Don't assume users read the rest of the article and therefore know where they should be. For example, instead of "Find the role you want to edit", which assumes the reader knows where team user roles are located in the UI, preface the instruction with a clickthrough:

> "Navigate to **Product Settings > Manage Team > Manage roles** and select the role you want to edit."

This applies to the steps themselves, where you should mention the UI element before describing the action. For example, instead of "1. Select the type of alert you want to send from the dropdown menu", tell the user what element they'll be interacting with first:

>  "1. From the dropdown menu, select the type of alert you want to send."

## Callouts

Use callouts sparingly to give readers important or useful information that isn't part of the flow of the text.

Callouts can be a distraction, break up the flow of instructions, and can lose their visual distinctiveness when you use them too often.

Rather than creating a callout, consider reorganizing the content to emphasize a point. Try conveying important information in a different way as part of the main body of content.

Avoid grouping more than one callout together.

Before creating a callout, consider whether it’s needed. Avoid adding callouts as a solution for including text that doesn’t fit the flow of the instructions.

## Images

Use images intentionally. Too many images, and images that are too large, make content harder to read, while white space makes content more legible. Images can lead to frustration if the user can’t find the element or functions you’re trying to depict in the image. To avoid frustration and increase usability:

* Balance the number and size of images against the amount of text that surrounds it.

* Make visual content complementary to written text, not a substitute for it.

* Introduce an image before presenting it.

* Use context-relevant and functional visual content. Don't zoom too far in to the element.

* Create a 1pt border around images to prevent images from merging into the background.

* Blur sensitive information.

* Create annotations using Pendo pink.

For accessibility, avoid annotations, and include captions and alt-text for screen-readers. Don't annotate images when they don’t need to be annoted, for example, if the correct item in the screenshot is selected, and therefore already highlighted.
