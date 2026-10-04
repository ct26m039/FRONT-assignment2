Prompt 1: Is the functionality in @file:useNotes.js correct? It's supposed to be able to create a new notes the list of notes, delete them and filter by their titles, text or tags.  It is also supposed to be used by the other files to manage notes effectively@useNotes.js
- Übernommen: filteredNotes() implementation
- Geändert/Verstanden: druch die searchTerm variable ist es einfacher nach Tags zu filtern. Außerdem ist es nicht mehr case sensitive und ließt nun kontinuierlich searchTerm.value.

Prompt 2: My styling across the project still doesn't look as good as I want it too. Can you help me improve it while keeping the original design mostly intact?
- Übernommen: CSS Code
- Geändert/Verstanden: mehr wissen über CSS und styling optionen

Promt 3: I have encountered an error that says "TS7016: Could not find a declaration file for module ./composables/useNotes.js". I was able to create the @file:vue.d.ts file to handle the .vue errors but don't know how to resolve the issue for .js files
- Übernommen: Code in der tsconfig.app.json, allowJs: true
- Geändert/Verstanden: Der Complier muss .js Dateien auch als TypeScript Dateien behandeln damit ich die GitHub Pages Seite deployen kann
