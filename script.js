const cssLink = document.getElementsByTagName('link')[0]
const ul = document.querySelector('ul')
const styles = ['style1', 'style2']

function renderList() {
	const updateStyle = styleName => cssLink.href = `styles/${styleName}.css`;

	styles.forEach(s => {
		const item = createListItem(s, updateStyle, s == styles[0]);
		ul.append(item);
	})
}
function createListItem(styleName, callback, selected=false) {
	const li = document.createElement('li')
	const label = document.createElement('label')
	const checkbox = document.createElement('input')
	checkbox.type = 'radio'
	checkbox.name = 'styleCheckbox'
	checkbox.checked = selected
	checkbox.addEventListener('click', () => callback(styleName))

	label.append(checkbox)
	label.append(styleName)

	li.append(label)
	return li
}

renderList()
