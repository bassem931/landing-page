# Landing Page Project <!-- omit in toc -->

## Table of Contents<!-- omit in toc -->

- [How to preview](#how-to-preview)
- [Development](#development)
  - [Required changes](#required-changes)
  - [Extra features](#extra-features)

## How to preview

To use repository clone the repository on your local machine and then open the index.html file to preview the project

## Development

### Required changes

The Web page was downloaded as the plain project and then edited.  
All the basic requirements were done and were as follows

1. Link Js file  
   js file was linked successfully at the end of the body.several positions were tested  
   like at the head but the performance was worse.defer and async were tested but they  
   gave worse performance

2. Created Section  
   A create section function were implemented to create a section identical to the sections implemented using the same format as the sections in the original web page

3. Build navbar  
   Navbar function was implemented to build the bar with sections links

4. Distinguish the section in view  
   The section in viewport is highlighted by having a border and highlight section link in navbar

5. Scroll to sections  
   Smooth scroll was implemented to give a satisfying transition when clicking section links

6. Active state  
   Active state class was implemented according to section in viewport to show rotating circles around it

### Extra features

1.  Collapsible sections with rotating arrow image to sync with the change

    Use collapsible sections to give the website a better look and use the arrows to illustrate the state of the section with up being collapsed and down being extended

2.  Add two images to change some of the page content

    Added images in one section to provide a different looking section

3.  Show navbar when hovering with mouse at the screen top

    add fucntionality for the navbar to appear when hovering in the top part of the screen

4.  Button to scroll to the top of the page

    button that takes the user to the top again and can be found at the footer of the website

5.  Hide navigation bar when not scrolling after 5 seconds

    hide navbar when mouse is idle to give more room for sections to be seen
