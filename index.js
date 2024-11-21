/**
 * The group of freelancers serves as an example for the workshop.
 */
const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "Gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "Programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "Teacher" },
    { name: "Prof. Prism", price: 81, occupation: "Teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "Teacher" },
    { name: "Prof. Spark", price: 76, occupation: "Programmer" },
    { name: "Dr. Wire", price: 47, occupation: "Teacher" },
    { name: "Prof. Goose", price: 72, occupation: "Driver" },
  ];

  // The array of names of each freelancer.
  const Name = ["Dr. Slice", "Dr. Pressure", "Prof. Possibility", "Prof. Prism","Dr. Impulse", "Prof. Spark", "Dr. Wire", "Prof. Goose"];
  // An array of job titles, which are called occupation.
  const Occupation = ["Gardener", "Programmer", "Teacher", "Driver"];
  //Set the max of freelances to 50.
  const theMax = 50;

  /**
   * This function generates a random order for freelancers. 
   * @returns {const} random numbers for each name, occupation, and price.
   */
  function randomGenerator()
  {
    const randomName = Name[Math.floor(Math.random() * Name.length)];
    const randomOccupation = Occupation[Math.floor(Math.random() * Occupation.length)];
    const randomPrice = Math.floor(Math.random() * 90) + 20;

    return {name: randomName, occupation: randomOccupation, price: randomPrice };
  }

  /**
   * This function will render the existing freelancers from the given array while
   * generating some new random ones. It will also calculate the average price of 
   * all the freelancers provided.
   */
  function render()
  {
    const listOfFreelancers = document.querySelector('#freelancerList');
    listOfFreelancers.innerHTML = '';

    for(let i = 0; i < freelancers.length; i++)
    {
        const freelancer = freelancers[i];
        const freelancerElement = document.createElement('tr');
        freelancerElement.innerHTML = `<td>${freelancer.name}</td><td>${freelancer.occupation}</td><td>$${freelancer.price}</td></tr>`;
        listOfFreelancers.appendChild(freelancerElement);
    }

    const theAveragePriceOfFreelancers = 
        freelancers.reduce((accumlator, currentValue) =>
            accumlator + currentValue.price, 0);
    const totalAveragePrice = ((theAveragePriceOfFreelancers/freelancers.length).toFixed(2));

    document.querySelector('#averagePrice').innerText = `The Average Starting Price is $${totalAveragePrice}`;
  }

  /**
   * Adding new freelancers will occur at intervals, allowing the list of freelancers to render. 
   * The loop will stop when the number of freelancers is greater than or equal to the given maximum.
   */
  const addfreelancers = setInterval (()=>
  {
    const nextFreelancer = randomGenerator();
    freelancers.push(nextFreelancer);
    render();
    if(freelancers.length >= theMax)
    {
        clearInterval(addfreelancers);
        return;
    }
  }, 40);
