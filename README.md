body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f1f1f1;
}

.wave-container {
    position: relative;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: #4A90E2;
    overflow: hidden;
    cursor: pointer;
}

.wave {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    transform: scale(0);
    pointer-events: none;
    animation: wave-animation 0.6s ease-out forwards;
}

@keyframes wave-animation {
    to {
        transform: scale(10);
        opacity: 0;
    }
}
