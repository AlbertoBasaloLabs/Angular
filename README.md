# Angular
Demo laboratory for Angular courses and workshops

Archetype for AI tools to create SPA web applications using Angular:

- Modern Angular dependencies and best practices
  - Standalone components
  - Signals instead of RxJS
  - Modern Template syntax
- Project structure
  - src/app
    - core
    - routes
    - shared
- Architecture patterns:
  - Container/Presentational components
- Style guide changes
  - *.page for routed containers
  - *.form|table|component for presentational components
- Features:
  - Authentication and authorization
  - Theme toggle
  - Home with ip information

Repository: [Laboratorios / Angular](https://github.com/AlbertoBasaloLabs/Angular)

```bash
# Create a new Angular project
# name: angular
# minimal: true (to avoid any testing framework)
# inline-template: true
# inline-style: true
# routing: true
# ssr: false
# style: css
# zoneless: true


ng new angular --minimal -s -t --routing --ssr=false --style=css --zoneless
ng serve
```

---

- **Author**: [Alberto Basalo](https://albertobasalo.dev)
- **Company**: [AI code Academy](https://aicode.academy)
- **Socials**:
  - [X](https://x.com/albertobasalo)
  - [LinkedIn](https://www.linkedin.com/in/albertobasalo/)
  - [GitHub](https://github.com/albertobasalo)
