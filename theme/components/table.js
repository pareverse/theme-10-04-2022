const Table = {
	baseStyle: {
		table: {
			whiteSpace: 'nowrap'
		},
		th: {
			fontWeight: 'medium',
			textTransform: 'normal',
			whiteSpace: 'nowrap'
		}
	},
	variants: {
		simple: {
			th: {
				bg: 'transparent',
				borderBottom: 'none',
				py: 0,
				h: 12,
				color: 'text-100'
			},
			td: {
				borderBottom: 'none',
				py: 3
			},
			thead: {
				tr: {
					outline: '1px dashed',
					outlineColor: 'border-100'
				}
			}
		},
		striped: {
			th: {
				borderBottom: 'none',
				py: 0,
				h: 12,
				color: 'text-100'
			},
			td: {
				borderBottom: 'none',
				py: 3
			},
			tbody: {
				tr: {
					'&:nth-of-type(odd)': {
						td: {
							bg: 'hsl(220, 100%, 99%)',
							_dark: {
								bg: 'hsl(220, 20%, 30%, .15)'
							}
						}
					}
				}
			}
		}
	},
	sizes: {
		md: {
			th: {
				fontSize: 'sm',
				lineHeight: 'inherit'
			},
			td: {
				fontSize: 'sm',
				lineHeight: 'inherit'
			}
		}
	}
}

export default Table
