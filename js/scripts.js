$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#kitten").prepend("<li>miaou!</li>");
    $("ul#puppy").prepend("<li>awoo!</li>");
    $("ul#kitten").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#puppy").children("li").first().click(function() {
      $(this).remove();
    });
  });
  $("button#dog").click(function() {
    $("ul#puppy").prepend("<li>awoo!</li>");
    $("ul#kitten").prepend("<li>miaou!</li>");
    $("ul#puppy").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#kitten").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#sticker1").click(function() {
    $("ul#kittensticker").prepend('<li><img id="stickers" src="img/kittenpixel.gif"></li>');
    $("ul#kittensticker").children("li").first().click(function() {
      $(this).remove();
    });
  });
  $("button#sticker2").click(function() {
    $("ul#puppysticker").prepend('<li><img id="stickers" src="img/dogpixel.gif"></li>');
    $("ul#puppysticker").children("li").first().click(function() {
      $(this).remove();
    });
  });
});
