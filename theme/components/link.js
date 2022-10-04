const Link = {
	baseStyle: (props) => ({
		fontWeight: 'medium',
		color: props.active ? (props.colorScheme ? `${props.colorScheme}.100` : 'text-100') : 'text-200',
		transition: '.4s',
		_hover: {
			textDecoration: 'none',
			color: props.colorScheme ? `${props.colorScheme}.100` : 'text-100'
		}
	}),
	variants: {
		filled: (props) => ({
			bg: props.active ? 'default-100' : 'transparent',
			borderRadius: 'lg',
			px: 3,
			py: 2.5,
			lineHeight: '20px'
		})
	},
	sizes: {
		sm: {
			fontSize: 'sm'
		},
		md: {
			fontSize: 'md'
		},
		lg: {
			fontSize: 'lg'
		}
	},
	defaultProps: {
		size: 'sm'
	}
}

export default Link
