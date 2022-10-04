const Checkbox = {
	baseStyle: {
		control: {
			transition: '.4s',
			_checked: {
				bg: 'brand.100',
				borderColor: 'brand.100',
				color: 'white',
				_hover: {
					bg: 'brand.100',
					borderColor: 'brand.100'
				}
			},
			_focus: {
				shadow: 'none'
			}
		}
	},
	variants: {
		filled: {
			control: {
				bg: 'default-100',
				borderColor: 'transparent',
				_hover: {
					bg: 'default-200'
				},
				_checked: {
					borderColor: 'transparent'
				}
			}
		},
		outline: {
			control: {
				border: '1px solid',
				borderColor: 'border-100',
				_hover: {
					borderColor: 'border-200'
				}
			}
		}
	},
	sizes: {
		sm: {
			control: {
				h: 3,
				w: 3
			},
			label: {
				fontSize: 'xs'
			}
		},
		md: {
			control: {
				h: 4,
				w: 4
			},
			label: {
				fontSize: 'sm'
			}
		},
		lg: {
			control: {
				h: 5,
				w: 5
			},
			label: {
				fontSize: 'md'
			}
		}
	},
	defaultProps: {
		variant: 'outline'
	}
}

export default Checkbox
