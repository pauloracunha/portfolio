import React from 'react';
import bg from '../../assets/hero-name-mark-shape.webp';

function TextUnderline({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative z-10">
            {children}
            <span style={{
                position: 'absolute',
                content: '',
                zIndex: '-1',
                background: `url(${bg.src})`,
                width: '100%',
                height: '2rem',
                left: 0,
                bottom: '-2rem',
                backgroundRepeat: 'no-repeat',
            }}></span>
        </div>
    );
}

export default TextUnderline;