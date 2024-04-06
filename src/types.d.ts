import { Resource as ResourceBase } from '@prisma/client'
import { Tag as TagBase } from '@prisma/client'

export interface Resource extends ResourceBase {
	tags: Tag[]
}

export interface Tag extends TagBase {}
