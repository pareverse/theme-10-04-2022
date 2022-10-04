import { mode } from '@chakra-ui/theme-tools'

const Menu = {
	baseStyle: (props) => ({
		button: {
			transition: '.4s'
		},
		list: {
			bg: 'surface',
			borderRadius: 'lg',
			borderColor: 'border-100',
			boxShadow: mode('sm', 'dark-sm')(props)
		},
		item: {
			fontSize: 'sm',
			color: 'text-200',
			transition: '.4s',
			_hover: {
				bg: 'default-100'
			},
			_focus: {
				bg: 'default-100'
			}
		},
		divider: {
			opacity: 1
		}
	})
}

export default Menu
