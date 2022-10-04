const Textarea = {
	baseStyle: {
		fontWeight: 'medium',
		color: 'text-200',
		transition: '.4s',
		_placeholder: {
			color: 'text-500'
		}
	},
	variants: {
		filled: {
			bg: 'default-100',
			_hover: {
				bg: 'default-200'
			},
			_focus: {
				bg: 'default-200',
				borderColor: 'transparent',
				shadow: 'none'
			}
		},
		outline: {
			borderColor: 'border-100',
			_hover: {
				borderColor: 'border-200'
			},
			_focus: {
				borderColor: 'border-200',
				shadow: 'none'
			}
		}
	},
	sizes: {
		xs: {
			borderRadius: 'lg',
			px: 3,
			fontSize: 'xs'
		},
		sm: {
			borderRadius: 'lg',
			px: 3,
			fontSize: 'xs'
		},
		md: {
			borderRadius: 'lg',
			px: 3,
			fontSize: 'sm'
		},
		lg: {
			borderRadius: 'lg',
			px: 3,
			fontSize: 'sm'
		},
		xl: {
			borderRadius: 'lg',
			px: 3,
			fontSize: 'md'
		}
	}
}

export default Textarea
