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
	name: string
	url: string
	poster: string
	tags: SelectOption[]
	description: string
}

/*
 *********************************************
 * END FORMS
 *********************************************
 */
