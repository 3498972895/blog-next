'use server'

import { transfromToMDFile, uploadMD } from "@/lib/utils"

export async function exampleTest(mdString: string) {
const mdFile  = transfromToMDFile(mdString)
const url   = uploadMD(mdFile)
console.log(url)
}
