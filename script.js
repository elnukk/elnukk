// smooth scrolling for better experience
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

        // some interactive elements
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
            
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

        // cursor trail effect
let mouseTrail = [];
document.addEventListener('mousemove', function(e) {
    mouseTrail.push({
        x: e.clientX,
        y: e.clientY,
        life: 20
    });
            
    if (mouseTrail.length > 20) {
        mouseTrail.shift();
    }
});

function updateTrail() {
    document.querySelectorAll('.mouse-trail').forEach(trail => trail.remove());
            
    mouseTrail.forEach((point, index) => {
        const trail = document.createElement('div');
                trail.className = 'mouse-trail';
                trail.style.position = 'fixed';
                trail.style.left = point.x + 'px';
                trail.style.top = point.y + 'px';
                trail.style.width = '4px';
                trail.style.height = '4px';
                trail.style.backgroundColor = '#fd79a8';
                trail.style.borderRadius = '50%';
                trail.style.pointerEvents = 'none';
                trail.style.opacity = (index / mouseTrail.length) * 0.5;
                trail.style.zIndex = '999';
                trail.style.transform = 'translate(-50%, -50%)';
                
                document.body.appendChild(trail);
                
                point.life--;
                if (point.life <= 0) {
                    mouseTrail.splice(index, 1);
                }
    });
            
    requestAnimationFrame(updateTrail);
}
        
updateTrail();