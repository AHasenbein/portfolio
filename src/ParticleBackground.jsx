import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Set canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight; 

        let particles = [];
        
        // Mouse state
        const mouse = {
            x: null,
            y: null,
            radius: 100
        };

        // --- Particle Class ---
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = (Math.random() * 0.5 - 0.25);
                this.speedY = (Math.random() * 0.5 - 0.25);
                this.color = 'rgba(108, 117, 125, 0.5)';
            }
            update() {
                // Bounce off edges
                if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
                if (this.y > canvas.height || this.y < 0) this.speedY *= -1;

                // Mouse interaction
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < mouse.radius) {
                    this.x -= dx / 20;
                    this.y -= dy / 20;
                } else {
                    this.x += this.speedX;
                    this.y += this.speedY;
                }
            }
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // --- Initialization ---
        function initParticles() {
            particles = [];
            // Calculate density based on screen size
            let numberOfParticles = (canvas.height * canvas.width) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        }

        // --- Connecting Lines ---
        function connectParticles() {
            let opacityValue = 1;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let dx = particles[a].x - particles[b].x;
                    let dy = particles[a].y - particles[b].y;
                    let distance = (dx * dx) + (dy * dy);

                    if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                        opacityValue = 1 - (distance / 20000);
                        ctx.strokeStyle = `rgba(108, 117, 125, ${opacityValue * 0.3})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        // --- Animation Loop ---
        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }
            connectParticles();
            animationFrameId = requestAnimationFrame(animateParticles);
        }

        // --- Event Listeners ---
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            mouse.radius = 100;
            initParticles();
        };

        const handleMouseMove = (e) => {
            // Adjust mouse coordinates relative to canvas position
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseOut = () => {
            mouse.x = undefined;
            mouse.y = undefined;
        };

        window.addEventListener('resize', handleResize);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseout', handleMouseOut);

        // Start
        initParticles();
        animateParticles();

        // --- Cleanup ---
        return () => {
            window.removeEventListener('resize', handleResize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseout', handleMouseOut);
            cancelAnimationFrame(animationFrameId);
        };
    }, []); 

    return (
        <canvas 
            ref={canvasRef} 
            className="absolute top-0 left-0 w-full h-full z-0 pointer-events-auto"
        />
    );
};

export default ParticleBackground;