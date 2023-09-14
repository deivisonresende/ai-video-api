import { MultipartFile } from "@fastify/multipart"
import { db } from "../../../../../lib/prisma"
import path from 'node:path'
import { randomUUID } from "node:crypto"
import { FsProvider } from "../../../../../helpers/fs"

const videoFolderPath = 'tmp/videos/' 

export class UploadVideoUseCase {
  static async execute({ data, fileExtension }: { data: MultipartFile, fileExtension: string }) {
    const fileBaseName = path.basename(data.filename, fileExtension)

    const fileUploadName = `${fileBaseName}-${randomUUID()}${fileExtension}`
    
    FsProvider.uploadFileInDisk({ file: data.file, fileName: fileUploadName, folderPath: videoFolderPath })

    const video = await db.video.create({
      data: {
        name: fileBaseName,
        path: videoFolderPath.concat(fileUploadName)
      }
    })

    return { video }
  }
}
