import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt({ html: true, linkify: true, typographer: true });

const source = await readFile("content/cv.md", "utf8");
const body = wrapEntries(md.render(source));
const title = source.match(/^#\s+(.+)$/m)?.[1] ?? "Curriculum Vitae";

const template = await readFile("src/templates/cv.html", "utf8");
const page = template
  .replaceAll("{{title}}", () => title)
  .replace("{{content}}", () => body);

await rm("dist", { recursive: true, force: true });
await mkdir("dist", { recursive: true });
await writeFile("dist/cv.html", page);
await cp("src/index.html", "dist/index.html");
await cp("src/styles", "dist/styles", { recursive: true });
await cp("src/fonts", "dist/fonts", { recursive: true });

console.log(`built dist/ — cv.html "${title}" (${body.length} bytes of content)`);

// Wrap each h3-led block (one job/degree entry) in <section class="entry"> so
// the print CSS can keep an entry from splitting across PDF pages.
function wrapEntries(html) {
  return html.replace(
    /<h3[\s\S]*?(?=<h[23][\s>]|$)/g,
    (entry) => `<section class="entry">\n${entry}</section>\n`,
  );
}
