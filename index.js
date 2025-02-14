function initializeGame() {
    return new Promise((resolve) => {
        console.log("Initializing game...");

        setTimeout(() => {
            console.log("Game setup complete!");
            resolve("Game initialized");
        }, 2500);
    });
}