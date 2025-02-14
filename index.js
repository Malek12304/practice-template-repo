function movePlayer(direction) {
    return new Promise((resolve) => {
        console.log(`Moving player ${direction}...`);

        setTimeout(() => {
            console.log(`Player moved ${direction}`);
            resolve(`Player moved ${direction}`);
        }, 1000); // Simulating movement delay
    });
}