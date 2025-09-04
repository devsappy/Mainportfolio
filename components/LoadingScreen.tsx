'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { useLoading } from '@/contexts/LoadingContext';

export default function LoadingScreen() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const { isPageLoading } = useLoading();

  useEffect(() => {
    if (!mountRef.current || !isPageLoading) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Create particles geometry
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 3000;
    const posArray = new Float32Array(particlesCount * 3);
    const colorsArray = new Float32Array(particlesCount * 3);

    // Initialize particles
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 100;
      
      // Create gradient colors from cyan to blue
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        // Cyan
        colorsArray[i * 3] = 0;
        colorsArray[i * 3 + 1] = 1;
        colorsArray[i * 3 + 2] = 1;
      } else if (colorChoice < 0.66) {
        // Blue
        colorsArray[i * 3] = 0;
        colorsArray[i * 3 + 1] = 0.5;
        colorsArray[i * 3 + 2] = 1;
      } else {
        // White
        colorsArray[i * 3] = 1;
        colorsArray[i * 3 + 1] = 1;
        colorsArray[i * 3 + 2] = 1;
      }
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));

    // Particle material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Create DNA helix geometry
    const helixGeometry = new THREE.BufferGeometry();
    const helixPoints = [];
    const helixColors = [];
    
    for (let i = 0; i < 200; i++) {
      const t = i * 0.1;
      const x = Math.sin(t) * 5;
      const y = (i - 100) * 0.2;
      const z = Math.cos(t) * 5;
      
      helixPoints.push(x, y, z);
      helixPoints.push(-x, y, -z);
      
      // Add colors
      helixColors.push(0, 1, 1); // Cyan
      helixColors.push(0, 0.5, 1); // Blue
    }

    helixGeometry.setAttribute('position', new THREE.Float32BufferAttribute(helixPoints, 3));
    helixGeometry.setAttribute('color', new THREE.Float32BufferAttribute(helixColors, 3));

    const helixMaterial = new THREE.PointsMaterial({
      size: 0.3,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });

    const helixMesh = new THREE.Points(helixGeometry, helixMaterial);
    scene.add(helixMesh);

    // Create loading ring
    const ringGeometry = new THREE.TorusGeometry(8, 0.3, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    scene.add(ring);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const clock = new THREE.Clock();
    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Rotate particles
      particlesMesh.rotation.y = elapsedTime * 0.05;
      particlesMesh.rotation.x = elapsedTime * 0.03;

      // Rotate DNA helix
      helixMesh.rotation.y = elapsedTime * 0.3;

      // Rotate and pulse ring
      ring.rotation.x = elapsedTime * 0.5;
      ring.rotation.y = elapsedTime * 0.3;
      ring.scale.setScalar(1 + Math.sin(elapsedTime * 2) * 0.1);

      // Mouse follow effect
      camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Simulate loading progress
    const loadingInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(loadingInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      clearInterval(loadingInterval);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      helixGeometry.dispose();
      helixMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
    };
  }, [isPageLoading]);

  return (
    <AnimatePresence>
      {isPageLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[10000] bg-black"
        >
          <div ref={mountRef} className="absolute inset-0" />
          
          {/* Loading UI Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  SAPPY
                </span>
              </h1>
              
              {/* Loading bar */}
              <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mb-4">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              {/* Loading percentage */}
              <motion.p
                className="text-cyan-400 text-sm font-mono"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {Math.min(Math.floor(loadingProgress), 100)}%
              </motion.p>
              
              {/* Loading text */}
              <motion.p
                className="text-gray-400 mt-4 text-sm"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Initializing portfolio experience...
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}