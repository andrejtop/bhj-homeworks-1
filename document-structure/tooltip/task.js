window.onload = function() {
    let tooltip;

    document.onclick = function(event) {
      let target = event.target;

      if (target.className == 'has-tooltip') {
        event.preventDefault(); 
        if (tooltip) { tooltip.remove();}
        tooltip = document.createElement('div');
        tooltip.className = 'tooltip tooltip_active';
        tooltip.innerHTML = target.getAttribute('title');
        document.body.append(tooltip);
  
        let coords = target.getBoundingClientRect();
        let left = coords.left + (target.offsetWidth - tooltip.offsetWidth) / 2;
        if (left < 0) left = 0;

        let top = coords.top - tooltip.offsetHeight - 5;
        if (top < 0) { 
          top = coords.top + target.offsetHeight + 5;
        }

        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
      }
    };

    document.onmouseout = function(e) {

      if (tooltip) {
        tooltip.remove();
        tooltip = false;
      }

    };

  };