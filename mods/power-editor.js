document.body.appendChild(document.createElement('p'))

let ni = document.createElement('input')
ni.placeholder = "TAG"
ni.id = "EDITOR-1POWER"
document.body.appendChild(ni)

let nii = document.createElement('input')
nii.id = "EDITOR-POWER"
nii.placeholder = "NUMBER - INT"
document.body.appendChild(nii)

let nb = document.createElement('button')
nb.id = "EDITOR-BUT"
nb.textContent = "POWER"
nb.onclick = function() {
  let tag = document.getElementById('EDITOR-1POWER').value
  if (tag in nations) {
    nations[tag].power = parseInt(document.getElementById('EDITOR-POWER').value)
  }
}
document.body.appendChild(nb)

document.body.appendChild(document.createElement('p'))
