---
title: Pendo | Troubleshooting Article
description: Pendo style guide troubleshooting article template
---

This page provides a template for writing troubleshooting content. Troubleshooting articles describe issue diagnosis and problem-solving steps for finding and fixing problems that the customer might encounter.

## Structure ##
- **Title:** Use a descriptive title that articulates the problem.
- **Subtitle or initial paragraph:** What this article will cover.
- **Introductory information:** For more information, see Informational content.
    - If applicable, list assumptions, such as what type of customer the user is and what parts of the product they have access to.
    - Describe the problem from the user’s perspective (e.g., the user is seeing an error when they do something rather than the system is failing to do something – you can talk about the system next).
    - Describe why the problem might be occurring or what it means, with examples relevant to the user experience.
    - Articulate what the user may need to do to resolve the issue, and how the user will know that the issue has been resolved or is still occurring.
- **Step-by-step solutions and outcomes:** For more information, see Instructional (how-to) content.
    - Describe how to fix the problem with a numbered walkthrough of the individual steps involved in the solution.
    - If there is more than one solution, provide instructions for the most common or most straightforward solution first.
- **Where to go next:** What the user can do or who they can contact if they’re still experiencing issues.
- **Further reading:** Links to related articles. This is generated automatically in Zendesk. You can also add links to further reading in line with the content.

## Headings ##
You may not need sub-headings for troubleshooting articles if there is only one solution. Use headings and subheadings only when you need to separate content. For example, when:

- There are multiple solutions to the same problem that require their own numbered steps.
- There are different use cases that might lead to the problem and require different approaches.
- The user needs to diagnose the problem before choosing a solution.
- The article provides a list of related problems, such as possible error messages and what they mean.

In Zendesk, we use H1 for titles and H2 for main sections, which also form the anchor links in the top-right of each article.

For guidance on creating headings in Zendesk, see Headings in the Editing articles in Zendesk page.

## Content ##
Start your content from the first subheading in this section.

<Title: What the problem is>
This article walks you through steps for troubleshooting <problem>.

[if applicable] The content that follows assumes that you have <requirements/experience/subscription>.

<Description of the problem if helpful>. This (might) happen when/because <reasons>  [If not included in the description].

To resolve the issue, <general description of solution>. This will <expected outcome>.

<First activity/solution/use case>
To resolve the issue, <description of first activity>

<Procedural steps for this activity. For guidance on writing instructions see General writing guidelines.>

<Second activity/solution/use case>
…

## Examples ##
Below are simplified example of how the above template might be used.

### [Example with no subheadings] Invalid responses error in poll summary ###
This article walks you through steps for troubleshooting the notification “invalid responses” that can appear next to the results in a Poll Summary.


The content that follows assumes that you’re a customer of the classic Guide experience, which was launched before February 19, 2019. If you became a customer after this date, this article isn’t relevant to you.

The “invalid responses” notification gives you the number of null values in your poll. This happens when the value attribute was removed or edited in the HTML of the poll.

To resolve the issue, check your HTML for the guide. Your HTML for a specific poll choice should look something like this: <button type="button" value="1"> Yes </button>

### [Example that includes multiple solutions] Error when you try to pair your device ###
This article walks you through steps for troubleshooting issues with trying to pair (“Test on Device”) your mobile device with the Pendo console.

You might see a blank screen or 404 page when you scan the QR code during the pairing process. This typically happens when there’s an incorrect Scheme ID in the app’s code.

To resolve this issue, contact your mobile developer to confirm that the Scheme ID matches the Scheme ID in your App Details page.

- For Android, the Scheme ID is located in your AndroidManifest.xml file.
- For iOS, the Scheme ID is located in your project URL Type  and your openURL function.

If the Scheme ID is correct, the issue could instead be that your Firewall is blocking the WebSocket protocol behind the pairing. Try using a Mobile Network instead of Wifi.


### [Non-Pendo Example] Deployment error: container failed to start ###
This article walks you through steps for troubleshooting the following error when you try to deploy:

Container failed to start.

To resolve this issue, you must first rule out the possible causes.


#### Verify that you can run your container image locally ####
Run and test your container image locally using Docker:

1. Replace IMAGE_URL with a reference to the container image in the following Docker command: PORT=8080 && docker run -p 9090:${PORT} -e PORT=${PORT} IMAGE_URL.

2. Open http://localhost:9090 in your browser.

If your container image can’t run locally, diagnose and fix the issue locally before deploying.


#### Check that your container is listening on the expected port ####
Your container must listen for incoming requests on the port that’s defined by Cloud Run and provided in the PORT environment variable.

1. Go to CloudRun and select the appropriate container port.

2. Select Edit and Deploy New Revision.

3. Select the Container tab and check the port.

4. If incorrect, re-enter the port you want requests to be sent to. This also sets the PORT environment variable.

5. Select Deploy.

### Other examples ###
Examples of troubleshooting articles include:

Canva “fix a problem” section.

Microsoft Azure VM troubleshooting documentation.

Docker logs and troubleshooting documentation.

Google Cloud troubleshooting documentation.
