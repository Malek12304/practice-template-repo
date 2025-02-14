function calculateScore(points) {
  return new Promise(resolve => {
    console.log('Calculating score...');

    setTimeout(() => {
      console.log(`Score updated: ${points} points`);
      resolve(points);
    }, 1500);
  });
}
