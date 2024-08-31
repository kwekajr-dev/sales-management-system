//hii jquery n kwaajil yakuhide na ku-unhide content zilopo kwny view detail button y admin
$(document).ready(function () {
  $(".view-details").click(function () {
    $(this).next(".details").toggle();
  });

 
});
