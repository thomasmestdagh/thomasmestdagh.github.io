"use client";

import styles from "./Pacman.module.css";
import { useState, useEffect, useRef } from "react";

interface Vector2 {
  x: number;
  y: number;
}

export default function Pacman() {
  const maxSpeed = 10;

  const svgContainer = useRef<SVGSVGElement>(null);

  const [score, setScore] = useState(0);
  const [pointerPosition, setPointerPosition] = useState<Vector2>({
    x: 0,
    y: 0,
  });
  const [shipPosition, setShipPosition] = useState<Vector2>({ x: 50, y: 50 });
  const [shipRotation, setShipRotation] = useState<number>(45);
  const [shipDirection, setShipDirection] = useState<Vector2>({ x: 0, y: 0 });
  const [pelletPosition, setPelletPosition] = useState<Vector2>({ x: 0, y: 0 });

  const pointerPositionRef = useRef<Vector2>({ x: 0, y: 0 });
  const shipPositionRef = useRef<Vector2>({ x: 0, y: 0 });
  const shipDirectionRef = useRef<Vector2>({ x: 0, y: 0 });
  const pelletPositionRef = useRef<Vector2>({ x: 0, y: 0 });

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    setPointerPosition({ x: event.pageX, y: event.pageY });
  }

  function updatePelletPosition() {
    const minX = 100;
    const maxX = (svgContainer.current?.clientWidth || 1024) - 200;
    const minY = 100;
    const maxY = (svgContainer.current?.clientHeight || 764) - 200;
    const pelletPositionX = Math.floor(Math.random() * maxX) + minX;
    const pelletPositionY = Math.floor(Math.random() * maxY) + minY;
    setPelletPosition({ x: pelletPositionX, y: pelletPositionY });
  }

  function mainLoop() {
    setShipDirection({
      x: pointerPositionRef.current.x - shipPositionRef.current.x,
      y: pointerPositionRef.current.y - shipPositionRef.current.y,
    });

    const directionLength = getVectorLength(shipDirectionRef.current);
    if (directionLength < 2) return requestAnimationFrame(mainLoop);
    const normalizedDirection = getVectorNormalized(
      shipDirectionRef.current,
      directionLength
    );

    const shipMovement = {
      x: clamp(
        (normalizedDirection.x * directionLength) / 50,
        -maxSpeed,
        maxSpeed
      ),
      y: clamp(
        (normalizedDirection.y * directionLength) / 50,
        -maxSpeed,
        maxSpeed
      ),
    };

    setShipRotation((rotateToDirection(normalizedDirection) * 180) / Math.PI);

    setShipPosition(() => {
      return {
        x: shipPositionRef.current.x + shipMovement.x,
        y: shipPositionRef.current.y + shipMovement.y,
      };
    });

    //collisionCheck
    if (
      circleCollision(shipPositionRef.current, 30, pelletPositionRef.current, 5)
    ) {
      console.log("collision");
      setScore((score) => score + 1);
      updatePelletPosition();
    }

    requestAnimationFrame(mainLoop);
  }

  function getVectorLength(vec: Vector2) {
    return Math.sqrt(vec.x * vec.x + vec.y * vec.y);
  }

  function getVectorNormalized(vec: Vector2, length: number) {
    return { x: vec.x / length, y: vec.y / length };
  }

  function clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
  }

  function rotateToDirection(dir: Vector2) {
    return Math.atan2(dir.y, dir.x);
  }

  function circleCollision(
    position1: Vector2,
    radius1: number,
    position2: Vector2,
    radius2: number
  ) {
    const difference = {
      x: position2.x - position1.x,
      y: position2.y - position1.y,
    };

    const distance = getVectorLength(difference);
    return distance <= radius1 + radius2;
  }

  useEffect(() => {
    requestAnimationFrame(mainLoop);
    updatePelletPosition();
  }, []);

  useEffect(() => {
    pointerPositionRef.current = pointerPosition;
  }, [pointerPosition]);

  useEffect(() => {
    shipPositionRef.current = shipPosition;
  }, [shipPosition]);

  useEffect(() => {
    shipDirectionRef.current = shipDirection;
  }, [shipDirection]);

  useEffect(() => {
    pelletPositionRef.current = pelletPosition;
  }, [pelletPosition]);

  return (
    <div className={styles.container} onPointerMove={handlePointerMove}>
      {/* Pacman */}
      <p className={styles.score}>Score: {score}</p>
      <div
        className={styles.spaceShip}
        style={{
          rotate: `${shipRotation}deg`,
          top: shipPosition.y,
          left: shipPosition.x,
        }}
      >
        <img src="./images/pacman.svg" alt="" />
      </div>

      <svg className={styles.svgItem} ref={svgContainer}>
        <line
          id="line"
          x1={pointerPosition.x}
          y1={pointerPosition.y}
          x2={shipPosition.x}
          y2={shipPosition.y}
          strokeDasharray="3,10"
          className={styles.dottedLine}
        />
        <ellipse
          id="outer-circle"
          cx={pointerPosition.x}
          cy={pointerPosition.y}
          rx="30"
          ry="30
            "
          className={styles.outerCircle}
        ></ellipse>
        <ellipse
          id="inner-circle"
          cx={pointerPosition.x}
          cy={pointerPosition.y}
          rx="1"
          ry="1"
          className={styles.innerCircle}
        ></ellipse>
        <ellipse
          id="pellet"
          cx={pelletPosition.x}
          cy={pelletPosition.y}
          rx="8"
          ry="8"
          className={styles.pellet}
        ></ellipse>
      </svg>
    </div>
  );
}
