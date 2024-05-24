# webz-task

To run the project, cd into the folder and execute these commands:

```
npm install
npm run dev
```

The project will open on http://localhost:3000

For styling I used Tailwind. I've customized Tailwind configuration to match the provided Figma design. Given the time constraints, I focused on implementing the design, both desktop and mobile versions, using straight markup and tailwind classes. In real world situation I'd refactor everything into reusable React components for better maintainability and scalability.

I don't have original fonts that are used in the Figma design (Aboria, Neue Haas Unica), so I replaced them with the closest free alternatives (Montserrat and Roboto).

The pagination functionality is currently not implemented because the provided REST API doesn't supply page data, so it's not possible to request data for individual pages.

I look forward to any feedback and I'm ready to discuss improvements that can be made to the task.
