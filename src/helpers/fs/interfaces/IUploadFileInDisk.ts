import { BusboyFileStream } from "@fastify/busboy"

export interface IUploadFileInDisk {
  file: BusboyFileStream,
  folderPath: string
  fileName: string
}