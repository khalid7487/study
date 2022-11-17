import React, { useEffect, useRef, useState } from 'react';

import  Sync from "../../../../assets/watch/sync.png";
import  SyncDisabled from "../../../../assets/watch/sync-disabled.png";
import  playIcon from "../../../../assets/watch/play.png";
import  playRoundIcon from "../../../../assets/watch/play-round.png";
import  pauseIcon from "../../../../assets/watch/pause.png";
import  soundOnIcon from "../../../../assets/watch/sound-on.png";
import  soundOffIcon from "../../../../assets/watch/sound-off.png";
import  fullscreenIcon from "../../../../assets/watch/full-screen.png";
import  prevIcon from "../../../../assets/watch/prev.png";
import  nextIcon from "../../../../assets/watch/next.png";
import  locationIcon from "../../../../assets/watch/location.png";

import './CustomVideoPlayer.scss';

// video src will be video src , add src. title comes from json file, thumbnail , duration default zero   
const VideoPlayer = ({videoSrc, addsSrc, title, duration, thumbnail}) => {
  
  const [paused, setPaused] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [repeat, setRepeat] = useState(localStorage.getItem('video_repeat') === 'false' ? false : true);
  const [soundMuted, setSoundMuted] = useState(false);
  const [sound, setSound] = useState(localStorage.getItem("sound_level") || 100);
  const [element, setElement] = useState();
  const [countTime, setCountTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(duration);

  const [showThumbnail, setShowThumbnail] = useState(true);

  const [adsCountTime, setAdsCountTime] = useState(0);
  const [addsPaused, setAddsPaused] = useState(false);
  const [addsPausedTwo, setAddsPausedTwo] = useState(false);
  const [completeAdsNumOne, setCompleteAdsNumOne] = useState(false);
  const [completeAdsNumTwo, setCompleteAdsNumTwo] = useState(false);
  const [addsShow, setAddsShow] = useState(false);
  const [addsSkip, setAddsSkip] = useState(6);
  const [skipBorder, setSkipBorder] = useState("");

  const [contentHoverOff, setContentHoverOff] = useState(0);

  let video = useRef();
  let adsVideo = useRef();

  const handleTogglePlay = () => {

    setShowThumbnail(false);

    if (paused) {
      video.play();
      setElement(video);
      setPaused(false);
    } else {
      video.pause();
      setPaused(true);
    }
  }

  const handleAdsShowing = () =>{

    video.pause();
    adsVideo.play()
    setAddsShow(true);
    setPaused(true);

    let skipTimer;
    let skipTime = 5;
    let skipProgress;
    let skipProgressStart = 0;

    skipTimer = setInterval( () => {
        skipTime--; 
        setAddsSkip(skipTime);
        if (skipTime === 0) {
          clearTimeout(skipTimer);
        }
    }, 1000);

    skipProgress = setInterval( () => {
      skipProgressStart++;
      setSkipBorder(`conic-gradient(#d00000 ${skipProgressStart * 3.6}deg, #ededed 0deg)`);
      if (skipProgressStart > 99) {
        clearTimeout(skipProgress);
      }
    }, 48);
  }

  const handleAdsOff = () =>{
      video.play();
      adsVideo.pause()
      setPaused(false);
      setAddsShow(false);
  }



  // here video ads showing functionality 
  useEffect(()=>{
    
    let unmount = false;

      if(!completeAdsNumOne && !unmount){
        
          if(!paused  && countTime >  Math.floor(Math.random() * 1)  && !addsPaused ){
            handleAdsShowing();
          } else if(paused && adsCountTime > 99 ){
            handleAdsOff();
            setCompleteAdsNumOne(true);
            setAdsCountTime(0);
            setCompleteAdsNumTwo(true)
            setAddsPaused(true);
          }
      } else if(completeAdsNumTwo && !unmount){

            if(!paused  && countTime >(30 + Math.floor(Math.random() * 20) )  && !addsPausedTwo ){
              handleAdsShowing();
            } else if(paused && adsCountTime > 99 ){
              handleAdsOff();
              setCompleteAdsNumTwo(false);
              setAddsPausedTwo(true);
            }
      }

      return () =>{
        unmount= true;
      }
    
    },[countTime, adsCountTime] )


  const toggleFullscreen = () =>{
    video
      .requestFullscreen({ navigationUI: "show" })
      .then(() => setFullscreen(true))
      .catch((err) => err);
  }
  
  const onChangeDuration = (e) => {
    const time = videoDuration * (e.target.value / 100);
    video.currentTime = time;
    setCountTime(e.target.value);
  }


  const videoFormatHandler = (inp) =>  {
    const h = ~~(inp / 3600);
    const m = ~~((inp / 60) % 60);
    const s = ~~(inp % 60);
    if (h > 0) {
      return `${h > 9 ? "" + h : "0" + h}:${m > 9 ? "" + m : "0" + m}:${s > 9 ? "" + s : "0" + s
        }`;
    } else {
      return `${m > 9 ? "" + m : "0" + m}:${s > 9 ? "" + s : "0" + s}`;
    }
  }


  useEffect(() => {
      localStorage.setItem("video_repeat", repeat);
    }, [repeat]);

  let videoDurationSeek;
  if(countTime > 99 ){
    videoDurationSeek = parseInt(countTime - 3);
  }
  else if(countTime > 85 ){
    videoDurationSeek = parseInt(countTime - 4);
  }
  else if(countTime > 60 ){
    videoDurationSeek = parseInt(countTime - 3);
  }
  else if(countTime > 20 ){
    videoDurationSeek = parseInt(countTime - 2);
  }
  else{
    videoDurationSeek = parseInt(countTime - 1);
  }

  const handleAdsSkip = () => {
    video.play();
    adsVideo.pause();
    setPaused(false);
    setAddsShow(false);
    if(completeAdsNumOne){
      setCompleteAdsNumTwo(false);
    }
    if(!completeAdsNumTwo) {
      setCompleteAdsNumOne(true);
      setAdsCountTime(0);
      adsVideo.currentTime = 0;
      setCompleteAdsNumTwo(true);
    }
  }

    return (

      <>  
        <style type="text/css">
                {
                    `
                    .watch-video-player-content-section{
                      opacity: 0
                    }
                     .watch-video-player-section:hover .watch-video-player-content-section{
                      opacity: ${ !paused && contentHoverOff === 3 && 0 }  
                     }
                    `
                }
        </style>
        <div className={`watch-video-player-section ${showThumbnail && "watch-video-player-section-height"}`}>
          {
            showThumbnail && <div className="watch-video-player-thumbnail" onClick={handleTogglePlay}>
                <img src={thumbnail} alt="thumbnail"/>
            </div>
          }
          <video
                style={{ width: "100%", display: addsShow ? "none" : "block", cursor: "pointer" }}
                ref={(ref) => (video = ref)}
                src={videoSrc}
                loop={repeat}
                muted={soundMuted}
                onLoadedMetadata={() => {
                    if (!duration) {
                      setVideoDuration(video.duration);
                    }
                }}
                onTimeUpdate={() =>
                  setCountTime((100 / video.duration) * video.currentTime)
                }
                onClick={handleTogglePlay}
                onDoubleClick={toggleFullscreen}

                onMouseOver={ () => setTimeout( () => { setContentHoverOff(3) }, 3000)}
                onMouseOut={ () => {
                  setTimeout( () => { setContentHoverOff(0) }, 1000)
                  setTimeout( () => { setContentHoverOff(0) }, 2000)
                  setTimeout( () => { setContentHoverOff(0) }, 3000)
                  setContentHoverOff(0);
                }}
          />
          <video
                style={{ width: "100%", display: addsShow ? "block" : "none" }}
                ref={(ref) => (adsVideo = ref)}
                src={addsSrc}
                onTimeUpdate={() =>
                  setAdsCountTime((100 / adsVideo.duration) * adsVideo.currentTime)
                }
          />


          <div style={{opacity: paused && "1"}} className="watch-video-player-content-section">

              {
                !addsShow && 
                <div className="watch-video-player-title">
                    <h5>{title}</h5>
                </div>
              }
              
              {
                !addsShow &&
                <div onClick={handleTogglePlay} className="watch-video-player-pause" style={{background: !paused && "transparent"}}>
                    {paused && <img src={playRoundIcon} alt="playRoundIcon" />}
                </div>
              }


              <>          
                  {
                    addsShow &&
                    <div className="watch-video-player-skip">
                        {
                          addsSkip > 0 ? 
                          <button style={{background: skipBorder, cursor: "unset"}} disabled={addsSkip > 0 ? true : false}>
                              <span className="skip-timer">Skip Ad ({addsSkip}s)</span>
                          </button>
                          :
                          <button onClick={handleAdsSkip}>
                              <span className="skip-ads">Skip Ad <img src={nextIcon} alt="nextIcon" /></span>
                          </button>
                        }
                    </div>
                  }

                  {
                    addsShow &&
                    <div className="watch-video-skip-progress">
                      <input type="range" min={0} max={100} value={adsCountTime || 0} readOnly/>
                    </div>
                  }
              </>

              {
                ( !addsShow && !showThumbnail ) &&
                <div className="watch-video-player-footer" >
                    <div className="watch-video-player-top">
                        <div className="watch-video-player-top-content">
                          {videoFormatHandler(~~((videoDuration / 100) * countTime))}
                        </div>
                        
                        <div className="watch-video-player-top-seek">
                            <div className="top-seek-inner">
                                  <input type="range" min={0} max={100} value={countTime > 99 ? parseInt(countTime + 1) : ~~countTime} onChange={onChangeDuration}/>
                                  <span style={{left: `${videoDurationSeek}%`}}>
                                    <img src={locationIcon} alt="locationIcon" />
                                  </span>
                            </div>
                        </div>

                        <div className="watch-video-player-top-content">
                          {videoFormatHandler(~~videoDuration)}
                        </div>
                    </div>

                    <div className="watch-video-player-bottom">
                          <div className="watch-video-player-content">
                              <div onClick={() => setSoundMuted(!soundMuted)} >
                                  {
                                    soundMuted ? <img src={soundOffIcon} alt="soundOffIcon" /> : <img src={soundOnIcon} alt="soundOnIcon" />
                                  }
                              </div>
                              <input type="range" min={0} max={100} value={sound} onChange={(e) => setSound(e.target.value)}/>
                          </div>

                          <div className="watch-video-player-content watch-video-player-bottom-middle">
                              <div onClick={ () => video.currentTime -= 10 } >
                                  <img src={prevIcon} alt="prevIcon" />
                              </div>
                              <div onClick={handleTogglePlay} className="watch-video-player-bottom-pause">
                                  {paused ? (
                                    <img src={playIcon} alt="playIcon" />
                                    ) : (
                                    <img src={pauseIcon} alt="pauseIcon" />
                                  )}
                              </div>
                              <div onClick={ () => video.currentTime += 10 } >
                                  <img src={nextIcon} alt="nextIcon" />
                              </div>
                          </div>

                          <div className="watch-video-player-content">
                            <div onClick={() => setRepeat(!repeat)}>
                                {
                                  repeat ? <img src={Sync} alt="Sync" />  : <img src={SyncDisabled} alt="SyncDisabled" />
                                }
                            </div>
                            <div onClick={toggleFullscreen} className="watch-video-player-full-screen">
                                <img src={fullscreenIcon} alt="fullscreenIcon" />
                            </div>
                          </div>
                    </div>
                </div>
              }
          </div>

        </div>
      </>
    );
};

export default VideoPlayer;

