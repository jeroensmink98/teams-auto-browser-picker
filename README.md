# Teams Auto Browser Picker

A small Chrome plugin to automatically click "Continue on this browser" for Microsoft Teams meeting pages.

## Why this Plugin?

Every time you open a Microsoft Teams meeting link from your Outlook Calendar, you're prompted to choose between continuing in the browser or using the desktop client.  

**But what if you NEVER want to use the desktop client?**  

Unfortunately, Microsoft Teams doesn’t provide an option to make "Continue on this browser" the default choice. That’s where this plugin comes in — it automatically selects the browser option for you, saving you time and frustration.

## Features

- Automatically clicks "Continue on this browser" on Microsoft Teams meeting pages.
- Works seamlessly in the background, requiring no manual intervention.

## Installation

1. **Download or clone this repository.**
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the TeamsBrowserPicker folder containing this plugin.

## Usage

- Simply install the plugin, and it will automatically handle Microsoft Teams meeting links for you.
- No configuration or setup required after installation.

## How it Works

- The plugin listens for navigation to `teams.microsoft.com` pages.
- Once the meeting page is loaded, it detects the "Continue on this browser" button and clicks it automatically.

## Permissions

This plugin requires the following permissions:
- **Scripting**: To inject a content script for detecting and clicking the button.
- **Web Navigation**: To monitor when you navigate to Teams meeting pages.


---

Stop wasting time clicking buttons and focus on your meetings! 😊