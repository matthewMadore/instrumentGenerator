// 3rd party library imports
import * as Tone from 'tone'
import classNames from 'classnames'
import { List } from 'immutable'
//import React from 'react'
//import React, { useState } from 'react'

// project imports
import { Instrument, InstrumentProps } from '../Instruments'


/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Piano.
 ** ------------------------------------------------------------------------ */

interface ButtonProps {
  notesNameDisplay: string
  notesToPlay: string[] // chords
  idx: number
  keyboardKey: string
  passToButtons: {
    majorI?: string[]
    minorii?: string[]
    minoriii?: string[]
    majorIV?: string[]
    majorV?: string[]
    minorvi?: string[]
    diminishedvii?: string[]
    tonic?: string[]
    supertonic?: string[]
    mediant?: string[]
    subdominant?: string[]
    dominant?: string[]
    submediant?: string[]
    leadingTone?: string[]
    octave?: string[]
  }
}

// var player = new Tone.Player("cat1.wav");
// 	player.toMaster();

//    function startbuttonfunction() {
//       player.start();
//    }

// var C1 = new Tone.Player("C1.wav");
// C1.toDestination();
// var D1 = new Tone.Player("D1.wav");
// D1.toDestination();
// var E1 = new Tone.Player("E1.wav");
// E1.toDestination();
// var F1 = new Tone.Player("F1.wav")
// F1.toDestination();
// var G1 = new Tone.Player("G1.wav")
// G1.toDestination();
// var A1 = new Tone.Player("A1.wav")
// A1.toDestination();
// var B1 = new Tone.Player("B1.wav")
// B1.toDestination();
// var A2 = new Tone.Player("A2.wav")
// A2.toDestination();
// var B2 = new Tone.Player("B2.wav")
// B2.toDestination();
// var C2 = new Tone.Player("C2.wav")
// C2.toDestination();
// var D2 = new Tone.Player("D2.wav")
// D2.toDestination();
// var E2 = new Tone.Player("E2.wav")
// E2.toDestination();
// var F2 = new Tone.Player("F2.wav")
// F2.toDestination();
// var G2 = new Tone.Player("G2.wav")
// G2.toDestination();
// var A3 = new Tone.Player("A3.wav")
// A3.toDestination();
// var B3 = new Tone.Player("B3.wav")
// B3.toDestination();
// var C3 = new Tone.Player("C3.wav")
// C3.toDestination();
// var C5 = new Tone.Player("G5.wav")
// C5.toDestination();

const sampler = new Tone.Sampler({
	urls: {
    C1: 'C1.wav',
    D1: 'D1.wav',
    E1: 'E1.wav',
    F1: 'F1.wav',
    G1: 'G1.wav',
		A1: "A1.wav",
    B1: 'B1.wav',
    A2: 'A2.wav',
		B2: 'B2.wav',
    C2: 'C2.wav',
    D2: 'D2.wav',
    E2: 'E2.wav',
    F2: 'F2.wav',
    G2: 'G2.wav',
    A3: 'A3.wav',
    C5: 'G5.wav',
	},
	baseUrl: 'http://localhost:3000/matthewMadore/samples/',
	onload: () => {
    console.log("Loaded");
	}
}).toDestination();

