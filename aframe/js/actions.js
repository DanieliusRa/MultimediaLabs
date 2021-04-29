$ = (queryString) => document.querySelector(queryString);

const animate = () => {
    const variation = Math.sin(Date.now() / 500);
    const position = `1.5 ${2 + variation} 0.5`;
    $('a-pointcloud').setAttribute('position', position);

    requestAnimationFrame(animate);
};

requestAnimationFrame(animate);