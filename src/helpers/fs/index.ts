import { IUploadFileInDisk } from "./interfaces/IUploadFileInDisk";
import fs from 'node:fs'
import path from "node:path";
import { pipeline as nodePipeline } from 'node:stream'
import { promisify } from "node:util";

const pipeline = promisify(nodePipeline)

export class FsProvider {
  static async uploadFileInDisk({ file, folderPath, fileName }: IUploadFileInDisk) {
    const destination = path.resolve(__dirname, '../../../', folderPath, fileName)

    await pipeline(file, fs.createWriteStream(destination))
  }
}