function generateKeyToPlay (
  keyToBuild: string // 'A'
): List<ButtonProps> {

  const chromaticScale = [
    'A', // 0,
    'Bb', // 1
    'B', // 2
    'C', // 3
    'Db', // 4
    'D', // 5
    'Eb', // 6
    'E', // 7
    'F', // 8
    'Gb', // 9
    'G', // 10
    'Ab', // 11,
    'A', // 12,
    'Bb', // 13
    'B', // 14
    'C', // 15
    'Db', // 16z
    'D', // 17
    'Eb', // 18
    'E', // 19
    'F', // 20
    'Gb', // 21
    'G', // 22
    'Ab' // 23
  ]
  const chromaticScaleWithOctave = [
    'A1', // 0,
    'Bb1', // 1
    'B1', // 2
    'C1', // 3
    'Db1', // 4
    'D1', // 5
    'Eb1', // 6
    'E1', // 7
    'F1', // 8
    'Gb1', // 9
    'G1', // 10
    'Ab1', // 11
    'A2', // 12
    'Bb2', // 13
    'B2', // 14
    'C2', // 15
    'Db2', // 16
    'D2', // 17
    'Eb2', // 18
    'E2', // 19
    'F2', // 20
    'Gb2', // 21
    'G2', // 22
    'Ab2', // 23
    'A3', // 24
    'Bb3', // 25
    'B3', // 26
    'C3', // 27
    'Db3', // 28
    'D3', // 29
    'Eb3', // 30
    'E3', // 31
    'F3', // 32
    'Gb3', // 33
    'G3', // 34
    'Ab3' // 35
  ]

  const usersSelectedKey = chromaticScale.indexOf(keyToBuild)

  function getNote (number: number) {
    return chromaticScale[chromaticScale.indexOf(keyToBuild) + number]
  }

  function getNoteOctave (number: number) {
    return chromaticScaleWithOctave[usersSelectedKey + number]
  }
 
  const keyToPlay = List([
    {
      notesNameDisplay: `${getNote(0)}`,
      notesToPlay: [`${getNoteOctave(0)}`],
      idx: 1,
      keyboardKey: '1='
    },
    {
      notesNameDisplay: `${getNote(2)}`,
      notesToPlay: [`${getNoteOctave(2)}`],
      idx: 2,
      keyboardKey: '2='
    },
    {
      notesNameDisplay: `${getNote(4)}`,
      notesToPlay: [`${getNoteOctave(4)}`],
      idx: 3,
      keyboardKey: '3='
    },
    {
      notesNameDisplay: `${getNote(5)}`,
      notesToPlay: [`${getNoteOctave(5)}`],
      idx: 4,
      keyboardKey: '4='
    },
    {
      notesNameDisplay: `${getNote(7)}`,
      notesToPlay: [`${getNoteOctave(7)}`],
      idx: 5,
      keyboardKey: 'Q='
    },
    {
      notesNameDisplay: `${getNote(9)}`,
      notesToPlay: [`${getNoteOctave(9)}`],
      idx: 6,
      keyboardKey: 'W='
    },
    {
      notesNameDisplay: `${getNote(11)}1`,
      notesToPlay: [`${getNoteOctave(11)}`],
      idx: 7,
      keyboardKey: 'E='
    },
    {
      notesNameDisplay: `${getNote(0)}`,
      notesToPlay: [`${getNoteOctave(12)}`],
      idx: 8,
      keyboardKey: 'I='
    },
    {
      notesNameDisplay: `${getNote(2)}`,
      notesToPlay: [`${getNoteOctave(14)}`],
      idx: 9,
      keyboardKey: 'O='
    },
    {
      notesNameDisplay: `${getNote(4)}`,
      notesToPlay: [`${getNoteOctave(16)}`],
      idx: 10,
      keyboardKey: 'P='
    },
    {
      notesNameDisplay: `${getNote(5)}`,
      notesToPlay: [`${getNoteOctave(17)}`],
      idx: 11,
      keyboardKey: '[='
    },
    {
      notesNameDisplay: `${getNote(7)}`,
      notesToPlay: [`${getNoteOctave(19)}`],
      idx: 12,
      keyboardKey: 'K='
    },
    {
      notesNameDisplay: `${getNote(9)}`,
      notesToPlay: [`${getNoteOctave(21)}`],
      idx: 13,
      keyboardKey: 'L='
    },
    {
      notesNameDisplay: `${getNote(11)}`,
      notesToPlay: [`${getNoteOctave(23)}`],
      idx: 14,
      keyboardKey: ';='
    },
    {
      notesNameDisplay: `${getNote(12)}`,
      notesToPlay: [`${getNoteOctave(24)}`],
      idx: 15,
      keyboardKey: "'="
    }
  ])
  return keyToPlay as List<ButtonProps>
}
let newKeyToPlay = generateKeyToPlay('C')

let soundToPlay;

const keyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
  // console.log(event)
  soundToPlay = ["C5"]

  switch (event.code) {
  
    case 'Digit1': {
    // soundToPlay = C1;
     // sampler.triggerAttack(newKeyToPlay.get(0)?.notesToPlay!)
      soundToPlay = newKeyToPlay.get(0)?.notesToPlay!
      break
    }
    case 'Digit2': {
      // soundToPlay = D1;
      soundToPlay = newKeyToPlay.get(1)?.notesToPlay!
      break
    }
    case 'Digit3': {
      // soundToPlay = E1
      soundToPlay = newKeyToPlay.get(2)?.notesToPlay!
      break
    }
    case 'Digit4': {
      // soundToPlay = F1
      soundToPlay = newKeyToPlay.get(3)?.notesToPlay!
      break
    }
    case 'KeyQ': {
      // soundToPlay = G1
      soundToPlay = newKeyToPlay.get(4)?.notesToPlay!
      break
    }
    case 'KeyW': {
      // soundToPlay = A1
      soundToPlay = newKeyToPlay.get(5)?.notesToPlay!
      break
    }
    case 'KeyE': {
      // soundToPlay = B1
      soundToPlay = newKeyToPlay.get(6)?.notesToPlay!
      break
    }
    case 'KeyI': {
      // soundToPlay = C2
      soundToPlay = newKeyToPlay.get(7)?.notesToPlay!
      break
    }
    case 'KeyO': {
    //  soundToPlay = D2
     soundToPlay = newKeyToPlay.get(8)?.notesToPlay!
      break
    }
    case 'KeyP': {
      // soundToPlay = E2
      soundToPlay = newKeyToPlay.get(9)?.notesToPlay!
      break
    }
    case 'BracketLeft': {
      // soundToPlay = F2
      soundToPlay = newKeyToPlay.get(10)?.notesToPlay!
      break
    }
    case 'KeyK': {
    //  soundToPlay = G2
     soundToPlay = newKeyToPlay.get(11)?.notesToPlay!
      break
    }
    case 'KeyL': {
      // soundToPlay = A3
      soundToPlay = newKeyToPlay.get(12)?.notesToPlay!
      break
    }
    case 'Semicolon': {
      // soundToPlay = B3
      soundToPlay = newKeyToPlay.get(13)?.notesToPlay!
      break
    }
    case 'Quote': {
    //  soundToPlay = C3
     soundToPlay = newKeyToPlay.get(14)?.notesToPlay!
      break
    }
    default: {
    //  soundToPlay = C5
     soundToPlay = newKeyToPlay.get(15)?.notesToPlay!
      break
    }
  
}
  //soundToPlay.start();
  sampler.triggerAttackRelease(soundToPlay, '0.35')
  //return soundToPlay
}

// const keyUpHandler = (event: React.KeyboardEvent<HTMLDivElement>, sampler: Tone.Sampler) => {
//   let soundToPlay: string[] | undefined
//   // console.log(event)
//   switch (event.code) {
    
//     case 'Digit1': {
//      // soundToPlay = ['C1'];
//      // sampler.triggerAttack(newKeyToPlay.get(0)?.notesToPlay!)
//       soundToPlay = newKeyToPlay.get(0)?.notesToPlay!
//       break
//     }
//     case 'Digit2': {
//       //soundToPlay = ['D1'];
//       soundToPlay = newKeyToPlay.get(1)?.notesToPlay!
//       break
//     }
//     case 'Digit3': {
//      // soundToPlay = ['E1']
//       soundToPlay = newKeyToPlay.get(2)?.notesToPlay!
//       break
//     }
//     case 'Digit4': {
//       //soundToPlay = ['F1']
//       soundToPlay = newKeyToPlay.get(3)?.notesToPlay!
//       break
//     }
//     case 'KeyQ': {
//       // soundToPlay = ['G1']
//       soundToPlay = newKeyToPlay.get(4)?.notesToPlay!
//       break
//     }
//     case 'KeyW': {
//       // soundToPlay = ['A1']
//       soundToPlay = newKeyToPlay.get(5)?.notesToPlay!
//       break
//     }
//     case 'KeyE': {
//       // soundToPlay = ['B1']
//       soundToPlay = newKeyToPlay.get(6)?.notesToPlay!
//       break
//     }
//     case 'KeyI': {
//       //soundToPlay = ['C2']
//       soundToPlay = newKeyToPlay.get(7)?.notesToPlay!
//       break
//     }
//     case 'KeyO': {
//     //  soundToPlay = ['D2']
//     soundToPlay = newKeyToPlay.get(8)?.notesToPlay!
//       break
//     }
//     case 'KeyP': {
//       // soundToPlay = ['E2']
//       soundToPlay = newKeyToPlay.get(9)?.notesToPlay!
//       break
//     }
//     case 'BracketLeft': {
//       //soundToPlay = ['F2']
//       soundToPlay = newKeyToPlay.get(10)?.notesToPlay!
//       break
//     }
//     case 'KeyK': {
//     //  soundToPlay = ['G2']
//     soundToPlay = newKeyToPlay.get(11)?.notesToPlay!
//       break
//     }
//     case 'KeyL': {
//       // soundToPlay = ['A3']
//       soundToPlay = newKeyToPlay.get(12)?.notesToPlay!
//       break
//     }
//     case 'Semicolon': {
//      // soundToPlay = ['B3']
//       soundToPlay = newKeyToPlay.get(13)?.notesToPlay!
//       break
//     }
//     case 'Quote': {
//      // soundToPlay = ['C3']
//      soundToPlay = newKeyToPlay.get(14)?.notesToPlay!
//       break
//     }
//     default: {
//      // soundToPlay = ['C5']
//      soundToPlay = newKeyToPlay.get(15)?.notesToPlay!
//       break
//     }
//   }
//   sampler.triggerAttackRelease(soundToPlay, '0.15')
  
