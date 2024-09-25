import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const PatternBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 100;

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0.75); // Setting background opacity
        mountRef.current.appendChild(renderer.domElement);

        const opacity = parseInt('83', 16) / 255; // Convert hex opacity to decimal

        // Material setup for all shapes
        const shapeMaterial = new THREE.LineBasicMaterial({
            color: new THREE.Color('#68563b'),
            transparent: true,
            opacity: opacity
        });

        // Hexagon
        // Hexagon setup
        const hexagonMaterial = new THREE.LineBasicMaterial({
            color: new THREE.Color('#68563b'),
            transparent: true,
            opacity: parseInt('83', 16) / 255, // Convert hex opacity to decimal
            linewidth: 2, // Note: linewidth may not have an effect in WebGLRenderer
        });

        const hexagonPoints = [];
        const hexagonSize = 70; // Radius of the hexagon
        for (let i = 0; i < 6; i++) { // Only need to iterate 6 times for a hexagon
            const angle = (2 * Math.PI / 6) * i;
            hexagonPoints.push(
                new THREE.Vector3(Math.cos(angle) * hexagonSize, Math.sin(angle) * hexagonSize, 0)
            );
        }

        const hexagonGeometry = new THREE.BufferGeometry().setFromPoints(hexagonPoints);
        // Close the hexagon path by duplicating the first point at the end
        hexagonGeometry.setFromPoints([...hexagonPoints, hexagonPoints[0]]);
        const hexagon = new THREE.LineLoop(hexagonGeometry, hexagonMaterial);
        scene.add(hexagon);

        // Diamond
        const diamondPoints = [
            new THREE.Vector3(0, 40, 0),
            new THREE.Vector3(-20, 0, 0),
            new THREE.Vector3(0, -40, 0),
            new THREE.Vector3(20, 0, 0),
            new THREE.Vector3(0, 40, 0) // Closing the loop
        ];
        const diamondGeometry = new THREE.BufferGeometry().setFromPoints(diamondPoints);
        const diamond = new THREE.Line(diamondGeometry, shapeMaterial);
        scene.add(diamond);

        const circleRadius = 55; // Adjust as needed, ensuring it's inside the hexagon
        const circleGeometry = new THREE.BufferGeometry();
        const circleVertices = [];
        
        for (let i = 0; i <= 64; i++) { // More segments make the circle smoother
            const theta = (i / 64) * Math.PI * 2;
            circleVertices.push(
                Math.cos(theta) * circleRadius, // x
                Math.sin(theta) * circleRadius, // y
                0                               // z
            );
        }
        
        circleGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(circleVertices), 3));
        const circleMaterial = new THREE.LineBasicMaterial({
            color: new THREE.Color('#68563b'),
            transparent: true,
            opacity: parseInt('83', 16) / 255,
        });
        const circle = new THREE.LineLoop(circleGeometry, circleMaterial);
        scene.add(circle);

        // Sun-like lines outside the hexagon
        const linesGroup = new THREE.Group();
        for (let i = 0; i < 20; i++) {
            const lineGeometry = new THREE.BufferGeometry();
            const points = [];
            const angle = (i / 20) * Math.PI * 2;
            points.push(new THREE.Vector3(Math.cos(angle) * 75, Math.sin(angle) * 75, 0)); // Start just outside hexagon
            points.push(new THREE.Vector3(Math.cos(angle) * 85, Math.sin(angle) * 85, 0)); // End a bit further out
            lineGeometry.setFromPoints(points);
            const line = new THREE.Line(lineGeometry, shapeMaterial);
            linesGroup.add(line);
        }
        scene.add(linesGroup);

            // Adding 'X's at the corners
            const createX = (position) => {
                const xMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });
                const xGeometry = new THREE.BufferGeometry();
                const vertices = new Float32Array([
                    -5, -5, 0, 5, 5, 0,
                    -5, 5, 0, 5, -5, 0
                ]);
                xGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
                const xLine = new THREE.LineSegments(xGeometry, xMaterial);
                xLine.position.set(position.x, position.y, position.z);
                scene.add(xLine);
            };
            
            // Example positions for 'X's at the corners
            createX(new THREE.Vector3(-hexagonSize, hexagonSize, 0));
            createX(new THREE.Vector3(hexagonSize, hexagonSize, 0));
            createX(new THREE.Vector3(-hexagonSize, -hexagonSize, 0));
            createX(new THREE.Vector3(hexagonSize, -hexagonSize, 0));

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            hexagon.rotation.z += 0.001; // Rotate hexagon
            linesGroup.rotation.z += 0.002; // Rotate lines faster
            renderer.render(scene, camera);
        };

        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        return () => {
            mountRef.current.removeChild(renderer.domElement);
            window.removeEventListener('resize', () => {});
        };
    }, []);

    return <div ref={mountRef} className="pattern-background" style={{ width: '100vw', height: '100vh' }}></div>;
};

export default PatternBackground;