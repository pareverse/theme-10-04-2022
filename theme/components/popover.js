import { mode } from '@chakra-ui/theme-tools'

const Popover = {
	baseStyle: (props) => ({
		content: {
			bg: 'surface',
			borderRadius: 'lg',
			borderColor: 'border-100',
			boxShadow: mode('sm', 'dark-sm')(props)
		},
		header: {
			borderBottomWidth: 0,
			pt: 3,
			pb: 0,
			fontWeight: 'semibold',
			color: 'text-100'
		},
		body: {
			py: 3,
			fontSize: 'sm'
		},
		footer: {
			borderTopWidth: 0,
			pt: 0,
			pb: 3
		}
	})
}

export default Popover
