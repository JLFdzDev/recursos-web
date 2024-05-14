import { Resource as ResourceBase } from '@prisma/client'
import { Tag as TagBase } from '@prisma/client'

/*
 *********************************************
 * MODELS
 *********************************************
 */
export interface Resource extends ResourceBase {
	tags: Tag[]
}

export interface Tag extends TagBase {}

/*
 *********************************************
 * END MODELS
 *********************************************
 */

/*
 *********************************************
 * FORMS
 *********************************************
 */
export interface SelectOption {
	value: string
	label: string
}

export interface ResourceInputs {
	id?: string
	name: string
	url: string
	poster?: string
	tags?: string[]
	description?: string
}

export interface TagInputs {
	id?: string
	name: string
}

export interface UserInputs {
	id?: string
	username: string
	email: string
	password?: string
	confirmPassword?: string
}

/*
 *********************************************
 * END FORMS
 *********************************************
 */

export interface DBLimit {
	page: number
	take: number
}

export interface PageParams {
	searchParams: {
		page?: string
	}
}

export interface SearchParams {
	searchParams: {
		q?: string
		page?: string
	}
}
