import { useEffect, useState } from "react";
import { ANIMATION_TIME } from "./Layout/const";

type MountType = {
  opened: boolean
}


export const useMount = (props: MountType) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (props.opened && !mounted) {
      setMounted(true);
    } else if (!props.opened && mounted) {
      setTimeout(() => {
        setMounted(false);
      }, ANIMATION_TIME);
    }
  }, [props.opened]);

  return {
    mounted,
  };
};
