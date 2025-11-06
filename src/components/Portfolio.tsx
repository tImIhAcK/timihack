"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const Portfolio = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const [activeSection, setActiveSection] = useState("home");
  const [time, setTime] = useState("");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const terminalRef = useRef(null);
  const contentRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Update time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const mins = String(now.getMinutes()).padStart(2, "0");
      setTime(`[${hours} : ${mins}]`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Framer Motion-style animations for section changes using CSS
  useEffect(() => {
    if (!contentRef.current) return;

    setIsTransitioning(true);
    contentRef.current.style.animation = "none";

    setTimeout(() => {
      contentRef.current.style.animation = "";
      setIsTransitioning(false);
    }, 10);
  }, [activeSection]);

  // Initialize Three.js with manual animations
  useEffect(() => {
    if (!canvasRef.current) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#0a0a0a");
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Create floating cubes with rotation data
    const cubes = [];
    const cubeGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const colors = ["#00ff88", "#ff006e", "#00d9ff", "#ffd60a", "#ff6b9d"];

    for (let i = 0; i < 5; i++) {
      const material = new THREE.MeshPhongMaterial({
        color: colors[i],
        emissive: colors[i],
        emissiveIntensity: 0.2,
        wireframe: false,
      });
      const cube = new THREE.Mesh(cubeGeometry, material);
      cube.position.x = (Math.random() - 0.5) * 15;
      cube.position.y = (Math.random() - 0.5) * 15;
      cube.position.z = -8 + Math.random() * 4;
      cube.rotation.x = Math.random() * Math.PI;
      cube.rotation.y = Math.random() * Math.PI;

      scene.add(cube);
      cubes.push({
        mesh: cube,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
        },
        floatSpeed: Math.random() * 0.005 + 0.002,
        floatPhase: Math.random() * Math.PI * 2,
        baseY: cube.position.y,
      });
    }

    // Create particle field
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 300;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 50;
      positions[i + 1] = (Math.random() - 0.5) * 50;
      positions[i + 2] = (Math.random() - 0.5) * 50;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const particleMaterial = new THREE.PointsMaterial({
      color: "#00ff88",
      size: 0.15,
      sizeAttenuation: true,
      opacity: 0.6,
      transparent: true,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Lighting
    const light1 = new THREE.PointLight("#00ff88", 1.5, 100);
    light1.position.set(10, 10, 10);
    scene.add(light1);

    const light2 = new THREE.PointLight("#ff006e", 1, 100);
    light2.position.set(-10, -10, 10);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.25);
    scene.add(ambientLight);

    // Mouse tracking
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / width) * 2 - 1,
        y: -(e.clientY / height) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    let cameraX = 0;
    let cameraY = 0;
    let time = 0;

    const animate = () => {
      requestAnimationFrame(animate);

      time += 0.016; // ~60fps

      // Smooth camera movement
      cameraX += (mousePos.x * 2 - cameraX) * 0.05;
      cameraY += (mousePos.y * 2 - cameraY) * 0.05;

      camera.position.x = cameraX;
      camera.position.y = cameraY;

      // Animate cubes
      cubes.forEach((cube) => {
        cube.mesh.rotation.x += cube.rotationSpeed.x;
        cube.mesh.rotation.y += cube.rotationSpeed.y;

        // Floating animation
        cube.mesh.position.y =
          cube.baseY + Math.sin(time * cube.floatSpeed + cube.floatPhase) * 1.5;
      });

      // Rotate particles
      particles.rotation.x += 0.0001;
      particles.rotation.y += 0.0002;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sections = {
    home: {
      title: "$ welcome",
      content: (
        <div className="space-y-4">
          <p className="text-green-400 font-mono">Welcome to my portfolio</p>
          <p className="text-gray-300 font-mono text-sm leading-relaxed mt-2">
            I'm a developer passionate about creating intelligent, efficient,
            and impactful digital experiences with modern technologies.
          </p>
          <div className="text-cyan-400 font-mono text-sm mt-3 space-y-1">
            <p>{"> Skills: Python, Django, FastAPI, AI/ML"}</p>
            <p>{"> Experience: 4+ years"}</p>
          </div>
        </div>
      ),
    },
    experience: {
      title: "$ cat experience.txt",
      content: (
        <div className="space-y-4 text-sm font-mono">
          <div className="border-l-2 border-purple-400 pl-4">
            <p className="text-purple-400 font-bold">
              Open Source Contributor @ FastAPI
            </p>
            <p className="text-gray-400">November 2025</p>
            <p className="text-gray-300 mt-2">
              • Contributed to FastAPI, one of the most
              popular Python web frameworks.
              <br />
              • Enhanced developer experience by implementing clear, actionable
              error messages for dependency injection misuse.
              <br />
              • Added validation logic in Depends class to catch common mistakes
              early with helpful guidance.
              <br />
              • Developed comprehensive test suite with 97% coverage for all
              error scenarios.
              {/* <br />• Merged PR #14281 - impacting thousands of developers
              globally by reducing debugging time. */}
            </p>
            <p className="text-gray-400 mt-1">
              Technologies Used: Python, FastAPI, pytest, Type Hints,
              Git/GitHub, Code Review, Open Source Collaboration
            </p>
          </div>

          <div className="border-l-2 border-green-400 pl-4">
            <p className="text-green-400 font-bold">
              Backend Developer @ DVCSSS
            </p>
            <p className="text-gray-400">April 2025 - Sept 2025</p>
            <p className="text-gray-300 mt-2">
              • Modernized and stabilized existing PHP systems by fixing
              critical bugs and optimizing legacy code.
              <br />
              • Integrated an AI-driven assignment generation module to automate
              academic content creation.
              <br />
              • Designed and built a scalable online CBT (Computer-Based
              Testing) platform using FastAPI and React for WAEC, NECO, and JAMB
              practice.
              <br />• Containerized services with Docker, configured
              development/staging environments, and used Git for version
              control.
            </p>
            <p className="text-gray-400 mt-1">
              Technologies Used: PHP, Python, FastAPI, React, TailwindCSS,
              PostgreSQL, Docker, Git, Linux, REST APIs, Alembic, Redis, Celery
            </p>
          </div>

          <div className="border-l-2 border-cyan-400 pl-4">
            <p className="text-cyan-400 font-bold">
              Backend Developer (Contract) @ Davak Consult
            </p>
            <p className="text-gray-400">June 2025</p>
            <p className="text-gray-300 mt-2">
              • Designed and implemented authentication and student dashboard
              with assignment tracking, submission tools, and messaging system.
              <br />
              • Built educator tools for class management, communication, and
              analytics dashboards.
              <br />
              • Developed job and internship posting features for industry
              partners with basic analytics.
              <br />
              • Created collaboration tools and conducted usability testing with
              stakeholders.
              <br />• Implemented role-based access and admin panel for managing
              students, educators, and industry partners.
            </p>
            <p className="text-gray-400 mt-1">
              Technologies Used: Python, FastAPI, PostgreSQL, Docker, Git, Git Actions,
              Linux, REST APIs, Alembic, Redis, Celery
            </p>
          </div>
        </div>
      ),
    },
    skills: {
      title: "$ ls -la skills/",
      content: (
        <div className="space-y-4 text-sm font-mono">
          <div>
            <p className="text-green-400 mb-1">Languages:</p>
            <p className="text-gray-300 ml-4 leading-relaxed">
              Python • PHP • JavaScript • HTML • CSS • C
            </p>
          </div>
          <div>
            <p className="text-red-400 mb-1">Backend:</p>
            <p className="text-gray-300 ml-4 leading-relaxed">
              Django • FastAPI • Flask • Laravel
            </p>
          </div>
          <div>
            <p className="text-orange-400 mb-1">Frontend:</p>
            <p className="text-gray-300 ml-4 leading-relaxed">
              React • TailwindCSS • Bootstrap
            </p>
          </div>
          <div>
            <p className="text-cyan-400 mb-1">AI & Machine Learning:</p>
            <p className="text-gray-300 ml-4 leading-relaxed">
              TensorFlow • PyTorch
            </p>
          </div>
          <div>
            <p className="text-yellow-400 mb-1">Tools & DevOps:</p>
            <p className="text-gray-300 ml-4 leading-relaxed">
              Git • CI/CD • PostgreSQL • MySQL • MongoDB • Docker • AWS • Linux
            </p>
          </div>
        </div>
      ),
    },
    about: {
      title: "$ whoami",
      content: (
        <div className="space-y-3 text-sm font-mono text-gray-300 leading-relaxed">
          <p>
            A curious developer obsessed with creating intelligent, efficient,
            and impactful digital experiences.
          </p>
          <p>
            I specialize in Python, Django, FastAPI, AI/ML applications, and
            real-time systems.
          </p>
          <p>
            When I’m not coding, you’ll find me exploring new technologies,
            experimenting with AI projects, or tackling data-driven challenges.
          </p>
          <p className="text-green-400 mt-4">Location: Nigeria</p>
          <p className="text-green-400">Status: Open to opportunities</p>
        </div>
      ),
    },
    contact: {
      title: "$ contact --info",
      content: (
        <div className="space-y-3 text-sm font-mono">
          <p className="text-green-400">Get in touch:</p>
          <div className="space-y-2 ml-4">
            <p className="text-gray-300">
              Email:{" "}
              <span className="text-cyan-400">timihack.it@gmail.com</span>
            </p>
            <p className="text-gray-300">
              GitHub: <span className="text-cyan-400">github.com/tImIhAcK</span>
            </p>
            <p className="text-gray-300">
              LinkedIn:{" "}
              <span className="text-cyan-400">linkedin.com/in/timihack</span>
            </p>
            <p className="text-gray-300">
              Twitter: <span className="text-cyan-400">@timihack</span>
            </p>
          </div>
          <p className="text-green-400 mt-4">Looking forward to connecting!</p>
        </div>
      ),
    },
  };

  const currentSection = sections[activeSection];

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glitch {
          0% {
            text-shadow: 2px 0 0 #ff006e, -2px 0 0 #00ff88;
          }
          50% {
            text-shadow: 0 0 0 transparent;
          }
          100% {
            text-shadow: 2px 0 0 #ff006e, -2px 0 0 #00ff88;
          }
        }

        @keyframes buttonPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(0.95);
          }
        }

        .content-enter {
          animation: slideInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .terminal-glitch {
          animation: glitch 0.3s ease-in-out;
        }

        .button-click {
          animation: buttonPulse 0.3s ease-in-out;
        }
      `}</style>

      {/* Three.js Canvas */}
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full" />

      {/* Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-black/70 via-transparent to-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 w-full min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-3xl space-y-8">
          {/* Header with Time */}
          <div className="flex items-center justify-between text-sm font-mono text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <div
                className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.1s" }}
              />
              <div
                className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              />
            </div>
            <span className="text-cyan-400 tracking-wider font-bold">
              {time}
            </span>
          </div>

          {/* Terminal Window */}
          <div
            ref={terminalRef}
            className="bg-black/80 backdrop-blur-xl border border-gray-700/50 rounded-lg shadow-2xl overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="bg-gray-900/50 border-b border-gray-700/50 px-6 py-4 flex items-center justify-between">
              <h2 className="text-green-400 font-mono text-sm font-bold tracking-wide">
                {currentSection.title}
              </h2>
              <div className="text-xs text-gray-500 font-mono">
                developer@timihack
              </div>
            </div>

            {/* Terminal Content */}
            <div
              ref={contentRef}
              className="p-8 min-h-80 max-h-96 overflow-y-auto content-enter"
            >
              <div className="text-gray-200 space-y-4">
                {currentSection.content}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-3 justify-center">
            {Object.keys(sections).map((section) => (
              <button
                key={section}
                onClick={() => handleSectionClick(section)}
                className={`px-6 py-2 font-mono text-sm rounded transition-all duration-300 ${
                  activeSection === section
                    ? "bg-green-500/20 border border-green-400 text-green-400 shadow-lg shadow-green-500/30"
                    : "bg-gray-900/50 border border-gray-700 text-gray-400 hover:border-cyan-400 hover:text-cyan-400"
                }`}
              >
                $ {section}
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center text-xs font-mono text-gray-500">
            <p>
              cursor position: {Math.round(mousePos.x * 100)}% /{" "}
              {Math.round(Math.abs(mousePos.y) * 100)}%
            </p>
          </div>
        </div>
      </div>

      {/* Cursor glow */}
      <div
        className="fixed w-64 h-64 bg-gradient-radial from-cyan-500/10 to-transparent rounded-full pointer-events-none z-0"
        style={{
          left: `${mousePos.x * 50 + 50}%`,
          top: `${mousePos.y * 50 + 50}%`,
          transform: "translate(-50%, -50%)",
          transition: "all 0.3s ease-out",
        }}
      />
    </div>
  );
};

export default Portfolio;
