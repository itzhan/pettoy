import { useState, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faVolumeUp,
  faVolumeMute,
  faExpand,
} from "@fortawesome/free-solid-svg-icons";
import displayVideo from "../../assets/display.mp4";

const VideoSectionContainer = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23000" opacity="0.02"/><circle cx="75" cy="75" r="1" fill="%23000" opacity="0.02"/><circle cx="50" cy="10" r="1" fill="%23000" opacity="0.02"/><circle cx="10" cy="90" r="1" fill="%23000" opacity="0.02"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    pointer-events: none;
  }
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: #f0834c;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 50px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const VideoContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  background: #000;

  &::before {
    content: "";
    display: block;
    padding-top: 56.25%; /* 16:9 aspect ratio */
  }
`;

const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const VideoElement = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #f0834c, #ff6b35);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  text-align: center;
`;

const PlayButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 3px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s;
  backdrop-filter: blur(10px);
  margin-bottom: 20px;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: white;
    transform: scale(1.1);
  }
`;

const VideoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: 600;
`;

const VideoDescription = styled.p`
  font-size: 1rem;
  opacity: 0.9;
  max-width: 400px;
`;

const VideoControls = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;

  ${VideoContainer}:hover & {
    opacity: 1;
  }
`;

const ControlButton = styled.button`
  background: rgba(0, 0, 0, 0.6);
  border: none;
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  const handleVideoClick = () => {
    handlePlayPause();
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  return (
    <VideoSectionContainer>
      <SectionContainer>
        <SectionTitle>See Our Products in Action</SectionTitle>
        <SectionSubtitle>
          Watch how our premium pet toys bring joy and excitement to pets around
          the world. From interactive puzzles to comfort toys, see the
          difference quality makes.
        </SectionSubtitle>

        <VideoContainer
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          <VideoWrapper>
            <VideoElement
              ref={videoRef}
              onClick={handleVideoClick}
              onEnded={handleVideoEnded}
              muted={isMuted}
            >
              <source src={displayVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </VideoElement>

            {!isPlaying && (
              <VideoPlaceholder>
                <PlayButton onClick={handlePlayPause}>
                  <FontAwesomeIcon icon={faPlay} />
                </PlayButton>
                <VideoTitle>Premium Pet Toys Showcase</VideoTitle>
                <VideoDescription>
                  Discover how our innovative designs create lasting happiness
                  for pets and peace of mind for owners.
                </VideoDescription>
              </VideoPlaceholder>
            )}
          </VideoWrapper>

          {(showControls || !isPlaying) && (
            <VideoControls>
              <ControlButton onClick={handlePlayPause}>
                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
              </ControlButton>
              <div>
                <ControlButton onClick={handleMuteToggle}>
                  <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
                </ControlButton>
                <ControlButton onClick={handleFullscreen}>
                  <FontAwesomeIcon icon={faExpand} />
                </ControlButton>
              </div>
            </VideoControls>
          )}
        </VideoContainer>
      </SectionContainer>
    </VideoSectionContainer>
  );
};

export default VideoSection;
