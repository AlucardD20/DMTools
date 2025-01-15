function generateTavern() {
    // Here you would define arrays or objects with various tavern attributes
    
    const tavernNames = ['The Rusty Anchor', 'The Silent Moon', 'The Black Boar'];
    const descriptions = ['A dimly lit place with a mysterious vibe, known for its secretive patrons.', 'A cozy spot with a fireplace that never goes out, perfect for long winter nights.'];
    const patrons = ['A cloaked figure in the corner, whispering secrets.', 'A bard playing a melancholic tune, attracting a small crowd.'];
    const rumors = ['Word on the street is that the tavern owner is actually a retired pirate.', 'There\'s talk of a hidden treasure buried beneath the tavern.'];
    const meals = ['Breakfast: Dark bread with salted butter.', 'Lunch: Stew made from the catch of the day.', 'Dinner: Grilled venison with a side of root vegetables.'];
    const keepers = ['An old man with a scar across his face, known for his stories of the sea.', 'A young woman with a sharp wit, often seen mixing potions behind the bar.'];
    const services = [
        {lodging: 'Common Room', rate: '1sp'},
        {lodging: 'Single Room', rate: '2sp'},
        {lodging: 'Double Room', rate: '3sp'},
        {lodging: 'Large Room', rate: '4sp'}
    ];
    const foodDrink = [
        {item: 'Breakfast', rate: '1cp'},
        {item: 'Lunch', rate: '2cp'},
        {item: 'Dinner', rate: '3cp'},
        {item: 'Ale', rate: '1cp'},
        {item: 'Wine (Glass)', rate: '2cp'}
    ];

    // Randomly select from each array/object to populate your tavern details
    document.getElementById('nameDisplay').innerText = tavernNames[Math.floor(Math.random() * tavernNames.length)];
    document.getElementById('descriptionDisplay').innerText = descriptions[Math.floor(Math.random() * descriptions.length)];
    document.getElementById('patronsDisplay').innerText = patrons[Math.floor(Math.random() * patrons.length)];
    document.getElementById('rumorsDisplay').innerText = rumors[Math.floor(Math.random() * rumors.length)];
    document.getElementById('mealsDisplay').innerText = meals.join('\n');
    document.getElementById('keeperDisplay').innerText = keepers[Math.floor(Math.random() * keepers.length)];

    // Populate the tables
    let serviceTable = document.getElementById('servicesDisplay');
    serviceTable.innerHTML = '<tr><th>Lodging</th><th>Rates</th></tr>';
    services.forEach(service => {
        let row = serviceTable.insertRow();
        row.insertCell(0).innerText = service.lodging;
        row.insertCell(1).innerText = service.rate;
    });

    let foodDrinkTable = document.getElementById('foodDrinkDisplay');
    foodDrinkTable.innerHTML = '<tr><th>Sustenance</th><th>Rates</th></tr>';
    foodDrink.forEach(item => {
        let row = foodDrinkTable.insertRow();
        row.insertCell(0).innerText = item.item;
        row.insertCell(1).innerText = item.rate;
    });
}