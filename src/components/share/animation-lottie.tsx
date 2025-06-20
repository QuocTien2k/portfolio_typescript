import Lottie, {
  LottieComponentProps,
  LottieRefCurrentProps,
} from "lottie-react";
import { useEffect, useMemo, useRef } from "react";

interface IProps {
  width?: string;
  animationPath: LottieComponentProps["animationData"];
}

const AnimationLottie = ({ animationPath, width = "95%" }: IProps) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const defaultOptions = useMemo(() => {
    return {
      loop: true,
      autoplay: true,
      animationData: animationPath,
      style: {
        width,
      },
      lottieRef: lottieRef,
    };
  }, [animationPath, width]);

  useEffect(() => {
    const lottieInstance = lottieRef.current;

    return () => {
      lottieInstance?.destroy();
    };
  }, []);

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
