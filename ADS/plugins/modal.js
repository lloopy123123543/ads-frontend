function _createModal(options) {
    const modal = document.createElement (tagName ('div'))
    modal.classList.add('Vmodel')
    modal.insertAdjacentHTML( where: 'afterbegin', html `
     <div class="Overlay">
      <div class="Window">
        <div class="Model__header">
          <div class="Model__header__title">KeBX
            <span class="Modal__close">&times;</span>

          </div>
        </div>
        <div class="Model__body">
        </div>
        <div class="Model__bot">
          <div class="Model__bot__button">Готово
            <button>Ok</button>

          </div>
        </div>

      </div>
`)
return modal
}

$.modal = function(options) {
    const $modal = _createModal(options)
    


    return {
        open() {},
        close() {},
        destroy() {}
    }
  
}
