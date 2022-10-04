const Select = {
	baseStyle: {
		field: {
			fontWeight: 'medium',
			color: 'text-200',
			transition: '.4s'
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
				}
			}
		}
	},
	sizes: {
		xs: {
			field: {
				borderRadius: 'lg',
				pl: 3,
				h: '32px'
			}
		},
		sm: {
			field: {
				borderRadius: 'lg',
				pl: 3,
				h: '36px',
				fontSize: 'xs'
			}
		},
		md: {
			field: {
				borderRadius: 'lg',
				pl: 3,
				h: 10,
				fontSize: 'sm'
			}
		},
		lg: {
			field: {
				borderRadius: 'lg',
				pl: 3,
				h: '44px',
				fontSize: 'sm'
			}
		},
		xl: {
			field: {
				borderRadius: 'lg',
				pl: 3,
				h: 12,
				fontSize: 'md'
			}
		}
	}
}

export default Select
