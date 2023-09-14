import { IUploadFileInDisk, IReadFile } from "./interfaces"
import { createReadStream, createWriteStream } from 'node:fs'
import { resolve } from "node:path"
import { pipeline as nodePipeline } from 'node:stream'
import { promisify } from "node:util"

const pipeline = promisify(nodePipeline)

export class FsProvider {
  static async uploadFileInDisk({ file, folderPath, fileName }: IUploadFileInDisk) {
    const destination = resolve(__dirname, '../../../', folderPath, fileName)

    await pipeline(file, createWriteStream(destination))
  }

  static readFileFromDisk({ path }: IReadFile) {
    console.log(resolve(__dirname, '../../../', path))
    return createReadStream(resolve(__dirname, '../../../', path))
  }
}