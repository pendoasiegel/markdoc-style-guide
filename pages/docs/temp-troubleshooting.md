---
title: Pendo | Troubleshooting Article
description: Pendo style guide troubleshooting article template
---

# Troubleshooting content

This page provides a template for writing troubleshooting content. Troubleshooting articles describe issue diagnosis and problem-solving steps for finding and fixing problems that the customer might encounter.

## Structure

- **Title:** Use a descriptive title that articulates the problem.

- **Initial paragraph:** Where the user is and what the article will cover.

- **Introductory information:** For more information, see [Informational content](https://main--cosmic-travesseiro-d1f80c.netlify.app/docs/temp-informational).

    - If applicable, list assumptions, such as what type of customer the user is and what parts of the product they have access to.

    - Describe the problem from the user’s perspective (e.g., the user is seeing an error when they do something rather than the system is failing to do something––you can talk about the system next).

    - Describe why the problem might be occurring or what it means, with examples relevant to the user experience.

    - Articulate what the user may need to do to resolve the issue, and how the user will know that the issue has been resolved or is still occurring.

- **Step-by-step solutions and outcomes:** For more information, see [Instructional (how-to) content](https://main--cosmic-travesseiro-d1f80c.netlify.app/docs/temp-instructional).

    - Describe how to fix the problem with a numbered walkthrough of the individual steps involved in the solution.

    - If there is more than one solution, provide instructions for the most common or most straightforward solution first.

- **Where to go next:** What the user can do or who they can contact if they’re still experiencing issues.

- **Further reading:** Links to related articles. This is generated automatically in Zendesk. You can also add links to further reading in line with the content.

## Outline with headings
In Zendesk, we use H1 for titles and H2 for main sections, which also form the anchor links in the top-right of each article. Typical headings for a troubleshooting article include:

* **Issue** – Describe what the issue is and what is likely to cause it.

* **Diagnosis** (if needed or appropriate) – Instructions for understanding the problem.

* **Solution** – What the user needs to do to resolve the issue and the expected outcome.

You may not need headings or subheadings for troubleshooting articles if there is only one solution. Use headings and subheadings only when you need to separate content. For example, when:

- There are multiple solutions to the same problem that require their own numbered steps.

- There are different use cases that might lead to the problem and require different approaches.

- The user needs to diagnose the problem before choosing a solution.

- The article provides a list of related problems, such as possible error messages and what they mean.

## General guidelines for writing instructions

Some general guidelines for writing instructions include:

### Try to write in the imperative mood

For example, instead of "Pendo needs to be installed or updated in your application code", write the sentence as a command: "Install or update Pendo in your application code."

This will also help you write in the present tense.

### Try to write in the present tense

For example, instead of "You will also need to check your page tags to ensure that they match the supported URLs", you can write "Check your page tags to ensure that they match the supported URLs."

### Try to use common contractions

Use common contractions, especially when the word "not" is involved. This is friendlier, easier to read, but also, harder to *mis*-read, because "not" is part of one word. For example, "don't" instead of "do not" or even "do **not**" because bold should be reserved for onscreen elements and navigation.

### Only use bold to emphasize UI elements

For visual clarity and scannability, reserve bold for emphasizing UI and navigational elements in instructional content. For example, "**Select Create custom response** from the left-side menu."

### When to use numbered lists

Reserve numbered lists only for step-by-step, procedural instructions. Use bullet points when the order doesn't matter.

As with headings, you don't have to use numbered steps for troubleshooting articles if short (2-3 sentence) paragraphs will work. A numbered list is good for when you have many individual or specific steps, such as:

> 1. Navigate to [location in the UI].
>
> 2. Select [element in the UI].
>
> 3. Enter [information].
>
> 4. Select **Save** to continue.

For more guidance on writing instructions see [Instructional (how-to) content](https://main--cosmic-travesseiro-d1f80c.netlify.app/docs/temp-instructional) and [Procedural Instructions](https://main--cosmic-travesseiro-d1f80c.netlify.app/docs/procedural-instructions).

## Content

Start your content from the first subheading in this section.

### Title [H1] and introductory paragraph

Describe what the issue is, including keywords that are likely to be used in a search query for the problem. For example:

> **"Unknown" is displaying in my path report**

Under the title, describe the purpose of the article with a summary of the problem from the the user's perspective, including context and the expected outcome after following the instructions in the article. If helpful, include a description of the problem first. If relevant, include other assumptions. For example:

> If you use Path reports in Analytics to track the sequence of actions before a target event, it's possible for a page to display as **Unknown** in your report. This article explains the likley cause and provides a solution for this problem.
>
> **Environment:** Analytics > Behavior > Saved Reports
>
> The content that follows assumes that you have [requirements/experience/subscription].

### Issue [H2]

Summarize the issue and it's likely cause: "This (might) happen when/because [reasons]". Describe what's going wrong and where. For example:

> Usually, **Unknown** displays in your path report when a feature or page tag has been removed since the report creation date. When we query the data for this report, a processing error displays for a tag that has been removed. 

### Diagnosis [H2], if appropriate

Describe the steps for diagnosing the issue and checking that the problem is what it is. For example:

> Before re-running your Path report, check your feature and page tags. Check whether any tags need to be updated or if any have been deleted. 

### Solution [H2]

Describe what the user needs to do to solve the problem and how they'll know that the problem is solved: "[General description of solution.] [Expected outcome.]" For example:

> After verifying that your tags are accurate, re-run your path report. **Unknown** is removed from your path report when the new query is processed.

If more detail is needed, follow this with step-by-step instructions, presented in a logical order. For guidance on writing instructions, see [Procedural Instructions](https://main--cosmic-travesseiro-d1f80c.netlify.app/docs/procedural-instructions).

### Further information

If useful, provide a link to more information. For example:

> For more information about Paths, see the [Paths](https://pendo.zendesk.com/hc/en-us/articles/360049997812) article.

## Examples
Below are simplified examples of how the above template might be used.

### [Non-technical example; standard outline] Cat is meowing at me in the morning

This article helps you diagnose your cat meowing at you when you wake up in the morning, and how to stop the cat from meowing.

**Environment:** Your house

[H2] **Issue**

A meowing cat typically indicates that one of its basic needs aren’t being met. If the meowing occurs in the morning, it’s likely an issue with the food levels in its bowl.

[H2] **Diagnosis**

Before giving the cat food, check the current food and water levels.

1. Go downstairs and navigate to the **Kitchen**.

2. Check the cat bowls.

3. If the bowls are between empty and 20% empty, or if the contents have been in the bowls for more than 24 hours, conduct a food and water reset.

[h2] **Solution**

To reset the food and water bowls:

1. Remove the used bowls from the floor and remove any remaining contents from these bowls.

2. Collect two new bowls and a food pouch from **Downstairs > Kitchen > Cat Cupboard**.

3. Fill one bowl with the contents of the food pouch.

4. Fill the other bowl with water from the tap in your kitchen.

5. Place the bowls on the ground.

6. Ask the cat if they’re happy now. When you don’t get a response because they’re already eating, go back to bed.

For more information on feeding your cat, see [Cat Diet Advice](https://www.battersea.org.uk/pet-advice/cat-care-advice/feeding-your-cat).

### [Example with no headings] Invalid responses error in poll summary

This article walks you through steps for troubleshooting the notification “invalid responses” that can appear next to the results in a Poll Summary.

The content that follows assumes that you’re a customer of the classic Guide experience, which was launched before February 19, 2019. If you became a customer after this date, this article isn’t relevant to you.

The “invalid responses” notification gives you the number of null values in your poll. This happens when the value attribute was removed or edited in the HTML of the poll.

To resolve the issue, check your HTML for the guide. Your HTML for a specific poll choice should look something like this: `<button type="button" value="1"> Yes </button>`.

### [Example that includes multiple solutions] Error when you try to pair your device ###

This article walks you through steps for troubleshooting issues with trying to pair (**Test on Device**) your mobile device with the Pendo console.

You might see a blank screen or 404 page when you scan the QR code during the pairing process. This typically happens when there’s an incorrect Scheme ID in the app’s code.

To resolve this issue, contact your mobile developer to confirm that the Scheme ID matches the Scheme ID in your App Details page.

- For Android, the Scheme ID is located in your AndroidManifest.xml file.
- For iOS, the Scheme ID is located in your project URL Type  and your openURL function.

If the Scheme ID is correct, the issue could instead be that your Firewall is blocking the WebSocket protocol behind the pairing. Try using a Mobile Network instead of Wifi.


### [Non-Pendo Example] Deployment error: container failed to start

This article walks you through steps for troubleshooting the following error when you try to deploy: Container failed to start. To resolve this issue, you must first rule out the possible causes.


[H2] **Verify that you can run your container image locally**

Run and test your container image locally using Docker:

1. Replace IMAGE_URL with a reference to the container image in the following Docker command: PORT=8080 && docker run -p 9090:${PORT} -e PORT=${PORT} IMAGE_URL.

2. Open http://localhost:9090 in your browser.

If your container image can’t run locally, diagnose and fix the issue locally before deploying.


[H2] **Check that your container is listening on the expected port**

Your container must listen for incoming requests on the port that’s defined by Cloud Run and provided in the PORT environment variable.

1. Go to CloudRun and select the appropriate container port.

2. Select Edit and Deploy New Revision.

3. Select the Container tab and check the port.

4. If incorrect, re-enter the port you want requests to be sent to. This also sets the PORT environment variable.

5. Select Deploy.

### Other examples ###
Examples of troubleshooting articles include:

* Canva [“fix a problem”](https://www.canva.com/help/article/fix-a-problem/) section.
* Microsoft Azure VM [troubleshooting documentation](https://docs.microsoft.com/en-us/troubleshoot/azure/virtual-machines/welcome-virtual-machines).
* Docker [logs and troubleshooting documentation](https://docs.docker.com/desktop/windows/troubleshoot/).
* Google Cloud [troubleshooting documentation](https://cloud.google.com/run/docs/troubleshooting).
