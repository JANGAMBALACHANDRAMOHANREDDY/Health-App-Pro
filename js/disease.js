const diseaseId = new URLSearchParams(window.location.search).get('id');
const diseaseDetailsDiv = document.getElementById('diseaseDetails');

// Sample data
const diseases = [
  { id: 1, name: "COVID-19", description: "A respiratory disease caused by the coronavirus.", symptoms: ["Fever", "Cough", "Fatigue"], medicines: ["Paracetamol", "Ivermectin"] },
  { id: 2, name: "Flu", description: "A common viral infection that affects the nose, throat, and lungs.", symptoms: ["Chills", "Headache", "Body Aches"], medicines: ["Tamiflu", "Paracetamol"] },
  { id: 3, name: "Malaria", description: "A disease caused by a parasite transmitted by mosquitoes.", symptoms: ["Fever", "Chills", "Sweating"], medicines: ["Chloroquine", "Artemisinin"] },
  { id: 4, name: "Cancer", description: "A group of diseases involving abnormal cell growth.", symptoms: ["Weight Loss", "Fatigue", "Pain"], medicines: ["Chemotherapy", "Radiotherapy"] },
];

const disease = diseases.find(d => d.id == diseaseId);

if (disease) {
  diseaseDetailsDiv.innerHTML = `
    <h2>${disease.name}</h2>
    <p>${disease.description}</p>
    <h3>Symptoms:</h3>
    <ul>
      ${disease.symptoms.map(symptom => `<li>${symptom}</li>`).join('')}
    </ul>
    <h3>Recommended Medicines:</h3>
    <ul>
      ${disease.medicines.map(medicine => `<li>${medicine}</li>`).join('')}
    </ul>
  `;
}
