import {object, string, TypeOf} from 'zod';

export const createUserSchema= object({
	body: object({
		firstName: string({
			required_error: 'First name is required'
		}),
		lastName: string({
			required_error: 'last name is required'
		}),
		password: string({
			required_error: 'Password name is required'
		}).min(6,'Password must be at least 6 characters'),
		passwordConfirmation: string({
			required_error: 'Password confirmation is required'
		}),
		email:string({
			required_error: 'Email is required'
		}).email('Not a valid email')
	}).refine((data)=>data.password===data.passwordConfirmation,{
		message:'Passwords do not match',
		path:['passwordConfirmation']
	})
})

export type CreateUserInput = TypeOf<typeof createUserSchema>['body'];