// }

//let passToButtons = setKeyBoardKeys(newKeyToPlay)

export function ChordOrNoteButton ({
  notesNameDisplay,
  idx,
  keyboardKey
}: // passToButtons,
ButtonProps): JSX.Element {

  let soundToPlay: string[]
  soundToPlay = ['C5']
  //const [sampler, setSampler] = MakeSampler()
  const displayString = `${keyboardKey}${notesNameDisplay}`

  const topPlacement = (): number => {
    if (idx <= 4 || (idx >= 8 && idx <= 11)) {
      // left 1st row
      return 0
    } else {
      // left 2nd row
      return 4
    }
  }

  const leftPlacement = (): number => {
    if (idx <= 4) {
      // top left
      return idx * 6 - 6
    } else if (idx >= 8 && idx <= 11) {
      //top right
      return idx * 6 - 6 * 3
    } else if (idx >= 5 && idx <= 8) {
      // bottom left
      return idx * 6 - 6.8 * 4
    } else {
      // bottom right
      return idx * 6 - 10 * 4
    }
  }
  console.log(idx)

  return (
    <div
      key={idx}
      onKeyDown={(e)=>keyDownHandler(e)}
      //onKeyUp={(e)=>keyUpHandler(e,sampler)}

      tabIndex={0}
      className={classNames('ba pointer absolute dim blue yellow bg-red h1')}
      style={{
        // CSS
        display: 'flex',
        top: `${topPlacement()}rem`,
        left: `${leftPlacement()}rem`,
        zIndex: 0,
        height: '3rem',
        width: '5rem',
        padding: 0.1,
        marginLeft: '0.25rem',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
      }}
    >
      {displayString}
    </div>
  )
}

function Chords_and_Notes_Generator ({
  synth,
  setSynth
}: InstrumentProps): JSX.Element {
  const setOscillator = (newType: Tone.ToneOscillatorType) => {
    setSynth(oldSynth => {
      oldSynth.disconnect()

      return new Tone.Synth({
        oscillator: { type: newType } as Tone.OmniOscillatorOptions
      }).toDestination()
    })
  }

  return (
    <div className='pv4 bg-near-black'>
      <div
        className='pb2 pl4 white'
        style={{
          top: '0rem',
          left: '5rem'
        }}
      >
        Instructions - Select Any Note Button to start the instrument
      </div>
      <div className='relative dib w-100 ml4' style={{ height: '43vh' }}>
        {newKeyToPlay.map(c => {
          return (
            <ChordOrNoteButton
              notesNameDisplay={c.notesNameDisplay} //react key
              notesToPlay={c.notesToPlay}
              idx={c.idx}
              keyboardKey={c.keyboardKey}
              passToButtons={c.passToButtons}
            />
          )
        })}
      </div>
      {}
    </div>
  )
}

export const matthewMadore_Instrument = new Instrument(
  'ChordNoteGenerator',
  Chords_and_Notes_Generator
)
