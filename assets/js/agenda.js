document.getElementById("indexAgenda").addEventListener("click", function() {
    var agendaContent = document.getElementById("agenda-content");
    agendaContent.classList.add("indexEvents");
    agendaContent.classList.remove("gridEvents");
    
    document.getElementById("indexAgenda").style.display = "none";
    document.getElementById("gridAgenda").style.display = "block";
  });
  
  document.getElementById("gridAgenda").addEventListener("click", function() {
    var agendaContent = document.getElementById("agenda-content");
    agendaContent.classList.add("gridEvents");
    agendaContent.classList.remove("indexEvents");
    
    document.getElementById("gridAgenda").style.display = "none";
    document.getElementById("indexAgenda").style.display = "block";
  });
  