<verification_workflow>
When code is edited while a preview server is running, verify changes before proceeding:

1. **Screenshot** — Take a screenshot of the affected area to confirm visual correctness
2. **Inspect** — Check the changed elements via snapshot/inspect (text content, structure)
3. **Console errors** — Check for browser console errors (`preview_console_logs level=error`)
4. **Server errors** — Check for server-side errors (`preview_logs level=error`)
5. **Confirm** — State what was verified and whether the changes match the intent

Only proceed after all checks pass. If any check fails, fix the issue before continuing.
</verification_workflow>
