const Tabs = {
	baseStyle: {
		tab: {
			_focus: {
				transition: '.4s'
			}
		}
	},
	variants: {
		line: {
			tab: {
				fontWeight: 'medium',
				color: 'text-400',
				margin: 0,
				_selected: {
					color: 'brand.100',
					borderColor: 'brand.100'
				},
				_active: {
					bg: 'transparent'
				}
			},
			tablist: {
				borderBottom: 'none',
				borderColor: 'transparent'
			},
			tabpanel: {
				mt: 6,
				p: 0
			}
		}
	}
}

export default Tabs
