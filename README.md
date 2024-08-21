# Blog-next

This is a project which builds an blog system in the future.

Attention: this project will be refactored by deno & lume.

blew is transfroming sass to css using deno api.

export async function sassCompile(sourcePath: string, targetPath: string) {
    try {
        const sass = await import("npm:sass");
        const fs = await import("@std/fs");
        const io = await import("@std/io");
        await fs.ensureFile(sourcePath);
        await fs.ensureFile(targetPath);
        const cssContent = sass.compile(sourcePath).css;
        const cssFile = await Deno.open(targetPath, { write: true });
        io.writeAll(cssFile, new TextEncoder().encode(cssContent));
    } catch (error) {
        console.log(error);
    } finally {
        setTimeout(() => {}, 1000);
    }
}
Task sass:compile deno run --allow-read --allow-write --allow-env ./scripts/sass.js

