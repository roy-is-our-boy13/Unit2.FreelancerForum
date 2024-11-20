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

  const name = ["Dr. Slice", "Dr. Pressure", "Prof. Possibility", "Prof. Prism","Dr. Impulse", "Prof. Spark", "Dr. Wire", "Prof. Goose"];
  const occupation = ["gardener", "programmer", "teacher", "driver"];


  function render()
  {


        averagePrice();
  }

  function addfreelancers()
  {
    const listOfFreelancers = document.querySelector('freelancerList');
    listOfFreelancers.innerHTML = '';

  }


  function averagePrice()
  {
    const theAveragePriceOfFreelancers = 
        freelancers.reduce((accumlator, currentValue) =>
            accumlator + currentValue.price, 0);
    const totalAveragePrice = (theAveragePriceOfFreelancers/freelancers.length);
    return totalAveragePrice.toFixed(2);
  }

  render();

