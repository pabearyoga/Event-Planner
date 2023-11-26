# Event Planner - Web Application for Event Planning

This web application was created as part of the Frontend test task, using React.
Users can efficiently plan and organize events through this application.

## Features

### Basic Functionality:

1. **Home Page**

   - Displays a list of upcoming events with essential information such as name
     and date, utilizing the CSS Grid algorithm for event list layout.
   - Added the ability to filter events by categories, such as music, sports,
     culture, etc.
   - Events with different priorities are displayed in different colors, with
     priority indication on the event card.

2. **Event Creation Page**

   - Provides a form for users to fill in necessary event information, including
     name, date, time, location, and description.
   - Users can create an event after filling out the form.
   - Expanded the event creation form with the option to choose a category.
   - Added the ability to set the priority of an event (high, medium, low).

3. **Event Page**
   - Shows detailed information about a specific event, including all the
     information filled out on the event creation page.
   - Users can delete an event; upon deletion, the user is redirected to the
     home page.
   - Users can edit an event. Clicking the Edit button redirects the user to the
     event editing page, where they can modify the filled form with event
     information.

### Advanced Functionality:

- Sorting events: Users can sort events by various criteria, such as name, date,
  or priority.
- Event search: Users can search for an event by name or description using the
  input in the header. Search occurs character by character.
- Pagination on the home page.
- Language support: Added the ability to choose the language using
  react-i18next.

## Implementation Standards

- Fixed layout in px.
- Semantic and valid markup, with a focus on accessibility (a11y).
- Responsive and cross-browser layout - mobile from 320px, tablet from 768px,
  desktop from 1280px.
- Utilized the Mobile-first approach.
- Clean code with preserved formatting. Recommended to use ESLint/Prettier.
- Code is organized into separate components.

//
