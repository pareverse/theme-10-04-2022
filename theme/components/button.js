import { mode } from '@chakra-ui/theme-tools'

const Button = {
	baseStyle: {
		overflow: 'hidden',
		borderRadius: 'lg',
		fontWeight: 'medium',
		lineHeight: 'inherit',
		transition: '.4s'
	},
	variants: {
		default: (props) => ({
			bg: 'default-100',
			color: 'text-300',
			_hover: {
				bg: props.colorScheme === 'gray' ? 'default-200' : `${props.colorScheme}.alpha.100`,
				color: props.colorScheme === 'gray' ? 'text-300' : `${props.colorScheme}.100`
			},
			_active: {
				bg: props.colorScheme === 'gray' ? 'default-200' : `${props.colorScheme}.alpha.100`,
				color: props.colorScheme === 'gray' ? 'text-300' : `${props.colorScheme}.100`
			}
		}),
		solid: (props) => ({
			bg: props.colorScheme === 'gray' ? 'default-100' : `${props.colorScheme}.100`,
			color: props.colorScheme === 'gray' ? 'text-300' : 'white',
			_hover: {
				bg: props.colorScheme === 'gray' ? 'default-200' : `${props.colorScheme}.200`
			},
			_active: {
				bg: props.colorScheme === 'gray' ? 'default-200' : `${props.colorScheme}.200`
			}
		}),
		outline: (props) => ({
			borderColor: props.colorScheme === 'gray' ? 'border-100' : `${props.colorScheme}.100`,
			color: props.colorScheme === 'gray' ? 'text-300' : `${props.colorScheme}.100`,
			_hover: {
				bg: props.colorScheme === 'gray' ? 'default-100' : `${props.colorScheme}.alpha.100`
			},
			_active: {
				bg: props.colorScheme === 'gray' ? 'default-100' : `${props.colorScheme}.alpha.100`
			}
		}),
		ghost: (props) => ({
			color: 'text-300',
			_hover: {
				bg: props.colorScheme === 'gray' ? 'default-100' : `${props.colorScheme}.alpha.100`,
				color: props.colorScheme === 'gray' ? 'text-300' : `${props.colorScheme}.100`
			},
			_active: {
				bg: props.colorScheme === 'gray' ? 'default-100' : `${props.colorScheme}.alpha.100`,
				color: props.colorScheme === 'gray' ? 'text-300' : `${props.colorScheme}.100`
			}
		}),
		translucent: (props) => ({
			bg: props.colorScheme === 'gray' ? 'default-100' : `${props.colorScheme}.alpha.100`,
			color: props.colorScheme === 'gray' ? 'text-300' : `${props.colorScheme}.100`,
			_hover: {
				bg: props.colorScheme === 'gray' ? 'default-200' : `${props.colorScheme}.alpha.200`
			},
			_active: {
				bg: props.colorScheme === 'gray' ? 'default-200' : `${props.colorScheme}.alpha.200`
			}
		}),
		light: (props) => ({
			bg: 'surface',
			color: 'text-100',
			_hover: {
				shadow: mode('lg', 'dark-lg')(props)
			},
			_active: {
				shadow: mode('lg', 'dark-lg')(props)
			}
		}),
		dark: (props) => ({
			bg: 'surface-reverse',
			color: 'text-100-reverse',
			_hover: {
				shadow: mode('dark-lg', 'lg')(props)
			},
			_active: {
				shadow: mode('dark-lg', 'lg')(props)
			}
		})
	},
	sizes: {
		xs: {
			px: 3,
			h: 8,
			minW: 8,
			fontSize: 'xs'
		},
		sm: {
			px: 4,
			h: 9,
			minW: 9,
			fontSize: 'xs'
		},
		md: {
			px: 4,
			h: 10,
			minW: 10,
			fontSize: 'sm'
		},
		lg: {
			px: 5,
			h: '44px',
			minW: '44px',
			fontSize: 'sm'
		},
		xl: {
			px: 5,
			h: 12,
			minW: 12,
			fontSize: 'md'
		}
	},
	defaultProps: {
		variant: 'default',
		colorScheme: 'gray'
	}
}

export default Button
