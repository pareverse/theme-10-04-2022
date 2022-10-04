const Input = {
	baseStyle: {
		field: {
			fontWeight: 'medium',
			color: 'text-200',
			transition: '.4s',
			_placeholder: {
				color: 'text-500'
			}
		}
	},
	variants: {
		filled: {
			field: {
				bg: 'default-100',
				_hover: {
					bg: 'default-200'
				},
				_focus: {
					bg: 'default-200',
					borderColor: 'transparent'
				},
				_invalid: {
					borderColor: 'transparent',
					shadow: 'none'
				}
			}
		},
		outline: {
			field: {
				borderColor: 'border-100',
				_hover: {
					borderColor: 'border-200'
				},
				_focus: {
					borderColor: 'border-200',
					shadow: 'none'
				},
				_invalid: {
					borderColor: 'border',
					shadow: 'none',
					_hover: {
						borderColor: 'border-focus'
					}
				}
			}
		}
	},
	sizes: {
		xs: {
			field: {
				borderRadius: 'lg',
				px: 3,
				h: '32px'
			}
		},
		sm: {
			field: {
				borderRadius: 'lg',
				px: 3,
				h: '36px',
				fontSize: 'xs'
			}
		},
		md: {
			field: {
				borderRadius: 'lg',
				px: 3,
				fontSize: 'sm'
			}
		},
		lg: {
			field: {
				borderRadius: 'lg',
				px: 3,
				h: '44px',
				fontSize: 'sm'
			}
		},
		xl: {
			field: {
				borderRadius: 'lg',
				px: 3,
				h: 12,
				fontSize: 'md'
			}
		}
	}
}

export default Input
