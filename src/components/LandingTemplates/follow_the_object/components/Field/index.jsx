import * as React from 'react';
import { useState, useEffect, useRef } from "react";
import { Info } from "../Info";
import * as info from "../Info/style.module.scss";
import * as field from "./field.module.scss";
import { SettingsStart } from "../Settings";
import { makeStartedPosition, random, makePortal, generateSteps } from "../../utils/utils";
export const FieldStart = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [field_size, setFieldSize] = useState(4);
  const [steps, setSteps] = useState(1);
  const [speed, setSpeed] = useState(3);
  const [remember_path, setRememberPath] = useState(false);
  const [subs, setSubs] = useState(false)
  const [langRu, setLangRu] = useState(true);
  const [, setLangEn] = useState(false);
  const [portal, setPortal] = useState(false);
  const [directions, setDirections] = useState(true);
  const [cardinal_directions, setCardinalDirections] = useState(false);
  const [field_visible, setFieldVisible] = useState(true);
  const [object_type, setObjectType] = useState(2);
  const [startPosition, setPositionStart] = useState(5);
  const [startingProcess, setStartingProcess] = useState(false)
  const [endingProcess, setEndingProcess] = useState(false)
  const [generated_steps, setGeneratedSteps] = useState({words: [], indexes: [], portals: []})
  const [portals, setPortals] = useState([])
  const [rememberedStep, setRememeberedStep] = useState(0)
  const [userClicked, setUserClicked] = useState(false)
  const [userAnswer, setUserAnswer] = useState(-1)
  const [isAnswerRight, setIsAnswerRight] = useState(false)

  const [counter, setCounter] = useState(0)
  const [arrow, setArrow] = useState(generated_steps.words[counter]);
  const [delay, setDelay] = useState(3)
  const [delayProcess, setDelayProcess] = useState(false)

  const mountedAnimation = `${info.mountedAnimation}`;
  const unmountedAnimation = `${info.unmountedAnimation}`;
  const [animate, setAnimate] = useState(false);

  const fieldEl = useRef();

  const dict_commands = {
    up: {
      classname: `${info.top}`,
      direction: {
        rus: {
          word: 'вверх',
          audio: {
            1: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/1/rus/up.mp3',
            2: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/2/rus/up.mp3',
            3: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/3/rus/up.mp3',
            4: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/4/rus/up.mp3',
            5: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/5/rus/up.mp3'
          }
        },
        eng: {
          word: 'up',
          audio: {
            1: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/1/eng/up.mp3',
            2: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/2/eng/up.mp3',
            3: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/3/eng/up.mp3',
            4: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/4/eng/up.mp3',
            5: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/5/eng/up.mp3'
          }
        }
      },
      cardinal_direction: {
        rus: {
          word: 'север',
          audio: {
            1: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/1/rus/north.mp3',
            2: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/2/rus/north.mp3',
            3: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/3/rus/north.mp3',
            4: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/4/rus/north.mp3',
            5: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/5/rus/north.mp3'
          }
        },
        eng: {
          word: 'north',
          audio: {
            1: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/1/eng/north.mp3',
            2: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/2/eng/north.mp3',
            3: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/3/eng/north.mp3',
            4: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/4/eng/north.mp3',
            5: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/5/eng/north.mp3'
          }
        }
      }
    },
    down: {
      classname: `${info.bottom}`,
      direction: {
        rus: {
          word: 'вниз',
          audio: {
            1: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/1/rus/down.mp3',
            2: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/2/rus/down.mp3',
            3: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/3/rus/down.mp3',
            4: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/4/rus/down.mp3',
            5: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/5/rus/down.mp3'
          }
        },
        eng: {
          word: 'down',
          audio: {
            1: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/1/eng/down.mp3',
            2: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/2/eng/down.mp3',
            3: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/3/eng/down.mp3',
            4: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/4/eng/down.mp3',
            5: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/5/eng/down.mp3'
          }
        }
      },
      cardinal_direction: {
        rus: {
          word: 'юг',
          audio: {
            1: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/1/rus/south.mp3',
            2: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/2/rus/south.mp3',
            3: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/3/rus/south.mp3',
            4: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/4/rus/south.mp3',
            5: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/5/rus/south.mp3'
          }
        },
        eng: {
          word: 'south',
          audio: {
            1: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/1/eng/south.mp3',
            2: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/2/eng/south.mp3',
            3: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/3/eng/south.mp3',
            4: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/4/eng/south.mp3',
            5: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/5/eng/south.mp3'
          }
        }
      }
    },
    right: {
      classname: `${info.right}`,
      direction: {
        rus: {
          word: 'вправо',
          audio: {
            1: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/1/rus/right.mp3',
            2: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/2/rus/right.mp3',
            3: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/3/rus/right.mp3',
            4: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/4/rus/right.mp3',
            5: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/5/rus/right.mp3'
          }
        },
        eng: {
          word: 'right',
          audio: {
            1: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/1/eng/right.mp3',
            2: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/2/eng/right.mp3',
            3: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/3/eng/right.mp3',
            4: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/4/eng/right.mp3',
            5: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/5/eng/right.mp3'
          }
        }
      },
      cardinal_direction: {
        rus: {
          word: 'восток',
          audio: {
            1: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/1/rus/east.mp3',
            2: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/2/rus/east.mp3',
            3: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/3/rus/east.mp3',
            4: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/4/rus/east.mp3',
            5: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/5/rus/east.mp3'
          }
        },
        eng: {
          word: 'east',
          audio: {
            1: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/1/eng/east.mp3',
            2: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/2/eng/east.mp3',
            3: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/3/eng/east.mp3',
            4: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/4/eng/east.mp3',
            5: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/5/eng/east.mp3'
          }
        }
      }
    },
    left: {
      classname: `${info.left}`,
      direction: {
        rus: {
          word: 'влево',
          audio: {
            1: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/1/rus/left.mp3',
            2: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/2/rus/left.mp3',
            3: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/3/rus/left.mp3',
            4: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/4/rus/left.mp3',
            5: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/5/rus/left.mp3'
          }
        },
        eng: {
          word: 'left',
          audio: {
            1: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/1/eng/left.mp3',
            2: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/2/eng/left.mp3',
            3: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/3/eng/left.mp3',
            4: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/4/eng/left.mp3',
            5: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/5/eng/left.mp3'
          }
        }
      },
      cardinal_direction: {
        rus: {
          word: 'запад',
          audio: {
            1: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/1/rus/west.mp3',
            2: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/2/rus/west.mp3',
            3: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/3/rus/west.mp3',
            4: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/4/rus/west.mp3',
            5: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/5/rus/west.mp3'
          }
        },
        eng: {
          word: 'west',
          audio: {
            1: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/1/eng/west.mp3',
            2: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/2/eng/west.mp3',
            3: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/3/eng/west.mp3',
            4: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/4/eng/west.mp3',
            5: 'https://fs.advance.ru/landing-pages/free/follow_the_object/audio/5/eng/west.mp3'
          }
        }
      }
    }
  };

  const dict_speed = {
    1: {
      words_per_min: 15,
      words_per_min_text: '15-20 слов/мин.'
    },
    2: {
      words_per_min: 25,
      words_per_min_text: '25-35 слов/мин.'
    },
    3: {
      words_per_min: 50,
      words_per_min_text: '50-60 слов/мин.'
    },
    4: {
      words_per_min: 110,
      words_per_min_text: '110-120 слов/мин.'
    },
    5: {
      words_per_min: 170,
      words_per_min_text: '170-180 слов/мин.'
    }
  };

  const dict_steps = {
    1: 10,
    2: 25,
    3: 50
  }

  const dict_fieldsizes = {
    3: {
      classname: `${field.field} ${field._3x3}`
    },
    4: {
      classname: `${field.field} ${field._4x4}`
    },
    5: {
      classname: `${field.field}`
    }
  }

  const dict_objects = {
    1: {
      classname: `${field.alien}`
    },
    2: {
      classname: `${field.rocket}`
    },
    3: {
      classname: `${field.ghost}`
    }
  }

  const handleBtnStart = () => {
    setIsStarted(prevState => !prevState);

    if (!isStarted) {
      setCounter(0)
      setArrow(0)
      setDelay(3)
      setDelayProcess(false)
      setUserClicked(false)
      setStartingProcess(false)
      setEndingProcess(false)
      setIsAnswerRight(false)
      setPortals([])
    }
  }
  const handleBtnMinus = (val, func, min) => {
    if (val > min) {
      func(prev => prev - 1)
    }
  };
  const handleBtnPlus = (val, func, max) => {
    if (val <= max) {
      func(prev => prev + 1)
    }
  };
  const handleBtnObject = (obj) => {
    setObjectType(obj)
  }
  const handleUserClick = (obj) => {
    setUserClicked(true)
    setUserAnswer(obj)
    setIsStarted(false)

    let right_answer;

    if (!remember_path) {
      right_answer = generated_steps.indexes[dict_steps[steps]-1];
    } else {
      if (rememberedStep === 1) {
        right_answer = generated_steps.indexes[dict_steps[steps]-2];
      } else {
        right_answer = generated_steps.indexes[dict_steps[steps]-3];
      }
    }

    if (obj === right_answer) {
      setIsAnswerRight(true)
    } else {
      setIsAnswerRight(false)
    }
  }
  const handleSettingsClick = () => {
    setIsStarted(true)
    setCounter(0)
    setArrow(0)
    setDelay(3)
    setDelayProcess(false)
    setUserClicked(false)
    setStartingProcess(false)
    setEndingProcess(false)
    setIsAnswerRight(false)
  };

  useEffect(() => {
    if (isStarted && !arrow) {
      setTimeout(() => {
        if (delay > 1) {
          setDelay(delay => delay - 1)
        } else {
          setDelay(1)
          setDelayProcess(true)
        }
      },1000/3)
    }
  },[isStarted, delay, delayProcess, arrow])

  useEffect(() => {
    if (isStarted && !delayProcess) {
      const pos = portal ? makePortal(0, field_size * field_size - 1) : []
      setPortals(pos)
      const cur = makeStartedPosition(0, field_size * field_size - 1, pos)
      setPositionStart(cur)
      const gs = generateSteps(field_size, cur, dict_steps[steps], pos);
      setGeneratedSteps(gs)
      if (remember_path) {
        let rand = random(1,2);
        setRememeberedStep(rand);
      }
      setStartingProcess(true)
    }
  }, [isStarted, arrow]);

  useEffect(() => {
    if (isStarted && startingProcess && delayProcess) {
      setTimeout(() => {
        if (counter >= generated_steps.words.length) {
          setStartingProcess(false)
          setEndingProcess(true)
          return;
        }
        setArrow(arrow => arrow = generated_steps.words[counter])
        setCounter((counter) => counter + 1)
        setAnimate(prevState => !prevState)
      }, 1000*60/`${dict_speed[speed].words_per_min}`)
    }
  }, [counter, isStarted, startingProcess, animate, delayProcess]);

  const indents = [];
  for (let i = 0; i < field_size*field_size; i++) {
    let portal_start = portals.length && i === portals[0] ? `${field.portalRed}` : ''
    let portal_end = portals.length && i === portals[1] ? `${field.portalViolet}` : ''
    let object_type_classname = (i === startPosition && isStarted) && !arrow && !userClicked ? dict_objects[object_type].classname : ''
    let object_disappeared = endingProcess && !userClicked ? `${field.find} ${dict_objects[object_type].classname}` : ''
    let user_answer_success = userClicked && isAnswerRight && (userAnswer === i) ? `${field.success} ${dict_objects[object_type].classname}` : ''
    let user_answer_error = userClicked && !isAnswerRight && (userAnswer === i) ? `${field.error} ${field.cake1}` : ''
    let answer_right = userClicked && !isAnswerRight && (generated_steps.indexes[dict_steps[steps]-1] === i) ? `${field.right} ${dict_objects[object_type].classname}` : ''

    let portal_classnames;
    portal_classnames = `${portal_start} ${portal_end}`

    if (portal && arrow && !field_visible) {
      portal_classnames = ''
    } else {
      portal_classnames = `${portal_start} ${portal_end}`
    }

    if (userClicked) {
      portal_classnames = `${portal_start} ${portal_end}`
    }

    indents.push(<button aria-label={"button"} disabled={!isStarted || !endingProcess || userClicked} className={`${portal_classnames} ${object_type_classname} ${object_disappeared} ${user_answer_success} ${user_answer_error} ${answer_right}`} key={i} onClick={()=>{handleUserClick(i)}}></button>);
  }

  return (
    <>
      <Info
        isStarted={isStarted}
        word={arrow && dict_commands[arrow][cardinal_directions ? 'cardinal_direction' : 'direction'][langRu ? 'rus' : 'eng'].word}
        classname={arrow && dict_commands[arrow].classname}
        subs={subs}
        audio={arrow && dict_commands[arrow][cardinal_directions ? 'cardinal_direction' : 'direction'][langRu ? 'rus' : 'eng'].audio[speed]}
        counter={counter}
        rememberedStep={rememberedStep}
        delay={delay}
        animate={animate}
        mountedAnimation={mountedAnimation}
        unmountedAnimation={unmountedAnimation}
        isProcessing={arrow}
        isProcessEnded={endingProcess}
        isUserClicked={userClicked}
        isAnswerRight={isAnswerRight}
      />
      <div className={field_visible ? `${dict_fieldsizes[field_size].classname}` : `${dict_fieldsizes[field_size].classname} ${field.invisible}`} ref={fieldEl}>
        {
          indents.map((item) => {
            return <>{item}</>
          })
        }
      </div>
      <SettingsStart
        isStarted={isStarted}
        setIsStarted={handleBtnStart}
        isUserClicked={userClicked}
        isAnswerRight={isAnswerRight}
        field_size={field_size}
        setFieldSizeMin={()=>{handleBtnMinus(field_size, setFieldSize, 3)}}
        setFieldSizePlus={()=>{handleBtnPlus(field_size, setFieldSize, 4)}}
        steps={dict_steps[steps]}
        setStepsMin={()=>{handleBtnMinus(steps, setSteps, 1)}}
        setStepsPlus={()=>{handleBtnPlus(steps, setSteps, 2)}}
        speed={speed}
        speedWords={dict_speed[speed].words_per_min_text}
        setSpeedMin={()=>{handleBtnMinus(speed, setSpeed, 1)}}
        setSpeedPlus={()=>{handleBtnPlus(speed, setSpeed, 4)}}
        remember_path={remember_path}
        setRememberPath={()=>{setRememberPath(remember_path => !remember_path)}}
        subs={subs}
        setSubs={()=>{setSubs(subs => !subs)}}
        langRu={langRu}
        setLangRu={()=>{setLangRu(langRu => !langRu);setLangEn(langEn => !langEn)}}
        setLangEn={()=>{setLangEn(langEn => !langEn);setLangRu(langRu => !langRu)}}
        portal={portal}
        setPortal={()=>{setPortal(portal => !portal)}}
        directions={directions}
        setDirections={()=>{setDirections(directions => !directions);setCardinalDirections(cardinal_directions => !cardinal_directions)}}
        setCardinalDirections={()=>{setCardinalDirections(cardinal_directions => !cardinal_directions);setDirections(directions => !directions)}}
        field_visible={field_visible}
        setFieldVisible={()=>{setFieldVisible(field_visible => !field_visible)}}
        object_type={object_type}
        setObjectType={(obj)=>{handleBtnObject(obj)}}
        setTryAgain={handleSettingsClick}
        isProcessEnded={endingProcess}
      />
    </>
  );
};
