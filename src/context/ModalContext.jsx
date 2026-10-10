import { createContext, useContext, useState } from "react";
import FormModal from "../components/Common/FormModal";
import VideoModal from "../components/Common/VideoModal";

const ModalContext = createContext(undefined);

export function ModalProvider({ children }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState("YRE8jYq4Nvg");

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);
  
  const openVideo = (id) => {
    if (typeof id === "string" && id.trim() !== "") {
      setActiveVideoId(id);
    } else {
      setActiveVideoId("YRE8jYq4Nvg");
    }
    setIsVideoOpen(true);
  };
  
  const closeVideo = () => setIsVideoOpen(false);

  return (
    <ModalContext.Provider
      value={{
        isFormOpen,
        isVideoOpen,
        openForm,
        closeForm,
        openVideo,
        closeVideo,
      }}
    >
      {children}
      <FormModal isOpen={isFormOpen} onClose={closeForm} />
      <VideoModal isOpen={isVideoOpen} onClose={closeVideo} videoId={activeVideoId} />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
