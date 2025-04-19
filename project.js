const form = document.querySelector('form')
const results = document.querySelector('#results')
const show = document.querySelector('#show')

form.addEventListener('submit', function (e) {
   e.preventDefault()

   const height = parseInt(document.querySelector('#height').value)
   const weight = parseInt(document.querySelector('#weight').value)
   const results = document.querySelector('#results')

   if (height === '' || height < 0 || isNaN(height)) {
      results.innerHTML = `Please give a valid height ${height}`;
   } else if (weight === '' || weight < 0 || isNaN(weight)) {
      results.innerHTML = `Please give a valid weight ${weight}`;
   } else {
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);
      //    show the result
      results.innerHTML = bmi;
   }
   if ((weight / ((height * height) / 10000)).toFixed(2) < 18.6) {
      show.innerHTML = "You are under Weight"
   }
   else if ((weight / ((height * height) / 10000)).toFixed(2) > 18.6 && (weight / ((height * height) / 10000)).toFixed(2) < 24.9) {
      show.innerHTML = "Your BMI index is Normal"
   }
   else {
      show.innerHTML = "You are over Weight"
   }
});

