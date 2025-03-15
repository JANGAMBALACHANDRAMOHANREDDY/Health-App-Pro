// Sample data
const diseases = [
  { name: "COVID-19", description: "A respiratory disease caused by the coronavirus.", id: 1 },
  { name: "Flu", description: "A common viral infection that affects the nose, throat, and lungs.", id: 2 },
  { name: "Malaria", description: "A disease caused by a parasite transmitted by mosquitoes.", id: 3 },
  { name: "Cancer", description: "A group of diseases involving abnormal cell growth.", id: 4 },
];

// Function to display diseases
function displayDiseases(filteredDiseases) {
  const diseaseListDiv = document.getElementById('diseaseList');
  diseaseListDiv.innerHTML = ''; // Clear previous results

  filteredDiseases.forEach(disease => {
    const diseaseCard = document.createElement('div');
    diseaseCard.classList.add('diseaseCard');
    diseaseCard.innerHTML = `
      <h3>${disease.name}</h3>
      <p>${disease.description}</p>
    `;
    diseaseCard.addEventListener('click', () => {
      window.location.href = `disease.html?id=${disease.id}`;
    });
    diseaseListDiv.appendChild(diseaseCard);
  });
}

// Filter diseases based on search input
document.getElementById('searchInput').addEventListener('input', function () {
  const searchQuery = this.value.toLowerCase();
  const filteredDiseases = diseases.filter(disease => 
    disease.name.toLowerCase().includes(searchQuery)
  );
  displayDiseases(filteredDiseases);
});

// Initially display all diseases
displayDiseases(diseases);
