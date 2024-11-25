# VPCI Panther Press Website

## ⚙️ Stack

- [**Astro** + **Typescript**](https://astro.build/)
- [**React**](https://react.dev?uwu=true)
- [**Aceternity UI**](https://ui.aceternity.com/components/)
- [**Tailwind CSS** + **tailwind-merge** + **clsx**](https://tailwindcss.com/)
- [**Tabler Icons**](https://tabler-icons.io/i/)
- [**Eslint**](https://eslint.org/)
- [**Prettier**](https://prettier.io/)
- [**Pagefind**](https://pagefind.app/)
- [**Keystatic CMS**](https://keystatic.com/)

## 👨🏻‍💻 Running Locally

**Recommended extensions for VSCode:**

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)

1. Clone the repository:

```bash
git clone https://github.com/vpci-panther-press/panther-press.git
```

2. Install dependencies:

```bash
pnpm i
```

3. Run the development server:

```bash
pnpm dev
```

## 📄 Adding Data

To add data, you must do so manually, by adding a `.mdx` or `.yaml` file with the proper frontmatter defined in the schema in `/src/content/config.ts` or by adding data through the Keystatic UI.

![Keystatic Dashboard](https://us-east-1.tixte.net/uploads/pi.tixte.co/keystaticdash.png)
You can access this on https://pantherpress.ca/keystatic if you are a member of the vpci-panther-press GitHub organization.

Note:

- You cannot make changed directly to the main branch as it is protected. Thus, you need to make your changes on an alternative branch and merge it will a pull request.
- Thus, you **must** do the following in the Keystatic interface:

### 1. Switch to the Keystatic branch

![Branch switching dropdown in Keystatic UI](https://us-east-1.tixte.net/uploads/pi.tixte.co/firefox_zCfXXWa72n.png)

### 2. Make your changes

🖊️ Make whatever changes you need to make!

### 3. Create a pull request

![The create pull request button in Keystatic UI](https://us-east-1.tixte.net/uploads/pi.tixte.co/firefox_jRTpM2aK7j.png)

You will be redirected to the GitHub repository; to the page to create a pull request:
![GitHub page to create a new pull request](https://us-east-1.tixte.net/uploads/pi.tixte.co/firefox_G1tjwPgmR9.png)

### 4. Verify your changes

When you create a pull request, the website will be built with the new changes. After creating the pull request, wait 1-2 minutes and refresh the page. if the deploy is sucessful, the following comment should be displayed:
![GitHub actions CI/CD comment with a sucessful deploy and deploy URLs](https://us-east-1.tixte.net/uploads/pi.tixte.co/firefox_j4rlnurXy0.png)
Check out the alias link (both will contain the same updated content anyways) and verify the changes have applied and are correct. If they are, proceed to Step 5.

If not, simply return to the Keystatic dashboard and modify what is needed. **However**, if you need to make extensive changes, close the pull request (without merging), make your changes, and then create another pull request. This is because a preview will be made for each change while the pull request is open. If extensive changes are made, this will waste a lot of build usage. Although for lighter changes or debugging, this is fine.

If the build fails, you will be notified by the comment. If this happens, contact the web dev board to help resolve the issue, or attempt to resolve the issue as it may have been with some of the changes you have made. The error message will be attached in the comment, which you can look at and attempt to debug.

### 5. Merge the pull request

If everything looks good, merge the pull request to see the changes reflected on the main website.
![Merge pull request view in GitHub UI](https://us-east-1.tixte.net/uploads/pi.tixte.co/firefox_VnRvWDpWQV.png)
then:
![Confirm merge view in GitHub UI](https://us-east-1.tixte.net/uploads/pi.tixte.co/firefox_0Tse1NjyK1.png)

After the pull request has been merged, wait 1-3 minutes for the website to be built, and you will be able to view the changes on [pantherpress.ca](https://pantherpress.ca).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                 | Action                                                                                                                           |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm install`          | Installs dependencies                                                                                                            |
| `pnpm run dev`          | Starts local dev server at `localhost:4321`                                                                                      |
| `pnpm run build`        | Build your production site to `./dist/`                                                                                          |
| `pnpm run preview`      | Preview your build locally, before deploying                                                                                     |
| `pnpm run format:check` | Check code format with Prettier                                                                                                  |
| `pnpm run format`       | Format codes with Prettier                                                                                                       |
| `pnpm run sync`         | Generates TypeScript types for all Astro modules. [Learn more](https://docs.astro.build/en/reference/cli-reference/#astro-sync). |
| `pnpm run lint`         | Lint with ESLint                                                                                                                 |
