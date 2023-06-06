document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("diaryForm");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      var childName = document.getElementById("childName").value;
      var diaryTitle = document.getElementById("diaryTitle").value;
      var diaryContent = document.getElementById("diaryContent").value;
      if (diaryTitle && diaryContent) {
        console.log("Child's Name:", childName);
        console.log("Diary Title:", diaryTitle);
        console.log("Diary Content:", diaryContent);
        form.reset();
        alert("Diary submitted successfully!");
      }
    });
  });
  