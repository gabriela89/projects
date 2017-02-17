console.log($(':hidden').length);
console.log($('label[for="q"]'));
console.log($('input[type=hidden]').length);
//count input hidden
console.log($('img[alt]').length);
//select all of the odd table rows in the table body
console.log($('#fruits tbody tr:odd'));
//serlect all of the image elements on the page;
//Log each image's alt attribute
$('img').each(function (i) {
    var $img=$(this);
    console.log($img.attr('alt'));
})
//select the search input text box,then traverse up to the form and add a class to the form
console.log($('input[name="q"]').closest('form').addClass('myform'));
//console.log($('#search').addClass('myform'));
console.log($('li.current').removeClass('current').next().addClass('current'));
console.log($('#specials select').parent().next().find('input.input_submit'));
console.log($('#slideshow 11:first').addClass('current').siblings().addClass('disabled'));
var $ul=$('#myList');
for(i=0; i<5; i++){var j=i+8;
    console.log($('<li>List item' + j+ '</li>').appendTo($ul));

}
console.log($('#myList li:odd').remove());
console.log($('div.module').append('<h2>new heading</h2>').append('<p>new paragraph</p>').append('<li>apple</li><li>pears</li>'));
console.log($('select').append('<option value="wednesday">Wednesday</option>'));
var $img=$('img:first');
var $newDiv=$('<div class="module"/>');
console.log($newDiv.append($img.clone()).insertAfter('div.module:last'));