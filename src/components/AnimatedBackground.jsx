const AnimatedBackground = () => (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
        {/* Main warm yellow-green glow — top center, like a spotlight from above */}
        <div
            className="absolute"
            style={{
                width: '90vw',
                height: '70vh',
                top: '-20vh',
                left: '5vw',
                background:
                    'radial-gradient(ellipse 60% 55% at 50% 30%, rgba(160, 200, 50, 0.18) 0%, rgba(100, 150, 30, 0.10) 40%, transparent 70%)',
                filter: 'blur(10px)',
                animation: 'glowBreathe 10s ease-in-out infinite',
            }}
        />
        {/* Subtle secondary glow — bottom left, deep green */}
        <div
            className="absolute"
            style={{
                width: '60vw',
                height: '50vh',
                bottom: '-10vh',
                left: '-10vw',
                background:
                    'radial-gradient(ellipse at center, rgba(40, 80, 10, 0.20) 0%, transparent 65%)',
                filter: 'blur(10px)',
                animation: 'glowBreathe 14s ease-in-out infinite reverse',
            }}
        />
        {/* Subtle tertiary — bottom right */}
        <div
            className="absolute"
            style={{
                width: '50vw',
                height: '45vh',
                bottom: '-5vh',
                right: '-5vw',
                background:
                    'radial-gradient(ellipse at center, rgba(30, 70, 10, 0.15) 0%, transparent 65%)',
                filter: 'blur(10px)',
                animation: 'glowBreathe 18s ease-in-out infinite',
            }}
        />
    </div>
);

export default AnimatedBackground;
