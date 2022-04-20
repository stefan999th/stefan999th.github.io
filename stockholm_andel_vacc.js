new Chart(document.getElementById("bar-chart"), { 

    type: 'bar',
    data: {
      labels: ["Påsk", "Valborg", "Kristihimmelsfärd", "Utspring", "Midsommar", "Industrisemester inleds", "Industrisemester avslutas", "Skolstart"],
      datasets: [
        {
          label: "God Skyddseffekt %",
          backgroundColor: ["#79BAEC", "#79BAEC", "#79BAEC", "#79BAEC", "#79BAEC", "#79BAEC", "#79BAEC", "#79BAEC"],
          data: [6.01,11.61,23.44,34.85,53.57,68.34,85.77,100] 
		},
		
		{ 
		label: "Fullgod Skyddseffekt %",
        backgroundColor: ["orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange"],
        data: [2.49,5.36,9.79,12.97,30.98,34.55,76.22,87.21]
        }, 
		 
		{
		label: "Andel som blivit vaccinerade %",
        backgroundColor: ["grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey"],
        data: [10.74,18.31,44.41,44.41,76.49,100,100,100]  
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Andel av vuxna befolkningen i Stockholm som vaccinerats, uppnått initial respektive fullständig skyddseffekt'
      }
    }
});
