---
title: Pendo | Support Deflection Guide
description: Pendo style guide support deflection guide template
---

Guides are a proven method for reducing support ticket volume when done effectively. There are several requirements for building an effective support deflection guide. Follow this proces to build a successful deflection guide.

## Guide Design Process ##
1. **Understand the problem.** Identify trends in support tickets, who the users are, what they're trying to do and what they're actually doing.
2. **Identify the behavior to change.** Look at the product UX and find the optimal place to provide instructions to the user.
3. **Design the right content.** This guide template is a successful method for informing users on issue resolution in the moment but other content designs may be more appropriate. Let the data guide you.
4. **Experiment.** Ship your guide with a guide experiment or ship it for a limited time period and assess effectiveness before publishing content to everyone forever.
5. **Iterate.** If the experiment shows the guide is not effective, change it. Keep your options open. A guide may not be the right approach. You might have the target or activation in Pendo. You might be targeting the wrong users. You might need to change your guide copy.
6. **Monitor.** Product enhancements, bug fixes, revised solutions or best practices may change the accuracy or visibility of the guide. Review guide performance reguarly.

## Guide Settings ##
There are a variety of approaches to present the guide to the user at the right time. Understand the available options and select the most effective method that provides the best user experience.

### Activation ###
Several activation options are available. Choose the one that provides the best user experience. It's tempting to use automatic activation but automatic guides negatively impact the user experience and are closed reflexively when presented at the wrong time.

#### Badge activated ####
1. Use the info "i" badge.
![Info badge](img/info-icon.png)
2. Place it "inline right" on or near the feature that the user is interacting with.

#### Slideout Activated ####
Do not set an activation method in the guide.
1. Add a button on the appropriate Troubleshooting slideout guide.
2. Set the button action as "Launch guide" and select the deflection guide.

### Segment ###
If possible, target an error message or UI element that only exists when the user is actively experiencing a problem. In these situations, the segment can be "Everyone" as guide display is controlled by the error state in the UI.
If the guide is launched from the slideout, the guide segment must match the slideout segment or it will result in a dead button in the slideout.
In all other situations target the guide to the smallest possible segment, preferably with a product usage trigger caused by the error state. This reduces the guide noise users are subjected too and only shows the guide when it's relevant to the user. If you cannot limit display of the deflection guide to the moment when the error is occurring, consider other methods.

### Conversion ###
Set the conversion target to the feature that a user users to resolve the issue. For example, if there is an error in the display of a table, set conversion to a feature click on the "Edit table" button.

### Experiment ###
Due to the situational nature of error states and the necessity of an "always-on" intervention to reduce ticket volume, control group experiments shouldn't be used.
1. Schedule an end date for the guide 30 days after publishing. This prevents a lost guide from staying published if it isn't reassessed.
2. Review guide metrics and ticket metrics 30 days after publishing to assess effectiveness.
3. Iterate, improve content, repeat the experiment as needed.
4. Remove the scheduled end date and publish the guide indefinitely when the most effective solution is published.

## Guide Design ##
Users do not want a long drawn out troubleshooting experience. They want to be handed the solution with as little energy as possible and get back to work. This design frontloads the need to know information while still providing a walkthrough if users need additional instructions. Walkthrough completion is not a success metric. Conversion and ticket reduction is. Do not bury the resolution to the issue at the end of a walkthrough.

### Theme ###
- Pendo Default Theme

### Step 1 ###
- **Layout:** "IGST | Lightbox light box with header" (or lightbox with image).
    - All required information for conversion must be stated as clearly and efficiently as possible.
        - Clearly state the problem.
        - Clearly state the solution.
    - **Header row** Side-by-side image and text block.
        - Image block - vertical line with support color (TBD)
        - Text block - "Support"
    - **Text body row**
        - Text block - paragraph style. Two sentences. One sentence to state the problem. One sentence to state the solution.
        - Use good UX writing practices to be clear, concise, and useful.
        - No extra words or punctuation.
    - **Button row** Side-by-side button building blocks.
        - Primary button - "Show me how" launch walkthrough
        - (Optional) Secondary button - "Help Center article" Go to URL in new tab with relevant troubleshooting article with resolution steps.
- **Positioning**
    - Badge activated - relative to element
    - Slideout activated - bottom right
- **Behavior**
    - Dismiss button
    - Relevant button actions

### Step 2+ Walkthrough Steps ###
- **Layout:** "Tour Tooltip" for walkthrough steps.
    - State what the user must do to advance the walkthrough and why.
    - **Header row** Side-by-side image and text block.
        - Image block - Mouse click image.
        - Text block - State what action the user must perform to advance the walkthrough.
        - Example: "Click on the Edit Table button"
    - **Text body row** Optional. Include if additional context is needed.
        - Text block - paragraph style. One sentence to explain what this action does.
        - Example: "The Edit Table modal is where you add, remove, or change the columns and filters for your table."
    - **Button row** No buttons unless there is a required user input or element targeting is difficult.
        - Primary button - "Next" Go to next step.
            - Use if "Advance on element click" is problematic.
            - For example, the user needs to type something into a field and advancing when they click the field hides the instructions.
- **Positioning**
    - Relative to element
- **Behavior**
    - Advance on element click
    - Dismiss button
    - (Situational) Next button go to next step
