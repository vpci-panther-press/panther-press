# VPCI Panther Press Website

## ⚙️ Stack

- [**Astro** + **Typescript**](https://astro.build/)
- [**React**](https://react.dev?uwu=true)
- [**Aceternity UI**](https://ui.aceternity.com/components/)
- [**Tailwind CSS** + **Tailwind-Merge** + **clsx**](https://tailwindcss.com/)
- [**Tabler Icons**](https://tabler-icons.io/i/)
- [**Eslint**](https://eslint.org/)
- [**Prettier**](https://prettier.io/)
- [**Search Library**](https://pagefind.app/)
- [**Keystatic CMS**](https://keystatic.com/)

## 👨🏻‍💻 Running Locally

**Recommended extensions for VSCode:**

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss).
- [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode).

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

- You cannot make changed directly to the main branch, it requires a pull request.
- Thus, you **must** do the following:

### 1. Switch to the Keystatic branch

![Branch Switching View in Keystatic](https://us-east-1.tixte.net/uploads/pi.tixte.co/firefox_zCfXXWa72n.png)

### 2. Make your changes

🖊️ Make whatever changes you need to make!

### 3. Create a pull request

![alt text](https://us-east-1.tixte.net/uploads/pi.tixte.co/firefox_jRTpM2aK7j.png)

You will be redirected to the GitHub repository; to the page to create a pull request:
![alt text](https://us-east-1.tixte.net/uploads/pi.tixte.co/firefox_G1tjwPgmR9.png)

### 4. Verify your changes

documentation to be added

### 5. Merge the pull request

![alt text](https://us-east-1.tixte.net/uploads/pi.tixte.co/firefox_VnRvWDpWQV.png)
then:
![alt text](https://us-east-1.tixte.net/uploads/pi.tixte.co/firefox_0Tse1NjyK1.png)

After the pull request has been merged, wait 1-3 minutes for the website to be published, and you will be able to view the changes on [pantherpress.ca](https://pantherpress.ca).

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
