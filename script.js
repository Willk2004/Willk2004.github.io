function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function updateTime() {
			
				var date = new Date();
				
				var currentDate = date.getDate();
				
				var month = date.getMonth();
				
				var monthsOfYear = ["January", "February","March","April","May","June","July","August","September","October","November","December"];
				
				var daysOfWeek = ["Sunday","Monday","Tueday","Wedneday","Thursday","Friday","Saturday"];
				
				var year = date.getFullYear();
				
				var day = date.getDay();
				
				
				var hour = date.getHours();
				
				var minutes = date.getMinutes();
				
				var seconds = date.getSeconds();
			
				if (seconds < 10)
					seconds = "0" + seconds; 

				if (minutes < 10)
					minutes = "0" + minutes;

				if (hour < 10)
					minutes = "0" + minutes;
				
				
				document.getElementById("displayDate").innerHTML = daysOfWeek[day] + " " + currentDate + " " + monthsOfYear[month] + " " + year;
				
				document.getElementById("displayTime").innerHTML = hour + ":" + minutes + ":" + seconds
		
			}
			
			window.setInterval(updateTime, 1000);
			
