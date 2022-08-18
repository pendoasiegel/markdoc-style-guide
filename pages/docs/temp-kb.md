---
title: Pendo | Help Center Article
description: Pendo style guide general help center article template
---

This is the basic styling and structure of a Help Center article.

Historically the Pendo Help Center hasn't had any consistent universal content structure. This is the first step to fix that. The priority is to provide the best education content to our users and strict adherence to a template shouldn't be a blocker to that. Consistent structure and depth of information provides a predictable, quality experience that builds trust and confidence.

## Text Formatting

`[h2]` - Section headers

`[h3]` - Subsection headers

`[h4]` - FAQ questions

`[p]` - Content body/everything else


## Lists

Use bulleted lists for **Requirements** and for simple lists describing stuff. Reserve numbered lists for [procedural instructions](https://main--cosmic-travesseiro-d1f80c.netlify.app/docs/procedural-instructions). Create numbered lists manually because Zendesk is bad at controlling formatting for numbered lists.

For more guidance, see [Lists](https://main--cosmic-travesseiro-d1f80c.netlify.app/docs/prodops-style-guide#lists) in the [ProdOps Style Guide](https://main--cosmic-travesseiro-d1f80c.netlify.app/docs/prodops-style-guide)

## Screenshots

All screenshots get a subtle grey border to prevent them from blending into the background. You can use SnagIt to do this.

**Hero image**

For context and visual interest in the overview, to understand the data, and or at the start of a workflow section:

* Big; 500-550px wide; full width is ok for full screen screenshots.
* Centered.
* Interesting (lots of fake data; GIFs are cool too).

**For instructions**

* Smaller; 300-350px; this width plays nicely with the Resource Center and nothing we’re showing in instructions should be too big.
* Left justified to be inline with instructions.
* Minimal; show what the user needs to interact with for that step. The entire set of instructions should provide all the necessary context.

For consistency, accessibility, and privacy, we recommend that you us SnagIt to do the following with images you want to include in help docs:

* Use PNG
* For annotations, use:
  * Pendo Pink (R: 236, G:32, B:89)
  * A 5 pt line width
  * A square or rectangle with an empty fill
  * A subtle shadow so that people can see it’s not a part of the UI in the screenshot
* Include a border around screenshots to prevent screenshots from merging into the background of your article, for examaple:
  - Medium grey (R:194, G, 209; B: 217)
  - A 1 pt line width
* [Optional] If including a screenshot of a pop-up window or modal, without the greyed-out UI in the background, add a shadow to indicate that this is a layer on top of the main UI page, for example:
  - Black at 50% opacity
  - Shadow location in the bottom-right
  - A 5 pt offset
  - A 5 pt blur
* **IMPORTANT:** NEVER EVER SHOW CUSTOMER DATA. Don’t use pendo-internal for screenshots. Instead use:
  * Demo Experience
  * Acme Co (Spencer’s sub)
  * Dev/Lookaside
* If you can’t get a screenshot anywhere else (like dev) and you can’t wait for a feature to push to prod to get a screenshot in a demo environment, blur or remove sensitive information, including (but not limited to):
  * User names and passwords, unless these are dummy ones
  * IP addresses
  * URLs
  * QR codes
  * Certificate specifics, such as hashes
  * WSDL
  * Pendo-internal and customer-specific environments
* Adopt a logical and consistent naming convention, a bit like a breadcrumb in a website, such as: Product_Page_Element_Status. Not every aspect of the naming convention will apply, but is always added, in order, where it does apply. For example, I only include “Product” if the same page/location exists in more than one product. An image will also often not include a “Status”, because this is for specific scenarios, like a feature being toggled on or off, or an option being selected. Examples:
  * “Browse_Dropdown_View”, doesn’t require “Feedback” beforehand because the Browse page only exists in Feedback, but could be included for clarity.
  * “Roadmap_Create” includes only the page/location and the selected element. If Roadmap ends up being a page in both Engage and Feedback, it would make sense to rename this example to “Feedback_Roadmap_Create”.


## Spacing
* Add an extra paragraph space/empty row at the end of a section before the next section header.
* Add an extra paragraph space/empty row after all screenshots.
* Do not add an extra paragraph space/empty row after a bulleted list, even if it’s the last thing before starting a new section, bulleted list styling does this automatically.



## Colored callout boxes
Boxes are created by editing the code in the Zendesk article and adding the CSS class to the HTML element manually. Adding the class will shade the background of the entire element with a thick border on the left side. You can add a new `<div` element to wrap multiple `[p]` or `[img]` elements if needed.

You have four types of callout boxes to choose from:

### Green
`[class="note"]`

A green callout is typically used for a **Note**, with information that offers relevant context or that may affect what the user does, such as how data is presented, how features might interact, or options that may be available to particular users and not others.

Use notes sparingly and try not to use them in the middle of a section so as not to break up the flow of text. Try instead to structure the body text so that information can be included in the article instead of carved out into a notes box.

### Blue
`[class="tip"]`

A blue callout is typically used for a **Tip**, with information that the user might find useful, or that is likely to lead to an easier way of doing something, such as best practices for creating unique Visitor and Account IDs.

Tips are an opportunity to add a little more why than we otherwise would, for people that don't know what they don't know. They usually come from feedback from CS or SMEs. We almost never use these.

### Yellow
`[class="notice"]`

A yellow callout is typically used for an **Important** note or **Caution**, to recommend that the reader proceeds carefully, for example, “We don’t recommend …”.

These are typically placed at the beginning of the article for critical information, such as things that will break the feature, things that will mess up data, and legal disclaimers. This is useful when we might otherwise have several red boxes interrupting the presentation of instructions or a narrative in the article.

Some information, like a legal disclaimer or requirements just need to go at the beginning of an article. If something already has a dedicated section in the article, like "Requirements" it doesn't need to be duplicated in the yellow box.

### Red
`[class="warning"]`
A red callout, typically used for a **Warning** or an **Important** note that is stronger than a recommendation, such as making the user aware of an irreversible destructive action or that the product is soon to reach End of Life (EoL).


## Basic Article Template ##

>[p]What it is, what it does, basic value prop<br>
>[p][/p] - empty line at the end of each section for spacing<br>
>
>[h2]Requirements [in a bulleted list]<br>
>* User permissions<br>
>* Minimum Agent or SDK version<br>
>* Subscription-tier requirements<br>
>* Settings or configuration requirements<br>
>
>[h2]Understanding the Data or more detailed context<br>
>[p]As needed for analytics tools and advanced concepts. This is the place to really get in the weeds and explain the calculations used by analytics tools and how to interpret them or specialized skills that most users may not be familiar with.<br>
>[p][/p] - empty line at the end of each section for spacing<br>
>
>[h3]These may need a subsection to organize content better.<br>
>[p][/p] - empty line at the end of each section for spacing<br>
>
>[h2]Workflow Sections<br>
>[p]**1.** One section per workflow, creating/adding the thing, using the thing, edit the thing, delete the thing.<br>
>[p]**2.** Any grouped features in an action bar with repeating patterns throughout the UI, just group into a single section that describes the action bar. Making them distinct sections with identifiable names helps with searchability in Zendesk and adds it to the table of contents for navigation in the article.<br>
>[p][/p] - empty line at the end of each section for spacing<br>
>
>[h2]Frequently Asked Questions<br>
>[h4]Does every article need an FAQ?<br>
>[p]Sometimes there are just weird edge cases and customer issues that need to be added to the article but don't belong in context anywhere in the body of the article.<br>
>[p][/p] - empty line after each answer for spacing<br>

## Detailed Article Template ##

>[p]The overview section consists of three parts: a definition of the feature, a description of everything the feature can do, and the value proposition explaining why the feature is important or what a user persona can do with it. The overview section quickly tells the users what the article is about and the type of information contained in the article. This helps a user figure out if they want to read the article at all or jump to a particular section.[/p]<br>
>[p][/p]<br>
>[img]hero image[/img]<br>
>[p][/p]<br>
>
>[h2]Requirements[/h2]<br>
>Requirements are documented in a bulleted list presenting requirements in the same basic order<br>
>  * User permissions
>  * Minimum Agent or SDK version
>  * Subscription-tier requirements
>  * Settings or configuration requirements<
>  [p][/p]<br>
>
>[h2]Understanding the Data or detailed context[/h2]<br>
>[p]Some features have complicated calculations or advanced concepts that we don’t expect basic users to know or that we expect power users or SMEs to question. These subjects need additional detailed explanations. Putting this information in the overview sections makes the overview too long and cumbersome. Putting this information in the how-to instructions breaks up the instructions and makes them hard to follow. Putting this information in another article forces the user to go to another article and they lose broader context of learning about the feature in a natural flow. The PES and Control Group Experiments articles are good examples of these extra sections.[/p]<br>
>[p][/p]<br>
>[h3]Sub-section in a Section[/h3]<br>
>[p]Sometimes you need a subsection to break up parts of a subject when you don’t want to do a complete context switch. Most overview articles only need sub-sections in this bonus section. I try to avoid them in the first Overview section unless the subject is really complex and needs to be presented at a couple different levels. I avoid them in Instructions sections unless the instructions are super simple, like repeating duplicate, share, delete buttons in a header menu that are common throughout the Pendo UI. Each button with a 2-click workflow doesn’t need it’s own section. Keep it simple and combine them in one section and give instructions for each button a short subsection.[/p]<br>
>[p][/p]<br>
>
>[h2]Add a KB Article[/h2]<br>
>[p]Instructions get a dedicated section with easy-to-follow step-by-step instructions. Giving them a unique h2-level header makes them easy to find in the table of contents and a direct link if we need it. I like to start the instructions with a few sentences of context setting up the beginning of the workflow like this.[/p]<br>
>[p][/p]<br>
>[p]**1. Instructions are a numbered list.** Don’t use the formatted numbered list. The formatting is too limiting and hard to use in Zendesk if we want to add details in a step.[/p]<br>
>[p][/p]<br>
>[p]**2. The number and action for each step is in bold.** It helps skim the instructions faster.[/p]<br>
>[p][/p]<br>
>[p]**3. Screenshots in instructions should be small and show the relevant action or menu.** They should also be left justified. This helps them stand out from the centered context screenshots in other sections.[/p]<br>
>  * Use a bulleted list to add details in a step, like context for a screenshot<br>
>  * Save - Add a description for elements in a menu like this<br>
>  * Open for comments - Uncheck to disable comments for the article, default is checked<br>
>
>[h2]Edit a KB Article[/h2]<br>
>[p]I’m not going to write another set of fake instructions. This is just here to show that you can use as many sets of instructions as you need to cover the various workflows for a feature.[/p]<br>
>[p][/p]<br>
>
>[h2]Frequently Asked Questions[/h2]<br>
>[h4]What goes in the FAQ section?[/h4]<br>
>[p]Weird edge cases, secondary workflows, customer-feedback that doesn’t naturally fit anywhere else in the article.[/p]<br>
>[p][/p]<br>
>[h4]Do I have to include an FAQ section?[/h4]<br>
>[p]No. We can add one later if FAQ topics come up. We shouldn’t need it if the article explains everything well. But don’t force extra details into instructions or sections where they don’t fit just to avoid an FAQ.[/p]<br>
