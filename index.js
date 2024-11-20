const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

  const Name = ["Dr. Slice", "Dr. Pressure", "Prof. Possibility", "Prof. Prism","Dr. Impulse", "Prof. Spark", "Dr. Wire", "Prof. Goose"];
  const Occupation = ["gardener", "programmer", "teacher", "driver"];


  function render()
  {
    const listOfFreelancers = document.querySelector('#freelancerList');
    listOfFreelancers.innerHTML = '';

    for(let i = 0; i < freelancers.length; i++)
    {
        const freelancer = freelancers[i];
        const freelancerElement = document.createElement('div');
        freelancerElement.classList.add('freelancerSpaceing');
        freelancerElement.innerHTML = `<strong>${freelancer.name}</strong> <strong>${freelancer.occupation}</strong>  $${freelancer.startingPrice}`;
        listOfFreelancers.appendChild(freelancerElement);
    }
    averagePrice();


  }

  function radomGenerator()
  {
        const randomName = Name[Math.floor(Math.random() * Name.length)];
        const randomOccupation = Occupation[Math.floor(Math.random() * Occupation.length)];
        const randomPrice = 
  }


  function addfreelancers()
  {
       
  }

  function averagePrice()
  {
    const theAveragePriceOfFreelancers = 
        freelancers.reduce((accumlator, currentValue) =>
            accumlator + currentValue.price, 0);
    const totalAveragePrice = (theAveragePriceOfFreelancers/freelancers.length);
    document.querySelector('#averagePrice').innerText = `Average Starting Price: $${totalAveragePrice.toFixed(2)}`;

  }

  render();