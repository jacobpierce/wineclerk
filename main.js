function replaceText(selector, text, flags) {
  var matcher = new RegExp(text, flags);
  $(selector).each(function () {
    var $this = $(this);
    var newValue = 0
    if ($this.text().match(matcher) > 0) {
      newValue = Number(((1.17 * $this.text().match(matcher)) * 1.0844) + 2.08).toFixed(2);
    }
    if (!$this.children().length)
      $this.text($this.text().replace(matcher, newValue));
    });
}

function replaceAllText() {
  replaceText('*', '\\d{1,4}\\.\\d\\d', 'g');
}

$(document).ready(replaceAllText);
$('html').ajaxStop(replaceAllText);