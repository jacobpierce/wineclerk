// bid price replacement
function replaceBidPrice(selector, text, flags) {

  var bidprice = new RegExp(text, flags);

  $(selector).each(function () {

    var $this = $(this);
    var newValue = -1;

    if ($this.text().match(bidprice) != null) {

      // match and clean original value
      origValue = $this.text().match(bidprice);
      origValue = origValue.toString().replace(',', '');

      // estimate total cost
      newValue = Number(((1.17 * origValue) * 1.0844) + 2.08).toFixed(2).toString();

      // re-add comma, as applicable
      if (newValue.length > 6) {
        newValue = newValue.slice(0, (newValue.length - 6)) + ',' + newValue.slice(newValue.length - 6);
      }

    }

    // output
    if (!$this.children().length && newValue !== -1) {
      $this.text($this.text().replace(bidprice, '~' + newValue));
    }

  });

}

function replaceAllBids() {
  // capture 000,000.00 or 000.00
  replaceBidPrice('*', '\\d{1,3}\\.\\d\\d|\\d{1,3},\\d{3}\\.\\d\\d', 'g'); // support |\\d{1,3}&#44;\\d{3}\\.\\d\\d ?
}

$(document).ready(replaceAllBids);
$('html').ajaxStop(replaceAllBids);