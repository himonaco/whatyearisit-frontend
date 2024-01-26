fetch('https://whatyearisit-backend-two-orpin.vercel.app/')
.then(response => response.json())
.then(data => {
    document.querySelector('#year').innerHTML = data.year;
})
.catch(error => {
    console.error('Error:', error);
  });
