import { CreateTypes } from 'canvas-confetti'
import React, { FC, useCallback, useEffect, useRef } from 'react'
import ReactCanvasConfetti from 'react-canvas-confetti'

const canvasStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  zIndex: 10,
} as React.CSSProperties

// interface FireCrackerProps {
//   isLoading: boolean | null
// }

export const FireCracker: FC = () => {
  const refAnimationInstance = useRef<CreateTypes | null>(null)

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance
  }, [])

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance &&
      refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      })
  }, [])

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 46,
      startVelocity: 55,
      shapes: ['circle', 'square', 'square'],
    })

    makeShot(0.2, {
      spread: 80,
      shapes: ['circle', 'square', 'square'],
    })

    makeShot(0.35, {
      spread: 120,
      decay: 0.91,
      scalar: 0.8,
      shapes: ['circle', 'square', 'square'],
    })

    makeShot(0.1, {
      spread: 140,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      shapes: ['circle', 'square', 'square'],
    })

    makeShot(0.1, {
      spread: 140,
      startVelocity: 45,
      shapes: ['circle', 'square', 'square'],
    })
  }, [makeShot])

  useEffect(() => {
    setTimeout(() => {
      fire()
    }, 1500)
  }, [fire])

  // view
  return (
    <>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </>
  )
}
