$(document).ready(function () {
    $("#nanoGallery3").nanoGallery({
        itemsBaseURL:'img',
        thumbnailHeight: 198,
        thumbnailWidth: 198,
        theme:'light',
        maxItemsPerLine: 4,
        thumbnailGutterWidth:60,
        thumbnailGutterHeight: 60,
        maxWidth:980,
        viewerToolbar: {style:"innerImage", autoMinimize:2000}
    });
});

var $searchBox = $('.search');
$searchBox.keyup(function(){
  if ($searchBox.val() === '') {
    $(".nanoGalleryThumbnailContainer").each(function(){
      $(this).show();
    });
  } else {
    jQuery.each($(".labelDescription"), function() {
      var $thumbnailContainer = $(this).parents(".nanoGalleryThumbnailContainer");
      if ($(this).html().toLowerCase().indexOf($searchBox.val().toLowerCase()) == -1 ){
        $thumbnailContainer.hide();
      } else {
        $thumbnailContainer.show();
      }
    });
  }
});
